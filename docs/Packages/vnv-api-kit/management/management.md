---
sidebar_position: 4
---

# ManagementAPI

## Projects

```tsx
// Get all projects
ManagementAPI().Projects().get<[]>();

// Get one project
ManagementAPI().Projects( "projectId" ).get();

// Get one project configuration
ManagementAPI().Projects( "projectId" ).config();

// Get one project's archive
ManagementAPI().Projects( "projectId" ).archive();

// Delete project
ManagementAPI().Projects( "projectId" ).delete();
```

### Users

```ts
// Get all users
ManagementAPI().Projects('projectId')
.Users().get<[]>();

// Get one user
ManagementAPI().Projects('projectId')
.Users( "userId" ).get();

// Create one user
ManagementAPI().Projects('projectId')
.Users().create({ ...user... });

// Update one user
ManagementAPI().Projects('projectId')
.Users( "userId" ).update({ ...user... });

// Deploy default user configuration to project
ManagementAPI().Projects('projectId')
.Users( "userId" ).deploy({ ...user... });

// Delete one user
ManagementAPI().Projects('projectId')
.Users( "userId" ).delete();
```

### Groups

```ts
// Get all groups
ManagementAPI().Projects('projectId')
.Groups().get<[]>();

// Get one group
ManagementAPI().Projects('projectId')
.Groups( "groupId" ).get();

// Create one group
ManagementAPI().Projects('projectId')
.Groups().create({ ...group... });

// Update one group
ManagementAPI().Projects('projectId')
.Groups( "groupId" ).update({ ...group... });

// Deploy default group configuration to project
ManagementAPI().Projects('projectId')
.Groups( "groupId" ).deploy({ ...group... });

// Delete one group
ManagementAPI().Projects('projectId')
.Groups( "groupId" ).delete();
```

### Documents

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

```tsx
// Get all backups
ManagementAPI().Projects( "projectId" )
.Backups().get();

// Create one backup
ManagementAPI().Projects( "projectId" )
.Backups().create();

// Get all backups
ManagementAPI().Projects( "projectId" )
.Backups( "backupId" ).get<[]>();

// Download one backup
ManagementAPI().Projects( "projectId" )
.Backups( "backupId" ).download();
```

### Database

```tsx
// Delete all project from database
MangementAPI().DB().Projects( "projectId" ).delete()
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