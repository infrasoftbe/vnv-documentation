[@infrasoftbe/infrasoft-project](../README.md) / [Exports](../modules.md) / \_dataManager

# Class: \_dataManager

The NodeData class is responsible for managing nodes, relations, metadata, and structures in a
TypeScript project.

## Implements

- [`IDataManager`](../interfaces/IDataManager.md)

## Table of contents

### Constructors

- [constructor](dataManager.md#constructor)

### Properties

- [$\_subscribers](dataManager.md#$_subscribers)
- [lists](dataManager.md#lists)
- [meta](dataManager.md#meta)
- [nodes](dataManager.md#nodes)
- [relations](dataManager.md#relations)
- [root](dataManager.md#root)
- [structures](dataManager.md#structures)

### Accessors

- [addList](dataManager.md#addlist)
- [addMetadata](dataManager.md#addmetadata)
- [addNode](dataManager.md#addnode)
- [addRelation](dataManager.md#addrelation)
- [addStructure](dataManager.md#addstructure)
- [deletList](dataManager.md#deletlist)
- [deleteMetadata](dataManager.md#deletemetadata)
- [deleteNode](dataManager.md#deletenode)
- [deleteRelation](dataManager.md#deleterelation)
- [deleteStrucure](dataManager.md#deletestrucure)
- [getListByToken](dataManager.md#getlistbytoken)
- [getMetadataByToken](dataManager.md#getmetadatabytoken)
- [getNodeByToken](dataManager.md#getnodebytoken)
- [getRelationByToken](dataManager.md#getrelationbytoken)
- [getStructureByToken](dataManager.md#getstructurebytoken)
- [hasList](dataManager.md#haslist)
- [hasMetadata](dataManager.md#hasmetadata)
- [hasNode](dataManager.md#hasnode)
- [hasRelation](dataManager.md#hasrelation)
- [hasStructure](dataManager.md#hasstructure)
- [jsonReady](dataManager.md#jsonready)
- [queryListAll](dataManager.md#querylistall)
- [queryMetadataAll](dataManager.md#querymetadataall)
- [queryNodeAll](dataManager.md#querynodeall)
- [queryRelationAll](dataManager.md#queryrelationall)
- [queryStructureAll](dataManager.md#querystructureall)
- [setList](dataManager.md#setlist)
- [setMetadata](dataManager.md#setmetadata)
- [setNode](dataManager.md#setnode)
- [setRelation](dataManager.md#setrelation)
- [setStructure](dataManager.md#setstructure)

### Methods

- [emit](dataManager.md#emit)
- [get](dataManager.md#get)
- [getNodesByType](dataManager.md#getnodesbytype)
- [getRelationFromNodeToken](dataManager.md#getrelationfromnodetoken)
- [getRelationToToken](dataManager.md#getrelationtotoken)
- [on](dataManager.md#on)
- [queryLisNodes](dataManager.md#querylisnodes)
- [queryNodeStructure](dataManager.md#querynodestructure)
- [queryNodeToStructure](dataManager.md#querynodetostructure)

## Constructors

### constructor

• **new _dataManager**(`options?`, `project?`): [`_dataManager`](dataManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `IDataManagerInitOptions` |
| `project?` | [`ProxyNodeExtended`](../modules.md#proxynodeextended) |

#### Returns

[`_dataManager`](dataManager.md)

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:47](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L47)

## Properties

### $\_subscribers

• `Private` **$\_subscribers**: `Record`\<`DataManagerEvents`, (`item`: [`_structureChild`](structureChild.md) \| [`_relation`](relation.md) \| [`_node`](node.md)\<[`NodeType`](../modules.md#nodetype)\> \| [`_metaContainer`](metaContainer.md)\<[`AllNodeMetadata`](../modules.md#allnodemetadata)\>) => `void`[]\>

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:168](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L168)

___

### lists

• **lists**: `Map`\<`string`, [`_list`](list.md)\>

#### Implementation of

[IDataManager](../interfaces/IDataManager.md).[lists](../interfaces/IDataManager.md#lists)

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:43](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L43)

___

### meta

• **meta**: `Map`\<`string`, [`_metaContainer`](metaContainer.md)\<[`AllNodeMetadata`](../modules.md#allnodemetadata)\>\>

#### Implementation of

[IDataManager](../interfaces/IDataManager.md).[meta](../interfaces/IDataManager.md#meta)

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:41](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L41)

___

### nodes

• **nodes**: `Map`\<`string`, [`_node`](node.md)\<[`NodeType`](../modules.md#nodetype)\>\>

contains the nodes of the project

#### Implementation of

[IDataManager](../interfaces/IDataManager.md).[nodes](../interfaces/IDataManager.md#nodes)

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:39](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L39)

___

### relations

• **relations**: `Map`\<\`$\{string}-$\{string}\`, [`_relation`](relation.md)\>

contains the Node relations

#### Implementation of

[IDataManager](../interfaces/IDataManager.md).[relations](../interfaces/IDataManager.md#relations)

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:40](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L40)

___

### root

• **root**: [`ProxyProjectInstance`](../modules.md#proxyprojectinstance)

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:45](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L45)

___

### structures

• **structures**: `Map`\<`string`, [`_structure`](structure.md)\>

#### Implementation of

[IDataManager](../interfaces/IDataManager.md).[structures](../interfaces/IDataManager.md#structures)

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:42](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L42)

## Accessors

### addList

• `get` **addList**(): (`list`: [`IListInitOptions`](../interfaces/IListInitOptions.md)) => [[`Operation`](Operation.md)\<`any`, `OperationReference`\>, [`List`](../modules.md#list)]

#### Returns

`fn`

▸ (`list`): [[`Operation`](Operation.md)\<`any`, `OperationReference`\>, [`List`](../modules.md#list)]

##### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`IListInitOptions`](../interfaces/IListInitOptions.md) |

##### Returns

[[`Operation`](Operation.md)\<`any`, `OperationReference`\>, [`List`](../modules.md#list)]

#### Implementation of

IDataManager.addList

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:218](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L218)

___

### addMetadata

• `get` **addMetadata**(): (`meta`: [`IMetaContainer`](../interfaces/IMetaContainer.md)\<[`AllNodeMetadata`](../modules.md#allnodemetadata)\>) => [[`Operation`](Operation.md)\<`any`, `OperationReference`\>, [`IMetaContainer`](../interfaces/IMetaContainer.md)\<[`AllNodeMetadata`](../modules.md#allnodemetadata)\>]

#### Returns

`fn`

▸ (`meta`): [[`Operation`](Operation.md)\<`any`, `OperationReference`\>, [`IMetaContainer`](../interfaces/IMetaContainer.md)\<[`AllNodeMetadata`](../modules.md#allnodemetadata)\>]

##### Parameters

| Name | Type |
| :------ | :------ |
| `meta` | [`IMetaContainer`](../interfaces/IMetaContainer.md)\<[`AllNodeMetadata`](../modules.md#allnodemetadata)\> |

##### Returns

[[`Operation`](Operation.md)\<`any`, `OperationReference`\>, [`IMetaContainer`](../interfaces/IMetaContainer.md)\<[`AllNodeMetadata`](../modules.md#allnodemetadata)\>]

#### Implementation of

IDataManager.addMetadata

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:204](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L204)

___

### addNode

• `get` **addNode**(): \<N\>(`node`: `N`) => [`NodeCreationResult`](../modules.md#nodecreationresult)\<[`_node`](node.md)\<`N`[``"type"``]\>\>

F1.1.1
Add the node if it does not exist

#### Returns

`fn`

▸ \<`N`\>(`node`): [`NodeCreationResult`](../modules.md#nodecreationresult)\<[`_node`](node.md)\<`N`[``"type"``]\>\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends [`INode`](../interfaces/INode.md)\<[`NodeType`](../modules.md#nodetype), [`AllNodeMetadata`](../modules.md#allnodemetadata)\> = [`INode`](../interfaces/INode.md)\<[`NodeType`](../modules.md#nodetype), [`AllNodeMetadata`](../modules.md#allnodemetadata)\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

##### Returns

[`NodeCreationResult`](../modules.md#nodecreationresult)\<[`_node`](node.md)\<`N`[``"type"``]\>\>

#### Implementation of

IDataManager.addNode

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:190](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L190)

___

### addRelation

• `get` **addRelation**(): (`relation`: [`IRelation`](../interfaces/IRelation.md)) => [`RelationCreationResult`](../modules.md#relationcreationresult)

#### Returns

`fn`

▸ (`relation`): [`RelationCreationResult`](../modules.md#relationcreationresult)

##### Parameters

| Name | Type |
| :------ | :------ |
| `relation` | [`IRelation`](../interfaces/IRelation.md) |

##### Returns

[`RelationCreationResult`](../modules.md#relationcreationresult)

#### Implementation of

IDataManager.addRelation

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:197](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L197)

___

### addStructure

• `get` **addStructure**(): (`structure`: [`IStructureInitOptions`](../interfaces/IStructureInitOptions.md)) => [[`Operation`](Operation.md)\<`any`, `OperationReference`\>, [`_structure`](structure.md)]

#### Returns

`fn`

▸ (`structure`): [[`Operation`](Operation.md)\<`any`, `OperationReference`\>, [`_structure`](structure.md)]

##### Parameters

| Name | Type |
| :------ | :------ |
| `structure` | [`IStructureInitOptions`](../interfaces/IStructureInitOptions.md) |

##### Returns

[[`Operation`](Operation.md)\<`any`, `OperationReference`\>, [`_structure`](structure.md)]

#### Implementation of

[IDataManager](../interfaces/IDataManager.md).[addStructure](../interfaces/IDataManager.md#addstructure)

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:211](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L211)

___

### deletList

• `get` **deletList**(): `void`

#### Returns

`void`

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:221](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L221)

___

### deleteMetadata

• `get` **deleteMetadata**(): (`token`: `string`) => [`DeleteResult`](../modules.md#deleteresult)

#### Returns

`fn`

▸ (`token`): [`DeleteResult`](../modules.md#deleteresult)

##### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

##### Returns

[`DeleteResult`](../modules.md#deleteresult)

#### Implementation of

IDataManager.deleteMetadata

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:207](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L207)

___

### deleteNode

• `get` **deleteNode**(): (`token`: `string`) => [`DeleteResult`](../modules.md#deleteresult)

#### Returns

`fn`

▸ (`token`): [`DeleteResult`](../modules.md#deleteresult)

##### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

##### Returns

[`DeleteResult`](../modules.md#deleteresult)

#### Implementation of

IDataManager.deleteNode

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:193](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L193)

___

### deleteRelation

• `get` **deleteRelation**(): (`token`: `string`) => [`DeleteResult`](../modules.md#deleteresult)

#### Returns

`fn`

▸ (`token`): [`DeleteResult`](../modules.md#deleteresult)

##### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

##### Returns

[`DeleteResult`](../modules.md#deleteresult)

#### Implementation of

IDataManager.deleteRelation

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:200](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L200)

___

### deleteStrucure

• `get` **deleteStrucure**(): `void`

#### Returns

`void`

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:214](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L214)

___

### getListByToken

• `get` **getListByToken**(): (`token`: `string`) => [`List`](../modules.md#list)

#### Returns

`fn`

▸ (`token`): [`List`](../modules.md#list)

##### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

##### Returns

[`List`](../modules.md#list)

#### Implementation of

IDataManager.getListByToken

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:222](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L222)

___

### getMetadataByToken

• `get` **getMetadataByToken**(): \<Metadata\>(`token`: `string`) => [`IMetaContainer`](../interfaces/IMetaContainer.md)\<`Metadata`\>

#### Returns

`fn`

▸ \<`Metadata`\>(`token`): [`IMetaContainer`](../interfaces/IMetaContainer.md)\<`Metadata`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `Metadata` | extends [`AllNodeMetadata`](../modules.md#allnodemetadata) = [`AllNodeMetadata`](../modules.md#allnodemetadata) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

##### Returns

[`IMetaContainer`](../interfaces/IMetaContainer.md)\<`Metadata`\>

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:208](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L208)

___

### getNodeByToken

• `get` **getNodeByToken**(): (`token`: `string`) => [`Node`](../modules.md#node)

#### Returns

`fn`

▸ (`token`): [`Node`](../modules.md#node)

##### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

##### Returns

[`Node`](../modules.md#node)

#### Implementation of

IDataManager.getNodeByToken

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:194](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L194)

___

### getRelationByToken

• `get` **getRelationByToken**(): `void`

#### Returns

`void`

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:201](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L201)

___

### getStructureByToken

• `get` **getStructureByToken**(): (`token`: `string`) => [`_structure`](structure.md)

#### Returns

`fn`

▸ (`token`): [`_structure`](structure.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

##### Returns

[`_structure`](structure.md)

#### Implementation of

IDataManager.getStructureByToken

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:215](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L215)

___

### hasList

• `get` **hasList**(): `void`

#### Returns

`void`

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:220](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L220)

___

### hasMetadata

• `get` **hasMetadata**(): (`token`: `string`) => `boolean`

#### Returns

`fn`

▸ (`token`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

##### Returns

`boolean`

#### Implementation of

IDataManager.hasMetadata

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:206](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L206)

___

### hasNode

• `get` **hasNode**(): (`token`: `string`) => `boolean`

#### Returns

`fn`

▸ (`token`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

##### Returns

`boolean`

#### Implementation of

IDataManager.hasNode

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:192](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L192)

___

### hasRelation

• `get` **hasRelation**(): (`token`: `string`) => `boolean`

#### Returns

`fn`

▸ (`token`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

##### Returns

`boolean`

#### Implementation of

IDataManager.hasRelation

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:199](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L199)

___

### hasStructure

• `get` **hasStructure**(): (`token`: `string`) => `boolean`

#### Returns

`fn`

▸ (`token`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

##### Returns

`boolean`

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:213](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L213)

___

### jsonReady

• `get` **jsonReady**(): `IDataManagerInitOptions`

The function returns a JSON-ready object containing nodes, relations, meta, and structures.

#### Returns

`IDataManagerInitOptions`

an object with four properties: "nodes", "relations", "meta", and "structures". Each
property contains an array of values.

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:108](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L108)

___

### queryListAll

• `get` **queryListAll**(): (`query`: `Partial`\<[`List`](../modules.md#list)\>) => [`List`](../modules.md#list)[]

#### Returns

`fn`

▸ (`query`): [`List`](../modules.md#list)[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `Partial`\<[`List`](../modules.md#list)\> |

##### Returns

[`List`](../modules.md#list)[]

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:223](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L223)

___

### queryMetadataAll

• `get` **queryMetadataAll**(): (`query`: `Partial`\<[`IMeta`](../interfaces/IMeta.md)\>) => [`IMetaContainer`](../interfaces/IMetaContainer.md)\<[`AllNodeMetadata`](../modules.md#allnodemetadata)\>[]

#### Returns

`fn`

▸ (`query`): [`IMetaContainer`](../interfaces/IMetaContainer.md)\<[`AllNodeMetadata`](../modules.md#allnodemetadata)\>[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `Partial`\<[`IMeta`](../interfaces/IMeta.md)\> |

##### Returns

[`IMetaContainer`](../interfaces/IMetaContainer.md)\<[`AllNodeMetadata`](../modules.md#allnodemetadata)\>[]

#### Implementation of

IDataManager.queryMetadataAll

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:209](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L209)

___

### queryNodeAll

• `get` **queryNodeAll**(): (`query`: `Partial`\<[`INode`](../interfaces/INode.md)\<[`NodeType`](../modules.md#nodetype), [`AllNodeMetadata`](../modules.md#allnodemetadata)\>\>) => [`Node`](../modules.md#node)[]

#### Returns

`fn`

▸ (`query`): [`Node`](../modules.md#node)[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `Partial`\<[`INode`](../interfaces/INode.md)\<[`NodeType`](../modules.md#nodetype), [`AllNodeMetadata`](../modules.md#allnodemetadata)\>\> |

##### Returns

[`Node`](../modules.md#node)[]

#### Implementation of

IDataManager.queryNodeAll

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:195](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L195)

___

### queryRelationAll

• `get` **queryRelationAll**(): (`query`: `Partial`\<[`Relation`](../modules.md#relation)\>) => [`Relation`](../modules.md#relation)[]

#### Returns

`fn`

▸ (`query`): [`Relation`](../modules.md#relation)[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `Partial`\<[`Relation`](../modules.md#relation)\> |

##### Returns

[`Relation`](../modules.md#relation)[]

#### Implementation of

IDataManager.queryRelationAll

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:202](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L202)

___

### queryStructureAll

• `get` **queryStructureAll**(): (`query`: `Partial`\<[`Structure`](../modules.md#structure)\>) => [`Structure`](../modules.md#structure)[]

#### Returns

`fn`

▸ (`query`): [`Structure`](../modules.md#structure)[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `Partial`\<[`Structure`](../modules.md#structure)\> |

##### Returns

[`Structure`](../modules.md#structure)[]

#### Implementation of

IDataManager.queryStructureAll

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:216](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L216)

___

### setList

• `get` **setList**(): (`list`: [`IListInitOptions`](../interfaces/IListInitOptions.md)) => [[`Operation`](Operation.md)\<`any`, `OperationReference`\>, [`List`](../modules.md#list)]

#### Returns

`fn`

▸ (`list`): [[`Operation`](Operation.md)\<`any`, `OperationReference`\>, [`List`](../modules.md#list)]

##### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`IListInitOptions`](../interfaces/IListInitOptions.md) |

##### Returns

[[`Operation`](Operation.md)\<`any`, `OperationReference`\>, [`List`](../modules.md#list)]

#### Implementation of

IDataManager.setList

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:219](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L219)

___

### setMetadata

• `get` **setMetadata**(): (`meta`: [`IMetaContainer`](../interfaces/IMetaContainer.md)\<[`AllNodeMetadata`](../modules.md#allnodemetadata)\>) => [[`Operation`](Operation.md)\<`any`, `OperationReference`\>, [`IMetaContainer`](../interfaces/IMetaContainer.md)\<[`AllNodeMetadata`](../modules.md#allnodemetadata)\>]

#### Returns

`fn`

▸ (`meta`): [[`Operation`](Operation.md)\<`any`, `OperationReference`\>, [`IMetaContainer`](../interfaces/IMetaContainer.md)\<[`AllNodeMetadata`](../modules.md#allnodemetadata)\>]

##### Parameters

| Name | Type |
| :------ | :------ |
| `meta` | [`IMetaContainer`](../interfaces/IMetaContainer.md)\<[`AllNodeMetadata`](../modules.md#allnodemetadata)\> |

##### Returns

[[`Operation`](Operation.md)\<`any`, `OperationReference`\>, [`IMetaContainer`](../interfaces/IMetaContainer.md)\<[`AllNodeMetadata`](../modules.md#allnodemetadata)\>]

#### Implementation of

IDataManager.setMetadata

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:205](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L205)

___

### setNode

• `get` **setNode**(): (`node`: [`Node`](../modules.md#node)) => [`NodeCreationResult`](../modules.md#nodecreationresult)

#### Returns

`fn`

▸ (`node`): [`NodeCreationResult`](../modules.md#nodecreationresult)

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules.md#node) |

##### Returns

[`NodeCreationResult`](../modules.md#nodecreationresult)

#### Implementation of

IDataManager.setNode

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:191](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L191)

___

### setRelation

• `get` **setRelation**(): (`relation`: [`IRelation`](../interfaces/IRelation.md)) => [`RelationCreationResult`](../modules.md#relationcreationresult)

#### Returns

`fn`

▸ (`relation`): [`RelationCreationResult`](../modules.md#relationcreationresult)

##### Parameters

| Name | Type |
| :------ | :------ |
| `relation` | [`IRelation`](../interfaces/IRelation.md) |

##### Returns

[`RelationCreationResult`](../modules.md#relationcreationresult)

#### Implementation of

IDataManager.setRelation

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:198](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L198)

___

### setStructure

• `get` **setStructure**(): (`structure`: [`IStructureInitOptions`](../interfaces/IStructureInitOptions.md)) => [[`Operation`](Operation.md)\<`any`, `OperationReference`\>, [`_structure`](structure.md)]

#### Returns

`fn`

▸ (`structure`): [[`Operation`](Operation.md)\<`any`, `OperationReference`\>, [`_structure`](structure.md)]

##### Parameters

| Name | Type |
| :------ | :------ |
| `structure` | [`IStructureInitOptions`](../interfaces/IStructureInitOptions.md) |

##### Returns

[[`Operation`](Operation.md)\<`any`, `OperationReference`\>, [`_structure`](structure.md)]

#### Implementation of

[IDataManager](../interfaces/IDataManager.md).[setStructure](../interfaces/IDataManager.md#setstructure)

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:212](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L212)

## Methods

### emit

▸ **emit**(`event`, `item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `DataManagerEvents` |
| `item` | [`_structureChild`](structureChild.md) \| [`_relation`](relation.md) \| [`_node`](node.md)\<[`NodeType`](../modules.md#nodetype)\> \| [`_metaContainer`](metaContainer.md)\<[`AllNodeMetadata`](../modules.md#allnodemetadata)\> |

#### Returns

`void`

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:160](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L160)

___

### get

▸ **get**(`ressource`): [`NodeController`](../modules.md#nodecontroller) \| \{ `addList?`: `undefined` ; `addMeta?`: `undefined` ; `addRelation`: (`relation`: [`IRelation`](../interfaces/IRelation.md)) => [`RelationCreationResult`](../modules.md#relationcreationresult) ; `addStructure?`: `undefined` ; `deleteMeta?`: `undefined` ; `deleteRelation`: (`token`: `string`) => [`DeleteResult`](../modules.md#deleteresult) ; `getListByToken?`: `undefined` ; `getStructureByToken?`: `undefined` ; `hasMeta?`: `undefined` ; `hasRelation`: (`token`: `string`) => `boolean` ; `query`: (`query`: `Partial`\<[`Relation`](../modules.md#relation)\>) => [`Relation`](../modules.md#relation)[] ; `queryChild?`: `undefined` ; `setList?`: `undefined` ; `setMeta?`: `undefined` ; `setRelation`: (`relation`: [`IRelation`](../interfaces/IRelation.md)) => [`RelationCreationResult`](../modules.md#relationcreationresult) ; `setStructure?`: `undefined`  } \| \{ `addList?`: `undefined` ; `addMeta`: (`meta`: [`IMetaContainer`](../interfaces/IMetaContainer.md)\<[`AllNodeMetadata`](../modules.md#allnodemetadata)\>) => [[`Operation`](Operation.md)\<`any`, `OperationReference`\>, [`IMetaContainer`](../interfaces/IMetaContainer.md)\<[`AllNodeMetadata`](../modules.md#allnodemetadata)\>] ; `addRelation?`: `undefined` ; `addStructure?`: `undefined` ; `deleteMeta`: (`token`: `string`) => [`DeleteResult`](../modules.md#deleteresult) ; `deleteRelation?`: `undefined` ; `getListByToken?`: `undefined` ; `getStructureByToken?`: `undefined` ; `hasMeta`: (`token`: `string`) => `boolean` ; `hasRelation?`: `undefined` ; `query`: (`query`: `Partial`\<[`IMeta`](../interfaces/IMeta.md)\>) => [`IMetaContainer`](../interfaces/IMetaContainer.md)\<[`AllNodeMetadata`](../modules.md#allnodemetadata)\>[] ; `queryChild?`: `undefined` ; `setList?`: `undefined` ; `setMeta`: (`meta`: [`IMetaContainer`](../interfaces/IMetaContainer.md)\<[`AllNodeMetadata`](../modules.md#allnodemetadata)\>) => [[`Operation`](Operation.md)\<`any`, `OperationReference`\>, [`IMetaContainer`](../interfaces/IMetaContainer.md)\<[`AllNodeMetadata`](../modules.md#allnodemetadata)\>] ; `setRelation?`: `undefined` ; `setStructure?`: `undefined`  } \| \{ `addList?`: `undefined` ; `addMeta?`: `undefined` ; `addRelation?`: `undefined` ; `addStructure`: (`structure`: [`IStructureInitOptions`](../interfaces/IStructureInitOptions.md)) => [[`Operation`](Operation.md)\<`any`, `OperationReference`\>, [`_structure`](structure.md)] ; `deleteMeta?`: `undefined` ; `deleteRelation?`: `undefined` ; `getListByToken?`: `undefined` ; `getStructureByToken`: (`token`: `string`) => [`_structure`](structure.md) ; `hasMeta?`: `undefined` ; `hasRelation?`: `undefined` ; `query`: (`query`: `Partial`\<[`Structure`](../modules.md#structure)\>) => [`Structure`](../modules.md#structure)[] ; `queryChild`: (`node`: `any`, `nodeType?`: `string`) => `any` ; `setList?`: `undefined` ; `setMeta?`: `undefined` ; `setRelation?`: `undefined` ; `setStructure`: (`structure`: [`IStructureInitOptions`](../interfaces/IStructureInitOptions.md)) => [[`Operation`](Operation.md)\<`any`, `OperationReference`\>, [`_structure`](structure.md)]  } \| \{ `addList`: (`list`: [`IListInitOptions`](../interfaces/IListInitOptions.md)) => [[`Operation`](Operation.md)\<`any`, `OperationReference`\>, [`List`](../modules.md#list)] ; `addMeta?`: `undefined` ; `addRelation?`: `undefined` ; `addStructure?`: `undefined` ; `deleteMeta?`: `undefined` ; `deleteRelation?`: `undefined` ; `getListByToken`: (`token`: `string`) => [`List`](../modules.md#list) ; `getStructureByToken?`: `undefined` ; `hasMeta?`: `undefined` ; `hasRelation?`: `undefined` ; `query`: (`query`: `Partial`\<[`List`](../modules.md#list)\>) => [`List`](../modules.md#list)[] ; `queryChild`: () => `void` ; `setList`: (`list`: [`IListInitOptions`](../interfaces/IListInitOptions.md)) => [[`Operation`](Operation.md)\<`any`, `OperationReference`\>, [`List`](../modules.md#list)] ; `setMeta?`: `undefined` ; `setRelation?`: `undefined` ; `setStructure?`: `undefined`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `ressource` | ``"structure"`` \| ``"list"`` \| ``"node"`` \| ``"relation"`` \| ``"meta"`` |

#### Returns

[`NodeController`](../modules.md#nodecontroller) \| \{ `addList?`: `undefined` ; `addMeta?`: `undefined` ; `addRelation`: (`relation`: [`IRelation`](../interfaces/IRelation.md)) => [`RelationCreationResult`](../modules.md#relationcreationresult) ; `addStructure?`: `undefined` ; `deleteMeta?`: `undefined` ; `deleteRelation`: (`token`: `string`) => [`DeleteResult`](../modules.md#deleteresult) ; `getListByToken?`: `undefined` ; `getStructureByToken?`: `undefined` ; `hasMeta?`: `undefined` ; `hasRelation`: (`token`: `string`) => `boolean` ; `query`: (`query`: `Partial`\<[`Relation`](../modules.md#relation)\>) => [`Relation`](../modules.md#relation)[] ; `queryChild?`: `undefined` ; `setList?`: `undefined` ; `setMeta?`: `undefined` ; `setRelation`: (`relation`: [`IRelation`](../interfaces/IRelation.md)) => [`RelationCreationResult`](../modules.md#relationcreationresult) ; `setStructure?`: `undefined`  } \| \{ `addList?`: `undefined` ; `addMeta`: (`meta`: [`IMetaContainer`](../interfaces/IMetaContainer.md)\<[`AllNodeMetadata`](../modules.md#allnodemetadata)\>) => [[`Operation`](Operation.md)\<`any`, `OperationReference`\>, [`IMetaContainer`](../interfaces/IMetaContainer.md)\<[`AllNodeMetadata`](../modules.md#allnodemetadata)\>] ; `addRelation?`: `undefined` ; `addStructure?`: `undefined` ; `deleteMeta`: (`token`: `string`) => [`DeleteResult`](../modules.md#deleteresult) ; `deleteRelation?`: `undefined` ; `getListByToken?`: `undefined` ; `getStructureByToken?`: `undefined` ; `hasMeta`: (`token`: `string`) => `boolean` ; `hasRelation?`: `undefined` ; `query`: (`query`: `Partial`\<[`IMeta`](../interfaces/IMeta.md)\>) => [`IMetaContainer`](../interfaces/IMetaContainer.md)\<[`AllNodeMetadata`](../modules.md#allnodemetadata)\>[] ; `queryChild?`: `undefined` ; `setList?`: `undefined` ; `setMeta`: (`meta`: [`IMetaContainer`](../interfaces/IMetaContainer.md)\<[`AllNodeMetadata`](../modules.md#allnodemetadata)\>) => [[`Operation`](Operation.md)\<`any`, `OperationReference`\>, [`IMetaContainer`](../interfaces/IMetaContainer.md)\<[`AllNodeMetadata`](../modules.md#allnodemetadata)\>] ; `setRelation?`: `undefined` ; `setStructure?`: `undefined`  } \| \{ `addList?`: `undefined` ; `addMeta?`: `undefined` ; `addRelation?`: `undefined` ; `addStructure`: (`structure`: [`IStructureInitOptions`](../interfaces/IStructureInitOptions.md)) => [[`Operation`](Operation.md)\<`any`, `OperationReference`\>, [`_structure`](structure.md)] ; `deleteMeta?`: `undefined` ; `deleteRelation?`: `undefined` ; `getListByToken?`: `undefined` ; `getStructureByToken`: (`token`: `string`) => [`_structure`](structure.md) ; `hasMeta?`: `undefined` ; `hasRelation?`: `undefined` ; `query`: (`query`: `Partial`\<[`Structure`](../modules.md#structure)\>) => [`Structure`](../modules.md#structure)[] ; `queryChild`: (`node`: `any`, `nodeType?`: `string`) => `any` ; `setList?`: `undefined` ; `setMeta?`: `undefined` ; `setRelation?`: `undefined` ; `setStructure`: (`structure`: [`IStructureInitOptions`](../interfaces/IStructureInitOptions.md)) => [[`Operation`](Operation.md)\<`any`, `OperationReference`\>, [`_structure`](structure.md)]  } \| \{ `addList`: (`list`: [`IListInitOptions`](../interfaces/IListInitOptions.md)) => [[`Operation`](Operation.md)\<`any`, `OperationReference`\>, [`List`](../modules.md#list)] ; `addMeta?`: `undefined` ; `addRelation?`: `undefined` ; `addStructure?`: `undefined` ; `deleteMeta?`: `undefined` ; `deleteRelation?`: `undefined` ; `getListByToken`: (`token`: `string`) => [`List`](../modules.md#list) ; `getStructureByToken?`: `undefined` ; `hasMeta?`: `undefined` ; `hasRelation?`: `undefined` ; `query`: (`query`: `Partial`\<[`List`](../modules.md#list)\>) => [`List`](../modules.md#list)[] ; `queryChild`: () => `void` ; `setList`: (`list`: [`IListInitOptions`](../interfaces/IListInitOptions.md)) => [[`Operation`](Operation.md)\<`any`, `OperationReference`\>, [`List`](../modules.md#list)] ; `setMeta?`: `undefined` ; `setRelation?`: `undefined` ; `setStructure?`: `undefined`  }

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:118](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L118)

___

### getNodesByType

▸ **getNodesByType**(`nodeType`): [`Node`](../modules.md#node)[]

F1.2.2
Returns an array of nodes corresponding to the nodeType

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeType` | [`NodeType`](../modules.md#nodetype) |

#### Returns

[`Node`](../modules.md#node)[]

#### Implementation of

[IDataManager](../interfaces/IDataManager.md).[getNodesByType](../interfaces/IDataManager.md#getnodesbytype)

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:235](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L235)

___

### getRelationFromNodeToken

▸ **getRelationFromNodeToken**(`token`): [`Relation`](../modules.md#relation)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

[`Relation`](../modules.md#relation)[]

#### Implementation of

[IDataManager](../interfaces/IDataManager.md).[getRelationFromNodeToken](../interfaces/IDataManager.md#getrelationfromnodetoken)

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:242](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L242)

___

### getRelationToToken

▸ **getRelationToToken**(`token`): [`Relation`](../modules.md#relation)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

[`Relation`](../modules.md#relation)[]

#### Implementation of

[IDataManager](../interfaces/IDataManager.md).[getRelationToToken](../interfaces/IDataManager.md#getrelationtotoken)

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:249](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L249)

___

### on

▸ **on**(`event`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `DataManagerEvents` |
| `callback` | `any` |

#### Returns

`void`

#### Implementation of

[IDataManager](../interfaces/IDataManager.md).[on](../interfaces/IDataManager.md#on)

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:180](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L180)

___

### queryLisNodes

▸ **queryLisNodes**(): `void`

#### Returns

`void`

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:372](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L372)

___

### queryNodeStructure

▸ **queryNodeStructure**(`node`, `nodeType?`): `any`

The above code is a TypeScript function called `queryNodeStructure`. It takes in a `node` object
and an optional `nodeType` string as parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `any` |
| `nodeType?` | `string` |

#### Returns

`any`

#### Implementation of

[IDataManager](../interfaces/IDataManager.md).[queryNodeStructure](../interfaces/IDataManager.md#querynodestructure)

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:307](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L307)

___

### queryNodeToStructure

▸ **queryNodeToStructure**(`startingNode`, `nodeType?`): `unknown`[][]

The above code is a TypeScript function called `queryNodeToStructure`. It takes in a starting
node and an optional node type as parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `startingNode` | [`Node`](../modules.md#node) |
| `nodeType?` | `string` |

#### Returns

`unknown`[][]

#### Implementation of

[IDataManager](../interfaces/IDataManager.md).[queryNodeToStructure](../interfaces/IDataManager.md#querynodetostructure)

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.model.ts:258](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.model.ts#L258)
