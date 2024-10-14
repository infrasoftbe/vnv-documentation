[@infrasoftbe/infrasoft-project](../README.md) / [Exports](../modules.md) / IRequirementMetadata

# Interface: IRequirementMetadata

Describing the metadata present in all the nodes of a project.

## Hierarchy

- [`IMeta`](IMeta.md)

  ↳ **`IRequirementMetadata`**

## Implemented by

- [`_requirementMetadata`](../classes/requirementMetadata.md)

## Table of contents

### Properties

- [author](IRequirementMetadata.md#author)
- [completeness](IRequirementMetadata.md#completeness)
- [consistency](IRequirementMetadata.md#consistency)
- [content](IRequirementMetadata.md#content)
- [correctness](IRequirementMetadata.md#correctness)
- [dataQuality](IRequirementMetadata.md#dataquality)
- [description](IRequirementMetadata.md#description)
- [external](IRequirementMetadata.md#external)
- [path](IRequirementMetadata.md#path)
- [rat](IRequirementMetadata.md#rat)
- [ref\_extern](IRequirementMetadata.md#ref_extern)
- [type](IRequirementMetadata.md#type)

### Methods

- [shema](IRequirementMetadata.md#shema)

## Properties

### author

• **author**: `string`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/requirement.ts:4](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/requirement.ts#L4)

___

### completeness

• **completeness**: `string`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/requirement.ts:10](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/requirement.ts#L10)

___

### consistency

• **consistency**: `string`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/requirement.ts:9](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/requirement.ts#L9)

___

### content

• **content**: `string`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/requirement.ts:7](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/requirement.ts#L7)

___

### correctness

• **correctness**: `string`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/requirement.ts:11](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/requirement.ts#L11)

___

### dataQuality

• **dataQuality**: `string`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/requirement.ts:8](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/requirement.ts#L8)

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

### rat

• **rat**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `numericQuality` | `string` |
| `qualityDate` | `string` |
| `qualityLevel` | `string` |
| `qualitySummary` | `string` |

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/requirement.ts:12](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/requirement.ts#L12)

___

### ref\_extern

• **ref\_extern**: `string`

`ref_extern` property is used to store a reference to an external system, which can be an id or token.

#### Inherited from

[IMeta](IMeta.md).[ref_extern](IMeta.md#ref_extern)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:122](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L122)

___

### type

• **type**: `string`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/requirement.ts:5](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/requirement.ts#L5)

## Methods

### shema

▸ **shema**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Inherited from

[IMeta](IMeta.md).[shema](IMeta.md#shema)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:128](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L128)
