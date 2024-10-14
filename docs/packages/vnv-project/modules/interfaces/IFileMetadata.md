[@infrasoftbe/infrasoft-project](../README.md) / [Exports](../modules.md) / IFileMetadata

# Interface: IFileMetadata

The "IFileMetadata" interface extends another interface called "IMeta" and adds additional properties and their types.

## Hierarchy

- [`IMeta`](IMeta.md)

  ↳ **`IFileMetadata`**

## Implemented by

- [`_fileMetadata`](../classes/fileMetadata.md)

## Table of contents

### Properties

- [category](IFileMetadata.md#category)
- [completeness](IFileMetadata.md#completeness)
- [consistant](IFileMetadata.md#consistant)
- [correctness](IFileMetadata.md#correctness)
- [dateModified](IFileMetadata.md#datemodified)
- [dateModifiedValue](IFileMetadata.md#datemodifiedvalue)
- [dbStatus](IFileMetadata.md#dbstatus)
- [description](IFileMetadata.md#description)
- [extension](IFileMetadata.md#extension)
- [external](IFileMetadata.md#external)
- [fileSize](IFileMetadata.md#filesize)
- [fileSizeRaw](IFileMetadata.md#filesizeraw)
- [fileType](IFileMetadata.md#filetype)
- [key](IFileMetadata.md#key)
- [linkItem](IFileMetadata.md#linkitem)
- [liveview](IFileMetadata.md#liveview)
- [metatag](IFileMetadata.md#metatag)
- [mimeType](IFileMetadata.md#mimetype)
- [modifiedBy](IFileMetadata.md#modifiedby)
- [path](IFileMetadata.md#path)
- [projectStatus](IFileMetadata.md#projectstatus)
- [ref\_extern](IFileMetadata.md#ref_extern)
- [status](IFileMetadata.md#status)
- [tags](IFileMetadata.md#tags)
- [url](IFileMetadata.md#url)
- [value](IFileMetadata.md#value)

### Methods

- [shema](IFileMetadata.md#shema)

## Properties

### category

• **category**: `string`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:9](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L9)

___

### completeness

• **completeness**: `number`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:28](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L28)

___

### consistant

• **consistant**: `number`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:27](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L27)

___

### correctness

• **correctness**: `number`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:15](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L15)

___

### dateModified

• **dateModified**: `string`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:19](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L19)

___

### dateModifiedValue

• **dateModifiedValue**: `number`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:20](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L20)

___

### dbStatus

• **dbStatus**: `string`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:25](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L25)

___

### description

• **description**: `any`

The `description` property is used to store a string that provides a description or additional
information about a particular entity. It is commonly used in metadata interfaces to provide a
description of the entity being described. For example, in the `IMetadata` interface, the
`description` property is used to describe the metadata of a node, such as a requirement, test, or
structure.

#### Overrides

[IMeta](IMeta.md).[description](IMeta.md#description)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:5](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L5)

___

### extension

• **extension**: `string`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:8](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L8)

___

### external

• **external**: [`ExternalDigitalPlatform`](../modules.md#externaldigitalplatform)

#### Inherited from

[IMeta](IMeta.md).[external](IMeta.md#external)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:126](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L126)

___

### fileSize

• **fileSize**: `number`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:21](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L21)

___

### fileSizeRaw

• **fileSizeRaw**: `number`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:22](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L22)

___

### fileType

• **fileType**: `string`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:16](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L16)

___

### key

• **key**: `string`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:12](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L12)

___

### linkItem

• **linkItem**: `string`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:23](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L23)

___

### liveview

• **liveview**: `string`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:11](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L11)

___

### metatag

• **metatag**: `string`[]

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:26](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L26)

___

### mimeType

• **mimeType**: `string`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:17](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L17)

___

### modifiedBy

• **modifiedBy**: `string`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:18](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L18)

___

### path

• **path**: `string`[]

#### Inherited from

[IMeta](IMeta.md).[path](IMeta.md#path)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:124](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L124)

___

### projectStatus

• **projectStatus**: `string`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:24](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L24)

___

### ref\_extern

• **ref\_extern**: `string`

`ref_extern` property is used to store a reference to an external system, which can be an id or token.

#### Overrides

[IMeta](IMeta.md).[ref_extern](IMeta.md#ref_extern)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:7](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L7)

___

### status

• **status**: `string`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:6](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L6)

___

### tags

• **tags**: (``"TMP"`` \| ``"DB"``)[]

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:13](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L13)

___

### url

• **url**: `string`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:10](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L10)

___

### value

• **value**: `string`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/file.ts:14](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/file.ts#L14)

## Methods

### shema

▸ **shema**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Inherited from

[IMeta](IMeta.md).[shema](IMeta.md#shema)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:128](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L128)
