---
sidebar_position: 1
---

# Introduction

## Hebergement

Les packages utilisés dans ce projet sont hébergés sur [GithubPackages](https://github.com/orgs/infrasoftbe/packages)

Tous les packages sont stockés dans l’organisation privée @infrasoftbe sur GitHub, et sont donc distribués via GitHub Packages avec un accès restreint. Pour les utiliser, vous devrez vous authentifier avec un jeton GitHub personnel.

## .npmrc

Afin d’accéder aux packages privés hébergés sur GitHub, il est nécessaire de configurer votre fichier .npmrc pour spécifier la source du package ainsi que le jeton d’authentification.

Voici la configuration de base :

```text
@infrasoftbe:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=<your_token>
```

Remplacez `your_token` par un jeton d’accès personnel (PAT) généré à partir de votre compte GitHub avec les permissions appropriées pour accéder aux packages.

## VnV Project

Le package [VnV Project](./vnv-project/vnv-project.mdx) permet de créer un projet Infrasoft et inclut tous les modèles et types nécessaires au démarrage. Ce package est essentiel pour structurer les projets conformément aux standards d’Infrasoft.

[GithubPackage](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/pkgs/npm/infrasoft-project)

## VnV API-KIT

Le package [VnV API-KIT](./vnv-api-kit/guide/introduction.md) est un ensemble d’outils qui permet à une application de communiquer avec tous les services d’Infrasoft. Il fournit des abstractions et des interfaces pour simplifier l’intégration des services dans les projets.

[GithubPackage](https://github.com/infrasoftbe/fluentui-react-wrapper/pkgs/npm/infrasoft-vnv-api-kit)

## VnV Ui-Components

Le package VnV Ui-Components contient une collection de composants d’interface utilisateur réutilisables pour construire des interfaces cohérentes dans les projets Infrasoft. Ces composants respectent les directives UX d’Infrasoft, facilitant la création d’applications au design uniforme.

## VnV ETL

Les packages VnV ETL sont utilisés pour les opérations d’extraction, de transformation et de chargement (ETL) de données dans des projets Infrasoft.

### VnV Excel-ETL

Le VnV Excel-ETL permet l’importation et l’exportation de données à partir de fichiers Excel dans les projets Infrasoft. Il gère la conversion des fichiers Excel en objets structurés utilisables dans l’application.

### VnV Zip-ETL

Le VnV Zip-ETL est utilisé pour manipuler des archives ZIP, facilitant l’importation et l’extraction de données compressées.

## VnV React-App

## Installation des packages

Pour installer un package depuis GitHub Packages, assurez-vous que votre fichier .npmrc est correctement configuré, puis exécutez la commande suivante :

```bash
npm install @infrasoftbe/<package_name>
```

Remplacez `package_name` par le nom du package que vous souhaitez installer.

## Mise à jour des packages

Pour mettre à jour un package vers sa dernière version, utilisez le flag @latest lors de l’installation, ou désinstallez et réinstallez le package :

```bash
npm install @infrasoftbe/<package_name>@latest
```

Si des problèmes persistent après la mise à jour, essayez de désinstaller puis de réinstaller le package concerné :

```
npm uninstall @infrasoftbe/<package_name>
npm install @infrasoftbe/<package_name>
```

## Erreurs

### La documentation n'est pas à jour

Avant de conclure que la documentation est obsolète, vérifiez que vous utilisez la bonne version du package. Les incohérences de version peuvent parfois entraîner des écarts avec la documentation fournie.

### Problèmes en cas de passage d'une version à l'autre

Si des problèmes apparaissent lors de la mise à jour d’un package, essayez de désinstaller puis de réinstaller le package. Vous pouvez également supprimer le fichier .lock (ex. package-lock.json) et le dossier node_modules pour éviter les conflits de dépendances.

```bash
rm -rf node_modules package-lock.json
npm install
```

### A l'aide je crois que tout est cassé

Ne vous inquiétez pas. Si tout semble être cassé, il peut s’agir d’un simple problème de dépendances. Supprimez les dossiers node_modules et le fichier .lock, puis réinstallez tous les packages :

```bash
rm -rf node_modules package-lock.json
npm install
```

Cela résout souvent la plupart des problèmes liés à la gestion des dépendances.