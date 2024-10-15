[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [Neo4j](../modules/Neo4j.md) / ListChildLayer

# Interface: ListChildLayer

[Neo4j](../modules/Neo4j.md).ListChildLayer

## Table of contents

### Methods

- [create](Neo4j.ListChildLayer.md#create)
- [delete](Neo4j.ListChildLayer.md#delete)
- [get](Neo4j.ListChildLayer.md#get)
- [update](Neo4j.ListChildLayer.md#update)

## Methods

### create

▸ **create**(`listChild`): `Promise`\<`IListChild`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `listChild` | `IListChild` |

#### Returns

`Promise`\<`IListChild`\>

#### Defined in

[src/neo4j/layers/lists.ts:7](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/neo4j/layers/lists.ts#L7)

___

### delete

▸ **delete**(): `any`

#### Returns

`any`

#### Defined in

[src/neo4j/layers/lists.ts:9](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/neo4j/layers/lists.ts#L9)

___

### get

▸ **get**\<`T`\>(): `Promise`\<`T` extends ``null`` ? `IListChild` : `IListChild`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] = ``null`` |

#### Returns

`Promise`\<`T` extends ``null`` ? `IListChild` : `IListChild`[]\>

#### Defined in

[src/neo4j/layers/lists.ts:6](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/neo4j/layers/lists.ts#L6)

___

### update

▸ **update**(`listChild`): `Promise`\<`IListChild`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `listChild` | `IListChild` |

#### Returns

`Promise`\<`IListChild`\>

#### Defined in

[src/neo4j/layers/lists.ts:8](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/neo4j/layers/lists.ts#L8)
