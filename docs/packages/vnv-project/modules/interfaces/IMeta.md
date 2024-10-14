[@infrasoftbe/infrasoft-project](../README.md) / [Exports](../modules.md) / IMeta

# Interface: IMeta

Describing the metadata present in all the nodes of a project.

## Hierarchy

- **`IMeta`**

  ↳ [`IApplicationComponentMetadata`](IApplicationComponentMetadata.md)

  ↳ [`IDeliverableMetadata`](IDeliverableMetadata.md)

  ↳ [`IFileMetadata`](IFileMetadata.md)

  ↳ [`IGroupMetadata`](IGroupMetadata.md)

  ↳ [`IMaterialMetadata`](IMaterialMetadata.md)

  ↳ [`IObjectMetadata`](IObjectMetadata.md)

  ↳ [`IOrderMetadata`](IOrderMetadata.md)

  ↳ [`IProjectMetadata`](IProjectMetadata.md)

  ↳ [`IRequirementMetadata`](IRequirementMetadata.md)

  ↳ [`IRoleMetadata`](IRoleMetadata.md)

  ↳ [`IStructureNodeMetadata`](IStructureNodeMetadata.md)

  ↳ [`ISystemMetadata`](ISystemMetadata.md)

  ↳ [`ITestMetadata`](ITestMetadata.md)

  ↳ [`IUserMetadata`](IUserMetadata.md)

  ↳ [`IWorkMetadata`](IWorkMetadata.md)

## Implemented by

- [`_meta`](../classes/meta.md)

## Table of contents

### Properties

- [description](IMeta.md#description)
- [external](IMeta.md#external)
- [path](IMeta.md#path)
- [ref\_extern](IMeta.md#ref_extern)

### Methods

- [shema](IMeta.md#shema)

## Properties

### description

• **description**: `string`

The `description` property is used to store a string that provides a description or additional
information about a particular entity. It is commonly used in metadata interfaces to provide a
description of the entity being described. For example, in the `IMetadata` interface, the
`description` property is used to describe the metadata of a node, such as a requirement, test, or
structure.

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:120](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L120)

___

### external

• **external**: [`ExternalDigitalPlatform`](../modules.md#externaldigitalplatform)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:126](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L126)

___

### path

• **path**: `string`[]

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:124](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L124)

___

### ref\_extern

• **ref\_extern**: `string`

`ref_extern` property is used to store a reference to an external system, which can be an id or token.

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:122](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L122)

## Methods

### shema

▸ **shema**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:128](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L128)
