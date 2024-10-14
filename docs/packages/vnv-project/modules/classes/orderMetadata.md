[@infrasoftbe/infrasoft-project](../README.md) / [Exports](../modules.md) / \_orderMetadata

# Class: \_orderMetadata

The OrderMetadata class represents the metadata associated with an order, including its description,
external reference, status, start and end dates, estimated time, and estimated cost.

## Hierarchy

- [`_meta`](meta.md)

  ↳ **`_orderMetadata`**

## Implements

- [`IOrderMetadata`](../interfaces/IOrderMetadata.md)

## Table of contents

### Constructors

- [constructor](orderMetadata.md#constructor)

### Properties

- [budgetYear](orderMetadata.md#budgetyear)
- [content](orderMetadata.md#content)
- [description](orderMetadata.md#description)
- [endDate](orderMetadata.md#enddate)
- [estimateCost](orderMetadata.md#estimatecost)
- [estimateTime](orderMetadata.md#estimatetime)
- [external](orderMetadata.md#external)
- [path](orderMetadata.md#path)
- [ref\_extern](orderMetadata.md#ref_extern)
- [startDate](orderMetadata.md#startdate)
- [status](orderMetadata.md#status)

### Accessors

- [jsonReady](orderMetadata.md#jsonready)
- [schema](orderMetadata.md#schema)

### Methods

- [assign](orderMetadata.md#assign)
- [complete](orderMetadata.md#complete)
- [ensureMetadata](orderMetadata.md#ensuremetadata)
- [flat](orderMetadata.md#flat)
- [isValidMetadata](orderMetadata.md#isvalidmetadata)
- [validate](orderMetadata.md#validate)
- [assign](orderMetadata.md#assign-1)
- [ensureMetadata](orderMetadata.md#ensuremetadata-1)
- [filterObjectBySchema](orderMetadata.md#filterobjectbyschema)

## Constructors

### constructor

• **new _orderMetadata**(`options?`): [`_orderMetadata`](orderMetadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | typeof [`_orderMetadata`](orderMetadata.md) |

#### Returns

[`_orderMetadata`](orderMetadata.md)

#### Overrides

[_meta](meta.md).[constructor](meta.md#constructor)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/order.ts:30](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/order.ts#L30)

## Properties

### budgetYear

• **budgetYear**: `string` = `''`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/order.ts:27](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/order.ts#L27)

___

### content

• **content**: `string` = `''`

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/order.ts:28](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/order.ts#L28)

___

### description

• **description**: `string` = `''`

node_description

#### Implementation of

[IOrderMetadata](../interfaces/IOrderMetadata.md).[description](../interfaces/IOrderMetadata.md#description)

#### Inherited from

[_meta](meta.md).[description](meta.md#description)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:135](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L135)

___

### endDate

• **endDate**: `string` = `''`

order_endDate

#### Implementation of

[IOrderMetadata](../interfaces/IOrderMetadata.md).[endDate](../interfaces/IOrderMetadata.md#enddate)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/order.ts:24](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/order.ts#L24)

___

### estimateCost

• **estimateCost**: `string` = `''`

order_estCost

#### Implementation of

[IOrderMetadata](../interfaces/IOrderMetadata.md).[estimateCost](../interfaces/IOrderMetadata.md#estimatecost)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/order.ts:26](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/order.ts#L26)

___

### estimateTime

• **estimateTime**: `string` = `''`

order_estTime

#### Implementation of

[IOrderMetadata](../interfaces/IOrderMetadata.md).[estimateTime](../interfaces/IOrderMetadata.md#estimatetime)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/order.ts:25](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/order.ts#L25)

___

### external

• **external**: [`ExternalDigitalPlatform`](../modules.md#externaldigitalplatform)

#### Implementation of

[IOrderMetadata](../interfaces/IOrderMetadata.md).[external](../interfaces/IOrderMetadata.md#external)

#### Inherited from

[_meta](meta.md).[external](meta.md#external)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:138](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L138)

___

### path

• **path**: `string`[] = `[]`

#### Implementation of

[IOrderMetadata](../interfaces/IOrderMetadata.md).[path](../interfaces/IOrderMetadata.md#path)

#### Inherited from

[_meta](meta.md).[path](meta.md#path)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:163](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L163)

___

### ref\_extern

• **ref\_extern**: `string` = `''`

DBXXX

#### Implementation of

[IOrderMetadata](../interfaces/IOrderMetadata.md).[ref_extern](../interfaces/IOrderMetadata.md#ref_extern)

#### Inherited from

[_meta](meta.md).[ref_extern](meta.md#ref_extern)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:137](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L137)

___

### startDate

• **startDate**: `string` = `''`

order_startDate

#### Implementation of

[IOrderMetadata](../interfaces/IOrderMetadata.md).[startDate](../interfaces/IOrderMetadata.md#startdate)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/order.ts:23](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/order.ts#L23)

___

### status

• **status**: `string` = `''`

order_status

#### Implementation of

[IOrderMetadata](../interfaces/IOrderMetadata.md).[status](../interfaces/IOrderMetadata.md#status)

#### Inherited from

[_meta](meta.md).[status](meta.md#status)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:136](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L136)

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

▸ **assign**(`metadata`): [`_orderMetadata`](orderMetadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | `Record`\<`string`, `any`\> |

#### Returns

[`_orderMetadata`](orderMetadata.md)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/order.ts:35](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/order.ts#L35)

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
