---
sidebar_position: 2
---

# Relation CRUD

Ce guide explique comment effectuer des opérations CRUD (Create, Read, Update, Delete) sur les relations entre nœuds dans un projet Infrasoft en utilisant le package @infrasoftbe/infrasoft-project.

:::warning
🚧 work in progress 🚧
:::

## Ajouter une Relation (Create)
Pour ajouter une relation entre deux nœuds dans un projet, utilisez la méthode addRelation après avoir initialisé le projet avec ProjectInstance.init.

```typescript
import { ProjectInstance } from '@infrasoftbe/infrasoft-project';

// Initialisation d'un projet
let project = ProjectInstance.init({...<project>...});

// Ajout d'une nouvelle relation entre deux nœuds
let [ operation , relation ] = project.addRelation({
  from: node1.token,
  to: node2.token,
  type: 'relationType', // Type de relation
  properties: {...<relationProperties>...}
});
```

## Explication du Code
- ProjectInstance.init(...) : Initialise un projet en retournant un ProxyProjectInstance qui permet un accès simplifié à toutes les couches du projet.
- project.addRelation() : Ajoute une relation entre deux nœuds identifiés par leurs tokens (node1.token et node2.token). Cette méthode retourne un tableau contenant deux éléments :
  - operation : L'opération associée à l'ajout de la relation.
  - relation : La relation qui a été ajoutée, comprenant le type de relation et les propriétés associées.

## Lire une Relation (Read)
Pour lire les détails d'une relation existante, utilisez la méthode getRelation en spécifiant les tokens des nœuds concernés et le type de relation.

```typescript
// Lecture des détails d'une relation
let relation = project.getRelation({
  from: node1.token,
  to: node2.token,
  type: 'relationType'
});
```

## Explication du Code
- project.getRelation(...) : Récupère les détails d'une relation entre deux nœuds identifiés par leurs tokens (node1.token et node2.token) et le type de relation ('relationType'). Cette méthode retourne la relation correspondante.

## Mettre à Jour une Relation (Update)

Pour mettre à jour une relation existante, utilisez la méthode updateRelation en spécifiant les nouvelles propriétés.

```typescript
Copier le code
// Mise à jour d'une relation existante
let [ operation , updatedRelation ] = project.updateRelation({
  from: node1.token,
  to: node2.token,
  type: 'relationType',
  properties: {...<updatedProperties>...}
});
```

## Explication du Code

- project.updateRelation(...) : Met à jour une relation existante entre deux nœuds spécifiés par leurs tokens (node1.token et node2.token) et le type de relation ('relationType'). Les nouvelles propriétés sont spécifiées dans updatedProperties. Cette méthode retourne un tableau contenant l'opération effectuée et la relation mise à jour.

## Supprimer une Relation (Delete)

Pour supprimer une relation entre deux nœuds, utilisez la méthode deleteRelation en spécifiant les tokens des nœuds et le type de relation.

```typescript
// Suppression d'une relation
let operation = project.deleteRelation({
  from: node1.token,
  to: node2.token,
  type: 'relationType'
});
```

## Explication du Code

- project.deleteRelation(...) : Supprime la relation entre deux nœuds identifiés par leurs tokens (node1.token et node2.token) et le type de relation ('relationType'). Cette méthode retourne l'opération associée à la suppression de la relation.

## Résumé des Opérations

- Création (addRelation) : Ajoute une nouvelle relation entre deux nœuds et retourne à la fois l'opération et la relation ajoutée.
- Lecture (getRelation) : Récupère les détails d'une relation existante.
- Mise à jour (updateRelation) : Modifie les propriétés d'une relation existante et retourne l'opération et la relation mise à jour.
- Suppression (deleteRelation) : Supprime une relation entre deux nœuds et retourne l'opération associée.

Ces opérations vous permettent de manipuler efficacement les relations entre les nœuds dans un projet Infrasoft, en utilisant les fonctionnalités exposées par le ProxyProjectInstance pour accéder directement aux différentes couches du projet.
