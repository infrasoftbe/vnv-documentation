[@infrasoftbe/infrasoft-project](../README.md) / [Exports](../modules.md) / \_metaContainer

# Class: \_metaContainer\<Metadata\>

The MetaContainer class represents a container with an ID, token, and metadata.

## Type parameters

| Name | Type |
| :------ | :------ |
| `Metadata` | extends [`NodeMetadata`](../modules.md#nodemetadata) = [`NodeMetadata`](../modules.md#nodemetadata) |

## Implements

- [`IMetaContainer`](../interfaces/IMetaContainer.md)\<`Metadata`\>

## Table of contents

### Constructors

- [constructor](metaContainer.md#constructor)

### Properties

- [create\_dt](metaContainer.md#create_dt)
- [id](metaContainer.md#id)
- [meta](metaContainer.md#meta)
- [token](metaContainer.md#token)
- [update\_dt](metaContainer.md#update_dt)

### Accessors

- [jsonReady](metaContainer.md#jsonready)

## Constructors

### constructor

• **new _metaContainer**\<`Metadata`\>(`meta`, `project?`): [`_metaContainer`](metaContainer.md)\<`Metadata`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Metadata` | extends [`AllNodeMetadata`](../modules.md#allnodemetadata) = [`AllNodeMetadata`](../modules.md#allnodemetadata) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `meta` | [`IMetaContainer`](../interfaces/IMetaContainer.md)\<`Metadata`\> |
| `project?` | [`ProxyNodeExtended`](../modules.md#proxynodeextended) |

#### Returns

[`_metaContainer`](metaContainer.md)\<`Metadata`\>

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata-container.ts:21](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata-container.ts#L21)

## Properties

### create\_dt

• **create\_dt**: `number`

#### Implementation of

[IMetaContainer](../interfaces/IMetaContainer.md).[create_dt](../interfaces/IMetaContainer.md#create_dt)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata-container.ts:18](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata-container.ts#L18)

___

### id

• **id**: `string`

#### Implementation of

[IMetaContainer](../interfaces/IMetaContainer.md).[id](../interfaces/IMetaContainer.md#id)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata-container.ts:15](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata-container.ts#L15)

___

### meta

• **meta**: `Metadata`

#### Implementation of

[IMetaContainer](../interfaces/IMetaContainer.md).[meta](../interfaces/IMetaContainer.md#meta)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata-container.ts:17](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata-container.ts#L17)

___

### token

• **token**: `string`

#### Implementation of

[IMetaContainer](../interfaces/IMetaContainer.md).[token](../interfaces/IMetaContainer.md#token)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata-container.ts:16](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata-container.ts#L16)

___

### update\_dt

• **update\_dt**: `number`

#### Implementation of

[IMetaContainer](../interfaces/IMetaContainer.md).[update_dt](../interfaces/IMetaContainer.md#update_dt)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata-container.ts:19](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata-container.ts#L19)

## Accessors

### jsonReady

• `get` **jsonReady**(): `this` & \{ `meta`: `Metadata` \| \{ `description`: `string` = ''; `external`: [`ExternalDigitalPlatform`](../modules.md#externaldigitalplatform) ; `path`: `string`[] = []; `ref_extern`: `string` = ''; `status`: `string` = '' }  }

#### Returns

`this` & \{ `meta`: `Metadata` \| \{ `description`: `string` = ''; `external`: [`ExternalDigitalPlatform`](../modules.md#externaldigitalplatform) ; `path`: `string`[] = []; `ref_extern`: `string` = ''; `status`: `string` = '' }  }

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata-container.ts:25](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata-container.ts#L25)
