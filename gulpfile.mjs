import gulp from 'gulp';
import shell from 'gulp-shell';

import path from 'path';
import fs from 'fs';
import fetch from 'node-fetch';

import yaml from 'js-yaml';

import { ReplaceDoclibLinks } from './scripts/replace_doclib_links.mjs';

const __dirname = process.cwd ? process.cwd() : process.env.PWD;
const npmrcPath = path.join( __dirname, '.npmrc');

// Fonction pour extraire le token
function extractToken() {
  try {
    // Lire le contenu du fichier .npmrc
    const npmrcContent = fs.readFileSync(npmrcPath, 'utf8');

    // Chercher la ligne contenant le token
    const regex = /\/\/npm\.pkg\.github\.com\/:_authToken=([a-zA-Z0-9_\-]+)/;
    const match = npmrcContent.match(regex);

    if (match) {
      // Si une correspondance est trouvée, le token est dans la 1ère capture du regex
      const token = match[1];
      console.log('Token extrait:', token.split('').map((key) => '*').join(''));
      return token;
    } else {
      console.error('Token non trouvé dans le fichier .npmrc');
      return null;
    }
  } catch (err) {
    console.error('Erreur lors de la lecture du fichier .npmrc:', err);
    return null;
  }
}

/// [SCRIPT:Packages doc]

gulp.task( 'scripts:copy-infrasoft-servers-spec' , () => {

  if( !fs.existsSync( path.join( __dirname , '.npmrc' ) ) )return Promise.reject( `🚨 No .npmrc found` );

  const USERNAME = "infrasoftbe";
  const token = extractToken();

  return Promise.all(
    Array.from(
      [ 
        "infrasoft-vnv-rest",
        "infrasoft-pnp-rest",
        "infrasoft-vnv-event-bridge",
        "infrasoft-vnv-server-step-studio"
      ],
      async ( repoName , iterator ) => {
        
        let filePath = path.join( 'swagger' , 'swagger.json' );
        let branch = `release/dev`

        let swagger_spec = await fetch(
          new URL( `https://api.github.com/repos/${USERNAME}/${repoName}/contents/${filePath}?ref=${branch}` ),
          {
            headers: {
              'Authorization': `token ${token}`,
            }
          }
        ).then(( response ) => response.json() );

        if( swagger_spec.content ){
          if( !fs.existsSync( path.join( 'openapi' ) ) )fs.mkdirSync( path.join( 'openapi' ) );
          if( !fs.existsSync( path.join( 'openapi' , repoName ) ) )fs.mkdirSync( path.join( 'openapi' , repoName ) );

          fs.writeFileSync( path.join( 'openapi' , repoName , 'swagger.json' ) , Buffer.from( swagger_spec.content , 'base64').toString('utf8') , 'utf-8' );
          console.log(`✅ Spec copied for ${repoName} package`)
        }
        else console.log(`🚨 No spec found for ${repoName} package`)

        return swagger_spec;

      }
    )
  )

})

gulp.task( 'scripts:copy-infrasoft-libs-documentation' , () => {

  let packageJSON = JSON.parse( fs.readFileSync('./package.json' , 'utf-8') );

  // console.log(Object.assign( packageJSON.dependencies || {} , packageJSON.devDependencies || {} ))

  let allDependencies = Object.assign( packageJSON.dependencies || {} , packageJSON.devDependencies || {} );

  if(fs.existsSync( path.resolve(__dirname , 'static' , 'API' ) ) )fs.rmdirSync( path.resolve(__dirname , 'static' , 'API' ) , { recursive : true } );

  return Promise.all(
    Array.from(
      Object.keys( allDependencies ).filter(( key ) => {
        return key.startsWith('@infrasoftbe')
      }).filter(( packageName ) => {
    
        let isSimilink = allDependencies[packageName].startsWith('file:')
    
        let result = isSimilink ?
        fs.existsSync( path.resolve(__dirname , allDependencies[packageName].replace('file:' , '') , 'docs' ) ) :
        fs.existsSync( path.resolve(__dirname , 'node_modules' , packageName , 'docs' ) )
    
        return result;
    
      }),
      ( packageName ) => {

        packageName = packageName.replace('@infrasoftbe/' , '')

        // console.log({ packageName })

        return new Promise(( next ) => {

          if( !fs.existsSync( path.resolve( __dirname , 'static' ) ) )fs.mkdirSync( path.resolve(__dirname , 'static' ) )
          if( !fs.existsSync( path.resolve( __dirname , 'static' , 'API' ) ) )fs.mkdirSync( path.resolve( __dirname , 'static' , 'API' ) )
          if( !fs.existsSync( path.resolve( __dirname , 'static' , 'API' , packageName ) ) )fs.mkdirSync( path.resolve( __dirname , 'static' , 'API' , packageName ) )

          gulp
          .src( path.resolve(__dirname , 'node_modules' , '@infrasoftbe' , packageName , 'docs' , '**' , '*' ) )
          .pipe( gulp.dest( path.resolve(__dirname , 'static' , 'API' , packageName ) ) )
          .on('end', () => {

            next( ReplaceDoclibLinks( path.resolve(__dirname , 'static' , 'API' , packageName ) ) )

          });
        })

      }
    )
  )

});

