---
sidebar_position: 1
---

# Introduction

Le module `@infrasoftbe/infrasoft-vnv-api-kit` a été développé pour offrir une interface unifiée permettant d’interagir avec l’ensemble des services d’Infrasoft. 
Ce module facilite l’accès aux services nécessaires pour stocker, manipuler, et administrer des données de manière sécurisée et efficiente, en fournissant une API centralisée.

## Objectif du module

L’objectif de `@infrasoftbe/infrasoft-vnv-api-kit` est de simplifier l’interaction avec les différents services cloud et outils d’Infrasoft. Que vous ayez besoin de gérer des fichiers en ligne, de déployer des sites SharePoint adaptés aux projets d’ingénierie, ou d’accéder à une base de données graphique, ce module offre des fonctionnalités prêtes à l’emploi pour gérer ces tâches.

### Fonctionnalités principales

Le module `@infrasoftbe/infrasoft-vnv-api-kit` regroupe plusieurs services essentiels, chacun répondant à des besoins spécifiques dans le cadre des projets et des flux de travail d’Infrasoft. Voici un aperçu de ces services :

<table>
  <thead>
    <tr>
      <th>Service</th>
      <th>Accès</th>
      <th>Description</th>
      <th>Nécessite un jeton d’accès</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>buckets</strong></td>
      <td>Public</td>
      <td>Permet la gestion de stockage en ligne via S3, pour le stockage et la récupération de fichiers, utile dans la gestion de données de projet volumineuses.</td>
      <td>Oui</td>
    </tr>
    <tr>
      <td><strong>[database](../database/Database.md)</strong></td>
      <td>Public</td>
      <td>Accès à la base de données Neo4j pour gérer des informations liées aux relations entre entités dans un projet d’ingénierie.</td>
      <td>Oui</td>
    </tr>
    <tr>
      <td><strong>[etl](../etl/etl.md)</strong></td>
      <td>Public</td>
      <td>Services de transformation et chargement de données (ex. compression ZIP, manipulation Excel), pour simplifier la gestion de gros volumes de données.</td>
      <td>Oui</td>
    </tr>
    <tr>
      <td><strong>graph365</strong></td>
      <td>Admin</td>
      <td>Interface avancée pour gérer l’environnement Microsoft Graph 365, spécialement pour déployer des sites SharePoint adaptés aux besoins des projets d’ingénierie.</td>
      <td>Oui (Droits administratifs)</td>
    </tr>
    <tr>
      <td><strong>[management](../management/management.md)</strong></td>
      <td>Public/Admin</td>
      <td>Fournit des outils de gestion variés pour assurer le suivi et l’organisation des projets.</td>
      <td>Oui</td>
    </tr>
    <tr>
      <td><strong>[me](../me/me.md)</strong></td>
      <td>Public</td>
      <td>Permet aux utilisateurs de récupérer leurs informations de profil personnel après authentification.</td>
      <td>Oui</td>
    </tr>
    <tr>
      <td><strong>auth</strong></td>
      <td>Public</td>
      <td>Service d’authentification, assurant une connexion sécurisée pour tous les services Infrasoft.</td>
      <td>Non</td>
    </tr>
    <tr>
      <td><strong>claim</strong></td>
      <td>Public</td>
      <td>Service permettant d’obtenir un jeton d’accès, requis pour la plupart des autres services.</td>
      <td>Non</td>
    </tr>
    <tr>
      <td><strong>[sessions](../sessions/sessions.md)</strong></td>
      <td>Public</td>
      <td>Permet d’obtenir les informations de session de l’utilisateur pour maintenir un suivi des actions.</td>
      <td>Non</td>
    </tr>
    <tr>
      <td><strong>sharepoint</strong></td>
      <td>Public</td>
      <td>Interface avec SharePoint pour la gestion des documents et la collaboration en ligne, intégrée dans les workflows d’Infrasoft.</td>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Authentification et gestion des droits

Les services de `@infrasoftbe/infrasoft-vnv-api-kit` sont majoritairement accessibles à condition d’être authentifié, avec l’obtention préalable d’un jeton via le service claim. Selon les besoins de sécurité et de contrôle d’accès, certains services nécessitent des droits administratifs.

Ce module a été conçu pour être extensible et adaptable à diverses situations rencontrées. 
Grâce à `@infrasoftbe/infrasoft-vnv-api-kit`, les utilisateurs peuvent ainsi gérer les ressources et projets efficacement, tout en assurant une intégration fluide avec les autres solutions d’Infrasoft.

