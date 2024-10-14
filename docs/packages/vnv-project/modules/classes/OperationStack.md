[@infrasoftbe/infrasoft-project](../README.md) / [Exports](../modules.md) / OperationStack

# Class: OperationStack

The `OperationStack` class in TypeScript is a data structure that stores and manages a collection of
operations using a Map object.

## Implements

- [`IOperationStack`](../interfaces/IOperationStack.md)

## Table of contents

### Constructors

- [constructor](OperationStack.md#constructor)

### Properties

- [operations](OperationStack.md#operations)
- [root](OperationStack.md#root)

### Accessors

- [addOperation](OperationStack.md#addoperation)
- [deleteOperation](OperationStack.md#deleteoperation)
- [getOperation](OperationStack.md#getoperation)
- [jsonReady](OperationStack.md#jsonready)
- [updateOperation](OperationStack.md#updateoperation)

### Methods

- [compareStack](OperationStack.md#comparestack)
- [getTransactions](OperationStack.md#gettransactions)
- [queryAllOperations](OperationStack.md#queryalloperations)

## Constructors

### constructor

• **new OperationStack**(`stack?`, `project?`): [`OperationStack`](OperationStack.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `stack?` | [`TOperationStackOptionsInit`](../modules.md#toperationstackoptionsinit) |
| `project?` | [`ProxyNodeExtended`](../modules.md#proxynodeextended) |

#### Returns

[`OperationStack`](OperationStack.md)

#### Defined in

[packages/infrasoft-vnv-project/src/models/operations/operations.ts:53](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/operations/operations.ts#L53)

## Properties

### operations

• **operations**: `Map`\<`string`, [`Operation`](Operation.md)\<`any`, `OperationReference`\>\>

The above code is declaring a class in TypeScript that has a property called "operations" which
is a Map object. The Map object is used to store key-value pairs, where the keys are strings and
the values are instances of the "Operation" class.

#### Implementation of

[IOperationStack](../interfaces/IOperationStack.md).[operations](../interfaces/IOperationStack.md#operations)

#### Defined in

[packages/infrasoft-vnv-project/src/models/operations/operations.ts:51](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/operations/operations.ts#L51)

___

### root

• `Optional` **root**: [`ProxyNodeExtended`](../modules.md#proxynodeextended)

#### Defined in

[packages/infrasoft-vnv-project/src/models/operations/operations.ts:46](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/operations/operations.ts#L46)

## Accessors

### addOperation

• `get` **addOperation**(): \<T\>(`operation`: `T`) => [`Operation`](Operation.md)\<`T`[``"data"``], `T`[``"ref"``]\>

#### Returns

`fn`

▸ \<`T`\>(`operation`): [`Operation`](Operation.md)\<`T`[``"data"``], `T`[``"ref"``]\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IOperation`](../interfaces/IOperation.md) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `operation` | `T` |

##### Returns

[`Operation`](Operation.md)\<`T`[``"data"``], `T`[``"ref"``]\>

#### Implementation of

IOperationStack.addOperation

#### Defined in

[packages/infrasoft-vnv-project/src/models/operations/operations.ts:63](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/operations/operations.ts#L63)

___

### deleteOperation

• `get` **deleteOperation**(): (`operationId`: `string`) => `boolean`

#### Returns

`fn`

▸ (`operationId`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `operationId` | `string` |

##### Returns

`boolean`

#### Implementation of

IOperationStack.deleteOperation

#### Defined in

[packages/infrasoft-vnv-project/src/models/operations/operations.ts:66](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/operations/operations.ts#L66)

___

### getOperation

• `get` **getOperation**(): (`operationId`: `string`) => [`Operation`](Operation.md)\<`any`, `OperationReference`\>

#### Returns

`fn`

▸ (`operationId`): [`Operation`](Operation.md)\<`any`, `OperationReference`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `operationId` | `string` |

##### Returns

[`Operation`](Operation.md)\<`any`, `OperationReference`\>

#### Implementation of

IOperationStack.getOperation

#### Defined in

[packages/infrasoft-vnv-project/src/models/operations/operations.ts:64](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/operations/operations.ts#L64)

___

### jsonReady

• `get` **jsonReady**(): \{ `_id`: `string` ; `data`: `any` = operation.data; `eventTime`: `number` ; `method`: `OperationMethods` ; `operationId`: `string` ; `operationType`: `OperationKind` ; `ref`: `OperationReference`  }[]

The function returns an array of values from a Map object.

#### Returns

\{ `_id`: `string` ; `data`: `any` = operation.data; `eventTime`: `number` ; `method`: `OperationMethods` ; `operationId`: `string` ; `operationType`: `OperationKind` ; `ref`: `OperationReference`  }[]

An array containing the values of the operations map.

#### Defined in

[packages/infrasoft-vnv-project/src/models/operations/operations.ts:135](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/operations/operations.ts#L135)

___

### updateOperation

• `get` **updateOperation**(): (`operation`: [`Operation`](Operation.md)\<`any`, `OperationReference`\>) => `Map`\<`string`, [`Operation`](Operation.md)\<`any`, `OperationReference`\>\>

#### Returns

`fn`

▸ (`operation`): `Map`\<`string`, [`Operation`](Operation.md)\<`any`, `OperationReference`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `operation` | [`Operation`](Operation.md)\<`any`, `OperationReference`\> |

##### Returns

`Map`\<`string`, [`Operation`](Operation.md)\<`any`, `OperationReference`\>\>

#### Implementation of

IOperationStack.updateOperation

#### Defined in

[packages/infrasoft-vnv-project/src/models/operations/operations.ts:65](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/operations/operations.ts#L65)

## Methods

### compareStack

▸ **compareStack**(`stackToCompare`): [`Operation`](Operation.md)\<`any`, `OperationReference`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `stackToCompare` | `Map`\<`string`, [`Operation`](Operation.md)\<`any`, `OperationReference`\>\> |

#### Returns

[`Operation`](Operation.md)\<`any`, `OperationReference`\>[]

#### Defined in

[packages/infrasoft-vnv-project/src/models/operations/operations.ts:104](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/operations/operations.ts#L104)

___

### getTransactions

▸ **getTransactions**(): `any`[]

The above code is defining a function called `getTransactions` in TypeScript. This function
retrieves transactions from a collection of operations.

#### Returns

`any`[]

#### Defined in

[packages/infrasoft-vnv-project/src/models/operations/operations.ts:79](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/operations/operations.ts#L79)

___

### queryAllOperations

▸ **queryAllOperations**(`query`): `any`[]

The above code is defining a function called `queryAllOperations` in TypeScript. This function
takes a `query` parameter and returns an array of operations that match the query.

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `any` |

#### Returns

`any`[]

#### Defined in

[packages/infrasoft-vnv-project/src/models/operations/operations.ts:70](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/operations/operations.ts#L70)
