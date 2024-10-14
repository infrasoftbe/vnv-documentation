---
sidebar_position: 3
---

# DatabaseAPI

## Projects

La section suivante présente les méthodes disponibles pour gérer les projets dans l’application. Ces méthodes permettent d’effectuer des opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) sur les projets.

```tsx
// Get all projects
Neo4jAPI().Projects().get<[]>();

// Get one project
Neo4jAPI().Projects("projectId").get();

// Create one project
Neo4jAPI().Projects().create({ ...project... });

// Update one project
Neo4jAPI().Projects("projectId").update({ ...project... });

// Delete one project
Neo4jAPI().Projects("projectId").delete();
```

## Nodes ( générique )

Cette section traite des opérations sur les nodes génériques, permettant de gérer tous les types de nodes associés à un projet. Comme pour les projets, ces méthodes facilitent les opérations CRUD.

```tsx
// Get all nodes
Neo4jAPI().Projects("projectId")
.Nodes().get<[]>();

// Get one node
Neo4jAPI().Projects("projectId")
.Nodes("nodeId").get();

// Create one node
Neo4jAPI().Projects("projectId")
.Nodes().create({ ...node... });

// Update one node
Neo4jAPI().Projects("projectId")
.Nodes("nodeId").update({ ...node... });

// Delete one node
Neo4jAPI().Projects("projectId")
.Nodes("nodeId").delete();
```

## Relations

Les relations entre les nodes sont essentielles pour modéliser les interactions dans votre base de données. Cette section décrit comment gérer ces relations.

```tsx
// Get all relations
Neo4jAPI().Projects("projectId")
.Relations().get<[]>();

// Get one relation
Neo4jAPI().Projects("projectId")
.Relations("relationId").get();

// Create one relation
Neo4jAPI().Projects("projectId")
.Relations().create({ ...relation... });

// Update one relation
Neo4jAPI().Projects("projectId")
.Relations("relationId").update({ ...relation... });

// Delete one relation
Neo4jAPI().Projects("projectId")
.Relations("relationId").delete();
```

## Metadatas

Les métadonnées ajoutent un niveau d’information supplémentaire aux nodes et aux projets. Voici comment gérer les métadonnées dans l’application.

```tsx
// Get all metadatas
Neo4jAPI().Projects("projectId")
.Metadatas().get<[]>();

// Get one metadata
Neo4jAPI().Projects("projectId")
.Metadatas("metadataId").get();

// Create one metadata
Neo4jAPI().Projects("projectId")
.Metadatas().create({ ...metadata... });

// Update one metadata
Neo4jAPI().Projects("projectId")
.Metadatas("metadataId").update({ ...metadata... });

// Delete one metadata
Neo4jAPI().Projects("projectId")
.Metadatas("metadataId").delete();
```

## Structures

Les structures permettent d’organiser les nodes d’une manière hiérarchique. Cette section explique comment gérer ces structures, y compris les enfants des structures.

```tsx
// Get all structures
Neo4jAPI().Projects("projectId")
.Structures().get<[]>();

// Get one structure
Neo4jAPI().Projects("projectId")
.Structures("structureId").get();

// Create one structure
Neo4jAPI().Projects("projectId")
.Structures().create({ ...structure... });

// Update one structure
Neo4jAPI().Projects("projectId")
.Structures("structureId").update({ ...structure... });

// Delete one structure
Neo4jAPI().Projects("projectId")
.Structures("structureId").delete();

/** ===== STRUCTURE_CHILD ===== */

// Get all structure childs
Neo4jAPI().Projects("projectId")
.Structures("structureId").Child().get<[]>();

// Get one structure child
Neo4jAPI().Projects("projectId")
.Structures("structureId").Child("childId").get();

// Create one structure child
Neo4jAPI().Projects("projectId")
.Structures("structureId").Child().create({ ...structure_child... });

// Update one structure child
Neo4jAPI().Projects("projectId")
.Structures("structureId").Child("childId").update({ ...structure_child... });

// Delete one structure child
Neo4jAPI().Projects("projectId")
.Structures("structureId").Child("childId").delete();
```

## Lists

