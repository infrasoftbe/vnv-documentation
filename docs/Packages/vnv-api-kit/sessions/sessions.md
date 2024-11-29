---
sidebar_position: 2
---

# SessionAPI

### Session

```tsx
// Get one session
SessionsAPI( 'sessionId' ).get()

// Import project excel in the session
SessionsAPI( 'sessionId' ).importExcelProject()

// Import project zip in the session
SessionsAPI( 'sessionId' ).importZipProject()
```

### Project

```tsx
SessionsAPI( 'sessionId' ).Project().get();
```

### Nodes

```tsx
// Get all nodes
SessionsAPI( 'sessionId' ).Project()
.Nodes().get<[]>();

// Get one node
SessionsAPI( 'sessionId' ).Project()
.Nodes( 'nodeId' ).get();

// Create one node
SessionsAPI( 'sessionId' ).Project()
.Nodes().create({ ... });

// Update one node
SessionsAPI( 'sessionId' ).Project()
.Nodes( 'nodeId' ).update({ ... });

// Delete one node
SessionsAPI( 'sessionId' ).Project()
.Nodes( 'nodeId' ).delete();
```

### Metadatas

```tsx
// Get all nodes
SessionsAPI( 'sessionId' ).Project()
.Metadatas().get<[]>();

// Get one node
SessionsAPI( 'sessionId' ).Project()
.Metadatas( 'metadataId' ).get();

// Create one node
SessionsAPI( 'sessionId' ).Project()
.Metadatas().create({ ... });

// Update one node
SessionsAPI( 'sessionId' ).Project()
.Metadatas( 'metadataId' ).update({ ... });

// Delete one node
SessionsAPI( 'sessionId' ).Project()
.Metadatas( 'metadataId' ).delete();
```

### Relations

```tsx
// Get all relations
SessionsAPI( 'sessionId' ).Project()
.Relations().get<[]>();

// Get one relation
SessionsAPI( 'sessionId' ).Project()
.Relations( 'relationId' ).get();

// Create one relation
SessionsAPI( 'sessionId' ).Project()
.Relations().create({ ... });

// Update one relation
SessionsAPI( 'sessionId' ).Project()
.Relations( 'relationId' ).update({ ... });

// Delete one relation
SessionsAPI( 'sessionId' ).Project()
.Relations( 'relationId' ).delete();
```

### Lists

```tsx
// Get all lists
SessionsAPI( 'sessionId' ).Project()
.Lists().get<[]>();

// Get one list
SessionsAPI( 'sessionId' ).Project()
.Lists( 'listId' ).get();

// Create one list
SessionsAPI( 'sessionId' ).Project()
.Lists().create({ ... });

// Update one list
SessionsAPI( 'sessionId' ).Project()
.Lists( 'listId' ).update({ ... });

// Delete one list
SessionsAPI( 'sessionId' ).Project()
.Lists( 'listId' ).delete();

// ===== List childs =====

// Get all list childs
SessionsAPI( 'sessionId' ).Project()
.Lists( 'listId' ).Childs().get<[]>();

// Get one list child
SessionsAPI( 'sessionId' ).Project()
.Lists( 'listId' ).Childs( 'childId' ).get();

// Create one list child
SessionsAPI( 'sessionId' ).Project()
.Lists( 'listId' ).Childs().create({ ... });

// Update one list child
SessionsAPI( 'sessionId' ).Project()
.Lists( 'listId' ).Childs( 'childId' ).update({ ... });

// Delete one list child
SessionsAPI( 'sessionId' ).Project()
.Lists( 'listId' ).Childs( 'childId' ).delete();
```

### Structures

```tsx
// Get all structures
SessionsAPI( 'sessionId' ).Project()
.Structures().get<[]>();

// Get one structure
SessionsAPI( 'sessionId' ).Project()
.Structures( 'structureId' ).get();

// Create one structure
SessionsAPI( 'sessionId' ).Project()
.Structures().create({ ... });

// Update one structure
SessionsAPI( 'sessionId' ).Project()
.Structures( 'structureId' ).update({ ... });

// Delete one structure
SessionsAPI( 'sessionId' ).Project()
.Structures( 'structureId' ).delete();

// ===== List childs =====

// Get all structure childs
SessionsAPI( 'sessionId' ).Project()
.Structures( 'structureId' ).Childs().get<[]>();

// Get one structure child
SessionsAPI( 'sessionId' ).Project()
.Structures( 'structureId' ).Childs( 'childId' ).get();

// Create one structure child
SessionsAPI( 'sessionId' ).Project()
.Structures( 'structureId' ).Childs().create({ ... });

// Update one structure child
SessionsAPI( 'sessionId' ).Project()
.Structures( 'structureId' ).Childs( 'childId' ).update({ ... });

// Delete one structure child
SessionsAPI( 'sessionId' ).Project()
.Structures( 'structureId' ).Childs( 'childId' ).delete();
```

### Commit

```tsx
// Commit project from session to database
SessionsAPI( 'sessionId' ).Project()
.Commit().create({ ...commitOptions... })
```

### Pull

```tsx
// Commit project from session to database
SessionsAPI( 'sessionId' ).Pull( "ProjectId" ).get()
```

### Export

```tsx

```

### Import

```tsx

```

### Documents

```tsx
// Get all documents
SessionsAPI( 'sessionId' ).Documents().get<[]>();

// Get one document
SessionsAPI( 'sessionId' ).Documents( 'documentName.txt' ).get();

// Get one folder content
SessionsAPI( 'sessionId' ).Documents( 'folder' ).get();

// Download one folder and the content
SessionsAPI( 'sessionId' ).Documents( 'folder' ).download();

// Download one documents
SessionsAPI( 'sessionId' ).Documents( 'folder/documentName.txt' ).download();
```