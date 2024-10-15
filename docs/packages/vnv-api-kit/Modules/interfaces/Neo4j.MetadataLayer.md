[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [Neo4j](../modules/Neo4j.md) / MetadataLayer

# Interface: MetadataLayer

[Neo4j](../modules/Neo4j.md).MetadataLayer

## Table of contents

### Methods

- [create](Neo4j.MetadataLayer.md#create)
- [delete](Neo4j.MetadataLayer.md#delete)
- [get](Neo4j.MetadataLayer.md#get)
- [update](Neo4j.MetadataLayer.md#update)

## Methods

### create

▸ **create**\<`Metadata`\>(`metadata`): `Promise`\<`IMetaContainer`\<`Metadata`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Metadata` | extends `AllNodeMetadata` = `AllNodeMetadata` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | `IMetaContainer`\<`Metadata`\> |

#### Returns

`Promise`\<`IMetaContainer`\<`Metadata`\>\>

#### Defined in

[src/neo4j/layers/metadatas.ts:7](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/neo4j/layers/metadatas.ts#L7)

___

### delete

▸ **delete**(): `any`

#### Returns

`any`

#### Defined in

[src/neo4j/layers/metadatas.ts:9](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/neo4j/layers/metadatas.ts#L9)

___

### get

▸ **get**\<`T`\>(): `Promise`\<`T` extends `AllNodeMetadata` ? `IMetaContainer`\<`T`\> : `IMetaContainer`\<`AllNodeMetadata`\>[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] \| `AllNodeMetadata` = `AllNodeMetadata` |

#### Returns

`Promise`\<`T` extends `AllNodeMetadata` ? `IMetaContainer`\<`T`\> : `IMetaContainer`\<`AllNodeMetadata`\>[]\>

#### Defined in

[src/neo4j/layers/metadatas.ts:6](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/neo4j/layers/metadatas.ts#L6)

___

### update

▸ **update**\<`Metadata`\>(`metadata`): `Promise`\<`IMetaContainer`\<`Metadata`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Metadata` | extends `AllNodeMetadata` = `AllNodeMetadata` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | `IMetaContainer`\<`Metadata`\> |

#### Returns

`Promise`\<`IMetaContainer`\<`Metadata`\>\>

#### Defined in

[src/neo4j/layers/metadatas.ts:8](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/neo4j/layers/metadatas.ts#L8)
