[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [Session](../modules/Session.md) / NodeLayer

# Interface: NodeLayer

[Session](../modules/Session.md).NodeLayer

## Table of contents

### Methods

- [create](Session.NodeLayer.md#create)
- [delete](Session.NodeLayer.md#delete)
- [get](Session.NodeLayer.md#get)
- [update](Session.NodeLayer.md#update)

## Methods

### create

▸ **create**\<`T`\>(`node`): `Promise`\<`INode`\<`T`, `AllNodeMetadata`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `NodeType` = `NodeType` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `INode`\<`T`, `AllNodeMetadata`\> |

#### Returns

`Promise`\<`INode`\<`T`, `AllNodeMetadata`\>\>

#### Defined in

[src/session/layers/sessions/project/nodes/index.ts:7](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/session/layers/sessions/project/nodes/index.ts#L7)

___

### delete

▸ **delete**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/session/layers/sessions/project/nodes/index.ts:9](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/session/layers/sessions/project/nodes/index.ts#L9)

___

### get

▸ **get**\<`T`\>(): `Promise`\<`T` extends ``null`` ? `INode`\<`NodeType`, `AllNodeMetadata`\> : `INode`\<`NodeType`, `AllNodeMetadata`\>[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] = ``null`` |

#### Returns

`Promise`\<`T` extends ``null`` ? `INode`\<`NodeType`, `AllNodeMetadata`\> : `INode`\<`NodeType`, `AllNodeMetadata`\>[]\>

#### Defined in

[src/session/layers/sessions/project/nodes/index.ts:6](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/session/layers/sessions/project/nodes/index.ts#L6)

___

### update

▸ **update**(`node`): `Promise`\<`INode`\<`NodeType`, `AllNodeMetadata`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `INode`\<`NodeType`, `AllNodeMetadata`\> |

#### Returns

`Promise`\<`INode`\<`NodeType`, `AllNodeMetadata`\>\>

#### Defined in

[src/session/layers/sessions/project/nodes/index.ts:8](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/session/layers/sessions/project/nodes/index.ts#L8)
