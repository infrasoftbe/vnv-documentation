[@infrasoftbe/infrasoft-project](../README.md) / [Exports](../modules.md) / \_listChild

# Class: \_listChild

The StructuralNode class is a TypeScript class that represents a structural node ( structure_child ) with properties
such as name, link, id, type, token, and child.

## Implements

- [`IListChild`](../interfaces/IListChild.md)

## Table of contents

### Constructors

- [constructor](listChild.md#constructor)

### Properties

- [#\_list\_instance](listChild.md##_list_instance)
- [child](listChild.md#child)
- [id](listChild.md#id)
- [link](listChild.md#link)
- [name](listChild.md#name)
- [token](listChild.md#token)
- [type](listChild.md#type)

### Accessors

- [list](listChild.md#list)
- [project](listChild.md#project)
- [structureToken](listChild.md#structuretoken)

## Constructors

### constructor

• **new _listChild**(`options?`, `list?`): [`_listChild`](listChild.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IListChild`](../interfaces/IListChild.md) |
| `list?` | [`_list`](list.md) |

#### Returns

[`_listChild`](listChild.md)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/list-node.ts:25](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/list-node.ts#L25)

## Properties

### #\_list\_instance

• `Private` **#\_list\_instance**: [`_list`](list.md) = `null`

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/list-node.ts:14](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/list-node.ts#L14)

___

### child

• **child**: `string` = `null`

The `child` property in the `IStructuralNode` interface is used to store the ID of the child node
that is connected to the current node. It represents the relationship between the parent node and
the child node in a data structure. By storing the ID of the child node, it becomes easier to
navigate and access the child nodes from the parent node.

#### Implementation of

[IListChild](../interfaces/IListChild.md).[child](../interfaces/IListChild.md#child)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/list-node.ts:23](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/list-node.ts#L23)

___

### id

• **id**: `string` = `null`

The `id` property is a string that represents the unique identifier of a node. It is used to
uniquely identify a node within a project or data structure.

#### Implementation of

[IListChild](../interfaces/IListChild.md).[id](../interfaces/IListChild.md#id)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/list-node.ts:20](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/list-node.ts#L20)

___

### link

• **link**: `any`[] = `[]`

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/list-node.ts:19](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/list-node.ts#L19)

___

### name

• **name**: `string` = `null`

The `name` property is a string that represents the name of a node. It is used to identify and
provide a descriptive name for the node.

#### Implementation of

[IListChild](../interfaces/IListChild.md).[name](../interfaces/IListChild.md#name)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/list-node.ts:18](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/list-node.ts#L18)

___

### token

• **token**: `string` = `null`

The `type` property in the `INode` interface is used to specify the type of the node. It is of type
`TNodeType`, which is a custom type defined elsewhere in the code. The `TNodeType` type is used to
define the possible values for the `type` property, such as 'requirement', 'test', 'structure',
'material', 'work', 'deliverable', 'order', and 'project'. By specifying the type of the node, it
becomes easier to identify and categorize different nodes in the project.

#### Implementation of

[IListChild](../interfaces/IListChild.md).[token](../interfaces/IListChild.md#token)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/list-node.ts:22](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/list-node.ts#L22)

___

### type

• **type**: [`NodeType`](../modules.md#nodetype) = `null`

The `type` property in the `INode` interface is used to specify the type of the node. It is of type
`TNodeType`, which is a custom type defined elsewhere in the code. The `TNodeType` type is used to
define the possible values for the `type` property, such as 'requirement', 'test', 'structure',
'material', 'work', 'deliverable', 'order', and 'project'. By specifying the type of the node, it
becomes easier to identify and categorize different nodes in the project.

#### Implementation of

[IListChild](../interfaces/IListChild.md).[type](../interfaces/IListChild.md#type)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/list-node.ts:21](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/list-node.ts#L21)

## Accessors

### list

• `get` **list**(): [`_list`](list.md)

#### Returns

[`_list`](list.md)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/list-node.ts:15](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/list-node.ts#L15)

___

### project

• `get` **project**(): [`ProxyProjectInstance`](../modules.md#proxyprojectinstance)

#### Returns

[`ProxyProjectInstance`](../modules.md#proxyprojectinstance)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/list-node.ts:16](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/list-node.ts#L16)

___

### structureToken

• `get` **structureToken**(): `string`

#### Returns

`string`

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/list-node.ts:30](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/list-node.ts#L30)