## Client

Les clients d’`@infrasoftbe/infrasoft-vnv-api-kit` sont organisés sous forme de couches (layers) modulaires, chaque couche permettant d’interagir avec un service spécifique tout en accédant, si nécessaire, à des sous-couches pour des fonctionnalités étendues. 
Cette organisation en couches assure une concaténation logique des points de terminaison (endpoints) et rend possible la création de contrôleurs réutilisables pour chaque service, dont l’architecture d’URL est générée dynamiquement en fonction de l’agencement des couches.

Chaque couche, définie à l’aide du module API Layer, assume une double fonction :

 - Gestion des services : Elle expose des méthodes (comme get, update, delete) pour interagir directement avec les données du service.
 - Passage dynamique de données : Elle permet de structurer des endpoints en transmettant facilement des identifiants ou autres paramètres aux sous-couches. Cela se fait via des fonctions qui assurent un passage fluide d’un layer à un sous-layer, composant ainsi des URL dynamiques.

### API-Layer

Chaque service, tel que sessions ou buckets, est structuré sous forme de layer avec [api-layer](./api-layer/api-layer.md), avec des sous-couches pour des services ou des opérations supplémentaires. 
Par exemple, en ajoutant un PageClient comme sous-couche d’un BookClient, on peut construire des contrôleurs qui se spécialisent pour des pages tout en conservant la logique des livres.

```ts
import { Layer } from 'api-layer';

const BookClient = Layer(new URL("/books"))({
  get() { /* récupérer un livre */ },
  update(data) { /* mettre à jour un livre */ },
  delete() { /* supprimer un livre */ }
});

BookClient.use('Pages', PageClient);
```

Dans cet exemple, un layer peut utiliser un autre layer en tant que sous-couche (ex. PageClient dans BookClient), garantissant ainsi une structure de contrôleurs réutilisable et extensible. 
Ce modèle permet d’assurer une modularité optimale pour API-Kit, simplifiant la création d’interactions complexes tout en rendant le code maintenable.

### Fetch Factory

[Fetch Factory](./fetch-factory/fetch-factory.md) est une bibliothèque qui permet de créer des fonctions de requêtes HTTP réutilisables, offrant une flexibilité dans la configuration des méthodes (GET, POST, PUT, PATCH, DELETE) et des en-têtes. Elle standardise les appels API au sein d’API-Kit, facilitant ainsi la gestion des interactions réseau.

## Claim ![Generic badge](https://img.shields.io/badge/Feature-Beta-red.svg)

:::danger
Le fonctionnement des tokens est susceptible d’évoluer pour améliorer la sécurité des systèmes.

Actuellement, un token peut être obtenu de deux manières :

 - Avec un **username** (l’adresse e-mail), un **tenantId** (l’identifiant du tenant utilisé) et un **userId** (l’identificateur de l’utilisateur).
 - Avec un **username** (l’adresse e-mail) et un **homeAccountId** qui est constitué de la concaténation de tenantId et userId (sous la forme **tenantId**.**userId**).
:::

Le processus de claim d’un token nécessite certaines informations, qui peuvent être automatiquement résolues par les systèmes d’authentification de Microsoft. Toute personne connaissant son adresse e-mail et disposant d’informations spécifiques (généralement fournies par un administrateur) peut effectuer cette opération.

Voici un exemple de code pour effectuer un claim de token :

```ts
import { ApiKitClient } from "@infrasoftbe/infrasoft-vnv-api-kit";

// Claim avec username, userId et tenantId
let { token } = await ApiKitClient.Claim({ 
  username: "<username>", 
  userId: "<your-userId>", 
  tenantId: "<your-tenantId>" 
});

// OU

// Claim avec username et homeAccountId
let { token } = await ApiKitClient.Claim({ 
  username: "<username>", 
  homeAccountId: "<your-home-account-id>" 
});
```

## Auth

:::warning
A notter que la configuration est **unique** et **ne peut-être dupliquée**, cella signifie qu'une nouvelle instanciation de `ApiKitClient` avec un nouveau token supprimera le token précédent et tout les nouveaux appels utiliseront le nouveau token.
:::

Voici un exemple pour mettre à jour le token qui sera utilisé pour faire les appels avec le client ( s'authentifier ). 

```ts
import { ApiKitClient } from "@infrasoftbe/infrasoft-vnv-api-kit";

// 
let { SessionAPI , Neo4jAPI , ... } = ApiKitClient({ userToken : '<your-token>' });
```