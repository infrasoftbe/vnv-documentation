[@infrasoftbe/infrasoft-project](../README.md) / [Exports](../modules.md) / \_fileMetadata

# Class: \_fileMetadata

The `_fileMetadata` class is a TypeScript class that extends the `Meta` class and implements the
`IFileMetadata` interface, and it represents metadata for a file.

## Hierarchy

- [`_meta`](meta.md)

  ↳ **`_fileMetadata`**

## Implements

- [`IFileMetadata`](../interfaces/IFileMetadata.md)

## Table of contents

### Constructors

- [constructor](fileMetadata.md#constructor)

### Properties

- [category](fileMetadata.md#category)
- [completeness](fileMetadata.md#completeness)
- [consistant](fileMetadata.md#consistant)
- [correctness](fileMetadata.md#correctness)
- [dateModified](fileMetadata.md#datemodified)
- [dateModifiedValue](fileMetadata.md#datemodifiedvalue)
- [dbStatus](fileMetadata.md#dbstatus)
- [description](fileMetadata.md#description)
- [extension](fileMetadata.md#extension)
- [external](fileMetadata.md#external)
- [fileSize](fileMetadata.md#filesize)
- [fileSizeRaw](fileMetadata.md#filesizeraw)
- [fileType](fileMetadata.md#filetype)
- [key](fileMetadata.md#key)
- [linkItem](fileMetadata.md#linkitem)
- [liveview](fileMetadata.md#liveview)
- [metatag](fileMetadata.md#metatag)
- [mimeType](fileMetadata.md#mimetype)
- [modifiedBy](fileMetadata.md#modifiedby)
- [path](fileMetadata.md#path)
- [projectStatus](fileMetadata.md#projectstatus)
- [ref\_extern](fileMetadata.md#ref_extern)
- [status](fileMetadata.md#status)
- [tags](fileMetadata.md#tags)
- [url](fileMetadata.md#url)
- [value](fileMetadata.md#value)

### Accessors

- [jsonReady](fileMetadata.md#jsonready)
- [schema](fileMetadata.md#schema)

### Methods

- [assign](fileMetadata.md#assign)
- [complete](fileMetadata.md#complete)
- [ensureMetadata](fileMetadata.md#ensuremetadata)
- [flat](fileMetadata.md#flat)
- [isValidMetadata](fileMetadata.md#isvalidmetadata)
- [validate](fileMetadata.md#validate)
- [assign](fileMetadata.md#assign-1)
- [ensureMetadata](fileMetadata.md#ensuremetadata-1)
- [filterObjectBySchema](fileMetadata.md#filterobjectbyschema)

## Constructors

### constructor

• **new _fileMetadata**(`options?`): [`_fileMetadata`](fileMetadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | typeof [`_fileMetadata`](fileMetadata.md) |

#### Returns

[`_fileMetadata`](fileMetadata.md)

#### Overrides

[_meta](meta.md).[constructor](meta.md#constructor)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:57](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L57)

## Properties

### category

• **category**: `string` = `''`

#### Implementation of

[IFileMetadata](../interfaces/IFileMetadata.md).[category](../interfaces/IFileMetadata.md#category)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:36](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L36)

___

### completeness

• **completeness**: `number` = `0`

#### Implementation of

[IFileMetadata](../interfaces/IFileMetadata.md).[completeness](../interfaces/IFileMetadata.md#completeness)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:54](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L54)

___

### consistant

• **consistant**: `number` = `0`

#### Implementation of

[IFileMetadata](../interfaces/IFileMetadata.md).[consistant](../interfaces/IFileMetadata.md#consistant)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:53](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L53)

___

### correctness

• **correctness**: `number` = `0`

#### Implementation of

[IFileMetadata](../interfaces/IFileMetadata.md).[correctness](../interfaces/IFileMetadata.md#correctness)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:41](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L41)

___

### dateModified

• **dateModified**: `string` = `''`

#### Implementation of

[IFileMetadata](../interfaces/IFileMetadata.md).[dateModified](../interfaces/IFileMetadata.md#datemodified)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:45](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L45)

___

### dateModifiedValue

• **dateModifiedValue**: `number` = `0`

#### Implementation of

[IFileMetadata](../interfaces/IFileMetadata.md).[dateModifiedValue](../interfaces/IFileMetadata.md#datemodifiedvalue)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:46](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L46)

___

### dbStatus

• **dbStatus**: `string` = `''`

#### Implementation of

[IFileMetadata](../interfaces/IFileMetadata.md).[dbStatus](../interfaces/IFileMetadata.md#dbstatus)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:51](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L51)

___

### description

• **description**: `string` = `''`

The `description` property is used to store a string that provides a description or additional
information about a particular entity. It is commonly used in metadata interfaces to provide a
description of the entity being described. For example, in the `IMetadata` interface, the
`description` property is used to describe the metadata of a node, such as a requirement, test, or
structure.

#### Implementation of

[IFileMetadata](../interfaces/IFileMetadata.md).[description](../interfaces/IFileMetadata.md#description)

#### Inherited from

[_meta](meta.md).[description](meta.md#description)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:135](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L135)

___

### extension

• **extension**: `string` = `''`

#### Implementation of

[IFileMetadata](../interfaces/IFileMetadata.md).[extension](../interfaces/IFileMetadata.md#extension)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:35](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L35)

___

### external

• **external**: [`ExternalDigitalPlatform`](../modules.md#externaldigitalplatform)

#### Implementation of

[IFileMetadata](../interfaces/IFileMetadata.md).[external](../interfaces/IFileMetadata.md#external)

#### Inherited from

[_meta](meta.md).[external](meta.md#external)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:138](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L138)

___

### fileSize

• **fileSize**: `number` = `0`

#### Implementation of

[IFileMetadata](../interfaces/IFileMetadata.md).[fileSize](../interfaces/IFileMetadata.md#filesize)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:47](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L47)

___

### fileSizeRaw

• **fileSizeRaw**: `number` = `0`

#### Implementation of

[IFileMetadata](../interfaces/IFileMetadata.md).[fileSizeRaw](../interfaces/IFileMetadata.md#filesizeraw)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:48](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L48)

___

### fileType

• **fileType**: `string` = `''`

#### Implementation of

[IFileMetadata](../interfaces/IFileMetadata.md).[fileType](../interfaces/IFileMetadata.md#filetype)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:42](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L42)

___

### key

• **key**: `string` = `''`

#### Implementation of

[IFileMetadata](../interfaces/IFileMetadata.md).[key](../interfaces/IFileMetadata.md#key)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:39](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L39)

___

### linkItem

• **linkItem**: `string` = `''`

#### Implementation of

[IFileMetadata](../interfaces/IFileMetadata.md).[linkItem](../interfaces/IFileMetadata.md#linkitem)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:49](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L49)

___

### liveview

• **liveview**: `string` = `''`

#### Implementation of

[IFileMetadata](../interfaces/IFileMetadata.md).[liveview](../interfaces/IFileMetadata.md#liveview)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:38](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L38)

___

### metatag

• **metatag**: `string`[] = `[]`

#### Implementation of

[IFileMetadata](../interfaces/IFileMetadata.md).[metatag](../interfaces/IFileMetadata.md#metatag)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:52](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L52)

___

### mimeType

• **mimeType**: `string` = `''`

#### Implementation of

[IFileMetadata](../interfaces/IFileMetadata.md).[mimeType](../interfaces/IFileMetadata.md#mimetype)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:43](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L43)

___

### modifiedBy

• **modifiedBy**: `string` = `''`

#### Implementation of

[IFileMetadata](../interfaces/IFileMetadata.md).[modifiedBy](../interfaces/IFileMetadata.md#modifiedby)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:44](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L44)

___

### path

• **path**: `string`[] = `[]`

#### Implementation of

[IFileMetadata](../interfaces/IFileMetadata.md).[path](../interfaces/IFileMetadata.md#path)

#### Inherited from

[_meta](meta.md).[path](meta.md#path)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:163](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L163)

___

### projectStatus

• **projectStatus**: `string` = `''`

#### Implementation of

[IFileMetadata](../interfaces/IFileMetadata.md).[projectStatus](../interfaces/IFileMetadata.md#projectstatus)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:50](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L50)

___

### ref\_extern

• **ref\_extern**: `string` = `''`

`ref_extern` property is used to store a reference to an external system, which can be an id or token.

#### Implementation of

[IFileMetadata](../interfaces/IFileMetadata.md).[ref_extern](../interfaces/IFileMetadata.md#ref_extern)

#### Inherited from

[_meta](meta.md).[ref_extern](meta.md#ref_extern)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:137](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L137)

___

### status

• **status**: `string` = `''`

#### Implementation of

[IFileMetadata](../interfaces/IFileMetadata.md).[status](../interfaces/IFileMetadata.md#status)

#### Inherited from

[_meta](meta.md).[status](meta.md#status)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:136](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L136)

___

### tags

• **tags**: (``"TMP"`` \| ``"DB"``)[] = `[]`

#### Implementation of

[IFileMetadata](../interfaces/IFileMetadata.md).[tags](../interfaces/IFileMetadata.md#tags)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:55](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L55)

___

### url

• **url**: `string` = `''`

#### Implementation of

[IFileMetadata](../interfaces/IFileMetadata.md).[url](../interfaces/IFileMetadata.md#url)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:37](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L37)

___

### value

• **value**: `string` = `''`

#### Implementation of

[IFileMetadata](../interfaces/IFileMetadata.md).[value](../interfaces/IFileMetadata.md#value)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:40](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L40)

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

▸ **assign**(`metadata`): [`_fileMetadata`](fileMetadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | `Record`\<`string`, `any`\> |

#### Returns

[`_fileMetadata`](fileMetadata.md)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:62](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L62)

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
