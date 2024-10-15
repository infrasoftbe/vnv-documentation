[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [Neo4j](../modules/Neo4j.md) / StructureChildLayer

# Interface: StructureChildLayer

[Neo4j](../modules/Neo4j.md).StructureChildLayer

## Table of contents

### Methods

- [create](Neo4j.StructureChildLayer.md#create)
- [delete](Neo4j.StructureChildLayer.md#delete)
- [get](Neo4j.StructureChildLayer.md#get)
- [update](Neo4j.StructureChildLayer.md#update)

## Methods

### create

▸ **create**(`structure`): `Promise`\<`IStructureChild`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `structure` | `IStructureChild` |

#### Returns

`Promise`\<`IStructureChild`\>

#### Defined in

src/neo4j/layers/structures.ts:7

___

### delete

▸ **delete**(): `any`

#### Returns

`any`

#### Defined in

src/neo4j/layers/structures.ts:9

___

### get

▸ **get**\<`T`\>(): `Promise`\<`T` extends ``null`` ? `IStructureChild` : `IStructureChild`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] = ``null`` |

#### Returns

`Promise`\<`T` extends ``null`` ? `IStructureChild` : `IStructureChild`[]\>

#### Defined in

src/neo4j/layers/structures.ts:6

___

### update

▸ **update**(`structure`): `Promise`\<`IStructureChild`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `structure` | `IStructureChild` |

#### Returns

`Promise`\<`IStructureChild`\>

#### Defined in

src/neo4j/layers/structures.ts:8
