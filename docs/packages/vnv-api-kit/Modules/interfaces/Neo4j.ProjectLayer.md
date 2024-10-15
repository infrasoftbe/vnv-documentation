[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [Neo4j](../modules/Neo4j.md) / ProjectLayer

# Interface: ProjectLayer

[Neo4j](../modules/Neo4j.md).ProjectLayer

## Table of contents

### Properties

- [layers](Neo4j.ProjectLayer.md#layers)

### Methods

- [create](Neo4j.ProjectLayer.md#create)
- [delete](Neo4j.ProjectLayer.md#delete)
- [get](Neo4j.ProjectLayer.md#get)
- [getAll](Neo4j.ProjectLayer.md#getall)
- [update](Neo4j.ProjectLayer.md#update)

## Properties

### layers

• **layers**: `Omit`\<[`NodeKindLayers`](../modules/Neo4j.md#nodekindlayers), ``"Structures"`` \| ``"Lists"`` \| ``"Structure_childs"`` \| ``"List_childs"``\> & \{ `Lists`: `LayerFactory`\<[`ListLayer`](Neo4j.ListLayer.md)\> ; `Metadatas`: `LayerFactory`\<[`MetadataLayer`](Neo4j.MetadataLayer.md)\> ; `Nodes`: `LayerFactory`\<[`NodeLayer`](Neo4j.NodeLayer.md)\<`NodeType`\>\> ; `Relations`: `LayerFactory`\<[`RelationLayer`](Neo4j.RelationLayer.md)\> ; `Structures`: `LayerFactory`\<[`StructureLayer`](Neo4j.StructureLayer.md)\>  }

#### Defined in

src/neo4j/layers/projects.ts:17

## Methods

### create

▸ **create**(`project`): `Promise`\<`IProject`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | `IProject` |

#### Returns

`Promise`\<`IProject`\>

#### Defined in

src/neo4j/layers/projects.ts:14

___

### delete

▸ **delete**(): `any`

#### Returns

`any`

#### Defined in

src/neo4j/layers/projects.ts:16

___

### get

▸ **get**\<`T`\>(): `Promise`\<`T` extends ``null`` ? `IProject` : `IProject`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] = ``null`` |

#### Returns

`Promise`\<`T` extends ``null`` ? `IProject` : `IProject`[]\>

#### Defined in

src/neo4j/layers/projects.ts:12

___

### getAll

▸ **getAll**(): `Promise`\<`INodeExtendedInitOptions`\>

#### Returns

`Promise`\<`INodeExtendedInitOptions`\>

#### Defined in

src/neo4j/layers/projects.ts:13

___

### update

▸ **update**(`project`): `Promise`\<`IProject`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | `IProject` |

#### Returns

`Promise`\<`IProject`\>

#### Defined in

src/neo4j/layers/projects.ts:15
