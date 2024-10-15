[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [Neo4j](../modules/Neo4j.md) / RelationLayer

# Interface: RelationLayer

[Neo4j](../modules/Neo4j.md).RelationLayer

## Table of contents

### Methods

- [create](Neo4j.RelationLayer.md#create)
- [delete](Neo4j.RelationLayer.md#delete)
- [get](Neo4j.RelationLayer.md#get)
- [update](Neo4j.RelationLayer.md#update)

## Methods

### create

▸ **create**(`relation`): `Promise`\<`IRelation`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `relation` | `IRelation` |

#### Returns

`Promise`\<`IRelation`\>

#### Defined in

[src/neo4j/layers/relations.ts:7](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/neo4j/layers/relations.ts#L7)

___

### delete

▸ **delete**(): `any`

#### Returns

`any`

#### Defined in

[src/neo4j/layers/relations.ts:9](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/neo4j/layers/relations.ts#L9)

___

### get

▸ **get**\<`T`\>(): `Promise`\<`T` extends ``null`` ? `IRelation` : `IRelation`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] = ``null`` |

#### Returns

`Promise`\<`T` extends ``null`` ? `IRelation` : `IRelation`[]\>

#### Defined in

[src/neo4j/layers/relations.ts:6](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/neo4j/layers/relations.ts#L6)

___

### update

▸ **update**(`relation`): `Promise`\<`IRelation`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `relation` | `IRelation` |

#### Returns

`Promise`\<`IRelation`\>

#### Defined in

[src/neo4j/layers/relations.ts:8](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/neo4j/layers/relations.ts#L8)
