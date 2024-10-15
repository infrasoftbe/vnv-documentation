[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [Neo4j](../modules/Neo4j.md) / StructureLayer

# Interface: StructureLayer

[Neo4j](../modules/Neo4j.md).StructureLayer

## Table of contents

### Properties

- [layers](Neo4j.StructureLayer.md#layers)

### Methods

- [create](Neo4j.StructureLayer.md#create)
- [delete](Neo4j.StructureLayer.md#delete)
- [get](Neo4j.StructureLayer.md#get)
- [update](Neo4j.StructureLayer.md#update)

## Properties

### layers

• **layers**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Child` | `LayerFactory`\<[`StructureChildLayer`](Neo4j.StructureChildLayer.md)\> |

#### Defined in

src/neo4j/layers/structures.ts:32

## Methods

### create

▸ **create**(`structure`): `Promise`\<`IStructure`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `structure` | `IStructure` |

#### Returns

`Promise`\<`IStructure`\>

#### Defined in

src/neo4j/layers/structures.ts:29

___

### delete

▸ **delete**(): `any`

#### Returns

`any`

#### Defined in

src/neo4j/layers/structures.ts:31

___

### get

▸ **get**\<`T`\>(): `Promise`\<`T` extends ``null`` ? `IStructure` : `IStructure`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] = ``null`` |

#### Returns

`Promise`\<`T` extends ``null`` ? `IStructure` : `IStructure`[]\>

#### Defined in

src/neo4j/layers/structures.ts:28

___

### update

▸ **update**(`structure`): `Promise`\<`IStructure`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `structure` | `IStructure` |

#### Returns

`Promise`\<`IStructure`\>

#### Defined in

src/neo4j/layers/structures.ts:30
