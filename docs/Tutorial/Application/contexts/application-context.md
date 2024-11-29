# Application Context

Le contexte de l’application, essentiel pour centraliser les informations utilisateur, projets, et configurations, est automatiquement provisionné au lancement de l’application au niveau du root pendant le **preload**, garantissant ainsi un accès uniforme et en temps réel à tous les modules de l’application.

```tsx

{
  sessionId:string;
  me:any;
  update_me:()=>Promise<any>;
  projectPointer:ProxyProjectInstance;
  setProjectPointer:React.Dispatch<React.SetStateAction<ProxyProjectInstance>>;
  update_project_pointer:()=>Promise<ProxyProjectInstance>;
  all_projects:INode< "project" >[];
  update_all_projects:()=>Promise<INode< "project" >[]>
  configuration:_configuration;
  phase:any;
  lifecycle:any;
  notifications:NotificationsHandler;
  authResult:AuthenticationResult;
  user:INode<"user">;
}

```

## Contexte de la Session et de l’Utilisateur

- **sessionId** : Ce champ représente l’identifiant unique de la session utilisateur actuelle, essentiel pour suivre et sécuriser l’état de la connexion et les actions spécifiques à l’utilisateur.
- **me** : Cet objet contient des informations sur l’utilisateur actuel, notamment ses métadonnées et autorisations. Il peut inclure des détails tels que le nom, le rôle, et les privilèges dans le système.
- **update_me** : Cette fonction asynchrone permet de rafraîchir les informations de l’utilisateur actuel, garantissant que les données utilisateur sont toujours à jour sans nécessiter de rechargement de l’application.

## Gestion de Projet

- **projectPointer** : Ce pointeur représente l’instance du projet sélectionné ou en cours de modification. Il est utilisé pour centraliser l’accès aux données de ce projet particulier, facilitant ainsi le suivi et les modifications.
- **setProjectPointer** : Cette fonction permet de mettre à jour dynamiquement le pointeur de projet sélectionné en fonction des actions de l’utilisateur ou de l’état de l’application.
- **update_project_pointer** : Une fonction asynchrone qui récupère et renvoie la dernière version de l’instance du projet sélectionné, garantissant l’accès aux données les plus récentes.

## Gestion des Projets Disponibles (Obsolète)

- **all_projects** et **update_all_projects** : Bien que maintenant obsolètes, ces champs étaient utilisés pour accéder et actualiser une liste complète de projets. Ils ne sont plus nécessaires dans la version actuelle, mais sont maintenus pour la compatibilité.

## Configuration et Paramètres Système

- **configuration** : Ce champ regroupe toutes les configurations globales de l’application, incluant les paramètres système et les options de personnalisation qui permettent une adaptation en fonction des besoins et de l’environnement de déploiement.

## État du Cycle de Vie de l’Application (Obsolète)

- **phase** et **lifecycle** : Ces champs, également obsolètes, indiquaient l’état de cycle de vie de l’application et du projet. Ils ont été remplacés ou intégrés dans des solutions plus flexibles.

## Notifications et Communication avec l’Utilisateur

- **notifications** : Cet objet, géré par un NotificationsHandler, est utilisé pour transmettre des alertes, des messages et des notifications contextuelles aux utilisateurs, assurant une communication fluide et pertinente.

## Authentification et Gestion des Accès

- **authResult** : Ce champ stocke les informations d’authentification de l’utilisateur. Il contient des détails comme les jetons de session et les permissions, nécessaires pour sécuriser l’accès aux ressources et vérifier les autorisations.

## Profil de l’Utilisateur (Obsolète)

- **user** : Ce champ stockait auparavant les informations de profil de l’utilisateur. Bien que considéré comme obsolète, il reste présent pour la compatibilité et pourrait être utilisé pour des informations supplémentaires sur l’utilisateur.

