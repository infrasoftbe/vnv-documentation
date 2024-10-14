[@infrasoftbe/infrasoft-project](../README.md) / [Exports](../modules.md) / \_structureChild

# Class: \_structureChild

The StructuralNode class is a TypeScript class that represents a structural node ( structure_child ) with properties
such as name, link, id, type, token, and child.

## Implements

- [`IStructureChild`](../interfaces/IStructureChild.md)

## Table of contents

### Constructors

- [constructor](structureChild.md#constructor)

### Properties

- [#\_structure\_instance](structureChild.md##_structure_instance)
- [child](structureChild.md#child)
- [id](structureChild.md#id)
- [name](structureChild.md#name)
- [token](structureChild.md#token)
- [type](structureChild.md#type)

### Accessors

- [link](structureChild.md#link)
- [project](structureChild.md#project)
- [structure](structureChild.md#structure)
- [structureToken](structureChild.md#structuretoken)

## Constructors

### constructor

• **new _structureChild**(`options?`, `structure?`): [`_structureChild`](structureChild.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IStructureChild`](../interfaces/IStructureChild.md) |
| `structure?` | [`_structure`](structure.md) |

#### Returns

[`_structureChild`](structureChild.md)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure-node.ts:56](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure-node.ts#L56)

## Properties

### #\_structure\_instance

• `Private` **#\_structure\_instance**: [`_structure`](structure.md) = `null`

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure-node.ts:42](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure-node.ts#L42)

___

### child

• **child**: `string` = `null`

The `child` property in the `IStructuralNode` interface is used to store the ID of the child node
that is connected to the current node. It represents the relationship between the parent node and
the child node in a data structure. By storing the ID of the child node, it becomes easier to
navigate and access the child nodes from the parent node.

#### Implementation of

[IStructureChild](../interfaces/IStructureChild.md).[child](../interfaces/IStructureChild.md#child)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure-node.ts:54](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure-node.ts#L54)

___

### id

• **id**: `string` = `null`

The `id` property is a string that represents the unique identifier of a node. It is used to
uniquely identify a node within a project or data structure.

#### Implementation of

[IStructureChild](../interfaces/IStructureChild.md).[id](../interfaces/IStructureChild.md#id)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure-node.ts:51](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure-node.ts#L51)

___

### name

• **name**: `string` = `null`

The `name` property is a string that represents the name of a node. It is used to identify and
provide a descriptive name for the node.

#### Implementation of

[IStructureChild](../interfaces/IStructureChild.md).[name](../interfaces/IStructureChild.md#name)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure-node.ts:46](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure-node.ts#L46)

___

### token

• **token**: `string` = `null`

The `type` property in the `INode` interface is used to specify the type of the node. It is of type
`TNodeType`, which is a custom type defined elsewhere in the code. The `TNodeType` type is used to
define the possible values for the `type` property, such as 'requirement', 'test', 'structure',
'material', 'work', 'deliverable', 'order', and 'project'. By specifying the type of the node, it
becomes easier to identify and categorize different nodes in the project.

#### Implementation of

[IStructureChild](../interfaces/IStructureChild.md).[token](../interfaces/IStructureChild.md#token)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure-node.ts:53](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure-node.ts#L53)

___

### type

• **type**: [`NodeType`](../modules.md#nodetype) = `null`

The `type` property in the `INode` interface is used to specify the type of the node. It is of type
`TNodeType`, which is a custom type defined elsewhere in the code. The `TNodeType` type is used to
define the possible values for the `type` property, such as 'requirement', 'test', 'structure',
'material', 'work', 'deliverable', 'order', and 'project'. By specifying the type of the node, it
becomes easier to identify and categorize different nodes in the project.

#### Implementation of

[IStructureChild](../interfaces/IStructureChild.md).[type](../interfaces/IStructureChild.md#type)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure-node.ts:52](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure-node.ts#L52)

## Accessors

### link

• `get` **link**(): [`Relation`](../modules.md#relation)[]

#### Returns

[`Relation`](../modules.md#relation)[]

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure-node.ts:47](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure-node.ts#L47)

___

### project

• `get` **project**(): [`ProxyProjectInstance`](../modules.md#proxyprojectinstance)

#### Returns

[`ProxyProjectInstance`](../modules.md#proxyprojectinstance)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure-node.ts:44](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure-node.ts#L44)

___

### structure

• `get` **structure**(): [`_structure`](structure.md)

#### Returns

[`_structure`](structure.md)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure-node.ts:43](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure-node.ts#L43)

___

### structureToken

• `get` **structureToken**(): `string`

#### Returns

`string`

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure-node.ts:62](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure-node.ts#L62)
