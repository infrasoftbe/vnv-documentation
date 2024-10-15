[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](SharepointAPI.md) / Parts

# Namespace: Parts

[SharepointAPI](SharepointAPI.md).Parts

## Table of contents

### Classes

- [ClientsideWebpart](../classes/SharepointAPI.Parts.ClientsideWebpart.md)

### Interfaces

- [IQueryParts](../interfaces/SharepointAPI.Parts.IQueryParts.md)
- [IQueryPartsFilter](../interfaces/SharepointAPI.Parts.IQueryPartsFilter.md)

### Functions

- [Parts](SharepointAPI.Parts.md#parts)
- [WebPartDefinition](SharepointAPI.Parts.md#webpartdefinition)

## Functions

### Parts

▸ **Parts**(`baseUrl`, `clientId`, `siteId`, `partId?`): [`IQueryParts`](../interfaces/SharepointAPI.Parts.IQueryParts.md)

The function `Parts` is a TypeScript function that returns an object with methods for retrieving,
creating, updating, and deleting parts based on a given base URL, client ID, site ID, and optional
part ID.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `baseUrl` | `string` | `undefined` | The base URL for the API endpoint. |
| `clientId` | [`TClientId`](SharepointAPI.Sites.md#tclientid) | `undefined` | The `clientId` parameter is of type `TClientId`, which represents the client ID. It is used to identify the client for whom the parts are being queried. |
| `siteId` | `string` | `undefined` | The `siteId` parameter is a string that represents the ID of a site. It is used to identify a specific site in the system. |
| `partId?` | `string` | `null` | The `partId` parameter is a string that represents the ID of a specific part. It is optional and can be set to `null` if not needed. |

#### Returns

[`IQueryParts`](../interfaces/SharepointAPI.Parts.IQueryParts.md)

an object of type `IQueryParts`.

#### Defined in

[src/sharepoint/parts/index.ts:71](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/parts/index.ts#L71)

___

### WebPartDefinition

▸ **WebPartDefinition**(`base`, `path?`): `IWebPartDefinition` & `IInvokable`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `base` | `SPInit` |
| `path?` | `string` |

#### Returns

`IWebPartDefinition` & `IInvokable`\<`any`\>

#### Defined in

node_modules/@pnp/sp/webparts/types.d.ts:79
