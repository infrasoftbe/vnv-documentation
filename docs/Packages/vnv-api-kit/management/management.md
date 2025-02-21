---
sidebar_position: 4
---

# ManagementAPI

## Client

- <a href = "/vnv-documentation/API/infrasoft-vnv-api-kit/modules/Management.html" target = "_blank" >`Management`</a>

## Projects

<table>
  <thead>
    <tr>
      <th>Méthode</th>
      <th>Types expected</th>
      <th>Return</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>get</td>
      <td>`None`</td>
      <td></td>
      <td>Récupère la liste de tous les projets.</td>
    </tr>
    <tr>
      <td>create</td>
      <td>
        <a href = "/vnv-documentation/API/infrasoft-vnv-api-kit/types/Management.CreateProjectProps.html" target = "_blank" >`CreateProjectProps`</a>
      </td>
      <td>
        <a href = "/vnv-documentation/API/infrasoft-vnv-api-kit/types/Management.CreateProjectResponse.html" target = "_blank" >`CreateProjectResponse`</a>
      </td>
      <td>Crée un nouveau projet avec les propriétés spécifiées.</td>
    </tr>
    <tr>
      <td>config</td>
      <td>`None`</td>
      <td></td>
      <td>Récupère la configuration d’un projet spécifique.</td>
    </tr>
    <tr>
      <td>archive</td>
      <td>`None`</td>
      <td></td>
      <td>Archiver un projet spécifique.</td>
    </tr>
    <tr>
      <td>delete</td>
      <td>`None`</td>
      <td></td>
      <td>Supprime un projet de manière permanente.</td>
    </tr>
  </tbody>
</table>

```tsx
// Get all projects
ManagementAPI().Projects().get<[]>();

// Get one project
ManagementAPI().Projects( "projectId" ).get();

ManagementAPI().Projects().create({ ...Management.CreateProjectProps... });

// Get one project configuration
ManagementAPI().Projects( "projectId" ).config();

// Get one project's archive
ManagementAPI().Projects( "projectId" ).archive();

// Delete project
ManagementAPI().Projects( "projectId" ).delete();
```

### Users

<table>
  <thead>
    <tr>
      <th>Méthode</th>
      <th>Types expected</th>
      <th>Return</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>get</td>
      <td>`None`</td>
      <td>
        <a href = "/vnv-documentation/API/infrasoft-vnv-api-kit/types/Management.User.html" target = "_blank" >`Management.User`</a>
        |
        <a href = "/vnv-documentation/API/infrasoft-vnv-api-kit/types/Management.User.html" target = "_blank" >`Management.User[]`</a>
      </td>
      <td>Récupère la liste de tous les utilisateurs associés au projet.</td>
    </tr>
    <tr>
      <td>create</td>
      <td>
        <a href = "/vnv-documentation/API/infrasoft-vnv-api-kit/types/Management.User.html" target = "_blank" >`Management.User`</a>
      </td>
      <td>
        <a href = "/vnv-documentation/API/infrasoft-vnv-api-kit/types/Management.User.html" target = "_blank" >`Management.User`</a>
      </td>
      <td>Crée un utilisateur avec les propriétés spécifiées.</td>
    </tr>
    <tr>
      <td>update</td>
      <td>
        <a href = "/vnv-documentation/API/infrasoft-vnv-api-kit/types/Management.User.html" target = "_blank" >`Management.User`</a>
      </td>
      <td>
        <a href = "/vnv-documentation/API/infrasoft-vnv-api-kit/types/Management.User.html" target = "_blank" >`Management.User`</a>
      </td>
      <td>Met à jour un utilisateur existant.</td>
    </tr>
    <tr>
      <td>deploy</td>
      <td>
        <a href = "/vnv-documentation/API/infrasoft-vnv-api-kit/types/Management.User.html" target = "_blank" >`Management.User`</a>
      </td>
      <td>
        <a href = "/vnv-documentation/API/infrasoft-vnv-api-kit/types/Management.User.html" target = "_blank" >`Management.User`</a>
      </td>
      <td>Applique la configuration utilisateur par défaut au projet.</td>
    </tr>
    <tr>
      <td>delete</td>
      <td>`None`</td>
      <td>`boolean`</td>
      <td>Supprime un utilisateur spécifique.</td>
    </tr>
  </tbody>
</table>

```ts
// Get all users
ManagementAPI().Projects('projectId')
.Users().get<[]>();

// Get one user
ManagementAPI().Projects('projectId')
.Users( "userId" ).get();

// Create one user
ManagementAPI().Projects('projectId')
.Users().create({ ...Management.User... });

// Update one user
ManagementAPI().Projects('projectId')
.Users( "userId" ).update({ ...Management.User... });

// Deploy default user configuration to project
ManagementAPI().Projects('projectId')
.Users( "userId" ).deploy({ ...Management.User... });

// Delete one user
ManagementAPI().Projects('projectId')
.Users( "userId" ).delete();
```

### Groups

