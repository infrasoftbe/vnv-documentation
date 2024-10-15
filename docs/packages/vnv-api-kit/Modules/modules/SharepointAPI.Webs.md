[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](SharepointAPI.md) / Webs

# Namespace: Webs

[SharepointAPI](SharepointAPI.md).Webs

## Table of contents

### Interfaces

- [ICreateWebsProps](../interfaces/SharepointAPI.Webs.ICreateWebsProps.md)
- [IQueryWebs](../interfaces/SharepointAPI.Webs.IQueryWebs.md)
- [IWebAddResult](../interfaces/SharepointAPI.Webs.IWebAddResult.md)
- [IWebInfo](../interfaces/SharepointAPI.Webs.IWebInfo.md)
- [IWebUpdateResult](../interfaces/SharepointAPI.Webs.IWebUpdateResult.md)

### Functions

- [Webs](SharepointAPI.Webs.md#webs)

## Functions

### Webs

▸ **Webs**(`baseUrl`, `clientId`, `siteId`, `websId?`): [`IQueryWebs`](../interfaces/SharepointAPI.Webs.IQueryWebs.md)

The `Webs` function is a TypeScript function that creates an object with methods for interacting
with SharePoint webs.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `baseUrl` | `string` | `undefined` | The base URL of the web service. |
| `clientId` | [`TClientId`](SharepointAPI.Sites.md#tclientid) | `undefined` | The `clientId` parameter is of type `TClientId`, which is a custom type that represents the client ID. It is used to identify the client associated with the webs. |
| `siteId` | `string` | `undefined` | The siteId parameter is a string that represents the ID of a specific site within a SharePoint environment. It is used to identify the site for which the webs are being queried or manipulated. |
| `websId?` | `string` | `null` | The `websId` parameter is the ID of the specific web or subsite within a SharePoint site collection. It is used to identify and perform operations on a specific web or subsite. |

#### Returns

[`IQueryWebs`](../interfaces/SharepointAPI.Webs.IQueryWebs.md)

The function `Webs` returns an object of type `IQueryWebs`.

#### Defined in

[src/sharepoint/webs/index.ts:132](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/webs/index.ts#L132)
