[@infrasoftbe/infrasoft-project](../README.md) / [Exports](../modules.md) / IOperationStack

# Interface: IOperationStack

The `IOperationStack` interface defines a stack of operations that can be performed on a data
structure. It has a property `operations` which is a map of operation IDs to operation objects. The
interface also defines methods `add`, `get`, `update`, and `delete` for manipulating the operations
in the stack.

## Implemented by

- [`OperationStack`](../classes/OperationStack.md)

## Table of contents

### Properties

- [operations](IOperationStack.md#operations)

### Methods

- [addOperation](IOperationStack.md#addoperation)
- [deleteOperation](IOperationStack.md#deleteoperation)
- [getOperation](IOperationStack.md#getoperation)
- [updateOperation](IOperationStack.md#updateoperation)

## Properties

### operations

• **operations**: `Map`\<`string`, [`Operation`](../classes/Operation.md)\<`any`, `OperationReference`\>\>

#### Defined in

[packages/infrasoft-vnv-project/src/models/operations/operations.ts:17](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/operations/operations.ts#L17)

## Methods

### addOperation

▸ **addOperation**(`operation`): `void`

The `add(operation:IOperation):void;` function is a method of the `IOperationStack` interface. It
is used to add an operation to the stack of operations. The `operation` parameter is of type
`IOperation`, which represents an operation that can be performed on a data structure. The function
does not return anything (`void`).

#### Parameters

| Name | Type |
| :------ | :------ |
| `operation` | [`Operation`](../classes/Operation.md)\<`any`, `OperationReference`\> |

#### Returns

`void`

#### Defined in

[packages/infrasoft-vnv-project/src/models/operations/operations.ts:23](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/operations/operations.ts#L23)

___

### deleteOperation

▸ **deleteOperation**(`operationId`): `void`

The `delete(operationId):void;` function is a method of the `IOperationStack` interface. It is used
to remove an operation from the stack of operations based on its ID. The `operationId` parameter is
the ID of the operation to be deleted. The function does not return anything (`void`).

#### Parameters

| Name | Type |
| :------ | :------ |
| `operationId` | `any` |

#### Returns

`void`

#### Defined in

[packages/infrasoft-vnv-project/src/models/operations/operations.ts:38](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/operations/operations.ts#L38)

___

### getOperation

▸ **getOperation**(`operationId`): `void`

The `get(operationId):void;` function is a method of the `IOperationStack` interface. It is used to
retrieve an operation from the stack of operations based on its ID. The `operationId` parameter is
the ID of the operation to be retrieved. The function does not return anything (`void`).

#### Parameters

| Name | Type |
| :------ | :------ |
| `operationId` | `any` |

#### Returns

`void`

#### Defined in

[packages/infrasoft-vnv-project/src/models/operations/operations.ts:28](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/operations/operations.ts#L28)

___

### updateOperation

▸ **updateOperation**(`operationId`): `void`

The `update(operationId):void;` function is a method of the `IOperationStack` interface. It is used
to update an operation in the stack of operations based on its ID. The `operationId` parameter is
the ID of the operation to be updated. The function does not return anything (`void`).

#### Parameters

| Name | Type |
| :------ | :------ |
| `operationId` | `any` |

#### Returns

`void`

#### Defined in

[packages/infrasoft-vnv-project/src/models/operations/operations.ts:33](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/operations/operations.ts#L33)
