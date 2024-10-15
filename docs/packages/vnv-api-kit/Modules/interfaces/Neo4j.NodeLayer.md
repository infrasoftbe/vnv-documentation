[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [Neo4j](../modules/Neo4j.md) / NodeLayer

# Interface: NodeLayer\<T\>

[Neo4j](../modules/Neo4j.md).NodeLayer

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `NodeType` = `NodeType` |

## Table of contents

### Methods

- [create](Neo4j.NodeLayer.md#create)
- [delete](Neo4j.NodeLayer.md#delete)
- [get](Neo4j.NodeLayer.md#get)
- [update](Neo4j.NodeLayer.md#update)

## Methods

### create

▸ **create**\<`Node`\>(`project`): `Promise`\<`INode`\<`Node`[``"type"``], `AllNodeMetadata`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Node` | extends `INode`\<`NodeType`, `AllNodeMetadata`\> = `INode`\<`NodeType`, `AllNodeMetadata`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | `Node` |

#### Returns

`Promise`\<`INode`\<`Node`[``"type"``], `AllNodeMetadata`\>\>

#### Defined in

[src/neo4j/layers/nodes.ts:54](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/neo4j/layers/nodes.ts#L54)

___

### delete

▸ **delete**(): `any`

#### Returns

`any`

#### Defined in

[src/neo4j/layers/nodes.ts:56](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/neo4j/layers/nodes.ts#L56)

___

### get

▸ **get**\<`Type`\>(`query?`): `Promise`\<`Type` extends `NodeType` ? `INode`\<`Type`, `AllNodeMetadata`\> : `INode`\<`NodeType`, `AllNodeMetadata`\>[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends `any`[] \| `NodeType` = `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `query?` | `Partial`\<`INode`\<`NodeType`, `AllNodeMetadata`\> & \{ `meta`: `IMeta`  }\> |

#### Returns

`Promise`\<`Type` extends `NodeType` ? `INode`\<`Type`, `AllNodeMetadata`\> : `INode`\<`NodeType`, `AllNodeMetadata`\>[]\>

#### Defined in

[src/neo4j/layers/nodes.ts:53](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/neo4j/layers/nodes.ts#L53)

___

### update

▸ **update**\<`Node`\>(`project`): `Promise`\<`INode`\<`Node`[``"type"``], `AllNodeMetadata`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Node` | extends `INode`\<`NodeType`, `AllNodeMetadata`\> = `INode`\<`NodeType`, `AllNodeMetadata`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | `INode`\<`NodeType`, `AllNodeMetadata`\> |

#### Returns

`Promise`\<`INode`\<`Node`[``"type"``], `AllNodeMetadata`\>\>

#### Defined in

[src/neo4j/layers/nodes.ts:55](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/neo4j/layers/nodes.ts#L55)
