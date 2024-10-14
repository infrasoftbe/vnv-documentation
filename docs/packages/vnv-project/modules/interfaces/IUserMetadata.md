[@infrasoftbe/infrasoft-project](../README.md) / [Exports](../modules.md) / IUserMetadata

# Interface: IUserMetadata

Describing the metadata present in all the nodes of a project.

## Hierarchy

- [`IMeta`](IMeta.md)

  ↳ **`IUserMetadata`**

## Implemented by

- [`_userMetadata`](../classes/userMetadata.md)

## Table of contents

### Properties

- [alias](IUserMetadata.md#alias)
- [description](IUserMetadata.md#description)
- [email](IUserMetadata.md#email)
- [external](IUserMetadata.md#external)
- [first\_name](IUserMetadata.md#first_name)
- [groups](IUserMetadata.md#groups)
- [last\_name](IUserMetadata.md#last_name)
- [path](IUserMetadata.md#path)
- [ref\_extern](IUserMetadata.md#ref_extern)

### Methods

- [shema](IUserMetadata.md#shema)

## Properties

### alias

• **alias**: `string`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/user.ts:9](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/user.ts#L9)

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

[packages/infrasoft-vnv-project/src/models/metadats/user.ts:4](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/user.ts#L4)

___

### email

• **email**: `string`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/user.ts:8](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/user.ts#L8)

___

### external

• **external**: [`ExternalDigitalPlatform`](../modules.md#externaldigitalplatform)

#### Inherited from

[IMeta](IMeta.md).[external](IMeta.md#external)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:126](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L126)

___

### first\_name

• **first\_name**: `string`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/user.ts:6](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/user.ts#L6)

___

### groups

• **groups**: `string`[]

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/user.ts:10](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/user.ts#L10)

___

### last\_name

• **last\_name**: `string`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/user.ts:7](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/user.ts#L7)

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

`ref_extern` property is used to store a reference to an external system, which can be an id or token.

#### Overrides

[IMeta](IMeta.md).[ref_extern](IMeta.md#ref_extern)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/user.ts:5](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/user.ts#L5)

## Methods

### shema

▸ **shema**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Inherited from

[IMeta](IMeta.md).[shema](IMeta.md#shema)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:128](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L128)
