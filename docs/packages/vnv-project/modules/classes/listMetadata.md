[@infrasoftbe/infrasoft-project](../README.md) / [Exports](../modules.md) / \_listMetadata

# Class: \_listMetadata

The StructureMetaData class represents metadata for a structure, including a description, child
elements, and links.

## Hierarchy

- [`_structureMetadata`](structureMetadata.md)

  ↳ **`_listMetadata`**

## Implements

- [`IListNodeMetadata`](../interfaces/IListNodeMetadata.md)

## Table of contents

### Constructors

- [constructor](listMetadata.md#constructor)

### Properties

- [children](listMetadata.md#children)
- [default](listMetadata.md#default)
- [description](listMetadata.md#description)
- [external](listMetadata.md#external)
- [path](listMetadata.md#path)
- [ref\_extern](listMetadata.md#ref_extern)
- [status](listMetadata.md#status)
- [type](listMetadata.md#type)
- [views](listMetadata.md#views)

### Accessors

- [jsonReady](listMetadata.md#jsonready)
- [schema](listMetadata.md#schema)

### Methods

- [assign](listMetadata.md#assign)
- [complete](listMetadata.md#complete)
- [ensureMetadata](listMetadata.md#ensuremetadata)
- [flat](listMetadata.md#flat)
- [isValidMetadata](listMetadata.md#isvalidmetadata)
- [validate](listMetadata.md#validate)
- [assign](listMetadata.md#assign-1)
- [ensureMetadata](listMetadata.md#ensuremetadata-1)
- [filterObjectBySchema](listMetadata.md#filterobjectbyschema)

## Constructors

### constructor

• **new _listMetadata**(`options?`): [`_listMetadata`](listMetadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

[`_listMetadata`](listMetadata.md)

#### Inherited from

[_structureMetadata](structureMetadata.md).[constructor](structureMetadata.md#constructor)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/structure.ts:34](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/structure.ts#L34)

## Properties

### children

• **children**: `Map`\<`string`, [`StructuralNode`](../modules.md#structuralnode)\>

#### Implementation of

[IListNodeMetadata](../interfaces/IListNodeMetadata.md).[children](../interfaces/IListNodeMetadata.md#children)

#### Inherited from

[_structureMetadata](structureMetadata.md).[children](structureMetadata.md#children)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/structure.ts:23](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/structure.ts#L23)

___

### default

• **default**: `boolean` = `null`

#### Implementation of

[IListNodeMetadata](../interfaces/IListNodeMetadata.md).[default](../interfaces/IListNodeMetadata.md#default)

#### Inherited from

[_structureMetadata](structureMetadata.md).[default](structureMetadata.md#default)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/structure.ts:32](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/structure.ts#L32)

___

### description

• **description**: `string` = `''`

The `description` property is used to store a string that provides a description or additional
information about a particular entity. It is commonly used in metadata interfaces to provide a
description of the entity being described. For example, in the `IMetadata` interface, the
`description` property is used to describe the metadata of a node, such as a requirement, test, or
structure.

#### Implementation of

[IListNodeMetadata](../interfaces/IListNodeMetadata.md).[description](../interfaces/IListNodeMetadata.md#description)

#### Inherited from

[_structureMetadata](structureMetadata.md).[description](structureMetadata.md#description)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:135](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L135)

___

### external

• **external**: [`ExternalDigitalPlatform`](../modules.md#externaldigitalplatform)

#### Implementation of

[IListNodeMetadata](../interfaces/IListNodeMetadata.md).[external](../interfaces/IListNodeMetadata.md#external)

#### Inherited from

[_structureMetadata](structureMetadata.md).[external](structureMetadata.md#external)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:138](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L138)

___

### path

• **path**: `string`[] = `[]`

#### Implementation of

[IListNodeMetadata](../interfaces/IListNodeMetadata.md).[path](../interfaces/IListNodeMetadata.md#path)

#### Inherited from

[_structureMetadata](structureMetadata.md).[path](structureMetadata.md#path)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:163](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L163)

___

### ref\_extern

• **ref\_extern**: `string` = `''`

`ref_extern` property is used to store a reference to an external system, which can be an id or token.

#### Implementation of

[IListNodeMetadata](../interfaces/IListNodeMetadata.md).[ref_extern](../interfaces/IListNodeMetadata.md#ref_extern)

#### Inherited from

[_structureMetadata](structureMetadata.md).[ref_extern](structureMetadata.md#ref_extern)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:137](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L137)

___

### status

• **status**: `string` = `''`

#### Inherited from

[_structureMetadata](structureMetadata.md).[status](structureMetadata.md#status)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:136](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L136)

___

### type

• **type**: [`NodeType`](../modules.md#nodetype)

#### Implementation of

[IListNodeMetadata](../interfaces/IListNodeMetadata.md).[type](../interfaces/IListNodeMetadata.md#type)

#### Inherited from

[_structureMetadata](structureMetadata.md).[type](structureMetadata.md#type)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/structure.ts:31](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/structure.ts#L31)

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

#### Implementation of

[IListNodeMetadata](../interfaces/IListNodeMetadata.md).[views](../interfaces/IListNodeMetadata.md#views)

#### Inherited from

[_structureMetadata](structureMetadata.md).[views](structureMetadata.md#views)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/structure.ts:24](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/structure.ts#L24)

## Accessors

### jsonReady

• `get` **jsonReady**(): `this` & \{ `children`: \{ `child`: `string` = null; `id`: `string` = null; `name`: `string` = null; `prototype`: [`_structureChild`](structureChild.md) ; `token`: `string` = null; `type`: [`NodeType`](../modules.md#nodetype) = null }[]  }

#### Returns

`this` & \{ `children`: \{ `child`: `string` = null; `id`: `string` = null; `name`: `string` = null; `prototype`: [`_structureChild`](structureChild.md) ; `token`: `string` = null; `type`: [`NodeType`](../modules.md#nodetype) = null }[]  }

#### Inherited from

\_structureMetadata.jsonReady

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/structure.ts:51](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/structure.ts#L51)

___

### schema

• `get` **schema**(): [`JSONSchema3or4`](../interfaces/JSONSchema3or4.md)

#### Returns

[`JSONSchema3or4`](../interfaces/JSONSchema3or4.md)

#### Inherited from

\_structureMetadata.schema

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

[_structureMetadata](structureMetadata.md).[assign](structureMetadata.md#assign)

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

[_structureMetadata](structureMetadata.md).[complete](structureMetadata.md#complete)

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

[_structureMetadata](structureMetadata.md).[ensureMetadata](structureMetadata.md#ensuremetadata)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:205](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L205)

___

### flat

▸ **flat**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Inherited from

[_structureMetadata](structureMetadata.md).[flat](structureMetadata.md#flat)

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

[_structureMetadata](structureMetadata.md).[isValidMetadata](structureMetadata.md#isvalidmetadata)

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

[_structureMetadata](structureMetadata.md).[validate](structureMetadata.md#validate)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:227](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L227)

___

### assign

▸ **assign**(`metadata`): [`_listMetadata`](listMetadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | `Record`\<`string`, `any`\> |

#### Returns

[`_listMetadata`](listMetadata.md)

#### Overrides

[_structureMetadata](structureMetadata.md).[assign](structureMetadata.md#assign-1)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/list.ts:14](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/list.ts#L14)

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

[_structureMetadata](structureMetadata.md).[ensureMetadata](structureMetadata.md#ensuremetadata-1)

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

[_structureMetadata](structureMetadata.md).[filterObjectBySchema](structureMetadata.md#filterobjectbyschema)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:280](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L280)
