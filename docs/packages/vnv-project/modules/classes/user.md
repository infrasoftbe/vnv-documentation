[@infrasoftbe/infrasoft-project](../README.md) / [Exports](../modules.md) / \_user

# Class: \_user

The `INode` interface is defining the structure of a node in a project.

## Hierarchy

- [`_node`](node.md)

  ↳ **`_user`**

## Implements

- [`IUser`](../interfaces/IUser.md)

## Table of contents

### Constructors

- [constructor](user.md#constructor)

### Properties

- [create\_dt](user.md#create_dt)
- [id](user.md#id)
- [name](user.md#name)
- [project](user.md#project)
- [token](user.md#token)
- [type](user.md#type)
- [update\_dt](user.md#update_dt)
- [userGroup](user.md#usergroup)

### Accessors

- [delete](user.md#delete)
- [forNodes](user.md#fornodes)
- [forRelationships](user.md#forrelationships)
- [fromNodes](user.md#fromnodes)
- [fromRelationships](user.md#fromrelationships)
- [getMetadata](user.md#getmetadata)
- [inNodes](user.md#innodes)
- [inRelationships](user.md#inrelationships)
- [jsonReady](user.md#jsonready)
- [outNodes](user.md#outnodes)
- [outRelationships](user.md#outrelationships)
- [setMetadata](user.md#setmetadata)
- [update](user.md#update)

### Methods

- [flat](user.md#flat)
- [json](user.md#json)
- [linkFor](user.md#linkfor)
- [linkFrom](user.md#linkfrom)
- [linkTo](user.md#linkto)
- [setMetaDataKey](user.md#setmetadatakey)
- [shema](user.md#shema)

## Constructors

### constructor

• **new _user**(`options`, `project?`): [`_user`](user.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`INode`](../interfaces/INode.md)\<``"user"``, [`AllNodeMetadata`](../modules.md#allnodemetadata)\> |
| `project?` | [`ProxyProjectInstance`](../modules.md#proxyprojectinstance) |

#### Returns

[`_user`](user.md)

#### Overrides

[_node](node.md).[constructor](node.md#constructor)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/user.ts:15](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/user.ts#L15)

## Properties

### create\_dt

• **create\_dt**: `number`

Node creation date time

#### Implementation of

[IUser](../interfaces/IUser.md).[create_dt](../interfaces/IUser.md#create_dt)

#### Overrides

[_node](node.md).[create_dt](node.md#create_dt)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/user.ts:12](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/user.ts#L12)

___

### id

• **id**: `string`

Node Id

#### Implementation of

[IUser](../interfaces/IUser.md).[id](../interfaces/IUser.md#id)

#### Overrides

[_node](node.md).[id](node.md#id)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/user.ts:8](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/user.ts#L8)

___

### name

• **name**: `string`

Node name

#### Implementation of

[IUser](../interfaces/IUser.md).[name](../interfaces/IUser.md#name)

#### Overrides

[_node](node.md).[name](node.md#name)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/user.ts:9](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/user.ts#L9)

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

[IUser](../interfaces/IUser.md).[token](../interfaces/IUser.md#token)

#### Overrides

[_node](node.md).[token](node.md#token)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/user.ts:10](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/user.ts#L10)

___

### type

• **type**: ``"user"``

Node type

#### Implementation of

[IUser](../interfaces/IUser.md).[type](../interfaces/IUser.md#type)

#### Overrides

[_node](node.md).[type](node.md#type)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/user.ts:7](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/user.ts#L7)

___

### update\_dt

• **update\_dt**: `number`

Node update date time

#### Implementation of

[IUser](../interfaces/IUser.md).[update_dt](../interfaces/IUser.md#update_dt)

#### Overrides

[_node](node.md).[update_dt](node.md#update_dt)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/user.ts:13](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/user.ts#L13)

___

### userGroup

• **userGroup**: `string`[] = `[]`

#### Implementation of

[IUser](../interfaces/IUser.md).[userGroup](../interfaces/IUser.md#usergroup)

#### Inherited from

[_node](node.md).[userGroup](node.md#usergroup)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:40](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L40)

## Accessors

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

• `get` **jsonReady**(): [`INode`](../interfaces/INode.md)\<[`NodeType`](../modules.md#nodetype), [`AllNodeMetadata`](../modules.md#allnodemetadata)\> \| [`IStructureInitOptions`](../interfaces/IStructureInitOptions.md)

#### Returns

[`INode`](../interfaces/INode.md)\<[`NodeType`](../modules.md#nodetype), [`AllNodeMetadata`](../modules.md#allnodemetadata)\> \| [`IStructureInitOptions`](../interfaces/IStructureInitOptions.md)

#### Inherited from

\_node.jsonReady

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:56](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L56)

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

▸ **json**(): [`_user`](user.md) & \{ `meta`: [`IRequirementMetadata`](../interfaces/IRequirementMetadata.md) \| [`ITestMetadata`](../interfaces/ITestMetadata.md) \| [`IMaterialMetadata`](../interfaces/IMaterialMetadata.md) \| [`IWorkMetadata`](../interfaces/IWorkMetadata.md) \| [`IDeliverableMetadata`](../interfaces/IDeliverableMetadata.md) \| [`IOrderMetadata`](../interfaces/IOrderMetadata.md) \| [`IFileMetadata`](../interfaces/IFileMetadata.md) \| [`IProjectMetadata`](../interfaces/IProjectMetadata.md) \| [`IStructureNodeMetadata`](../interfaces/IStructureNodeMetadata.md) \| [`IObjectMetadata`](../interfaces/IObjectMetadata.md) \| [`ISystemMetadata`](../interfaces/ISystemMetadata.md) \| [`IUserMetadata`](../interfaces/IUserMetadata.md) \| [`IGroupMetadata`](../interfaces/IGroupMetadata.md) \| [`IRoleMetadata`](../interfaces/IRoleMetadata.md) \| [`IListNodeMetadata`](../interfaces/IListNodeMetadata.md) \| `IAttachementMetadata` \| `IContactMetadata` \| `IWorklogMetadata` \| `IRegister`  }

#### Returns

[`_user`](user.md) & \{ `meta`: [`IRequirementMetadata`](../interfaces/IRequirementMetadata.md) \| [`ITestMetadata`](../interfaces/ITestMetadata.md) \| [`IMaterialMetadata`](../interfaces/IMaterialMetadata.md) \| [`IWorkMetadata`](../interfaces/IWorkMetadata.md) \| [`IDeliverableMetadata`](../interfaces/IDeliverableMetadata.md) \| [`IOrderMetadata`](../interfaces/IOrderMetadata.md) \| [`IFileMetadata`](../interfaces/IFileMetadata.md) \| [`IProjectMetadata`](../interfaces/IProjectMetadata.md) \| [`IStructureNodeMetadata`](../interfaces/IStructureNodeMetadata.md) \| [`IObjectMetadata`](../interfaces/IObjectMetadata.md) \| [`ISystemMetadata`](../interfaces/ISystemMetadata.md) \| [`IUserMetadata`](../interfaces/IUserMetadata.md) \| [`IGroupMetadata`](../interfaces/IGroupMetadata.md) \| [`IRoleMetadata`](../interfaces/IRoleMetadata.md) \| [`IListNodeMetadata`](../interfaces/IListNodeMetadata.md) \| `IAttachementMetadata` \| `IContactMetadata` \| `IWorklogMetadata` \| `IRegister`  }

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

#### Inherited from

[_node](node.md).[shema](node.md#shema)

#### Defined in

[packages/infrasoft-vnv-project/src/models/nodes/node.ts:221](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/nodes/node.ts#L221)
