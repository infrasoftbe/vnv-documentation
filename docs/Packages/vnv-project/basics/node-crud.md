---
sidebar_position: 1
---

# Node CRUD

Ce guide explique comment effectuer des opérations CRUD (Create, Read, Update, Delete) sur les nœuds (Nodes) d'un projet Infrasoft en utilisant le package @infrasoftbe/infrasoft-project.

:::warning
🚧 work in progress 🚧
:::

## Ajouter un Nœud (Create)

Pour ajouter un nœud à un projet, vous pouvez utiliser la méthode addNode après avoir initialisé le projet avec ProjectInstance.init.

```typescript
import { ProjectInstance } from '@infrasoftbe/infrasoft-project';

// Initialisation d'un projet
let project = ProjectInstance.init({...<project>...});

// Ajout d'un nouveau nœud
let [ operation , node ] = project.addNode({...<node>...});
```

## Explication du Code

- ProjectInstance.init( ... ) : Initialise un projet en retournant un ProxyProjectInstance qui permet un accès simplifié à toutes les couches du projet.
- project.addNode( ... ) : Ajoute un nouveau nœud au projet. Cette méthode retourne un tableau contenant deux éléments :
  - operation : L'opération associée à l'ajout du nœud.
  - node : Le nœud qui a été ajouté.
  - Mettre à Jour un Nœud (Update)

Pour mettre à jour un nœud existant, utilisez la méthode updateNode en passant les modifications souhaitées.

```typescript
// Mise à jour d'un nœud existant
let [ operation , updatedNode ] = project.updateNode(node.token, {...<updatedProperties>...});
```

## Explication du Code

- project.updateNode(node.token, updatedProperties ) : Met à jour un nœud existant identifié par node.token avec les propriétés spécifiées dans updatedProperties. Cette méthode retourne également un tableau contenant l'opération effectuée et le nœud mis à jour.

## Supprimer un Nœud (Delete)

Pour supprimer un nœud, utilisez la méthode deleteNode en spécifiant l'identifiant du nœud à supprimer.

```typescript
// Suppression d'un nœud
let operation = project.deleteNode(node.token);
```

## Explication du Code

- roject.deleteNode(node.token) : Supprime le nœud identifié par node.token du projet. Cette méthode retourne l'opération associée à la suppression.

## Résumé des Opérations

- Création (addNode) : Ajoute un nouveau nœud au projet et retourne à la fois l'opération et le nœud créé.
- Mise à jour (updateNode) : Modifie les propriétés d'un nœud existant et retourne l'opération et le nœud mis à jour.
- Suppression (deleteNode) : Supprime un nœud du projet et retourne l'opération associée.

Ces opérations vous permettent de manipuler efficacement les nœuds dans un projet Infrasoft, en utilisant les fonctionnalités exposées par le ProxyProjectInstance pour accéder directement aux différentes couches du projet.