<table>
  <thead>
    <tr>
      <th>Méthode</th>
      <th>Types expected</th>
      <th>Return</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>get</td>
      <td>`None`</td>
      <td>
        <a href = "/vnv-documentation/API/infrasoft-vnv-api-kit/types/Management.Group.html" target = "_blank" >`Management.Group`</a>
        |
        <a href = "/vnv-documentation/API/infrasoft-vnv-api-kit/types/Management.Group.html" target = "_blank" >`Management.Group[]`</a>
      </td>
      <td>Récupère la liste de tous les groupes associés au projet.</td>
    </tr>
    <tr>
      <td>create</td>
      <td>
        <a href = "/vnv-documentation/API/infrasoft-vnv-api-kit/types/Management.Group.html" target = "_blank" >`Management.Group`</a>
      </td>
      <td>
        <a href = "/vnv-documentation/API/infrasoft-vnv-api-kit/types/Management.Group.html" target = "_blank" >`Management.Group`</a>
      </td>
      <td>Crée un groupe avec les propriétés spécifiées.</td>
    </tr>
    <tr>
      <td>update</td>
      <td>
        <a href = "/vnv-documentation/API/infrasoft-vnv-api-kit/types/Management.Group.html" target = "_blank" >`Management.Group`</a>
      </td>
      <td>
        <a href = "/vnv-documentation/API/infrasoft-vnv-api-kit/types/Management.Group.html" target = "_blank" >`Management.Group`</a>
      </td>
      <td>Met à jour un groupe existant.</td>
    </tr>
    <tr>
      <td>deploy</td>
      <td>
        <a href = "/vnv-documentation/API/infrasoft-vnv-api-kit/types/Management.Group.html" target = "_blank" >`Management.Group`</a>
      </td>
      <td>
        <a href = "/vnv-documentation/API/infrasoft-vnv-api-kit/types/Management.Group.html" target = "_blank" >`Management.Group`</a>
      </td>
      <td>Applique la configuration par défaut du groupe au projet.</td>
    </tr>
    <tr>
      <td>delete</td>
      <td>`None`</td>
      <td>`boolean`</td>
      <td>Supprime un groupe spécifique.</td>
    </tr>
  </tbody>
</table>

```ts
// Get all groups
ManagementAPI().Projects('projectId')
.Groups().get<[]>();

// Get one group
ManagementAPI().Projects('projectId')
.Groups( "groupId" ).get();

// Create one group
ManagementAPI().Projects('projectId')
.Groups().create({ ...Management.Group... });

// Update one group
ManagementAPI().Projects('projectId')
.Groups( "groupId" ).update({ ...Management.Group... });

// Deploy default group configuration to project
ManagementAPI().Projects('projectId')
.Groups( "groupId" ).deploy({ ...Management.Group... });

// Delete one group
ManagementAPI().Projects('projectId')
.Groups( "groupId" ).delete();
```

### Documents

<table>
  <thead>
    <tr>
      <th>Méthode</th>
      <th>Types expected</th>
      <th>Return</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>get</td>
      <td>`None`</td>
      <td>
        <a href = "/vnv-documentation/API/infrasoft-vnv-api-kit/types/Management.DocumentListOutput.html" target = "_blank" >`Management.DocumentListOutput`</a>
      </td>
      <td>Récupère la liste de tous les documents associés au projet.</td>
    </tr>
    <tr>
      <td>download</td>
      <td>`None`</td>
      <td>`None`</td>
      <td>Télécharge un document spécifique à partir du projet.</td>
    </tr>
    <tr>
      <td>create</td>
      <td>
        `FormData`
      </td>
      <td>
        <a href = "/vnv-documentation/API/infrasoft-vnv-api-kit/types/Management.DocumentOutput.html" target = "_blank" >`Management.DocumentOutput`</a>
      </td>
      <td>Crée un document dans le projet avec les propriétés spécifiées.</td>
    </tr>
    <tr>
      <td>delete</td>
      <td>`None`</td>
      <td>`None`</td>
      <td>Supprime un document spécifique du projet.</td>
    </tr>
  </tbody>
</table>

```tsx
// Get all documents
ManagementAPI().Projects( "projectId" )
.Documents().get<[]>();

// Get one document
ManagementAPI().Projects( "projectId" )
.Documents( "documentKey" ).get();

// Download one document
ManagementAPI().Projects( "projectId" )
.Documents( "documentKey" ).download();

// Create one document
ManagementAPI().Projects( "projectId" )
.Documents().create();

// Update one document
ManagementAPI().Projects( "projectId" )
.Documents( "documentKey" ).update();

// Delete one document
ManagementAPI().Projects( "projectId" )
.Documents( "documentKey" ).delete();
```

### Commits

