[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [Session](../modules/Session.md) / MetadataLayer

# Interface: MetadataLayer

[Session](../modules/Session.md).MetadataLayer

## Table of contents

### Methods

- [create](Session.MetadataLayer.md#create)
- [delete](Session.MetadataLayer.md#delete)
- [get](Session.MetadataLayer.md#get)
- [update](Session.MetadataLayer.md#update)

## Methods

### create

▸ **create**\<`M`\>(`metadata`): `Promise`\<`IMetaContainer`\<`M`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `AllNodeMetadata` = `AllNodeMetadata` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | `IMetaContainer`\<`M`\> |

#### Returns

`Promise`\<`IMetaContainer`\<`M`\>\>

#### Defined in

[src/session/layers/sessions/project/metadatas/index.ts:7](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/session/layers/sessions/project/metadatas/index.ts#L7)

___

### delete

▸ **delete**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/session/layers/sessions/project/metadatas/index.ts:9](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/session/layers/sessions/project/metadatas/index.ts#L9)

___

### get

▸ **get**\<`T`\>(): `Promise`\<`T` extends ``null`` ? `IMetaContainer`\<`AllNodeMetadata`\> : `IMetaContainer`\<`AllNodeMetadata`\>[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] = ``null`` |

#### Returns

`Promise`\<`T` extends ``null`` ? `IMetaContainer`\<`AllNodeMetadata`\> : `IMetaContainer`\<`AllNodeMetadata`\>[]\>

#### Defined in

[src/session/layers/sessions/project/metadatas/index.ts:6](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/session/layers/sessions/project/metadatas/index.ts#L6)

___

### update

▸ **update**(`metadata`): `Promise`\<`IMetaContainer`\<`AllNodeMetadata`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | `IMetaContainer`\<`AllNodeMetadata`\> |

#### Returns

`Promise`\<`IMetaContainer`\<`AllNodeMetadata`\>\>

#### Defined in

[src/session/layers/sessions/project/metadatas/index.ts:8](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/session/layers/sessions/project/metadatas/index.ts#L8)
