[@infrasoftbe/infrasoft-project](../README.md) / [Exports](../modules.md) / Operation

# Class: Operation\<DATA, REF\>

The Operation class is a TypeScript class that represents an operation with properties such as id,
event time, method, data, data type, and reference.

## Type parameters

| Name | Type |
| :------ | :------ |
| `DATA` | `any` |
| `REF` | extends `OperationReference` = `OperationReference` |

## Implements

- [`IOperation`](../interfaces/IOperation.md)

## Table of contents

### Constructors

- [constructor](Operation.md#constructor)

### Properties

- [\_id](Operation.md#_id)
- [data](Operation.md#data)
- [eventTime](Operation.md#eventtime)
- [method](Operation.md#method)
- [operationId](Operation.md#operationid)
- [operationType](Operation.md#operationtype)
- [ref](Operation.md#ref)

## Constructors

### constructor

• **new Operation**\<`DATA`, `REF`\>(`options`, `project?`): [`Operation`](Operation.md)\<`DATA`, `REF`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DATA` | `any` |
| `REF` | extends `OperationReference` = `OperationReference` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IOperation`](../interfaces/IOperation.md) |
| `project?` | [`ProxyNodeExtended`](../modules.md#proxynodeextended) |

#### Returns

[`Operation`](Operation.md)\<`DATA`, `REF`\>

#### Defined in

[packages/infrasoft-vnv-project/src/models/operations/operation.ts:50](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/operations/operation.ts#L50)

## Properties

### \_id

• **\_id**: `string`

OperationId

#### Implementation of

[IOperation](../interfaces/IOperation.md).[_id](../interfaces/IOperation.md#_id)

#### Defined in

[packages/infrasoft-vnv-project/src/models/operations/operation.ts:42](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/operations/operation.ts#L42)

___

### data

• **data**: `DATA`

Operation data

#### Implementation of

[IOperation](../interfaces/IOperation.md).[data](../interfaces/IOperation.md#data)

#### Defined in

[packages/infrasoft-vnv-project/src/models/operations/operation.ts:45](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/operations/operation.ts#L45)

___

### eventTime

• **eventTime**: `number`

Operation Event Time

#### Implementation of

[IOperation](../interfaces/IOperation.md).[eventTime](../interfaces/IOperation.md#eventtime)

#### Defined in

[packages/infrasoft-vnv-project/src/models/operations/operation.ts:43](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/operations/operation.ts#L43)

___

### method

• **method**: `OperationMethods`

Operation Method

#### Implementation of

[IOperation](../interfaces/IOperation.md).[method](../interfaces/IOperation.md#method)

#### Defined in

[packages/infrasoft-vnv-project/src/models/operations/operation.ts:44](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/operations/operation.ts#L44)

___

### operationId

• **operationId**: `string`

#### Implementation of

[IOperation](../interfaces/IOperation.md).[operationId](../interfaces/IOperation.md#operationid)

#### Defined in

[packages/infrasoft-vnv-project/src/models/operations/operation.ts:47](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/operations/operation.ts#L47)

___

### operationType

• **operationType**: `OperationKind`

Operation data type

#### Implementation of

[IOperation](../interfaces/IOperation.md).[operationType](../interfaces/IOperation.md#operationtype)

#### Defined in

[packages/infrasoft-vnv-project/src/models/operations/operation.ts:46](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/operations/operation.ts#L46)

___

### ref

• **ref**: `REF`

Operation reference

#### Implementation of

[IOperation](../interfaces/IOperation.md).[ref](../interfaces/IOperation.md#ref)

#### Defined in

[packages/infrasoft-vnv-project/src/models/operations/operation.ts:48](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/operations/operation.ts#L48)
