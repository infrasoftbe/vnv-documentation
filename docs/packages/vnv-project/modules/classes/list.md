[@infrasoftbe/infrasoft-project](../README.md) / [Exports](../modules.md) / \_list

# Class: \_list

The List class is a subclass of the Structure class and represents a list data structure.

## Hierarchy

- [`_structure`](structure.md)

  ↳ **`_list`**

## Implements

- [`IList`](../interfaces/IList.md)

## Table of contents

### Constructors

- [constructor](list.md#constructor)

### Properties

- [create\_dt](list.md#create_dt)
- [id](list.md#id)
- [name](list.md#name)
- [project](list.md#project)
- [token](list.md#token)
- [type](list.md#type)
- [update\_dt](list.md#update_dt)
- [userGroup](list.md#usergroup)

### Accessors

- [addNode](list.md#addnode)
- [delete](list.md#delete)
- [deleteNode](list.md#deletenode)
- [flatv1](list.md#flatv1)
- [flatv2](list.md#flatv2)
- [forNodes](list.md#fornodes)
- [forRelationships](list.md#forrelationships)
- [fromNodes](list.md#fromnodes)
- [fromRelationships](list.md#fromrelationships)
- [getChildByToken](list.md#getchildbytoken)
- [getMetadata](list.md#getmetadata)
- [hasNode](list.md#hasnode)
- [inNodes](list.md#innodes)
- [inRelationships](list.md#inrelationships)
- [jsonReady](list.md#jsonready)
- [nestedv1](list.md#nestedv1)
- [nestedv2](list.md#nestedv2)
- [outNodes](list.md#outnodes)
- [outRelationships](list.md#outrelationships)
- [queryNodeAll](list.md#querynodeall)
- [setMetadata](list.md#setmetadata)
- [setNode](list.md#setnode)
- [update](list.md#update)

### Methods

- [flat](list.md#flat)
- [json](list.md#json)
- [linkFor](list.md#linkfor)
- [linkFrom](list.md#linkfrom)
- [linkTo](list.md#linkto)
- [setMetaDataKey](list.md#setmetadatakey)
- [shema](list.md#shema)

## Constructors

### constructor

• **new _list**(`options`, `project?`): [`_list`](list.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IListInitOptions`](../interfaces/IListInitOptions.md) |
| `project?` | [`ProxyProjectInstance`](../modules.md#proxyprojectinstance) |

#### Returns

[`_list`](list.md)

#### Overrides

[_structure](structure.md).[constructor](structure.md#constructor)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/list.ts:23](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/list.ts#L23)

## Properties

### create\_dt

• **create\_dt**: `number`

Node creation date time

#### Implementation of

[IList](../interfaces/IList.md).[create_dt](../interfaces/IList.md#create_dt)

#### Overrides

[_structure](structure.md).[create_dt](structure.md#create_dt)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/list.ts:20](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/list.ts#L20)

___

### id

• **id**: `string`

Node Id

#### Implementation of

[IList](../interfaces/IList.md).[id](../interfaces/IList.md#id)

#### Overrides

[_structure](structure.md).[id](structure.md#id)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/list.ts:17](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/list.ts#L17)

___

### name

• **name**: `string`

Node name

#### Implementation of

[IList](../interfaces/IList.md).[name](../interfaces/IList.md#name)

#### Overrides

[_structure](structure.md).[name](structure.md#name)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/list.ts:18](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/list.ts#L18)

___

### project

• **project**: [`ProxyProjectInstance`](../modules.md#proxyprojectinstance)

#### Inherited from

[_structure](structure.md).[project](structure.md#project)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:32](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L32)

___

### token

• **token**: `string`

Node token

#### Implementation of

[IList](../interfaces/IList.md).[token](../interfaces/IList.md#token)

#### Overrides

[_structure](structure.md).[token](structure.md#token)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/list.ts:19](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/list.ts#L19)

___

### type

• **type**: `any`

Node type

#### Implementation of

[IList](../interfaces/IList.md).[type](../interfaces/IList.md#type)

#### Overrides

[_structure](structure.md).[type](structure.md#type)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/list.ts:16](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/list.ts#L16)

___

### update\_dt

• **update\_dt**: `number`

Node update date time

#### Implementation of

[IList](../interfaces/IList.md).[update_dt](../interfaces/IList.md#update_dt)

#### Overrides

[_structure](structure.md).[update_dt](structure.md#update_dt)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/list.ts:21](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/list.ts#L21)

___

### userGroup

• **userGroup**: `string`[] = `[]`

#### Implementation of

[IList](../interfaces/IList.md).[userGroup](../interfaces/IList.md#usergroup)

#### Inherited from

[_structure](structure.md).[userGroup](structure.md#usergroup)

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

#### Overrides

\_structure.addNode

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/list.ts:27](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/list.ts#L27)

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

\_structure.delete

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

#### Inherited from

\_structure.deleteNode

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

#### Inherited from

\_structure.flatv1

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

#### Inherited from

\_structure.flatv2

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure.ts:154](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure.ts#L154)

___

### forNodes

• `get` **forNodes**(): ([`StructuralNode`](../modules.md#structuralnode) \| [`Node`](../modules.md#node))[]

#### Returns

([`StructuralNode`](../modules.md#structuralnode) \| [`Node`](../modules.md#node))[]

#### Inherited from

\_structure.forNodes

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:68](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L68)

___

### forRelationships

• `get` **forRelationships**(): [`Relation`](../modules.md#relation)[]

#### Returns

[`Relation`](../modules.md#relation)[]

#### Inherited from

\_structure.forRelationships

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:62](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L62)

___

### fromNodes

• `get` **fromNodes**(): ([`StructuralNode`](../modules.md#structuralnode) \| [`Node`](../modules.md#node))[]

#### Returns

([`StructuralNode`](../modules.md#structuralnode) \| [`Node`](../modules.md#node))[]

#### Inherited from

\_structure.fromNodes

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:67](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L67)

___

### fromRelationships

• `get` **fromRelationships**(): [`Relation`](../modules.md#relation)[]

#### Returns

[`Relation`](../modules.md#relation)[]

#### Inherited from

\_structure.fromRelationships

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

#### Inherited from

\_structure.getChildByToken

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

\_structure.getMetadata

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

#### Inherited from

\_structure.hasNode

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure.ts:82](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure.ts#L82)

___

### inNodes

• `get` **inNodes**(): ([`StructuralNode`](../modules.md#structuralnode) \| [`Node`](../modules.md#node))[]

#### Returns

([`StructuralNode`](../modules.md#structuralnode) \| [`Node`](../modules.md#node))[]

#### Inherited from

\_structure.inNodes

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:64](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L64)

___

### inRelationships

• `get` **inRelationships**(): [`Relation`](../modules.md#relation)[]

#### Returns

[`Relation`](../modules.md#relation)[]

#### Inherited from

\_structure.inRelationships

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:58](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L58)

___

### jsonReady

• `get` **jsonReady**(): [`IStructureInitOptions`](../interfaces/IStructureInitOptions.md)

The function returns a JSON-ready object with the properties of the current object.

#### Returns

[`IStructureInitOptions`](../interfaces/IStructureInitOptions.md)

an object with the following properties:

#### Inherited from

\_structure.jsonReady

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

#### Inherited from

\_structure.nestedv1

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

#### Inherited from

\_structure.nestedv2

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure.ts:151](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure.ts#L151)

___

### outNodes

• `get` **outNodes**(): ([`StructuralNode`](../modules.md#structuralnode) \| [`Node`](../modules.md#node))[]

#### Returns

([`StructuralNode`](../modules.md#structuralnode) \| [`Node`](../modules.md#node))[]

#### Inherited from

\_structure.outNodes

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:65](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L65)

___

### outRelationships

• `get` **outRelationships**(): [`Relation`](../modules.md#relation)[]

#### Returns

[`Relation`](../modules.md#relation)[]

#### Inherited from

\_structure.outRelationships

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

#### Inherited from

\_structure.queryNodeAll

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

\_structure.setMetadata

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

#### Overrides

\_structure.setNode

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/list.ts:28](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/list.ts#L28)

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

\_structure.update

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:70](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L70)

## Methods

### flat

▸ **flat**(): `Record`\<`string`, `unknown`\>

#### Returns

`Record`\<`string`, `unknown`\>

#### Inherited from

[_structure](structure.md).[flat](structure.md#flat)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:219](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L219)

___

### json

▸ **json**(): [`_list`](list.md) & \{ `meta`: [`IStructureNodeMetadata`](../interfaces/IStructureNodeMetadata.md)  }

#### Returns

[`_list`](list.md) & \{ `meta`: [`IStructureNodeMetadata`](../interfaces/IStructureNodeMetadata.md)  }

#### Inherited from

[_structure](structure.md).[json](structure.md#json)

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

[_structure](structure.md).[linkFor](structure.md#linkfor)

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

[_structure](structure.md).[linkFrom](structure.md#linkfrom)

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

[_structure](structure.md).[linkTo](structure.md#linkto)

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

[_structure](structure.md).[setMetaDataKey](structure.md#setmetadatakey)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:213](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L213)

___

### shema

▸ **shema**(): [`JSONSchema3or4`](../interfaces/JSONSchema3or4.md)

#### Returns

[`JSONSchema3or4`](../interfaces/JSONSchema3or4.md)

#### Inherited from

[_structure](structure.md).[shema](structure.md#shema)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/structure.ts:78](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/structure.ts#L78)