<table>
  <thead>
    <tr>
      <th>Key</th>
      <th>Value</th>
      <th>Description</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>sessionId</td>
      <td>string</td>
      <td>Identifiant unique de la session de l'utilisateur.</td>
      <td>![Generic badge](https://img.shields.io/badge/Feature--green.svg)</td>
    </tr>
    <tr>
      <td>me</td>
      <td>any</td>
      <td>Objet représentant l'utilisateur actuel, avec ses métadonnées et autorisations spécifiques.</td>
      <td>![Generic badge](https://img.shields.io/badge/Feature--green.svg)</td>
    </tr>
    <tr>
      <td>update_me</td>
      <td>Function&lt;Promise&lt;any&gt;&gt;</td>
      <td>Fonction asynchrone pour rafraîchir les informations de l'utilisateur actuel sans recharger l'application.</td>
      <td>![Generic badge](https://img.shields.io/badge/Feature--green.svg)</td>
    </tr>
    <tr>
      <td>projectPointer</td>
      <td>[ProxyProjectInstance](https://infrasoftbe.github.io/vnv-documentation/docs/packages/vnv-project/modules/#proxyprojectinstance)</td>
      <td>Instance du projet actuellement sélectionné ou en cours de modification.</td>
      <td>![Generic badge](https://img.shields.io/badge/Feature--green.svg)</td>
    </tr>
    <tr>
      <td>setProjectPointer</td>
      <td>React.Dispatch< React.SetStateAction< [ProxyProjectInstance](https://infrasoftbe.github.io/vnv-documentation/docs/packages/vnv-project/modules/#proxyprojectinstance) > ></td>
      <td>Fonction pour mettre à jour le pointeur du projet sélectionné.</td>
      <td>![Generic badge](https://img.shields.io/badge/Feature--green.svg)</td>
    </tr>
    <tr>
      <td>update_project_pointer</td>
      <td>Function< Promise< [ProxyProjectInstance](https://infrasoftbe.github.io/vnv-documentation/docs/packages/vnv-project/modules/#proxyprojectinstance) > ></td>
      <td>Fonction asynchrone qui actualise et retourne la dernière instance du projet sélectionné.</td>
      <td>![Generic badge](https://img.shields.io/badge/Feature--green.svg)</td>
    </tr>
    <tr>
      <td>all_projects</td>
      <td>[INode](https://infrasoftbe.github.io/vnv-documentation/docs/packages/vnv-project/modules/interfaces/INode)&lt;"project"&gt;[]</td>
      <td>Liste de tous les projets disponibles. (Champ obsolète)</td>
      <td>![Generic badge](https://img.shields.io/badge/-Depreciated-red.svg)</td>
    </tr>
    <tr>
      <td>update_all_projects</td>
      <td>Function&lt;Promise&lt;[INode](https://infrasoftbe.github.io/vnv-documentation/docs/packages/vnv-project/modules/interfaces/INode)&lt;"project"&gt;[]&gt;&gt;</td>
      <td>Fonction asynchrone pour actualiser la liste complète des projets. (Champ obsolète)</td>
      <td>![Generic badge](https://img.shields.io/badge/-Depreciated-red.svg)</td>
    </tr>
    <tr>
      <td>configuration</td>
      <td>_configuration</td>
      <td>Objet contenant les configurations globales et les paramètres système de l'application.</td>
      <td>![Generic badge](https://img.shields.io/badge/Feature--green.svg)</td>
    </tr>
    <tr>
      <td>phase</td>
      <td>any</td>
      <td>Phase actuelle ou état du cycle de vie de l'application. (Champ obsolète)</td>
      <td>![Generic badge](https://img.shields.io/badge/-Depreciated-red.svg)</td>
    </tr>
    <tr>
      <td>lifecycle</td>
      <td>any</td>
      <td>Cycle de vie du projet ou statut d'étapes. (Champ obsolète)</td>
      <td>![Generic badge](https://img.shields.io/badge/-Depreciated-red.svg)</td>
    </tr>
    <tr>
      <td>notifications</td>
      <td>NotificationsHandler</td>
      <td>Gestionnaire de notifications pour afficher des alertes et des messages utilisateur dans l'application.</td>
      <td>![Generic badge](https://img.shields.io/badge/Feature--green.svg)</td>
    </tr>
    <tr>
      <td>authResult</td>
      <td>[AuthenticationResult](https://learn.microsoft.com/fr-fr/dotnet/api/microsoft.sharepoint.client.authenticationresult?view=sharepoint-csom)</td>
      <td>Objet contenant les informations d'authentification de l'utilisateur, comme le jeton de session ou les autorisations.</td>
      <td>![Generic badge](https://img.shields.io/badge/Feature--green.svg)</td>
    </tr>
    <tr>
      <td>user</td>
      <td>[INode](https://infrasoftbe.github.io/vnv-documentation/docs/packages/vnv-project/modules/interfaces/INode)&lt;"user"&gt;</td>
      <td>Objet utilisateur pour stocker les détails du profil de l'utilisateur. (Champ obsolète)</td>
      <td>![Generic badge](https://img.shields.io/badge/-Depreciated-red.svg)</td>
    </tr>
  </tbody>
</table>