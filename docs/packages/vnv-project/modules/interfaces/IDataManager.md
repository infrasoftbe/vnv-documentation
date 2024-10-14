[@infrasoftbe/infrasoft-project](../README.md) / [Exports](../modules.md) / IDataManager

# Interface: IDataManager

## Implemented by

- [`_dataManager`](../classes/dataManager.md)

## Table of contents

### Properties

- [addStructure](IDataManager.md#addstructure)
- [lists](IDataManager.md#lists)
- [meta](IDataManager.md#meta)
- [nodes](IDataManager.md#nodes)
- [relations](IDataManager.md#relations)
- [setStructure](IDataManager.md#setstructure)
- [structures](IDataManager.md#structures)

### Methods

- [addList](IDataManager.md#addlist)
- [addMetadata](IDataManager.md#addmetadata)
- [addNode](IDataManager.md#addnode)
- [addRelation](IDataManager.md#addrelation)
- [deleteMetadata](IDataManager.md#deletemetadata)
- [deleteNode](IDataManager.md#deletenode)
- [deleteRelation](IDataManager.md#deleterelation)
- [getListByToken](IDataManager.md#getlistbytoken)
- [getNodeByToken](IDataManager.md#getnodebytoken)
- [getNodesByType](IDataManager.md#getnodesbytype)
- [getRelationFromNodeToken](IDataManager.md#getrelationfromnodetoken)
- [getRelationToToken](IDataManager.md#getrelationtotoken)
- [getStructureByToken](IDataManager.md#getstructurebytoken)
- [hasMetadata](IDataManager.md#hasmetadata)
- [hasNode](IDataManager.md#hasnode)
- [hasRelation](IDataManager.md#hasrelation)
- [on](IDataManager.md#on)
- [queryMetadataAll](IDataManager.md#querymetadataall)
- [queryNodeAll](IDataManager.md#querynodeall)
- [queryNodeStructure](IDataManager.md#querynodestructure)
- [queryNodeToStructure](IDataManager.md#querynodetostructure)
- [queryRelationAll](IDataManager.md#queryrelationall)
- [queryStructureAll](IDataManager.md#querystructureall)
- [setList](IDataManager.md#setlist)
- [setMetadata](IDataManager.md#setmetadata)
- [setNode](IDataManager.md#setnode)
- [setRelation](IDataManager.md#setrelation)

## Properties

### addStructure

• **addStructure**: (`structure`: [`IStructureInitOptions`](IStructureInitOptions.md)) => [[`Operation`](../classes/Operation.md)\<`any`, `OperationReference`\>, [`_structure`](../classes/structure.md)]

#### Type declaration

▸ (`structure`): [[`Operation`](../classes/Operation.md)\<`any`, `OperationReference`\>, [`_structure`](../classes/structure.md)]

##### Parameters

| Name | Type |
| :------ | :------ |
| `structure` | [`IStructureInitOptions`](IStructureInitOptions.md) |

##### Returns

[[`Operation`](../classes/Operation.md)\<`any`, `OperationReference`\>, [`_structure`](../classes/structure.md)]

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.interface.ts:52](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.interface.ts#L52)

___

### lists

• **lists**: `Map`\<`string`, [`_list`](../classes/list.md)\>

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.interface.ts:26](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.interface.ts#L26)

___

### meta

• **meta**: `Map`\<`string`, [`_metaContainer`](../classes/metaContainer.md)\<[`AllNodeMetadata`](../modules.md#allnodemetadata)\>\>

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.interface.ts:24](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.interface.ts#L24)

___

### nodes

• **nodes**: `Map`\<`string`, [`_node`](../classes/node.md)\<[`NodeType`](../modules.md#nodetype)\>\>

contains the nodes of the project

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.interface.ts:20](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.interface.ts#L20)

___

### relations

• **relations**: `Map`\<\`$\{string}-$\{string}\`, [`_relation`](../classes/relation.md)\>

contains the Node relations

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.interface.ts:22](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.interface.ts#L22)

___

### setStructure

• **setStructure**: (`structure`: [`IStructureInitOptions`](IStructureInitOptions.md)) => [[`Operation`](../classes/Operation.md)\<`any`, `OperationReference`\>, [`_structure`](../classes/structure.md)]

#### Type declaration

▸ (`structure`): [[`Operation`](../classes/Operation.md)\<`any`, `OperationReference`\>, [`_structure`](../classes/structure.md)]

##### Parameters

| Name | Type |
| :------ | :------ |
| `structure` | [`IStructureInitOptions`](IStructureInitOptions.md) |

##### Returns

[[`Operation`](../classes/Operation.md)\<`any`, `OperationReference`\>, [`_structure`](../classes/structure.md)]

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.interface.ts:53](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.interface.ts#L53)

___

### structures

• **structures**: `Map`\<`string`, [`_structure`](../classes/structure.md)\>

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.interface.ts:25](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.interface.ts#L25)

## Methods

### addList

▸ **addList**(`list`): [[`Operation`](../classes/Operation.md)\<`any`, `OperationReference`\>, [`List`](../modules.md#list)]

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`IListInitOptions`](IListInitOptions.md) |

#### Returns

[[`Operation`](../classes/Operation.md)\<`any`, `OperationReference`\>, [`List`](../modules.md#list)]

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.interface.ts:59](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.interface.ts#L59)

___

### addMetadata

▸ **addMetadata**(`meta`): [`MetadataCreationResult`](../modules.md#metadatacreationresult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `meta` | [`IMetaContainer`](IMetaContainer.md)\<[`AllNodeMetadata`](../modules.md#allnodemetadata)\> |

#### Returns

[`MetadataCreationResult`](../modules.md#metadatacreationresult)

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.interface.ts:46](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.interface.ts#L46)

___

### addNode

▸ **addNode**(`node`): [`NodeCreationResult`](../modules.md#nodecreationresult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules.md#node) |

#### Returns

[`NodeCreationResult`](../modules.md#nodecreationresult)

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.interface.ts:30](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.interface.ts#L30)

___

### addRelation

▸ **addRelation**(`relation`): [`RelationCreationResult`](../modules.md#relationcreationresult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relation` | [`IRelation`](IRelation.md) |

#### Returns

[`RelationCreationResult`](../modules.md#relationcreationresult)

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.interface.ts:38](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.interface.ts#L38)

___

### deleteMetadata

▸ **deleteMetadata**(`metaToken`): [`DeleteResult`](../modules.md#deleteresult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `metaToken` | `string` |

#### Returns

[`DeleteResult`](../modules.md#deleteresult)

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.interface.ts:49](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.interface.ts#L49)

___

### deleteNode

▸ **deleteNode**(`nodeToken`): [`DeleteResult`](../modules.md#deleteresult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeToken` | `string` |

#### Returns

[`DeleteResult`](../modules.md#deleteresult)

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.interface.ts:33](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.interface.ts#L33)

___

### deleteRelation

▸ **deleteRelation**(`relationToken`): [`DeleteResult`](../modules.md#deleteresult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relationToken` | \`$\{string}-$\{string}\` |

#### Returns

[`DeleteResult`](../modules.md#deleteresult)

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.interface.ts:43](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.interface.ts#L43)

___

### getListByToken

▸ **getListByToken**(`listToken`): [`List`](../modules.md#list)

#### Parameters

| Name | Type |
| :------ | :------ |
| `listToken` | `string` |

#### Returns

[`List`](../modules.md#list)

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.interface.ts:61](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.interface.ts#L61)

___

### getNodeByToken

▸ **getNodeByToken**(`nodeToken`): [`Node`](../modules.md#node)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeToken` | `string` |

#### Returns

[`Node`](../modules.md#node)

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.interface.ts:34](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.interface.ts#L34)

___

### getNodesByType

▸ **getNodesByType**(`nodeType`): [`Node`](../modules.md#node)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeType` | [`NodeType`](../modules.md#nodetype) |

#### Returns

[`Node`](../modules.md#node)[]

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.interface.ts:35](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.interface.ts#L35)

___

### getRelationFromNodeToken

▸ **getRelationFromNodeToken**(`token`): [`Relation`](../modules.md#relation)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

[`Relation`](../modules.md#relation)[]

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.interface.ts:40](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.interface.ts#L40)

___

### getRelationToToken

▸ **getRelationToToken**(`token`): [`Relation`](../modules.md#relation)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

[`Relation`](../modules.md#relation)[]

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.interface.ts:41](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.interface.ts#L41)

___

### getStructureByToken

▸ **getStructureByToken**(`structureToken`): [`_structure`](../classes/structure.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `structureToken` | `any` |

#### Returns

[`_structure`](../classes/structure.md)

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.interface.ts:54](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.interface.ts#L54)

___

### hasMetadata

▸ **hasMetadata**(`metaToken`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `metaToken` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.interface.ts:48](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.interface.ts#L48)

___

### hasNode

▸ **hasNode**(`nodeToken`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeToken` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.interface.ts:32](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.interface.ts#L32)

___

### hasRelation

▸ **hasRelation**(`relationToken`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `relationToken` | \`$\{string}-$\{string}\` |

#### Returns

`boolean`

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.interface.ts:42](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.interface.ts#L42)

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

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.interface.ts:28](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.interface.ts#L28)

___

### queryMetadataAll

▸ **queryMetadataAll**(`query`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `any` |

#### Returns

`any`

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.interface.ts:50](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.interface.ts#L50)

___

### queryNodeAll

▸ **queryNodeAll**(`query`): [`Node`](../modules.md#node)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `Partial`\<[`INode`](INode.md)\<[`NodeType`](../modules.md#nodetype), [`AllNodeMetadata`](../modules.md#allnodemetadata)\>\> |

#### Returns

[`Node`](../modules.md#node)[]

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.interface.ts:36](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.interface.ts#L36)

___

### queryNodeStructure

▸ **queryNodeStructure**(`node`, `nodeType?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `any` |
| `nodeType?` | `string` |

#### Returns

`any`

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.interface.ts:57](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.interface.ts#L57)

___

### queryNodeToStructure

▸ **queryNodeToStructure**(`startingNode`, `nodeType?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `startingNode` | [`Node`](../modules.md#node) |
| `nodeType?` | `string` |

#### Returns

`any`

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.interface.ts:56](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.interface.ts#L56)

___

### queryRelationAll

▸ **queryRelationAll**(`query`): [`Relation`](../modules.md#relation)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `Partial`\<[`Relation`](../modules.md#relation)\> |

#### Returns

[`Relation`](../modules.md#relation)[]

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.interface.ts:44](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.interface.ts#L44)

___

### queryStructureAll

▸ **queryStructureAll**(`query`): [`Structure`](../modules.md#structure)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `any` |

#### Returns

[`Structure`](../modules.md#structure)[]

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.interface.ts:55](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.interface.ts#L55)

___

### setList

▸ **setList**(`list`): [[`Operation`](../classes/Operation.md)\<`any`, `OperationReference`\>, [`List`](../modules.md#list)]

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`IListInitOptions`](IListInitOptions.md) |

#### Returns

[[`Operation`](../classes/Operation.md)\<`any`, `OperationReference`\>, [`List`](../modules.md#list)]

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.interface.ts:60](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.interface.ts#L60)

___

### setMetadata

▸ **setMetadata**(`meta`): [`MetadataCreationResult`](../modules.md#metadatacreationresult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `meta` | [`IMetaContainer`](IMetaContainer.md)\<[`AllNodeMetadata`](../modules.md#allnodemetadata)\> |

#### Returns

[`MetadataCreationResult`](../modules.md#metadatacreationresult)

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.interface.ts:47](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.interface.ts#L47)

___

### setNode

▸ **setNode**(`node`): [`NodeCreationResult`](../modules.md#nodecreationresult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules.md#node) |

#### Returns

[`NodeCreationResult`](../modules.md#nodecreationresult)

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.interface.ts:31](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.interface.ts#L31)

___

### setRelation

▸ **setRelation**(`relation`): [`RelationCreationResult`](../modules.md#relationcreationresult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relation` | [`IRelation`](IRelation.md) |

#### Returns

[`RelationCreationResult`](../modules.md#relationcreationresult)

#### Defined in

[packages/infrasoft-vnv-project/src/models/data-manager.interface.ts:39](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/data-manager.interface.ts#L39)
