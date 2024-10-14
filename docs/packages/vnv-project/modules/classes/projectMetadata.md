[@infrasoftbe/infrasoft-project](../README.md) / [Exports](../modules.md) / \_projectMetadata

# Class: \_projectMetadata

The class ProjectMetadata represents the metadata of a project, including its description, external
reference, and status.

## Hierarchy

- [`_meta`](meta.md)

  ↳ **`_projectMetadata`**

## Implements

- [`IProjectMetadata`](../interfaces/IProjectMetadata.md)

## Table of contents

### Constructors

- [constructor](projectMetadata.md#constructor)

### Properties

- [category](projectMetadata.md#category)
- [description](projectMetadata.md#description)
- [external](projectMetadata.md#external)
- [path](projectMetadata.md#path)
- [ref\_extern](projectMetadata.md#ref_extern)
- [site](projectMetadata.md#site)
- [status](projectMetadata.md#status)

### Accessors

- [jsonReady](projectMetadata.md#jsonready)
- [schema](projectMetadata.md#schema)

### Methods

- [assign](projectMetadata.md#assign)
- [complete](projectMetadata.md#complete)
- [ensureMetadata](projectMetadata.md#ensuremetadata)
- [flat](projectMetadata.md#flat)
- [isValidMetadata](projectMetadata.md#isvalidmetadata)
- [validate](projectMetadata.md#validate)
- [assign](projectMetadata.md#assign-1)
- [ensureMetadata](projectMetadata.md#ensuremetadata-1)
- [filterObjectBySchema](projectMetadata.md#filterobjectbyschema)

## Constructors

### constructor

• **new _projectMetadata**(`options?`): [`_projectMetadata`](projectMetadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | typeof [`_projectMetadata`](projectMetadata.md) |

#### Returns

[`_projectMetadata`](projectMetadata.md)

#### Overrides

[_meta](meta.md).[constructor](meta.md#constructor)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/project.ts:31](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/project.ts#L31)

## Properties

### category

• **category**: `string`

project_category

#### Implementation of

[IProjectMetadata](../interfaces/IProjectMetadata.md).[category](../interfaces/IProjectMetadata.md#category)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/project.ts:25](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/project.ts#L25)

___

### description

• **description**: `string`

project_description

#### Implementation of

[IProjectMetadata](../interfaces/IProjectMetadata.md).[description](../interfaces/IProjectMetadata.md#description)

#### Overrides

[_meta](meta.md).[description](meta.md#description)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/project.ts:22](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/project.ts#L22)

___

### external

• **external**: [`ExternalDigitalPlatform`](../modules.md#externaldigitalplatform)

#### Implementation of

[IProjectMetadata](../interfaces/IProjectMetadata.md).[external](../interfaces/IProjectMetadata.md#external)

#### Inherited from

[_meta](meta.md).[external](meta.md#external)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:138](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L138)

___

### path

• **path**: `string`[] = `[]`

#### Implementation of

[IProjectMetadata](../interfaces/IProjectMetadata.md).[path](../interfaces/IProjectMetadata.md#path)

#### Inherited from

[_meta](meta.md).[path](meta.md#path)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:163](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L163)

___

### ref\_extern

• **ref\_extern**: `string`

VV-DBXXX

#### Implementation of

[IProjectMetadata](../interfaces/IProjectMetadata.md).[ref_extern](../interfaces/IProjectMetadata.md#ref_extern)

#### Overrides

[_meta](meta.md).[ref_extern](meta.md#ref_extern)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/project.ts:23](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/project.ts#L23)

___

### site

• **site**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `url` | `string` |

#### Implementation of

[IProjectMetadata](../interfaces/IProjectMetadata.md).[site](../interfaces/IProjectMetadata.md#site)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/project.ts:26](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/project.ts#L26)

___

### status

• **status**: `string`

project_status

#### Implementation of

[IProjectMetadata](../interfaces/IProjectMetadata.md).[status](../interfaces/IProjectMetadata.md#status)

#### Overrides

[_meta](meta.md).[status](meta.md#status)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/project.ts:24](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/project.ts#L24)

## Accessors

### jsonReady

• `get` **jsonReady**(): `this`

#### Returns

`this`

#### Inherited from

\_meta.jsonReady

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:380](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L380)

___

### schema

• `get` **schema**(): [`JSONSchema3or4`](../interfaces/JSONSchema3or4.md)

#### Returns

[`JSONSchema3or4`](../interfaces/JSONSchema3or4.md)

#### Inherited from

\_meta.schema

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:165](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L165)

## Methods

### assign

▸ **assign**(`metadata`): `any`

The function assigns metadata to an object and returns the updated object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadata` | `Record`\<`string`, `any`\> | The metadata parameter is an object that contains key-value pairs. The keys are strings, and the values can be of any type. |

#### Returns

`any`

the object that the method is being called on (i.e., `this`).

#### Inherited from

[_meta](meta.md).[assign](meta.md#assign)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:327](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L327)

___

### complete

▸ **complete**(`metadata`): `any`

The function takes in a metadata object, ensures its structure, flattens it, merges it with the
existing metadata of the object, and returns the updated metadata object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadata` | `Record`\<`string`, `any`\> | The `metadata` parameter is an object that contains key-value pairs representing metadata information. The keys are strings, and the values can be of any type. |

#### Returns

`any`

the metadata object with any missing keys from the original object added.

#### Inherited from

[_meta](meta.md).[complete](meta.md#complete)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:341](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L341)

___

### ensureMetadata

▸ **ensureMetadata**(`metadata`): `Object`

The `ensureMetadata` function takes in a metadata object, flattens the current object and the
metadata object, merges them together, and then returns the merged object in its original nested
structure.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadata` | `Record`\<`string`, `any`\> | The `metadata` parameter is a record object that contains key-value pairs. The keys represent the metadata properties, and the values represent the corresponding values for those properties. |

#### Returns

`Object`

The function `ensureMetadata` returns the metadata object with any missing values
filled in with the corresponding values from the original object.

#### Inherited from

[_meta](meta.md).[ensureMetadata](meta.md#ensuremetadata)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:205](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L205)

___

### flat

▸ **flat**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Inherited from

[_meta](meta.md).[flat](meta.md#flat)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:376](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L376)

___

### isValidMetadata

▸ **isValidMetadata**(`metadata`): `boolean`

The function checks if all the keys in the object are present in the metadata object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadata` | `Record`\<`string`, `any`\> | The metadata parameter is a record object that contains key-value pairs. The keys are strings and the values can be of any type. |

#### Returns

`boolean`

a boolean value.

#### Inherited from

[_meta](meta.md).[isValidMetadata](meta.md#isvalidmetadata)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:186](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L186)

___

### validate

▸ **validate**(`metadata`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | `any` |

#### Returns

`boolean`

#### Inherited from

[_meta](meta.md).[validate](meta.md#validate)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:227](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L227)

___

### assign

▸ **assign**(`metadata`): [`_projectMetadata`](projectMetadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | `Record`\<`string`, `any`\> |

#### Returns

[`_projectMetadata`](projectMetadata.md)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/project.ts:36](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/project.ts#L36)

___

### ensureMetadata

▸ **ensureMetadata**\<`T`\>(`metaConstructor`, `metadata`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `metaConstructor` | typeof [`_requirementMetadata`](requirementMetadata.md) \| typeof [`_meta`](meta.md) \| typeof [`_testMetadata`](testMetadata.md) \| typeof [`_materialMetadata`](materialMetadata.md) \| typeof [`_workMetadata`](workMetadata.md) \| typeof [`_deliverableMetadata`](deliverableMetadata.md) \| typeof [`_orderMetadata`](orderMetadata.md) \| typeof [`_fileMetadata`](fileMetadata.md) |
| `metadata` | `Record`\<`string`, `any`\> |

#### Returns

`T`

#### Inherited from

[_meta](meta.md).[ensureMetadata](meta.md#ensuremetadata-1)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:176](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L176)

___

### filterObjectBySchema

▸ **filterObjectBySchema**(`source`, `schema`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `any` |
| `schema` | `any` |

#### Returns

`Object`

#### Inherited from

[_meta](meta.md).[filterObjectBySchema](meta.md#filterobjectbyschema)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:280](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L280)
