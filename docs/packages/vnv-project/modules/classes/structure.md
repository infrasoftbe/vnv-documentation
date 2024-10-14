[@infrasoftbe/infrasoft-project](../README.md) / [Exports](../modules.md) / \_structure

# Class: \_structure

The Structure class represents a node structure and provides methods for manipulating and querying
the structure.

## Hierarchy

- [`_node`](node.md)\<``"structure"``\>

  ↳ **`_structure`**

  ↳↳ [`_list`](list.md)

## Implements

- [`IStructure`](../interfaces/IStructure.md)

## Table of contents

### Constructors

- [constructor](structure.md#constructor)

### Properties

- [create\_dt](structure.md#create_dt)
- [id](structure.md#id)
- [name](structure.md#name)
- [project](structure.md#project)
- [token](structure.md#token)
- [type](structure.md#type)
- [update\_dt](structure.md#update_dt)
- [userGroup](structure.md#usergroup)

### Accessors

- [addNode](structure.md#addnode)
- [delete](structure.md#delete)
- [deleteNode](structure.md#deletenode)
- [flatv1](structure.md#flatv1)
- [flatv2](structure.md#flatv2)
- [forNodes](structure.md#fornodes)
- [forRelationships](structure.md#forrelationships)
- [fromNodes](structure.md#fromnodes)
- [fromRelationships](structure.md#fromrelationships)
- [getChildByToken](structure.md#getchildbytoken)
- [getMetadata](structure.md#getmetadata)
- [hasNode](structure.md#hasnode)
- [inNodes](structure.md#innodes)
- [inRelationships](structure.md#inrelationships)
- [jsonReady](structure.md#jsonready)
- [nestedv1](structure.md#nestedv1)
- [nestedv2](structure.md#nestedv2)
- [outNodes](structure.md#outnodes)
- [outRelationships](structure.md#outrelationships)
- [queryNodeAll](structure.md#querynodeall)
- [setMetadata](structure.md#setmetadata)
- [setNode](structure.md#setnode)
- [update](structure.md#update)

### Methods

- [flat](structure.md#flat)
- [json](structure.md#json)
- [linkFor](structure.md#linkfor)
- [linkFrom](structure.md#linkfrom)
- [linkTo](structure.md#linkto)
- [setMetaDataKey](structure.md#setmetadatakey)
- [shema](structure.md#shema)

## Constructors

### constructor

• **new _structure**(`options`, `project?`): [`_structure`](structure.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IStructureInitOptions`](../interfaces/IStructureInitOptions.md) |
| `project?` | [`ProxyProjectInstance`](../modules.md#proxyprojectinstance) |

#### Returns

[`_structure`](structure.md)

#### Overrides

[_node](node.md).[constructor](node.md#constructor)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure.ts:46](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure.ts#L46)

## Properties

### create\_dt

• **create\_dt**: `number`

Node creation date time

#### Implementation of

[IStructure](../interfaces/IStructure.md).[create_dt](../interfaces/IStructure.md#create_dt)

#### Overrides

[_node](node.md).[create_dt](node.md#create_dt)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure.ts:42](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure.ts#L42)

___

### id

• **id**: `string`

Node Id

#### Implementation of

[IStructure](../interfaces/IStructure.md).[id](../interfaces/IStructure.md#id)

#### Overrides

[_node](node.md).[id](node.md#id)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure.ts:39](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure.ts#L39)

___

### name

• **name**: `string`

Node name

#### Implementation of

[IStructure](../interfaces/IStructure.md).[name](../interfaces/IStructure.md#name)

#### Overrides

[_node](node.md).[name](node.md#name)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure.ts:41](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure.ts#L41)

___

### project

• **project**: [`ProxyProjectInstance`](../modules.md#proxyprojectinstance)

#### Inherited from

[_node](node.md).[project](node.md#project)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:32](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L32)

___

### token

• **token**: `string`

Node token

#### Implementation of

[IStructure](../interfaces/IStructure.md).[token](../interfaces/IStructure.md#token)

#### Overrides

[_node](node.md).[token](node.md#token)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure.ts:40](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure.ts#L40)

___

### type

• **type**: ``"structure"``

Node type

#### Implementation of

[IStructure](../interfaces/IStructure.md).[type](../interfaces/IStructure.md#type)

#### Overrides

[_node](node.md).[type](node.md#type)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure.ts:38](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure.ts#L38)

___

### update\_dt

• **update\_dt**: `number`

Node update date time

#### Implementation of

[IStructure](../interfaces/IStructure.md).[update_dt](../interfaces/IStructure.md#update_dt)

#### Overrides

[_node](node.md).[update_dt](node.md#update_dt)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure.ts:43](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure.ts#L43)

___

### userGroup

• **userGroup**: `string`[] = `[]`

#### Implementation of

[IStructure](../interfaces/IStructure.md).[userGroup](../interfaces/IStructure.md#usergroup)

#### Inherited from

[_node](node.md).[userGroup](node.md#usergroup)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:40](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L40)

## Accessors

### addNode

• `get` **addNode**(): (`node`: [`StructuralNode`](../modules.md#structuralnode)) => [[`Operation`](Operation.md)\<`any`, `OperationReference`\>, [`StructuralNode`](../modules.md#structuralnode)]

#### Returns

`fn`

▸ (`node`): [[`Operation`](Operation.md)\<`any`, `OperationReference`\>, [`StructuralNode`](../modules.md#structuralnode)]

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`StructuralNode`](../modules.md#structuralnode) |

##### Returns

[[`Operation`](Operation.md)\<`any`, `OperationReference`\>, [`StructuralNode`](../modules.md#structuralnode)]

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure.ts:80](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure.ts#L80)

___

### delete

• `get` **delete**(): (`token`: `string`) => [`DeleteResult`](../modules.md#deleteresult)

#### Returns

`fn`

▸ (`token`): [`DeleteResult`](../modules.md#deleteresult)

##### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

##### Returns

[`DeleteResult`](../modules.md#deleteresult)

#### Inherited from

\_node.delete

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:71](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L71)

___

### deleteNode

• `get` **deleteNode**(): (`nodeToken`: `string`) => [[`Operation`](Operation.md)\<`any`, `OperationReference`\>, `boolean`]

#### Returns

`fn`

▸ (`nodeToken`): [[`Operation`](Operation.md)\<`any`, `OperationReference`\>, `boolean`]

##### Parameters

| Name | Type |
| :------ | :------ |
| `nodeToken` | `string` |

##### Returns

[[`Operation`](Operation.md)\<`any`, `OperationReference`\>, `boolean`]

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure.ts:83](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure.ts#L83)

___

### flatv1

• `get` **flatv1**(): (`fromNodeToken?`: `string`) => [`FlatStructureV1`](../modules.md#flatstructurev1)

#### Returns

`fn`

▸ (`fromNodeToken?`): [`FlatStructureV1`](../modules.md#flatstructurev1)

##### Parameters

| Name | Type |
| :------ | :------ |
| `fromNodeToken?` | `string` |

##### Returns

[`FlatStructureV1`](../modules.md#flatstructurev1)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure.ts:153](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure.ts#L153)

___

### flatv2

• `get` **flatv2**(): (`fromNodeToken?`: `string`) => `FlatStructureV2Node`[]

#### Returns

`fn`

▸ (`fromNodeToken?`): `FlatStructureV2Node`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `fromNodeToken?` | `string` |

##### Returns

`FlatStructureV2Node`[]

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure.ts:154](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure.ts#L154)

___

### forNodes

• `get` **forNodes**(): ([`StructuralNode`](../modules.md#structuralnode) \| [`Node`](../modules.md#node))[]

#### Returns

([`StructuralNode`](../modules.md#structuralnode) \| [`Node`](../modules.md#node))[]

#### Inherited from

\_node.forNodes

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:68](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L68)

___

### forRelationships

• `get` **forRelationships**(): [`Relation`](../modules.md#relation)[]

#### Returns

[`Relation`](../modules.md#relation)[]

#### Inherited from

\_node.forRelationships

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:62](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L62)

___

### fromNodes

• `get` **fromNodes**(): ([`StructuralNode`](../modules.md#structuralnode) \| [`Node`](../modules.md#node))[]

#### Returns

([`StructuralNode`](../modules.md#structuralnode) \| [`Node`](../modules.md#node))[]

#### Inherited from

\_node.fromNodes

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:67](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L67)

___

### fromRelationships

• `get` **fromRelationships**(): [`Relation`](../modules.md#relation)[]

#### Returns

[`Relation`](../modules.md#relation)[]

#### Inherited from

\_node.fromRelationships

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:61](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L61)

___

### getChildByToken

• `get` **getChildByToken**(): (`nodeId`: `string`) => [`IStructureChild`](../interfaces/IStructureChild.md)

#### Returns

`fn`

▸ (`nodeId`): [`IStructureChild`](../interfaces/IStructureChild.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | `string` |

##### Returns

[`IStructureChild`](../interfaces/IStructureChild.md)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure.ts:85](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure.ts#L85)

___

### getMetadata

• `get` **getMetadata**(): () => [`MetadataConstructorMap`](../modules.md#metadataconstructormap)[`Type`]

#### Returns

`fn`

▸ (): [`MetadataConstructorMap`](../modules.md#metadataconstructormap)[`Type`]

##### Returns

[`MetadataConstructorMap`](../modules.md#metadataconstructormap)[`Type`]

#### Inherited from

\_node.getMetadata

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:42](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L42)

___

### hasNode

• `get` **hasNode**(): (`nodeToken`: `string`) => `boolean`

#### Returns

`fn`

▸ (`nodeToken`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `nodeToken` | `string` |

##### Returns

`boolean`

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure.ts:82](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure.ts#L82)

___

### inNodes

• `get` **inNodes**(): ([`StructuralNode`](../modules.md#structuralnode) \| [`Node`](../modules.md#node))[]

#### Returns

([`StructuralNode`](../modules.md#structuralnode) \| [`Node`](../modules.md#node))[]

#### Inherited from

\_node.inNodes

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:64](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L64)

___

### inRelationships

• `get` **inRelationships**(): [`Relation`](../modules.md#relation)[]

#### Returns

[`Relation`](../modules.md#relation)[]

#### Inherited from

\_node.inRelationships

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:58](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L58)

___

### jsonReady

• `get` **jsonReady**(): [`IStructureInitOptions`](../interfaces/IStructureInitOptions.md)

The function returns a JSON-ready object with the properties of the current object.

#### Returns

[`IStructureInitOptions`](../interfaces/IStructureInitOptions.md)

an object with the following properties:

#### Overrides

\_node.jsonReady

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure.ts:65](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure.ts#L65)

___

### nestedv1

• `get` **nestedv1**(): () => `any`

#### Returns

`fn`

▸ (): `any`

##### Returns

`any`

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure.ts:150](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure.ts#L150)

___

### nestedv2

• `get` **nestedv2**(): \<T\>(`start_token?`: `string`, `binder?`: (`node`: [`StructuralNode`](../modules.md#structuralnode)) => `T`) => `NestedStructureResult`\<`T`\>[]

#### Returns

`fn`

▸ \<`T`\>(`start_token?`, `binder?`): `NestedStructureResult`\<`T`\>[]

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`StructuralNode`](../modules.md#structuralnode) = [`StructuralNode`](../modules.md#structuralnode) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `start_token?` | `string` |
| `binder?` | (`node`: [`StructuralNode`](../modules.md#structuralnode)) => `T` |

##### Returns

`NestedStructureResult`\<`T`\>[]

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure.ts:151](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure.ts#L151)

___

### outNodes

• `get` **outNodes**(): ([`StructuralNode`](../modules.md#structuralnode) \| [`Node`](../modules.md#node))[]

#### Returns

([`StructuralNode`](../modules.md#structuralnode) \| [`Node`](../modules.md#node))[]

#### Inherited from

\_node.outNodes

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:65](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L65)

___

### outRelationships

• `get` **outRelationships**(): [`Relation`](../modules.md#relation)[]

#### Returns

[`Relation`](../modules.md#relation)[]

#### Inherited from

\_node.outRelationships

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:59](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L59)

___

### queryNodeAll

• `get` **queryNodeAll**(): (`query`: [`StructuralNode`](../modules.md#structuralnode)) => [`StructuralNode`](../modules.md#structuralnode)[]

#### Returns

`fn`

▸ (`query`): [`StructuralNode`](../modules.md#structuralnode)[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`StructuralNode`](../modules.md#structuralnode) |

##### Returns

[`StructuralNode`](../modules.md#structuralnode)[]

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure.ts:84](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure.ts#L84)

___

### setMetadata

• `get` **setMetadata**(): (`meta`: [`MetadataConstructorMap`](../modules.md#metadataconstructormap)[`Type`]) => `void`

#### Returns

`fn`

▸ (`meta`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `meta` | [`MetadataConstructorMap`](../modules.md#metadataconstructormap)[`Type`] |

##### Returns

`void`

#### Inherited from

\_node.setMetadata

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:43](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L43)

___

### setNode

• `get` **setNode**(): (`node`: [`StructuralNode`](../modules.md#structuralnode)) => [[`Operation`](Operation.md)\<`any`, `OperationReference`\>, [`StructuralNode`](../modules.md#structuralnode)]

#### Returns

`fn`

▸ (`node`): [[`Operation`](Operation.md)\<`any`, `OperationReference`\>, [`StructuralNode`](../modules.md#structuralnode)]

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`StructuralNode`](../modules.md#structuralnode) |

##### Returns

[[`Operation`](Operation.md)\<`any`, `OperationReference`\>, [`StructuralNode`](../modules.md#structuralnode)]

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure.ts:81](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure.ts#L81)

___

### update

• `get` **update**(): (`node`: [`Node`](../modules.md#node)) => [`NodeCreationResult`](../modules.md#nodecreationresult)

#### Returns

`fn`

▸ (`node`): [`NodeCreationResult`](../modules.md#nodecreationresult)

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules.md#node) |

##### Returns

[`NodeCreationResult`](../modules.md#nodecreationresult)

#### Inherited from

\_node.update

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:70](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L70)

## Methods

### flat

▸ **flat**(): `Record`\<`string`, `unknown`\>

#### Returns

`Record`\<`string`, `unknown`\>

#### Inherited from

[_node](node.md).[flat](node.md#flat)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:219](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L219)

___

### json

▸ **json**(): [`_structure`](structure.md) & \{ `meta`: [`IStructureNodeMetadata`](../interfaces/IStructureNodeMetadata.md)  }

#### Returns

[`_structure`](structure.md) & \{ `meta`: [`IStructureNodeMetadata`](../interfaces/IStructureNodeMetadata.md)  }

#### Inherited from

[_node](node.md).[json](node.md#json)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:217](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L217)

___

### linkFor

▸ **linkFor**(`forNodeToken`): [`RelationCreationResult`](../modules.md#relationcreationresult)

Define link from this node is for node

Will produce a link `IS_{{node.type}}_FOR`

#### Parameters

| Name | Type |
| :------ | :------ |
| `forNodeToken` | `string` |

#### Returns

[`RelationCreationResult`](../modules.md#relationcreationresult)

#### Inherited from

[_node](node.md).[linkFor](node.md#linkfor)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:170](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L170)

___

### linkFrom

▸ **linkFrom**(`fromNodeToken`): [`RelationCreationResult`](../modules.md#relationcreationresult)

Define link from parent to this node

Will produce a link `HAS_{{parent_node.type}}`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fromNodeToken` | `string` |

#### Returns

[`RelationCreationResult`](../modules.md#relationcreationresult)

#### Inherited from

[_node](node.md).[linkFrom](node.md#linkfrom)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:82](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L82)

___

### linkTo

▸ **linkTo**(`toNodeToken`): [`RelationCreationResult`](../modules.md#relationcreationresult)

Define link from this node to children node

Will produce a link `HAS_{{this_node.type}}`

#### Parameters

| Name | Type |
| :------ | :------ |
| `toNodeToken` | `string` |

#### Returns

[`RelationCreationResult`](../modules.md#relationcreationresult)

#### Inherited from

[_node](node.md).[linkTo](node.md#linkto)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:126](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L126)

___

### setMetaDataKey

▸ **setMetaDataKey**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

[_node](node.md).[setMetaDataKey](node.md#setmetadatakey)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:213](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L213)

___

### shema

▸ **shema**(): [`JSONSchema3or4`](../interfaces/JSONSchema3or4.md)

#### Returns

[`JSONSchema3or4`](../interfaces/JSONSchema3or4.md)

#### Overrides

[_node](node.md).[shema](node.md#shema)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure.ts:78](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure.ts#L78)
