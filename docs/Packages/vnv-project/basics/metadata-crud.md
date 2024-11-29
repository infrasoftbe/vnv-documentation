---
sidebar_position: 3
---

# Metadata CRUD

Ce guide explique comment effectuer des opérations CRUD (Create, Read, Update, Delete) sur les métadonnées (metadata) des nœuds dans un projet Infrasoft en utilisant le package @infrasoftbe/infrasoft-project.

:::warning
🚧 work in progress 🚧
:::

## Ajouter des Métadonnées (Create)
Pour ajouter des métadonnées à un nœud dans un projet, utilisez la méthode addMetadata après avoir initialisé le projet avec ProjectInstance.init.

```typescript
import { ProjectInstance } from '@infrasoftbe/infrasoft-project';

// Initialisation d'un projet
let project = ProjectInstance.init({...<project>...});

// Ajout de métadonnées à un nœud existant
let [ operation , metadata ] = project.addMetadata(node.token, {...<metadata>...});
```

## Explication du Code

- ProjectInstance.init(...) : Initialise un projet en retournant un ProxyProjectInstance qui permet un accès simplifié à toutes les couches du projet.
- project.addMetadata(node.token, metadata) : Ajoute des métadonnées au nœud identifié par node.token. Cette méthode retourne un tableau contenant deux éléments :
  - operation : L'opération associée à l'ajout des métadonnées.
  - metadata : Les métadonnées qui ont été ajoutées.

## Mettre à Jour des Métadonnées (Update)

Pour mettre à jour des métadonnées existantes d'un nœud, utilisez la méthode updateMetadata en passant les nouvelles valeurs souhaitées.

```typescript
// Mise à jour des métadonnées d'un nœud existant
let [ operation , updatedMetadata ] = project.updateMetadata(node.token, metadata.key, {...<updatedValues>...});
```

## Explication du Code

- project.updateMetadata( node.token, metadata.key, updatedValues ) : Met à jour les métadonnées identifiées par metadata.key pour le nœud spécifié par node.token avec les valeurs spécifiées dans updatedValues. Cette méthode retourne un tableau contenant l'opération effectuée et les métadonnées mises à jour.

## Supprimer des Métadonnées (Delete)

Pour supprimer des métadonnées d'un nœud, utilisez la méthode deleteMetadata en spécifiant le token du nœud et la clé des métadonnées à supprimer.

```typescript
// Suppression de métadonnées d'un nœud
let operation = project.deleteMetadata(node.token, metadata.key);
```

## Explication du Code

- project.deleteMetadata(node.token, metadata.key) : Supprime les métadonnées identifiées par metadata.key du nœud spécifié par node.token. Cette méthode retourne l'opération associée à la suppression.

## Résumé des Opérations

- Création (addMetadata) : Ajoute des métadonnées à un nœud et retourne à la fois l'opération et les métadonnées ajoutées.
- Mise à jour (updateMetadata) : Modifie les valeurs de métadonnées existantes et retourne l'opération et les métadonnées mises à jour.
- Suppression (deleteMetadata) : Supprime des métadonnées d'un nœud et retourne l'opération associée.

Ces opérations vous permettent de manipuler efficacement les métadonnées des nœuds dans un projet Infrasoft, en utilisant les fonctionnalités exposées par le ProxyProjectInstance pour accéder directement aux différentes couches du projet.