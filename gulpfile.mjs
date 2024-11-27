import gulp from 'gulp';
import shell from 'gulp-shell';

import path from 'path';
import fs from 'fs';

import { ReplaceDoclibLinks } from './scripts/replace_doclib_links.mjs';

const __dirname = process.cwd ? process.cwd() : process.env.PWD;

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

} );

gulp.task( 'docusaurus' , shell.task( 'npx docusaurus' ) );

gulp.task( 'docusaurus:start' , shell.task( 'npx docusaurus start' ) );

gulp.task( 'docusaurus:build' , shell.task( 'npx docusaurus build' ) );

gulp.task( 'docusaurus:swizzle' , shell.task( 'npx docusaurus swizzle' ) );

gulp.task( 'docusaurus:deploy' , shell.task( 'npx docusaurus deploy' ) );

gulp.task( 'docusaurus:clear' , shell.task( 'npx docusaurus clear' ) );

gulp.task( 'docusaurus:serve' , shell.task( 'npx docusaurus serve' ) );

gulp.task( 'docusaurus:write-translations' , shell.task( 'npx docusaurus write-translations' ) );

gulp.task( 'docusaurus:write-heading-ids' , shell.task( 'npx docusaurus write-heading-ids' ) );

gulp.task('start' , gulp.series( 'scripts:copy-infrasoft-libs-documentation' , 'docusaurus:start' ));

gulp.task('build' , gulp.series( 'scripts:copy-infrasoft-libs-documentation' , 'docusaurus:build' ));

gulp.task('swizzle' , gulp.series( 'docusaurus:swizzle' ));

gulp.task('deploy' , gulp.series( 'docusaurus:deploy' ));

gulp.task('clear' , gulp.series( 'docusaurus:clear' ));

gulp.task('serve' , gulp.series( 'docusaurus:serve' ));

gulp.task('write-translations' , gulp.series( 'docusaurus:write-translations' ));

gulp.task('write-heading-ids' , gulp.series( 'docusaurus:write-heading-ids' ));

gulp.task( 'default' , gulp.series( 'start' ) );