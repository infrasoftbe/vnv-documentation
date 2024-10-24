[@infrasoftbe/infrasoft-project](../README.md) / [Exports](../modules.md) / \_structureMetadata

# Class: \_structureMetadata

The StructureMetaData class represents metadata for a structure, including a description, child
elements, and links.

## Hierarchy

- [`_meta`](meta.md)

  ↳ **`_structureMetadata`**

  ↳↳ [`_listMetadata`](listMetadata.md)

## Implements

- [`IStructureNodeMetadata`](../interfaces/IStructureNodeMetadata.md)

## Table of contents

### Constructors

- [constructor](structureMetadata.md#constructor)

### Properties

- [children](structureMetadata.md#children)
- [default](structureMetadata.md#default)
- [description](structureMetadata.md#description)
- [external](structureMetadata.md#external)
- [path](structureMetadata.md#path)
- [ref\_extern](structureMetadata.md#ref_extern)
- [status](structureMetadata.md#status)
- [type](structureMetadata.md#type)
- [views](structureMetadata.md#views)

### Accessors

- [jsonReady](structureMetadata.md#jsonready)
- [schema](structureMetadata.md#schema)

### Methods

- [assign](structureMetadata.md#assign)
- [complete](structureMetadata.md#complete)
- [ensureMetadata](structureMetadata.md#ensuremetadata)
- [flat](structureMetadata.md#flat)
- [isValidMetadata](structureMetadata.md#isvalidmetadata)
- [validate](structureMetadata.md#validate)
- [assign](structureMetadata.md#assign-1)
- [ensureMetadata](structureMetadata.md#ensuremetadata-1)
- [filterObjectBySchema](structureMetadata.md#filterobjectbyschema)

## Constructors

### constructor

• **new _structureMetadata**(`options?`): [`_structureMetadata`](structureMetadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

[`_structureMetadata`](structureMetadata.md)

#### Overrides

[_meta](meta.md).[constructor](meta.md#constructor)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/structure.ts:34](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/structure.ts#L34)

## Properties

### children

• **children**: `Map`\<`string`, [`StructuralNode`](../modules.md#structuralnode)\>

#### Implementation of

[IStructureNodeMetadata](../interfaces/IStructureNodeMetadata.md).[children](../interfaces/IStructureNodeMetadata.md#children)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/structure.ts:23](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/structure.ts#L23)

___

### default

• **default**: `boolean` = `null`

#### Implementation of

[IStructureNodeMetadata](../interfaces/IStructureNodeMetadata.md).[default](../interfaces/IStructureNodeMetadata.md#default)

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

[IStructureNodeMetadata](../interfaces/IStructureNodeMetadata.md).[description](../interfaces/IStructureNodeMetadata.md#description)

#### Inherited from

[_meta](meta.md).[description](meta.md#description)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:135](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L135)

___

### external

• **external**: [`ExternalDigitalPlatform`](../modules.md#externaldigitalplatform)

#### Implementation of

[IStructureNodeMetadata](../interfaces/IStructureNodeMetadata.md).[external](../interfaces/IStructureNodeMetadata.md#external)

#### Inherited from

[_meta](meta.md).[external](meta.md#external)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:138](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L138)

___

### path

• **path**: `string`[] = `[]`

#### Implementation of

[IStructureNodeMetadata](../interfaces/IStructureNodeMetadata.md).[path](../interfaces/IStructureNodeMetadata.md#path)

#### Inherited from

[_meta](meta.md).[path](meta.md#path)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:163](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L163)

___

### ref\_extern

• **ref\_extern**: `string` = `''`

`ref_extern` property is used to store a reference to an external system, which can be an id or token.

#### Implementation of

[IStructureNodeMetadata](../interfaces/IStructureNodeMetadata.md).[ref_extern](../interfaces/IStructureNodeMetadata.md#ref_extern)

#### Inherited from

[_meta](meta.md).[ref_extern](meta.md#ref_extern)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:137](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L137)

___

### status

• **status**: `string` = `''`

#### Inherited from

[_meta](meta.md).[status](meta.md#status)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:136](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L136)

___

### type

• **type**: [`NodeType`](../modules.md#nodetype)

#### Implementation of

[IStructureNodeMetadata](../interfaces/IStructureNodeMetadata.md).[type](../interfaces/IStructureNodeMetadata.md#type)

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

[IStructureNodeMetadata](../interfaces/IStructureNodeMetadata.md).[views](../interfaces/IStructureNodeMetadata.md#views)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/structure.ts:24](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/structure.ts#L24)

## Accessors

### jsonReady

• `get` **jsonReady**(): `this` & \{ `children`: \{ `child`: `string` = null; `id`: `string` = null; `name`: `string` = null; `prototype`: [`_structureChild`](structureChild.md) ; `token`: `string` = null; `type`: [`NodeType`](../modules.md#nodetype) = null }[]  }

#### Returns

`this` & \{ `children`: \{ `child`: `string` = null; `id`: `string` = null; `name`: `string` = null; `prototype`: [`_structureChild`](structureChild.md) ; `token`: `string` = null; `type`: [`NodeType`](../modules.md#nodetype) = null }[]  }

#### Overrides

\_meta.jsonReady

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/structure.ts:51](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/structure.ts#L51)

___

### schema

• `get` **schema**(): [`JSONSchema3or4`](../interfaces/JSONSchema3or4.md)

#### Returns

[`JSONSchema3or4`](../interfaces/JSONSchema3or4.md)

#### Inherited from

\_meta.schema

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

[_meta](meta.md).[assign](meta.md#assign)

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

[_meta](meta.md).[complete](meta.md#complete)

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

[_meta](meta.md).[ensureMetadata](meta.md#ensuremetadata)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:205](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L205)

___

### flat

▸ **flat**(): `Record`\<`string`, `any`\>

#### Returns

`Record`\<`string`, `any`\>

#### Inherited from

[_meta](meta.md).[flat](meta.md#flat)

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

[_meta](meta.md).[isValidMetadata](meta.md#isvalidmetadata)

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

[_meta](meta.md).[validate](meta.md#validate)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:227](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L227)

___

### assign

▸ **assign**(`metadata`): [`_structureMetadata`](structureMetadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `metadata` | `Record`\<`string`, `any`\> |

#### Returns

[`_structureMetadata`](structureMetadata.md)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/structure.ts:47](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/structure.ts#L47)

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

[_meta](meta.md).[ensureMetadata](meta.md#ensuremetadata-1)

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

[_meta](meta.md).[filterObjectBySchema](meta.md#filterobjectbyschema)

#### Defined in

[packages/infrasoft-vnv-project/src/models/metadats/metadata.ts:280](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/metadats/metadata.ts#L280)
