[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [Neo4j](../modules/Neo4j.md) / ListLayer

# Interface: ListLayer

[Neo4j](../modules/Neo4j.md).ListLayer

## Table of contents

### Properties

- [layers](Neo4j.ListLayer.md#layers)

### Methods

- [create](Neo4j.ListLayer.md#create)
- [delete](Neo4j.ListLayer.md#delete)
- [get](Neo4j.ListLayer.md#get)
- [update](Neo4j.ListLayer.md#update)

## Properties

### layers

• **layers**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Child` | `LayerFactory`\<[`ListChildLayer`](Neo4j.ListChildLayer.md)\> |

#### Defined in

[src/neo4j/layers/lists.ts:32](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/neo4j/layers/lists.ts#L32)

## Methods

### create

▸ **create**(`structure`): `Promise`\<`IList`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `structure` | `IList` |

#### Returns

`Promise`\<`IList`\>

#### Defined in

[src/neo4j/layers/lists.ts:29](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/neo4j/layers/lists.ts#L29)

___

### delete

▸ **delete**(): `any`

#### Returns

`any`

#### Defined in

[src/neo4j/layers/lists.ts:31](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/neo4j/layers/lists.ts#L31)

___

### get

▸ **get**\<`T`\>(): `Promise`\<`T` extends ``null`` ? `IList` : `IList`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] = ``null`` |

#### Returns

`Promise`\<`T` extends ``null`` ? `IList` : `IList`[]\>

#### Defined in

[src/neo4j/layers/lists.ts:28](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/neo4j/layers/lists.ts#L28)

___

### update

▸ **update**(`structure`): `Promise`\<`IList`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `structure` | `IList` |

#### Returns

`Promise`\<`IList`\>

#### Defined in

[src/neo4j/layers/lists.ts:30](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/neo4j/layers/lists.ts#L30)
