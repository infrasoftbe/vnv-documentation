[@infrasoftbe/infrasoft-project](../README.md) / [Exports](../modules.md) / IOrderMetadata

# Interface: IOrderMetadata

Describing the metadata present in all the nodes of a project.

## Hierarchy

- [`IMeta`](IMeta.md)

  ↳ **`IOrderMetadata`**

## Implemented by

- [`_orderMetadata`](../classes/orderMetadata.md)

## Table of contents

### Properties

- [description](IOrderMetadata.md#description)
- [endDate](IOrderMetadata.md#enddate)
- [estimateCost](IOrderMetadata.md#estimatecost)
- [estimateTime](IOrderMetadata.md#estimatetime)
- [external](IOrderMetadata.md#external)
- [path](IOrderMetadata.md#path)
- [ref\_extern](IOrderMetadata.md#ref_extern)
- [startDate](IOrderMetadata.md#startdate)
- [status](IOrderMetadata.md#status)

### Methods

- [shema](IOrderMetadata.md#shema)

## Properties

### description

• **description**: `string`

node_description

#### Overrides

[IMeta](IMeta.md).[description](IMeta.md#description)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/order.ts:5](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/order.ts#L5)

___

### endDate

• **endDate**: `string`

order_endDate

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/order.ts:13](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/order.ts#L13)

___

### estimateCost

• **estimateCost**: `string`

order_estCost

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/order.ts:17](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/order.ts#L17)

___

### estimateTime

• **estimateTime**: `string`

order_estTime

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/order.ts:15](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/order.ts#L15)

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

DBXXX

#### Overrides

[IMeta](IMeta.md).[ref_extern](IMeta.md#ref_extern)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/order.ts:7](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/order.ts#L7)

___

### startDate

• **startDate**: `string`

order_startDate

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/order.ts:11](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/order.ts#L11)

___

### status

• **status**: `string`

order_status

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/order.ts:9](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/order.ts#L9)

## Methods

### shema

▸ **shema**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Inherited from

[IMeta](IMeta.md).[shema](IMeta.md#shema)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:128](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L128)
