[@infrasoftbe/infrasoft-project](../README.md) / [Exports](../modules.md) / IProjectMetadata

# Interface: IProjectMetadata

Describing the metadata present in all the nodes of a project.

## Hierarchy

- [`IMeta`](IMeta.md)

  ↳ **`IProjectMetadata`**

## Implemented by

- [`_projectMetadata`](../classes/projectMetadata.md)

## Table of contents

### Properties

- [category](IProjectMetadata.md#category)
- [description](IProjectMetadata.md#description)
- [external](IProjectMetadata.md#external)
- [path](IProjectMetadata.md#path)
- [ref\_extern](IProjectMetadata.md#ref_extern)
- [site](IProjectMetadata.md#site)
- [status](IProjectMetadata.md#status)

### Methods

- [shema](IProjectMetadata.md#shema)

## Properties

### category

• **category**: `string`

project_category

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/project.ts:12](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/project.ts#L12)

___

### description

• **description**: `string`

project_description

#### Overrides

[IMeta](IMeta.md).[description](IMeta.md#description)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/project.ts:6](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/project.ts#L6)

___

### external

• **external**: [`ExternalDigitalPlatform`](../modules.md#externaldigitalplatform)

#### Inherited from

[IMeta](IMeta.md).[external](IMeta.md#external)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:126](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L126)

___

### path

• **path**: `string`[]

#### Inherited from

[IMeta](IMeta.md).[path](IMeta.md#path)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:124](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L124)

___

### ref\_extern

• **ref\_extern**: `string`

VV-DBXXX

#### Overrides

[IMeta](IMeta.md).[ref_extern](IMeta.md#ref_extern)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/project.ts:8](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/project.ts#L8)

___

### site

• **site**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `url` | `string` |

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/project.ts:13](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/project.ts#L13)

___

### status

• **status**: `string`

project_status

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/project.ts:10](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/project.ts#L10)

## Methods

### shema

▸ **shema**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Inherited from

[IMeta](IMeta.md).[shema](IMeta.md#shema)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:128](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L128)