Les listes sont un moyen efficace de gérer des collections d’items. Cette section explique comment manipuler les listes et leurs enfants.

```tsx
// Get all lists
Neo4jAPI().Projects("projectId")
.Lists().get<[]>();

// Get one list
Neo4jAPI().Projects("projectId")
.Lists("listId").get();

// Create one list
Neo4jAPI().Projects("projectId")
.Lists().create({ ...list... });

// Update one list
Neo4jAPI().Projects("projectId")
.Lists("listId").update({ ...list... });

// Delete one list
Neo4jAPI().Projects("projectId")
.Lists("listId").delete();

/** ===== LIST_CHILD ===== */

// Get all list childs
Neo4jAPI().Projects("projectId")
.Lists("listId").Child().get<[]>();

// Get one list child
Neo4jAPI().Projects("projectId")
.Lists("listId").Child("childId").get();

// Create one list child
Neo4jAPI().Projects("projectId")
.Lists("listId").Child().create({ ...list_child... });

// Update one list child
Neo4jAPI().Projects("projectId")
.Lists("listId").Child("childId").update({ ...list_child... });

// Delete one list child
Neo4jAPI().Projects("projectId")
.Lists("listId").Child("childId").delete();
```

## Nodes

Les layers de gestion des nodes sont générés dynamiquement à partir des [`NodeConstructor`](../../vnv-project/modules/#nodecontructor) fournis par le module [`@infrasoft/vnv-project`](../../vnv-project/). Cela signifie que chaque type de node défini dans ce module sera automatiquement intégré en tant que [layer](../guide/api-layer/api-layer.md) dans notre application, permettant ainsi une gestion flexible et évolutive des données.

### Fonctionnement

Lors de l’initialisation de notre système, chaque [`NodeConstructor`](../../vnv-project/modules/#nodecontructor) est analysé pour déterminer les types de nodes disponibles. Pour chaque type détecté, un [layer](../guide/api-layer/api-layer.md) correspondant est créé, facilitant ainsi les opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) sur ces nodes.

Ce mécanisme garantit que les layers restent synchronisés avec les modèles de nodes fournis par le module [`@infrasoft/vnv-project`](../../vnv-project/). Ainsi, toute évolution ou ajout de nouveaux types de nodes dans le module sera immédiatement reflété dans notre application, sans nécessiter de modifications manuelles.

### Exemples de Layers

Voici quelques exemples de layers générés dynamiquement 

### Orders

```tsx
// Get all orders
Neo4jAPI().Projects("projectId")
.Orders().get<[]>();

// Get one order
Neo4jAPI().Projects("projectId")
.Orders("orderId").get();

// Create one order
Neo4jAPI().Projects("projectId")
.Orders().create({ ...order... });

// Update one order
Neo4jAPI().Projects("projectId")
.Orders("orderId").update({ ...order... });

// Delete one order
Neo4jAPI().Projects("projectId")
.Orders("orderId").delete();
```

### Deliverables

```tsx
// Get all deliverables
Neo4jAPI().Projects("projectId")
.Deliverables().get<[]>();

// Get one deliverable
Neo4jAPI().Projects("projectId")
.Deliverables("deliverableId").get();

// Create one deliverable
Neo4jAPI().Projects("projectId")
.Deliverables().create({ ...deliverable... });

// Update one deliverable
Neo4jAPI().Projects("projectId")
.Deliverables("deliverableId").update({ ...deliverable... });

// Delete one deliverable
Neo4jAPI().Projects("projectId")
.Deliverables("deliverableId").delete();
```

### Works

```tsx
// Get all works
Neo4jAPI().Projects("projectId")
.Works().get<[]>();

// Get one work
Neo4jAPI().Projects("projectId")
.Works("workId").get();

// Create one work
Neo4jAPI().Projects("projectId")
.Works().create({ ...work... });

// Update one work
Neo4jAPI().Projects("projectId")
.Works("workId").update({ ...work... });

// Delete one work
Neo4jAPI().Projects("projectId")
.Works("workId").delete();
```

### ETC…

La logique est toujours la même pour chaque couche de type de node.

---