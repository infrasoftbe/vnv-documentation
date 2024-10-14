[@infrasoftbe/infrasoft-project](../README.md) / [Exports](../modules.md) / IListNodeMetadata

# Interface: IListNodeMetadata

Describing the metadata present in all the nodes of a project.

## Hierarchy

- [`IStructureNodeMetadata`](IStructureNodeMetadata.md)

  ↳ **`IListNodeMetadata`**

## Implemented by

- [`_listMetadata`](../classes/listMetadata.md)

## Table of contents

### Properties

- [children](IListNodeMetadata.md#children)
- [default](IListNodeMetadata.md#default)
- [description](IListNodeMetadata.md#description)
- [external](IListNodeMetadata.md#external)
- [path](IListNodeMetadata.md#path)
- [ref\_extern](IListNodeMetadata.md#ref_extern)
- [type](IListNodeMetadata.md#type)
- [views](IListNodeMetadata.md#views)

### Methods

- [shema](IListNodeMetadata.md#shema)

## Properties

### children

• **children**: `Map`\<`string`, [`StructuralNode`](../modules.md#structuralnode)\>

#### Inherited from

[IStructureNodeMetadata](IStructureNodeMetadata.md).[children](IStructureNodeMetadata.md#children)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/structure.ts:7](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/structure.ts#L7)

___

### default

• **default**: `boolean`

#### Inherited from

[IStructureNodeMetadata](IStructureNodeMetadata.md).[default](IStructureNodeMetadata.md#default)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/structure.ts:16](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/structure.ts#L16)

___

### description

• **description**: `string`

The `description` property is used to store a string that provides a description or additional
information about a particular entity. It is commonly used in metadata interfaces to provide a
description of the entity being described. For example, in the `IMetadata` interface, the
`description` property is used to describe the metadata of a node, such as a requirement, test, or
structure.

#### Inherited from

[IStructureNodeMetadata](IStructureNodeMetadata.md).[description](IStructureNodeMetadata.md#description)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:120](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L120)

___

### external

• **external**: [`ExternalDigitalPlatform`](../modules.md#externaldigitalplatform)

#### Inherited from

[IStructureNodeMetadata](IStructureNodeMetadata.md).[external](IStructureNodeMetadata.md#external)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:126](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L126)

___

### path

• **path**: `string`[]

#### Inherited from

[IStructureNodeMetadata](IStructureNodeMetadata.md).[path](IStructureNodeMetadata.md#path)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:124](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L124)

___

### ref\_extern

• **ref\_extern**: `string`

`ref_extern` property is used to store a reference to an external system, which can be an id or token.

#### Inherited from

[IStructureNodeMetadata](IStructureNodeMetadata.md).[ref_extern](IStructureNodeMetadata.md#ref_extern)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:122](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L122)

___

### type

• **type**: [`NodeType`](../modules.md#nodetype)

#### Inherited from

[IStructureNodeMetadata](IStructureNodeMetadata.md).[type](IStructureNodeMetadata.md#type)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/structure.ts:15](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/structure.ts#L15)

___

### views

• **views**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bubble` | ``null`` |
| `forceDirectedTree` | ``null`` |
| `listView` | \{ `fields`: `never`  } |
| `listView.fields` | `never` |

#### Inherited from

[IStructureNodeMetadata](IStructureNodeMetadata.md).[views](IStructureNodeMetadata.md#views)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/structure.ts:8](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/structure.ts#L8)

## Methods

### shema

▸ **shema**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Inherited from

[IStructureNodeMetadata](IStructureNodeMetadata.md).[shema](IStructureNodeMetadata.md#shema)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:128](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L128)
