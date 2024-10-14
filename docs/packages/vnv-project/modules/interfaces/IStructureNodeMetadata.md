[@infrasoftbe/infrasoft-project](../README.md) / [Exports](../modules.md) / IStructureNodeMetadata

# Interface: IStructureNodeMetadata

Describing the metadata present in all the nodes of a project.

## Hierarchy

- [`IMeta`](IMeta.md)

  ↳ **`IStructureNodeMetadata`**

  ↳↳ [`IListNodeMetadata`](IListNodeMetadata.md)

## Implemented by

- [`_structureMetadata`](../classes/structureMetadata.md)

## Table of contents

### Properties

- [children](IStructureNodeMetadata.md#children)
- [default](IStructureNodeMetadata.md#default)
- [description](IStructureNodeMetadata.md#description)
- [external](IStructureNodeMetadata.md#external)
- [path](IStructureNodeMetadata.md#path)
- [ref\_extern](IStructureNodeMetadata.md#ref_extern)
- [type](IStructureNodeMetadata.md#type)
- [views](IStructureNodeMetadata.md#views)

### Methods

- [shema](IStructureNodeMetadata.md#shema)

## Properties

### children

• **children**: `Map`\<`string`, [`StructuralNode`](../modules.md#structuralnode)\>

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/structure.ts:7](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/structure.ts#L7)

___

### default

• **default**: `boolean`

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

[IMeta](IMeta.md).[description](IMeta.md#description)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:120](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L120)

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

`ref_extern` property is used to store a reference to an external system, which can be an id or token.

#### Inherited from

[IMeta](IMeta.md).[ref_extern](IMeta.md#ref_extern)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:122](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L122)

___

### type

• **type**: [`NodeType`](../modules.md#nodetype)

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

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/structure.ts:8](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/structure.ts#L8)

## Methods

### shema

▸ **shema**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Inherited from

[IMeta](IMeta.md).[shema](IMeta.md#shema)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:128](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L128)
