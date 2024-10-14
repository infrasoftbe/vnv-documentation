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

// Get one project's archive
ManagementAPI().Projects( "projectId" ).archive();

// Delete project
ManagementAPI().Projects( "projectId" ).delete();
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