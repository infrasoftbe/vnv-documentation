[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / Session

# Namespace: Session

## Table of contents

### Interfaces

- [CommitLayer](../interfaces/Session.CommitLayer.md)
- [DocumentLayer](../interfaces/Session.DocumentLayer.md)
- [ListChildLayer](../interfaces/Session.ListChildLayer.md)
- [ListLayer](../interfaces/Session.ListLayer.md)
- [MetadataLayer](../interfaces/Session.MetadataLayer.md)
- [NodeLayer](../interfaces/Session.NodeLayer.md)
- [ProjectLayer](../interfaces/Session.ProjectLayer.md)
- [RelationLayer](../interfaces/Session.RelationLayer.md)
- [SessionLayer](../interfaces/Session.SessionLayer.md)
- [StructureChildLayer](../interfaces/Session.StructureChildLayer.md)
- [StructureLayer](../interfaces/Session.StructureLayer.md)

### Functions

- [CommitClient](Session.md#commitclient)
- [DocumentClient](Session.md#documentclient)
- [ListChildClient](Session.md#listchildclient)
- [ListClient](Session.md#listclient)
- [MetadataClient](Session.md#metadataclient)
- [NodeClient](Session.md#nodeclient)
- [ProjectClient](Session.md#projectclient)
- [RelationClient](Session.md#relationclient)
- [SessionClient](Session.md#sessionclient)
- [StructureChildClient](Session.md#structurechildclient)
- [StructureClient](Session.md#structureclient)

## Functions

### CommitClient

▸ **CommitClient**(`identificator?`): `APILayer`\<[`CommitLayer`](../interfaces/Session.CommitLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identificator?` | `string` |

#### Returns

`APILayer`\<[`CommitLayer`](../interfaces/Session.CommitLayer.md)\>

#### Defined in

[src/session/layers/sessions/project/commit/index.ts:9](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/session/layers/sessions/project/commit/index.ts#L9)

___

### DocumentClient

▸ **DocumentClient**(`identificator?`): `APILayer`\<[`DocumentLayer`](../interfaces/Session.DocumentLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identificator?` | `string` |

#### Returns

`APILayer`\<[`DocumentLayer`](../interfaces/Session.DocumentLayer.md)\>

#### Defined in

[src/session/layers/sessions/documents/index.ts:12](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/session/layers/sessions/documents/index.ts#L12)

___

### ListChildClient

▸ **ListChildClient**(`identificator?`): `APILayer`\<[`ListChildLayer`](../interfaces/Session.ListChildLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identificator?` | `string` |

#### Returns

`APILayer`\<[`ListChildLayer`](../interfaces/Session.ListChildLayer.md)\>

#### Defined in

[src/session/layers/sessions/project/lists/index.ts:12](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/session/layers/sessions/project/lists/index.ts#L12)

___

### ListClient

▸ **ListClient**(`identificator?`): `APILayer`\<[`ListLayer`](../interfaces/Session.ListLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identificator?` | `string` |

#### Returns

`APILayer`\<[`ListLayer`](../interfaces/Session.ListLayer.md)\>

#### Defined in

[src/session/layers/sessions/project/lists/index.ts:37](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/session/layers/sessions/project/lists/index.ts#L37)

___

### MetadataClient

▸ **MetadataClient**(`identificator?`): `APILayer`\<[`MetadataLayer`](../interfaces/Session.MetadataLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identificator?` | `string` |

#### Returns

`APILayer`\<[`MetadataLayer`](../interfaces/Session.MetadataLayer.md)\>

#### Defined in

[src/session/layers/sessions/project/metadatas/index.ts:12](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/session/layers/sessions/project/metadatas/index.ts#L12)

___

### NodeClient

▸ **NodeClient**(`identificator?`): `APILayer`\<[`NodeLayer`](../interfaces/Session.NodeLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identificator?` | `string` |

#### Returns

`APILayer`\<[`NodeLayer`](../interfaces/Session.NodeLayer.md)\>

#### Defined in

[src/session/layers/sessions/project/nodes/index.ts:12](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/session/layers/sessions/project/nodes/index.ts#L12)

___

### ProjectClient

▸ **ProjectClient**(`identificator?`): `APILayer`\<[`ProjectLayer`](../interfaces/Session.ProjectLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identificator?` | `string` |

#### Returns

`APILayer`\<[`ProjectLayer`](../interfaces/Session.ProjectLayer.md)\>

#### Defined in

[src/session/layers/sessions/project/index.ts:28](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/session/layers/sessions/project/index.ts#L28)

___

### RelationClient

▸ **RelationClient**(`identificator?`): `APILayer`\<[`RelationLayer`](../interfaces/Session.RelationLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identificator?` | `string` |

#### Returns

`APILayer`\<[`RelationLayer`](../interfaces/Session.RelationLayer.md)\>

#### Defined in

[src/session/layers/sessions/project/relations/index.ts:12](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/session/layers/sessions/project/relations/index.ts#L12)

___

### SessionClient

▸ **SessionClient**(`identificator?`): `APILayer`\<[`SessionLayer`](../interfaces/Session.SessionLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identificator?` | `string` |

#### Returns

`APILayer`\<[`SessionLayer`](../interfaces/Session.SessionLayer.md)\>

#### Defined in

[src/session/layers/sessions/index.ts:21](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/session/layers/sessions/index.ts#L21)

___

### StructureChildClient

▸ **StructureChildClient**(`identificator?`): `APILayer`\<[`StructureChildLayer`](../interfaces/Session.StructureChildLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identificator?` | `string` |

#### Returns

`APILayer`\<[`StructureChildLayer`](../interfaces/Session.StructureChildLayer.md)\>

#### Defined in

[src/session/layers/sessions/project/structures/index.ts:12](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/session/layers/sessions/project/structures/index.ts#L12)

___

### StructureClient

▸ **StructureClient**(`identificator?`): `APILayer`\<[`StructureLayer`](../interfaces/Session.StructureLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identificator?` | `string` |

#### Returns

`APILayer`\<[`StructureLayer`](../interfaces/Session.StructureLayer.md)\>

#### Defined in

[src/session/layers/sessions/project/structures/index.ts:37](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/session/layers/sessions/project/structures/index.ts#L37)
