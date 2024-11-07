# Rights

Ce module de gestion des droits permet de définir des règles d’accès précises pour des modules, des items et des champs. Chaque règle est structurée en utilisant une syntaxe standardisée de sélecteurs et d’opérations.

## Structure de la Syntaxe

Chaque règle est composée de plusieurs éléments de sélecteur, permettant d’indiquer :

- Les Modules ciblés (un ou plusieurs).
- Les Items associés aux modules.
- Les Champs d’items.
- Les Métadonnées et les champs associés aux couches de métadonnées.

Des Opérations spécifiques peuvent être appliquées sur chaque type d’élément.

## Sélecteurs

Les sélecteurs définissent les composants de la hiérarchie de permissions. Voici la syntaxe pour chaque type de sélecteur :

- Modules : `$[NomModule1]$[NomModule2]$...` **ou** `$*` — Sélectionne un module ou une hiérarchie de modules.
- Items : `__[NomItem | *]` — Sélectionne un item spécifique ou tous les items.
- Champs : `:f&[NomChamp | *]` — Sélectionne un champ d’item spécifique ou tous les champs.
- Couches de métadonnées : `:m.[NomCouche1].[NomCouche2]` **ou** `:m*` — Sélectionne une couche de métadonnées spécifique ou toute les couches.
- Champs de métadonnées : `:m.[NomCouche | *]:f&[NomChampMeta | *]` — Sélectionne un champ spécifique dans une couche de métadonnées ou tout les champs.

## Opérations

Chaque règle peut appliquer une ou plusieurs opérations sur le module, l’item ou le champ spécifié :

- `--* :` toutes les opérations
- `--read` : lecture ( ⚠️par défaut `true` si un **Item** ou **Field** est spécifié⚠️ )
- `--write` : écriture
- `--delete` : suppression
- `--import` : importation
- `--export` : exportation

### Modificateur de Requête sur les Items (NOT YET IMPLEMENTED)

Un item peut être sélectionné via une requête, utilisant la syntaxe suivante pour spécifier un item répondant à certains critères :

```tsx
__{{itemname}}(WHERE:f:token = "token"&&:f:id = "id")
```

## Exemples de Syntaxe

Voici des exemples concrets pour illustrer les possibilités de la syntaxe et des sélecteurs.

### Exemple de Configuration d’Administrateur

```tsx
const rights = [
  // Autorise toutes les opérations sur tous les items de tous les modules
  "$*__*--*",
  // Autorise toutes les opérations sur tous les champs de tous les items pour tous les modules
  "$*__*:f&*--*",
  // Autorise toutes les opérations sur tous les champs de toutes les couches de métadonnées pour chaque item de tous les modules
  "$*__*:m*:f&*--*",
];
```

### Exemples Génériques

Ces exemples montrent des configurations plus spécifiques, ciblant des modules, des items, ou des champs particuliers.

```tsx
const rights = [
  // Autorise toutes les opérations sur le champ `description` de tous les items du module `SupportKnowledge`
  "$SupportKnowledge$*__*:f&description--*",

  // Autorise toutes les opérations sur le champ `token` de tous les items du module `OperationalSupport`
  "$OperationalSupport$*__*:f&token--*",

  // Autorise l'opération `create` sur le champ `description` de l'item `work` du module `SupportKnowledge`
  "$SupportKnowledge$*__work:f&description--create",
];
```

### Exemples Avancés de Cascade et Filtrage

Ces exemples montrent comment restreindre les permissions en utilisant des couches de métadonnées et des requêtes de sélection d’items.

```tsx
const rights = [
  // Autorise l'opération `read` sur le champ `description` d'un item de métadonnée dans le module `Structureren`
  "$ManagementSupport$ExecutionInformationSystem$ConfigurationManager$Structureren__structure:m:f:description--read",
  // Autorise toutes les opérations pour le champ `description` de l'item ayant l'ID `listId` dans une couche de métadonnées
  "$ManagementSupport$ExecutionInformationSystem$ConfigurationManager$Structureren__list(WHERE:f:id=`listId`):m:f:description--*",
];
```

### Fonctionnalités et Cascade des Permissions

Les permissions s’appliquent avec une hiérarchie en cascade :

- Modules : Les droits peuvent être attribués à des modules entiers ou à des sous-modules en utilisant un * pour capturer tous les sous-modules.
- Items : Chaque item d’un module peut avoir des permissions spécifiques.
- Champs : Des champs spécifiques d’un item peuvent être sélectionnés pour définir des droits précis.
- Métadonnées : Les permissions sur les métadonnées sont structurées avec des couches, permettant d’accéder à des niveaux spécifiques de métadonnées.

#### Exemple de Cascade

Les règles de cascade permettent de définir des droits globaux ou spécifiques selon la hiérarchie. Par exemple :

```tsx
const rights = [
  // Permet l'opération `read` pour le champ `description` dans les métadonnées d'un item du module `Structureren`
  "$ManagementSupport$ExecutionInformationSystem$ConfigurationManager$Structureren__structure:m:f:description--read",
  // Autorise toutes les opérations sur le champ `description` pour une liste spécifique d'items dans `Structureren`
  "$ManagementSupport$ExecutionInformationSystem$ConfigurationManager$Structureren__list(WHERE:f:id=`listId`):m:f:description--*",
];
```

Dans cet exemple :

- La première règle limite les droits au champ description en mode read dans les métadonnées.
- La seconde règle applique toutes les opérations sur le champ description pour un item spécifique dans une liste, illustrant ainsi la flexibilité des permissions de métadonnées.

## Implémentation

### Import dans un projet

```tsx
import { Management } from '@infrasoftbe/infrasoft-vnv-api-kit'
```

Chaque règle de droits est traduite dans un objet JSON facilitant l’accès aux données par les modules de l’application.

#### Exemple de Résultat JSON

```tsx
import { Management } from '@infrasoftbe/infrasoft-vnv-api-kit'

let rights = Management.Rights([
  "$ManagementSupport$ExecutionInformationSystem$ConfigurationManager$Structureren__structure:m:f:description--read",
  "$ManagementSupport$ExecutionInformationSystem$ConfigurationManager$Structureren__list(WHERE:f:id=`listId`):m:f:description--*",
]);

conosle.log({ rights : rights.json() })
/** Print
{
  "ManagementSupport": {
    "ExecutionInformationSystem": {
      "ConfigurationManager": {
        "Structureren": {
          "structure": {
            "operations": {
              "read": true,
              "write": false,
              "delete": false
            },
            "fields": {
              // Autres champs
            },
            "metadata": {
              "description": {
                "read": true,
                "write": false,
                "delete": false
              }
              // Autres métadonnées
            }
          },
          "except": {
            "listId": {
              "metadata": {
                "description": {
                  "read": true,
                  "write": true,
                  "delete": true
                }
              }
            }
          }
        }
      }
    }
  }
}
*/
`