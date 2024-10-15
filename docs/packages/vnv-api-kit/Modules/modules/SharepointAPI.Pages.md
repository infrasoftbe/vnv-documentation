[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](SharepointAPI.md) / Pages

# Namespace: Pages

[SharepointAPI](SharepointAPI.md).Pages

## Table of contents

### Interfaces

- [IClientsidePage](../interfaces/SharepointAPI.Pages.IClientsidePage.md)
- [ICreatePageOptions](../interfaces/SharepointAPI.Pages.ICreatePageOptions.md)
- [ICreatePageProps](../interfaces/SharepointAPI.Pages.ICreatePageProps.md)
- [IQueryPages](../interfaces/SharepointAPI.Pages.IQueryPages.md)
- [IQueryPagesFilter](../interfaces/SharepointAPI.Pages.IQueryPagesFilter.md)

### Type Aliases

- [ClientsidePageLayoutType](SharepointAPI.Pages.md#clientsidepagelayouttype)
- [TCreatePageResult](SharepointAPI.Pages.md#tcreatepageresult)

### Functions

- [Pages](SharepointAPI.Pages.md#pages)

## Type Aliases

### ClientsidePageLayoutType

Ƭ **ClientsidePageLayoutType**: ``"Article"`` \| ``"Home"`` \| ``"SingleWebPartAppPage"`` \| ``"RepostPage"``

#### Defined in

[src/sharepoint/pages/index.ts:13](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/pages/index.ts#L13)

___

### TCreatePageResult

Ƭ **TCreatePageResult**: [`IClientsidePage`](../interfaces/SharepointAPI.Pages.IClientsidePage.md)[``"json"``] & \{ `succes`: `boolean`  }

#### Defined in

[src/sharepoint/pages/index.ts:42](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/pages/index.ts#L42)

## Functions

### Pages

▸ **Pages**(`baseUrl`, `clientId`, `siteId`, `pageId?`): [`IQueryPages`](../interfaces/SharepointAPI.Pages.IQueryPages.md)

The function `Pages` is a TypeScript function that returns an object with methods for interacting
with pages, including getting, creating, updating, and deleting pages.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `baseUrl` | `string` | `undefined` | The base URL for the API endpoint. |
| `clientId` | [`TClientId`](SharepointAPI.Sites.md#tclientid) | `undefined` | The `clientId` parameter is of type `TClientId`, which is a custom type representing the client ID. It is used to identify the client for whom the pages are being queried or created. |
| `siteId` | `string` | `undefined` | The siteId parameter is a string that represents the ID of a site. |
| `pageId?` | `string` | `null` | The `pageId` parameter is a string that represents the unique identifier of a specific page. It is optional and can be set to `null` if you want to perform operations on all pages instead of a specific one. |

#### Returns

[`IQueryPages`](../interfaces/SharepointAPI.Pages.IQueryPages.md)

The function `Pages` returns an object that contains various methods and properties related
to managing pages.

#### Defined in

[src/sharepoint/pages/index.ts:96](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/pages/index.ts#L96)
