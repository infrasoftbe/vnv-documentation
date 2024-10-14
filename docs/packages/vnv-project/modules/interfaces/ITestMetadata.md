[@infrasoftbe/infrasoft-project](../README.md) / [Exports](../modules.md) / ITestMetadata

# Interface: ITestMetadata

Describing the metadata present in all the nodes of a project.

## Hierarchy

- [`IMeta`](IMeta.md)

  ↳ **`ITestMetadata`**

## Implemented by

- [`_testMetadata`](../classes/testMetadata.md)

## Table of contents

### Properties

- [author](ITestMetadata.md#author)
- [content](ITestMetadata.md#content)
- [description](ITestMetadata.md#description)
- [external](ITestMetadata.md#external)
- [path](ITestMetadata.md#path)
- [ref\_extern](ITestMetadata.md#ref_extern)
- [remark](ITestMetadata.md#remark)
- [type](ITestMetadata.md#type)
- [validationType](ITestMetadata.md#validationtype)

### Methods

- [shema](ITestMetadata.md#shema)

## Properties

### author

• **author**: `string`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/test.ts:4](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/test.ts#L4)

___

### content

• **content**: `string`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/test.ts:7](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/test.ts#L7)

___

### description

• **description**: `string`

The `description` property is used to store a string that provides a description or additional
information about a particular entity. It is commonly used in metadata interfaces to provide a
description of the entity being described. For example, in the `IMetadata` interface, the
`description` property is used to describe the metadata of a node, such as a requirement, test, or
structure.

#### Inherited from

[IMeta](IMeta.md).[description](IMeta.md#description)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:120](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L120)

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

`ref_extern` property is used to store a reference to an external system, which can be an id or token.

#### Inherited from

[IMeta](IMeta.md).[ref_extern](IMeta.md#ref_extern)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:122](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L122)

___

### remark

• **remark**: `string`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/test.ts:8](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/test.ts#L8)

___

### type

• **type**: `string`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/test.ts:5](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/test.ts#L5)

___

### validationType

• **validationType**: `string`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/test.ts:6](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/test.ts#L6)

## Methods

### shema

▸ **shema**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Inherited from

[IMeta](IMeta.md).[shema](IMeta.md#shema)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:128](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L128)
