[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](SharepointAPI.md) / Views

# Namespace: Views

[SharepointAPI](SharepointAPI.md).Views

## Table of contents

### Interfaces

- [IQueryViews](../interfaces/SharepointAPI.Views.IQueryViews.md)
- [IView](../interfaces/SharepointAPI.Views.IView.md)
- [IViewAddResult](../interfaces/SharepointAPI.Views.IViewAddResult.md)
- [IViewCreateProps](../interfaces/SharepointAPI.Views.IViewCreateProps.md)
- [IViewInfo](../interfaces/SharepointAPI.Views.IViewInfo.md)
- [IViewUpdateResult](../interfaces/SharepointAPI.Views.IViewUpdateResult.md)

### Functions

- [Views](SharepointAPI.Views.md#views)

## Functions

### Views

▸ **Views**(`baseUrl`, `clientId`, `siteId`, `listId`, `viewId?`): [`IQueryViews`](../interfaces/SharepointAPI.Views.IQueryViews.md)

The above function is a TypeScript function that creates a Views object with methods for getting,
creating, updating, and deleting views.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `baseUrl` | `string` | `undefined` | The base URL of the API endpoint. |
| `clientId` | [`TClientId`](SharepointAPI.Sites.md#tclientid) | `undefined` | The `clientId` parameter is a variable of type `TClientId`. It represents the client ID that is used for authentication or authorization purposes. The specific type of `TClientId` is not provided in the code snippet, so it could be a string, number, or any other data type depending on |
| `siteId` | `string` | `undefined` | The siteId parameter represents the ID of the site where the list is located. |
| `listId` | `string` | `undefined` | The `listId` parameter is the unique identifier of the list in which the view is created or updated. |
| `viewId?` | `string` | `null` | The `viewId` parameter is an optional parameter that represents the ID of a specific view in a list. If a `viewId` is provided, the `Views` function will return information about that specific view. If `viewId` is not provided, the function will return information about all |

#### Returns

[`IQueryViews`](../interfaces/SharepointAPI.Views.IQueryViews.md)

The function `Views` returns an object that contains various methods and properties related
to querying, creating, updating, and deleting views.

#### Defined in

[src/sharepoint/views/index.ts:82](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/views/index.ts#L82)
