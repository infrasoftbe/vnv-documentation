[@infrasoftbe/infrasoft-project](../README.md) / [Exports](../modules.md) / IDeliverableMetadata

# Interface: IDeliverableMetadata

Describing the metadata present in all the nodes of a project.

## Hierarchy

- [`IMeta`](IMeta.md)

  ↳ **`IDeliverableMetadata`**

## Implemented by

- [`_deliverableMetadata`](../classes/deliverableMetadata.md)

## Table of contents

### Properties

- [description](IDeliverableMetadata.md#description)
- [estimateCost](IDeliverableMetadata.md#estimatecost)
- [estimateTime](IDeliverableMetadata.md#estimatetime)
- [external](IDeliverableMetadata.md#external)
- [path](IDeliverableMetadata.md#path)
- [ref\_extern](IDeliverableMetadata.md#ref_extern)

### Methods

- [shema](IDeliverableMetadata.md#shema)

## Properties

### description

• **description**: `string`

deliverable_description

#### Overrides

[IMeta](IMeta.md).[description](IMeta.md#description)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/deliverable.ts:5](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/deliverable.ts#L5)

___

### estimateCost

• **estimateCost**: `string`

deliverable_estCost

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/deliverable.ts:11](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/deliverable.ts#L11)

___

### estimateTime

• **estimateTime**: `string`

deliverable_estTime

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/deliverable.ts:9](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/deliverable.ts#L9)

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

POXXXX

#### Overrides

[IMeta](IMeta.md).[ref_extern](IMeta.md#ref_extern)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/deliverable.ts:7](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/deliverable.ts#L7)

## Methods

### shema

▸ **shema**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Inherited from

[IMeta](IMeta.md).[shema](IMeta.md#shema)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:128](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L128)
