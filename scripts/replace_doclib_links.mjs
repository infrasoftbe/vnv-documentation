import fs from 'fs';
import path from 'path';

export function ReplaceDoclibLinks(directoryPath) {
  console.log({ directoryPath });

  // Fonction récursive pour parcourir les dossiers et remplacer les liens dans les fichiers HTML
  function traverseDirectory(directory) {
    // Lire les fichiers dans le répertoire actuel
    fs.readdir(directory, (err, files) => {
      if (err) {
        return console.log('Impossible de lire le répertoire : ' + err);
      }

      // Parcourir chaque fichier dans le répertoire
      files.forEach(file => {
        const filePath = path.join(directory, file);

        // Vérifier si c'est un dossier
        fs.stat(filePath, (err, stats) => {
          if (err) {
            console.log('Erreur lors de la vérification du fichier : ' + err);
            return;
          }

          if (stats.isDirectory()) {
            // Si c'est un dossier, appeler récursivement traverseDirectory
            traverseDirectory(filePath);
          } else if (stats.isFile() && file.endsWith('.html')) {
            // Si c'est un fichier HTML, modifier les liens
            fs.readFile(filePath, 'utf8', (err, data) => {
              if (err) {
                console.log('Erreur de lecture du fichier : ' + err);
                return;
              }

              // Calculer le préfixe à ajouter en utilisant le directoryPath
              const prefix = directoryPath.split('static/').pop();

              // Liste des répertoires à remplacer
              const categories = ['assets', 'classes', 'enums', 'functions', 'interfaces', 'modules', 'types', 'variables'];

              console.log({ filePath })

              // Remplacer chaque catégorie par le préfixe approprié
              categories.forEach(category => {
                const regex = new RegExp(`(?:href|src)="(?:/${category}/|${category}/)`, 'g'); 
                console.log({ regex })
                data = data.replace(regex, (match) => {
                  console.log({ match })
                  return match.replace(`/${category}/`, `${prefix}${category}/`);
                });
              });

              // Réécrire le fichier avec les modifications
              fs.writeFile(filePath, data, 'utf8', (err) => {
                if (err) {
                  console.log('Erreur d\'écriture dans le fichier : ' + err);
                }
                // else console.log(`Writing ${filePath}`)
              });
            });
          }
        });
      });
    });
  }

  // Lancer la traversée du répertoire à partir de directoryPath
  traverseDirectory(directoryPath);
}