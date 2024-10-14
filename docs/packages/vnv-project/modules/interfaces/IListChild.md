[@infrasoftbe/infrasoft-project](../README.md) / [Exports](../modules.md) / IListChild

# Interface: IListChild

The `IStructuralNode` interface defines the structure of a node in a structure. It has the following
properties:

## Hierarchy

- [`IStructureChild`](IStructureChild.md)

  ↳ **`IListChild`**

## Implemented by

- [`_listChild`](../classes/listChild.md)

## Table of contents

### Properties

- [child](IListChild.md#child)
- [id](IListChild.md#id)
- [name](IListChild.md#name)
- [token](IListChild.md#token)
- [type](IListChild.md#type)

## Properties

### child

• **child**: `string`

The `child` property in the `IStructuralNode` interface is used to store the ID of the child node
that is connected to the current node. It represents the relationship between the parent node and
the child node in a data structure. By storing the ID of the child node, it becomes easier to
navigate and access the child nodes from the parent node.

#### Inherited from

[IStructureChild](IStructureChild.md).[child](IStructureChild.md#child)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure-node.ts:34](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure-node.ts#L34)

___

### id

• **id**: `string`

The `id` property is a string that represents the unique identifier of a node. It is used to
uniquely identify a node within a project or data structure.

#### Inherited from

[IStructureChild](IStructureChild.md).[id](IStructureChild.md#id)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure-node.ts:14](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure-node.ts#L14)

___

### name

• **name**: `string`

The `name` property is a string that represents the name of a node. It is used to identify and
provide a descriptive name for the node.

#### Inherited from

[IStructureChild](IStructureChild.md).[name](IStructureChild.md#name)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure-node.ts:10](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure-node.ts#L10)

___

### token

• **token**: `string`

The `type` property in the `INode` interface is used to specify the type of the node. It is of type
`TNodeType`, which is a custom type defined elsewhere in the code. The `TNodeType` type is used to
define the possible values for the `type` property, such as 'requirement', 'test', 'structure',
'material', 'work', 'deliverable', 'order', and 'project'. By specifying the type of the node, it
becomes easier to identify and categorize different nodes in the project.

#### Inherited from

[IStructureChild](IStructureChild.md).[token](IStructureChild.md#token)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure-node.ts:28](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure-node.ts#L28)

___

### type

• **type**: [`NodeType`](../modules.md#nodetype)

The `type` property in the `INode` interface is used to specify the type of the node. It is of type
`TNodeType`, which is a custom type defined elsewhere in the code. The `TNodeType` type is used to
define the possible values for the `type` property, such as 'requirement', 'test', 'structure',
'material', 'work', 'deliverable', 'order', and 'project'. By specifying the type of the node, it
becomes easier to identify and categorize different nodes in the project.

#### Inherited from

[IStructureChild](IStructureChild.md).[type](IStructureChild.md#type)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure-node.ts:21](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure-node.ts#L21)
