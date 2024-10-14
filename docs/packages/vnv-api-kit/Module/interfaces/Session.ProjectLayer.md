[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [Session](../modules/Session.md) / ProjectLayer

# Interface: ProjectLayer

[Session](../modules/Session.md).ProjectLayer

## Table of contents

### Properties

- [layers](Session.ProjectLayer.md#layers)

### Methods

- [create](Session.ProjectLayer.md#create)
- [delete](Session.ProjectLayer.md#delete)
- [get](Session.ProjectLayer.md#get)
- [update](Session.ProjectLayer.md#update)

## Properties

### layers

• **layers**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Commit` | `LayerFactory`\<[`CommitLayer`](Session.CommitLayer.md)\> |
| `Lists` | `LayerFactory`\<[`ListLayer`](Session.ListLayer.md)\> |
| `Metadatas` | `LayerFactory`\<[`MetadataLayer`](Session.MetadataLayer.md)\> |
| `Nodes` | `LayerFactory`\<[`NodeLayer`](Session.NodeLayer.md)\> |
| `Relations` | `LayerFactory`\<[`RelationLayer`](Session.RelationLayer.md)\> |
| `Structures` | `LayerFactory`\<[`StructureLayer`](Session.StructureLayer.md)\> |

#### Defined in

[src/session/layers/sessions/project/index.ts:18](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/session/layers/sessions/project/index.ts#L18)

## Methods

### create

▸ **create**(`project`): `Promise`\<`INodeExtendedInitOptions`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | `IProject` |

#### Returns

`Promise`\<`INodeExtendedInitOptions`\>

#### Defined in

[src/session/layers/sessions/project/index.ts:15](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/session/layers/sessions/project/index.ts#L15)

___

### delete

▸ **delete**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/session/layers/sessions/project/index.ts:17](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/session/layers/sessions/project/index.ts#L17)

___

### get

▸ **get**(): `Promise`\<`INodeExtendedInitOptions`\>

#### Returns

`Promise`\<`INodeExtendedInitOptions`\>

#### Defined in

[src/session/layers/sessions/project/index.ts:14](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/session/layers/sessions/project/index.ts#L14)

___

### update

▸ **update**(`project`): `Promise`\<`INodeExtendedInitOptions`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | `IProject` |

#### Returns

`Promise`\<`INodeExtendedInitOptions`\>

#### Defined in

[src/session/layers/sessions/project/index.ts:16](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/session/layers/sessions/project/index.ts#L16)
