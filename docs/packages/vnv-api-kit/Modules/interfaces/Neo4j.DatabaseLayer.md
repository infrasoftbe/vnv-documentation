[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [Neo4j](../modules/Neo4j.md) / DatabaseLayer

# Interface: DatabaseLayer

[Neo4j](../modules/Neo4j.md).DatabaseLayer

## Table of contents

### Properties

- [layers](Neo4j.DatabaseLayer.md#layers)

## Properties

### layers

• **layers**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Flows` | `LayerFactory`\<[`FlowLayer`](Neo4j.FlowLayer.md)\> |
| `Nodes` | `LayerFactory`\<[`NodeLayer`](Neo4j.NodeLayer.md)\<`NodeType`\>\> |
| `Projects` | `LayerFactory`\<[`ProjectLayer`](Neo4j.ProjectLayer.md)\> |

#### Defined in

src/neo4j/layers/database.ts:9