/// [SCRIPT:Swagger API]

gulp.task( 'scripts:gen-api-docs' , shell.task('npx docusaurus gen-api-docs all') );

// gulp.task( 'scripts:tsoa-spec:database' , shell.task('npx tsoa spec --configuration tsoa/tsoa.database.config.json') );
// gulp.task( 'scripts:tsoa-spec:management' , shell.task('npx tsoa spec --configuration tsoa/tsoa.management.config.json') );
// gulp.task( 'scripts:tsoa-spec:microsoft' , shell.task('npx tsoa spec --configuration tsoa/tsoa.microsoft.config.json') );
// gulp.task( 'scripts:tsoa-spec:session' , shell.task('npx tsoa spec --configuration tsoa/tsoa.session.config.json') );

// gulp.task( 'scripts:tsoa-spec' , gulp.series('scripts:tsoa-spec:database' , 'scripts:tsoa-spec:management' , 'scripts:tsoa-spec:microsoft' , 'scripts:tsoa-spec:session') );

gulp.task( 'scripts:swagger-api-doc' , gulp.series( 'scripts:copy-infrasoft-servers-spec' , 'scripts:gen-api-docs' ) );

/// [SCRIPT:All scripts]

gulp.task( 'scripts:all' , gulp.series( 'scripts:copy-infrasoft-libs-documentation' , 'scripts:swagger-api-doc' ) )

gulp.task( 'docusaurus' , shell.task( 'npx docusaurus' ) );

gulp.task( 'docusaurus:start' , shell.task( 'npx docusaurus start' ) );

gulp.task( 'docusaurus:build' , shell.task( 'npx docusaurus build' ) );

gulp.task( 'docusaurus:swizzle' , shell.task( 'npx docusaurus swizzle' ) );

gulp.task( 'docusaurus:deploy' , shell.task( 'npx docusaurus deploy' ) );

gulp.task( 'docusaurus:clear' , shell.task( 'npx docusaurus clear' ) );

gulp.task( 'docusaurus:serve' , shell.task( 'npx docusaurus serve' ) );

gulp.task( 'docusaurus:write-translations' , shell.task( 'npx docusaurus write-translations' ) );

gulp.task( 'docusaurus:write-heading-ids' , shell.task( 'npx docusaurus write-heading-ids' ) );

gulp.task('start' , gulp.series( 'scripts:all' , 'docusaurus:start' ));

gulp.task('build' , gulp.series( 'scripts:all' , 'docusaurus:build' ));

gulp.task('swizzle' , gulp.series( 'docusaurus:swizzle' ));

gulp.task('deploy' , gulp.series( 'docusaurus:deploy' ));

gulp.task('clear' , gulp.series( 'docusaurus:clear' ));

gulp.task('serve' , gulp.series( 'docusaurus:serve' ));

gulp.task('write-translations' , gulp.series( 'docusaurus:write-translations' ));

gulp.task('write-heading-ids' , gulp.series( 'docusaurus:write-heading-ids' ));

gulp.task( 'default' , gulp.series( 'start' ) );