<table>
  <thead>
    <tr>
      <th>Méthode</th>
      <th>Types expected</th>
      <th>Return</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>get</td>
      <td>`None`</td>
      <td>
        <a href = "/vnv-documentation/API/infrasoft-vnv-api-kit/types/Management.Commit.html" target = "_blank" >`Management.Commit`</a>
        |
        <a href = "/vnv-documentation/API/infrasoft-vnv-api-kit/types/Management.Commit.html" target = "_blank" >`Management.Commit[]`</a>
      </td>
      <td>Récupère la liste de tous les commits associés au projet.</td>
    </tr>
    <tr>
      <td>delete</td>
      <td>`None`</td>
      <td>`boolean`</td>
      <td>Supprime un commit spécifique du projet.</td>
    </tr>
  </tbody>
</table>

```tsx
// Get all commits
ManagementAPI().Projects( "projectId" )
.Commits().get();

// Get one commit
ManagementAPI().Projects( "projectId" )
.Commits( "commitId" ).get<[]>();

// Delete one commit
ManagementAPI().Projects( "projectId" )
.Commits( "commitId" ).delete();
```

### Backups

<table>
  <thead>
    <tr>
      <th>Méthode</th>
      <th>Types expected</th>
      <th>Return</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>get</td>
      <td>`None`</td>
      <td>
        <a href = "/vnv-documentation/API/infrasoft-vnv-api-kit/types/Management.DocumentListOutput.html" target = "_blank" >`Management.DocumentListOutput`</a>
      </td>
      <td>Récupère la liste de toutes les sauvegardes associées au projet.</td>
    </tr>
    <tr>
      <td>create</td>
      <td>`None`</td>
      <td>
        <a href = "/vnv-documentation/API/infrasoft-vnv-api-kit/types/Management.DocumentOutput.html" target = "_blank" >`Management.DocumentOutput`</a>
      </td>
      <td>Crée une sauvegarde pour le projet spécifié.</td>
    </tr>
    <tr>
      <td>delete</td>
      <td>`None`</td>
      <td>`boolean`</td>
      <td>Supprime une sauvegarde spécifique du projet.</td>
    </tr>
    <tr>
      <td>download</td>
      <td>`None`</td>
      <td>`None`</td>
      <td>Télécharge une sauvegarde spécifique du projet.</td>
    </tr>
    <tr>
      <td>restore</td>
      <td>`None`</td>
      <td>`None`</td>
      <td>Restaure une sauvegarde spécifique pour le projet.</td>
    </tr>
  </tbody>
</table>

```tsx
// Get all backups
ManagementAPI().Projects( "projectId" )
.Backups().get();

// Get all backups
ManagementAPI().Projects( "projectId" )
.Backups( "backupId" ).get<[]>();

// Create one backup
ManagementAPI().Projects( "projectId" )
.Backups().create();

// Download one backup
ManagementAPI().Projects( "projectId" )
.Backups( "backupId" ).download();
```

### Database

<table>
  <thead>
    <tr>
      <th>Méthode</th>
      <th>Types expected</th>
      <th>Return</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>delete</td>
      <td>`None`</td>
      <td>`None`</td>
      <td>Supprime un projet spécifique de la base de données.</td>
    </tr>
  </tbody>
</table>

```tsx
// Delete all project from database
MangementAPI().DB().Projects( "projectId" ).delete()
```

### Queues

<table>
  <thead>
    <tr>
      <th>Méthode</th>
      <th>Types expected</th>
      <th>Return</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>get</td>
      <td>`None`</td>
      <td>`None`</td>
      <td>Supprime un projet spécifique de la base de données.</td>
    </tr>
    <tr>
      <td>create</td>
      <td>`None`</td>
      <td>`None`</td>
      <td>Supprime un projet spécifique de la base de données.</td>
    </tr>
  </tbody>
</table>

```tsx
ManagementAPI().Queues().get<[]>();

ManagementAPI().Queues( "queueId" ).get();

ManagementAPI().Queues().create();
```

### Jobs

<table>
  <thead>
    <tr>
      <th>Méthode</th>
      <th>Types expected</th>
      <th>Return</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>get</td>
      <td>`None`</td>
      <td>`None`</td>
      <td>Supprime un projet spécifique de la base de données.</td>
    </tr>
    <tr>
      <td>create</td>
      <td>`None`</td>
      <td>`None`</td>
      <td>Supprime un projet spécifique de la base de données.</td>
    </tr>
  </tbody>
</table>

```tsx
ManagementAPI().Queues( "queueId" ).Jobs().get<[]>();

ManagementAPI().Queues( "queueId" ).Jobs( "jobId" ).get();

ManagementAPI().Queues( "queueId" ).Jobs()create();
```

## Default Project

```tsx
ManagementAPI().Projects('default').get();

ManagementAPI().Projects('default')
.Users().get<[]>();

ManagementAPI().Projects('default')
.Users( "userId" ).get();

ManagementAPI().Projects('default')
.Users().create({ ...user... });

ManagementAPI().Projects('default')
.Users( "userId" ).update({ ...user... });

ManagementAPI().Projects('default')
.Users( "userId" ).deploy({ ...user... });

ManagementAPI().Projects('default')
.Users( "userId" ).delete();

```