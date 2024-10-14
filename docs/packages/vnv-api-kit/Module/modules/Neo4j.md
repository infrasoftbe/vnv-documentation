[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / Neo4j

# Namespace: Neo4j

## Table of contents

### Interfaces

- [DatabaseLayer](../interfaces/Neo4j.DatabaseLayer.md)
- [FlowLayer](../interfaces/Neo4j.FlowLayer.md)
- [ListChildLayer](../interfaces/Neo4j.ListChildLayer.md)
- [ListLayer](../interfaces/Neo4j.ListLayer.md)
- [MetadataLayer](../interfaces/Neo4j.MetadataLayer.md)
- [NodeLayer](../interfaces/Neo4j.NodeLayer.md)
- [ProjectLayer](../interfaces/Neo4j.ProjectLayer.md)
- [RelationLayer](../interfaces/Neo4j.RelationLayer.md)
- [StructureChildLayer](../interfaces/Neo4j.StructureChildLayer.md)
- [StructureLayer](../interfaces/Neo4j.StructureLayer.md)

### Type Aliases

- [NodeKindLayers](Neo4j.md#nodekindlayers)

### Variables

- [NodeKindClients](Neo4j.md#nodekindclients)

### Functions

- [DatabaseClient](Neo4j.md#databaseclient)
- [FlowClient](Neo4j.md#flowclient)
- [ListChildClient](Neo4j.md#listchildclient)
- [ListClient](Neo4j.md#listclient)
- [MetadataClient](Neo4j.md#metadataclient)
- [NodeClient](Neo4j.md#nodeclient)
- [ProjectClient](Neo4j.md#projectclient)
- [RelationClient](Neo4j.md#relationclient)
- [StructureChildClient](Neo4j.md#structurechildclient)
- [StructureClient](Neo4j.md#structureclient)

## Type Aliases

### NodeKindLayers

Ƭ **NodeKindLayers**: \{ [K in keyof typeof NodeContructor as CapitalizeFirstAndPluralize\<K & string\>]: LayerFactory\<NodeLayer\<K\>\> }

#### Defined in

src/neo4j/layers/nodes.ts:12

## Variables

### NodeKindClients

• `Const` **NodeKindClients**: [`NodeKindLayers`](Neo4j.md#nodekindlayers)

#### Defined in

src/neo4j/layers/nodes.ts:46

## Functions

### DatabaseClient

▸ **DatabaseClient**(`identificator?`): `APILayer`\<[`DatabaseLayer`](../interfaces/Neo4j.DatabaseLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identificator?` | `string` |

#### Returns

`APILayer`\<[`DatabaseLayer`](../interfaces/Neo4j.DatabaseLayer.md)\>

#### Defined in

src/neo4j/layers/database.ts:11

___

### FlowClient

▸ **FlowClient**(`identificator?`): `APILayer`\<[`FlowLayer`](../interfaces/Neo4j.FlowLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identificator?` | `string` |

#### Returns

`APILayer`\<[`FlowLayer`](../interfaces/Neo4j.FlowLayer.md)\>

#### Defined in

src/neo4j/layers/flows.ts:53

___

### ListChildClient

▸ **ListChildClient**(`identificator?`): `APILayer`\<[`ListChildLayer`](../interfaces/Neo4j.ListChildLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identificator?` | `string` |

#### Returns

`APILayer`\<[`ListChildLayer`](../interfaces/Neo4j.ListChildLayer.md)\>

#### Defined in

src/neo4j/layers/lists.ts:12

___

### ListClient

▸ **ListClient**(`identificator?`): `APILayer`\<[`ListLayer`](../interfaces/Neo4j.ListLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identificator?` | `string` |

#### Returns

`APILayer`\<[`ListLayer`](../interfaces/Neo4j.ListLayer.md)\>

#### Defined in

src/neo4j/layers/lists.ts:37

___

### MetadataClient

▸ **MetadataClient**(`identificator?`): `APILayer`\<[`MetadataLayer`](../interfaces/Neo4j.MetadataLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identificator?` | `string` |

#### Returns

`APILayer`\<[`MetadataLayer`](../interfaces/Neo4j.MetadataLayer.md)\>

#### Defined in

src/neo4j/layers/metadatas.ts:12

___

### NodeClient

▸ **NodeClient**(`identificator?`): `APILayer`\<[`NodeLayer`](../interfaces/Neo4j.NodeLayer.md)\<`NodeType`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identificator?` | `string` |

#### Returns

`APILayer`\<[`NodeLayer`](../interfaces/Neo4j.NodeLayer.md)\<`NodeType`\>\>

#### Defined in

src/neo4j/layers/nodes.ts:55

___

### ProjectClient

▸ **ProjectClient**(`identificator?`): `APILayer`\<[`ProjectLayer`](../interfaces/Neo4j.ProjectLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identificator?` | `string` |

#### Returns

`APILayer`\<[`ProjectLayer`](../interfaces/Neo4j.ProjectLayer.md)\>

#### Defined in

src/neo4j/layers/projects.ts:28

___

### RelationClient

▸ **RelationClient**(`identificator?`): `APILayer`\<[`RelationLayer`](../interfaces/Neo4j.RelationLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identificator?` | `string` |

#### Returns

`APILayer`\<[`RelationLayer`](../interfaces/Neo4j.RelationLayer.md)\>

#### Defined in

src/neo4j/layers/relations.ts:12

___

### StructureChildClient

▸ **StructureChildClient**(`identificator?`): `APILayer`\<[`StructureChildLayer`](../interfaces/Neo4j.StructureChildLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identificator?` | `string` |

#### Returns

`APILayer`\<[`StructureChildLayer`](../interfaces/Neo4j.StructureChildLayer.md)\>

#### Defined in

src/neo4j/layers/structures.ts:12

___

### StructureClient

▸ **StructureClient**(`identificator?`): `APILayer`\<[`StructureLayer`](../interfaces/Neo4j.StructureLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identificator?` | `string` |

#### Returns

`APILayer`\<[`StructureLayer`](../interfaces/Neo4j.StructureLayer.md)\>

#### Defined in

src/neo4j/layers/structures.ts:37
