[@infrasoftbe/infrasoft-project](../README.md) / [Exports](../modules.md) / ProjectInstance

# Class: ProjectInstance

## Hierarchy

- `NodeExtended`

  ↳ **`ProjectInstance`**

## Table of contents

### Constructors

- [constructor](ProjectInstance.md#constructor)

### Properties

- [configuration](ProjectInstance.md#configuration)
- [current](ProjectInstance.md#current)
- [data](ProjectInstance.md#data)
- [operations](ProjectInstance.md#operations)
- [self](ProjectInstance.md#self)

### Accessors

- [createAvailableToken](ProjectInstance.md#createavailabletoken)
- [ensureInstance](ProjectInstance.md#ensureinstance)
- [findNodeByToken](ProjectInstance.md#findnodebytoken)
- [isAvailableToken](ProjectInstance.md#isavailabletoken)
- [json](ProjectInstance.md#json)
- [jsonReady](ProjectInstance.md#jsonready)
- [nodeTypeList](ProjectInstance.md#nodetypelist)
- [projectToken](ProjectInstance.md#projecttoken)
- [proxy](ProjectInstance.md#proxy)
- [relationTypeList](ProjectInstance.md#relationtypelist)

### Methods

- [queryNodeStructure](ProjectInstance.md#querynodestructure)
- [init](ProjectInstance.md#init)

## Constructors

### constructor

• **new ProjectInstance**(`options`): [`ProjectInstance`](ProjectInstance.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`INodeExtendedInitOptions`](../interfaces/INodeExtendedInitOptions.md) |

#### Returns

[`ProjectInstance`](ProjectInstance.md)

#### Overrides

NodeExtended.constructor

#### Defined in

[packages/infrasoft-vnv-project/src/models/project-instance.model.ts:18](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/project-instance.model.ts#L18)

## Properties

### configuration

• **configuration**: `_configuration`

#### Defined in

[packages/infrasoft-vnv-project/src/models/project-instance.model.ts:16](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/project-instance.model.ts#L16)

___

### current

• **current**: `boolean` = `false`

#### Defined in

[packages/infrasoft-vnv-project/src/models/project-instance.model.ts:14](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/project-instance.model.ts#L14)

___

### data

• **data**: [`_dataManager`](dataManager.md) = `null`

#### Inherited from

NodeExtended.data

#### Defined in

[packages/infrasoft-vnv-project/src/models/node-extended.model.ts:14](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/node-extended.model.ts#L14)

___

### operations

• **operations**: [`OperationStack`](OperationStack.md)

#### Inherited from

NodeExtended.operations

#### Defined in

[packages/infrasoft-vnv-project/src/models/node-extended.model.ts:15](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/node-extended.model.ts#L15)

___

### self

• **self**: [`Project`](../modules.md#project)

#### Inherited from

NodeExtended.self

#### Defined in

[packages/infrasoft-vnv-project/src/models/node-extended.model.ts:13](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/node-extended.model.ts#L13)

## Accessors

### createAvailableToken

• `get` **createAvailableToken**(): (`type`: [`NodeType`](../modules.md#nodetype)) => `string`

#### Returns

`fn`

▸ (`type`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`NodeType`](../modules.md#nodetype) |

##### Returns

`string`

#### Defined in

[packages/infrasoft-vnv-project/src/models/project-instance.model.ts:33](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/project-instance.model.ts#L33)

___

### ensureInstance

• `get` **ensureInstance**(): () => `void`

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/infrasoft-vnv-project/src/models/project-instance.model.ts:32](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/project-instance.model.ts#L32)

___

### findNodeByToken

• `get` **findNodeByToken**(): (`token`: `string`) => [`StructuralNode`](../modules.md#structuralnode) \| [`Node`](../modules.md#node)

#### Returns

`fn`

▸ (`token`): [`StructuralNode`](../modules.md#structuralnode) \| [`Node`](../modules.md#node)

##### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

##### Returns

[`StructuralNode`](../modules.md#structuralnode) \| [`Node`](../modules.md#node)

#### Defined in

[packages/infrasoft-vnv-project/src/models/project-instance.model.ts:31](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/project-instance.model.ts#L31)

___

### isAvailableToken

• `get` **isAvailableToken**(): (`token`: `string` \| [`Token`](Token.md)) => `any`

#### Returns

`fn`

▸ (`token`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` \| [`Token`](Token.md) |

##### Returns

`any`

#### Defined in

[packages/infrasoft-vnv-project/src/models/project-instance.model.ts:34](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/project-instance.model.ts#L34)

___

### json

• `get` **json**(): `string`

#### Returns

`string`

#### Overrides

NodeExtended.json

#### Defined in

[packages/infrasoft-vnv-project/src/models/project-instance.model.ts:46](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/project-instance.model.ts#L46)

___

### jsonReady

• `get` **jsonReady**(): [`INodeExtendedInitOptions`](../interfaces/INodeExtendedInitOptions.md)

#### Returns

[`INodeExtendedInitOptions`](../interfaces/INodeExtendedInitOptions.md)

#### Overrides

NodeExtended.jsonReady

#### Defined in

[packages/infrasoft-vnv-project/src/models/project-instance.model.ts:38](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/project-instance.model.ts#L38)

___

### nodeTypeList

• `get` **nodeTypeList**(): `string`[]

The function returns a list of node types in TypeScript.

#### Returns

`string`[]

An array containing the node types: "project", "order", "deliverable", "work",
"entity", "material", "requirement", "test", "file", "structure", and "structure_child".

#### Inherited from

NodeExtended.nodeTypeList

#### Defined in

[packages/infrasoft-vnv-project/src/models/node-extended.model.ts:34](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/node-extended.model.ts#L34)

___

### projectToken

• `get` **projectToken**(): `string`

The function returns the project token by splitting the self token string and filtering out any
empty elements, then joining the remaining elements.

#### Returns

`string`

The project token without the 'PR' prefix.

#### Inherited from

NodeExtended.projectToken

#### Defined in

[packages/infrasoft-vnv-project/src/models/node-extended.model.ts:45](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/node-extended.model.ts#L45)

___

### proxy

• `get` **proxy**(): [`ProxyProjectInstance`](../modules.md#proxyprojectinstance)

#### Returns

[`ProxyProjectInstance`](../modules.md#proxyprojectinstance)

#### Overrides

NodeExtended.proxy

#### Defined in

[packages/infrasoft-vnv-project/src/models/project-instance.model.ts:29](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/project-instance.model.ts#L29)

___

### relationTypeList

• `get` **relationTypeList**(): `string`[]

The function returns a list of relation types.

#### Returns

`string`[]

The relationTypeList, which is an array of strings.

#### Inherited from

NodeExtended.relationTypeList

#### Defined in

[packages/infrasoft-vnv-project/src/models/node-extended.model.ts:39](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/node-extended.model.ts#L39)

## Methods

### queryNodeStructure

▸ **queryNodeStructure**(`node?`, `nodeType?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `any` |
| `nodeType?` | `string` |

#### Returns

`any`

#### Defined in

[packages/infrasoft-vnv-project/src/models/project-instance.model.ts:36](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/project-instance.model.ts#L36)

___

### init

▸ **init**(`options`): [`ProxyProjectInstance`](../modules.md#proxyprojectinstance)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`INodeExtendedInitOptions`](../interfaces/INodeExtendedInitOptions.md) |

#### Returns

[`ProxyProjectInstance`](../modules.md#proxyprojectinstance)

#### Overrides

NodeExtended.init

#### Defined in

[packages/infrasoft-vnv-project/src/models/project-instance.model.ts:25](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/project-instance.model.ts#L25)
