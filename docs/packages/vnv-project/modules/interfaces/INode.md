[@infrasoftbe/infrasoft-project](../README.md) / [Exports](../modules.md) / INode

# Interface: INode\<Type, Metadata\>

The `INode` interface is defining the structure of a node in a project.

## Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`NodeType`](../modules.md#nodetype) = [`NodeType`](../modules.md#nodetype) |
| `Metadata` | extends [`NodeMetadata`](../modules.md#nodemetadata) = [`NodeMetadata`](../modules.md#nodemetadata) |

## Hierarchy

- **`INode`**

  ↳ [`IApplicationComponent`](IApplicationComponent.md)

  ↳ [`IDeliverable`](IDeliverable.md)

  ↳ [`IFile`](IFile.md)

  ↳ [`IGroup`](IGroup.md)

  ↳ [`IList`](IList.md)

  ↳ [`IMaterial`](IMaterial.md)

  ↳ [`IObject`](IObject.md)

  ↳ [`IOrder`](IOrder.md)

  ↳ [`IProject`](IProject.md)

  ↳ [`IRequirement`](IRequirement.md)

  ↳ [`IRole`](IRole.md)

  ↳ [`IStructure`](IStructure.md)

  ↳ [`ISystem`](ISystem.md)

  ↳ [`ITest`](ITest.md)

  ↳ [`IUser`](IUser.md)

  ↳ [`IWork`](IWork.md)

## Implemented by

- [`_node`](../classes/node.md)

## Table of contents

### Properties

- [create\_dt](INode.md#create_dt)
- [id](INode.md#id)
- [name](INode.md#name)
- [token](INode.md#token)
- [type](INode.md#type)
- [update\_dt](INode.md#update_dt)
- [userGroup](INode.md#usergroup)

## Properties

### create\_dt

• **create\_dt**: `number`

Node creation date time

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:19](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L19)

___

### id

• **id**: `string`

Node Id

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:12](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L12)

___

### name

• **name**: `string`

Node name

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:14](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L14)

___

### token

• **token**: `string`

Node token

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:16](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L16)

___

### type

• **type**: `Type`

Node type

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:10](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L10)

___

### update\_dt

• **update\_dt**: `number`

Node update date time

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:21](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L21)

___

### userGroup

• **userGroup**: `string`[]

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:23](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L23)
