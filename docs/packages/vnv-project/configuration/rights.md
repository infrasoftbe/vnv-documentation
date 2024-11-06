# Rights

## Operations

- `--*`
- `--read`
- `--write`
- `--delete`
- `--import`
- `--export`

## Selecteurs

### Modules

`${{modulename}}`

### Items

`__{{itemname}}`

### Fields

`:f&{{fieldname}}`

### Matadata layers

`:m.{{layerX}}.{{layerY}}`

### Metadata fields

`:m.{{layerX}}.{{layerY}}:f&{{metafieldname}}`

## Query Selecteur

`__{{itemname}}(WHERE:f:token = "token"&&:f:id = "id")`

## Exmples de Concepts

### Comprendre les concaténations

```ts
[
  // All operations permited on all modules
  "&*--*"

  // Module `structureren`, allow all operations on node
  "...$Structureren__node--*"
  // Module `structureren`, allow read operation on metadata field `description`
  "...$Structureren__structure:m:f:description--read",
  // Module `structureren`, allow read operation for list `listId` on metadata field `description`
  "...$Structureren__list(WHERE:f:id=`listId`):m:f:description--read",
]
```

### Comprendre le cascading

```ts
[
  // Module `structureren`, allow read operation on metadata field `description`
  "...$Structureren__structure:m:f:description--read",
  // Module `structureren`, allow read operation for list `listId` on metadata field `description`
  "...$Structureren__list(WHERE:f:id=`listId`):m:f:description--*",
]
```

## Exemples avec 

```typescript

Rights.push( "$ManagementSupport$ExecutionInformationSystem$ConfigurationManager$Structureren__structure:m:f:description--read" );
Rights.push( "$ManagementSupport$ExecutionInformationSystem$ConfigurationManager$Structureren__list(WHERE:f:id=`listId`):m:f:description--*" );

let rights = Rights.json();
// 
{
  ManagementSupport : {
    ExecutionInformationSystem : {
      ConfigurationManager : {
        Structureren : {
          structure : {
            operations : {
              read : true,
              write : false,
              delete : false
            },
            fields : {
              ...<fields>,
            },
            metadata : {
              ...<other metadata>,
              description : {
                read : true,
                write : false,
                delete : false
              }
              ...<other metadata>,
            }
          },
          exept : {
            "listId" : {
              metadata : {
                description : {
                  read : true,
                  write : true,
                  delete : true
                }
              }
            }
          }
        }
      }
    }
  }
}
// 

```

