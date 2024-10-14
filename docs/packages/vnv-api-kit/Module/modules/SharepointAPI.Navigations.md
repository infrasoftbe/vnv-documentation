[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](SharepointAPI.md) / Navigations

# Namespace: Navigations

[SharepointAPI](SharepointAPI.md).Navigations

## Table of contents

### Interfaces

- [ICreateNaviagationProps](../interfaces/SharepointAPI.Navigations.ICreateNaviagationProps.md)
- [INavigationNode](../interfaces/SharepointAPI.Navigations.INavigationNode.md)
- [IQueryNavigationChildren](../interfaces/SharepointAPI.Navigations.IQueryNavigationChildren.md)
- [IQueryNavigations](../interfaces/SharepointAPI.Navigations.IQueryNavigations.md)
- [IQueryNavigationsFilter](../interfaces/SharepointAPI.Navigations.IQueryNavigationsFilter.md)

### Functions

- [NavigationChildren](SharepointAPI.Navigations.md#navigationchildren)
- [Navigations](SharepointAPI.Navigations.md#navigations)

## Functions

### NavigationChildren

▸ **NavigationChildren**(`baseUrl`, `clientId`, `siteId`, `navItemId`, `childrenId?`): [`IQueryNavigationChildren`](../interfaces/SharepointAPI.Navigations.IQueryNavigationChildren.md)

The function `NavigationChildren` is a TypeScript function that returns an object with methods for
retrieving, creating, updating, and deleting navigation children items.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `baseUrl` | `string` | `undefined` | The base URL for the API endpoint. |
| `clientId` | [`TClientId`](SharepointAPI.Sites.md#tclientid) | `undefined` | The clientId parameter is a variable of type TClientId, which represents the client ID. |
| `siteId` | `string` | `undefined` | The siteId parameter is a string that represents the ID of the site for which the navigation children are being queried. |
| `navItemId` | `string` | `undefined` | The `navItemId` parameter is the ID of the navigation item for which you want to retrieve or manipulate its children. |
| `childrenId?` | `string` | `null` | The `childrenId` parameter is an optional parameter that represents the ID of a specific child item within the navigation. If provided, it will be used to construct the URL for the API endpoint. If not provided, the URL will not include the `childrenId` segment. |

#### Returns

[`IQueryNavigationChildren`](../interfaces/SharepointAPI.Navigations.IQueryNavigationChildren.md)

an object of type `IQueryNavigationChildren`.

#### Defined in

[src/sharepoint/navigations/index.ts:197](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/navigations/index.ts#L197)

___

### Navigations

▸ **Navigations**(`baseUrl`, `clientId`, `siteId`, `navItemId?`): [`IQueryNavigations`](../interfaces/SharepointAPI.Navigations.IQueryNavigations.md)

The `Navigations` function is a TypeScript function that returns an object with methods for
interacting with a navigation API, including getting, creating, updating, and deleting navigation
items, as well as accessing the children of a navigation item.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `baseUrl` | `string` | `undefined` | The base URL for the API endpoint. |
| `clientId` | [`TClientId`](SharepointAPI.Sites.md#tclientid) | `undefined` | The `clientId` parameter is of type `TClientId`, which represents the client ID. It is used to identify the client for whom the navigations are being fetched or created. |
| `siteId` | `string` | `undefined` | The `siteId` parameter is a string that represents the ID of a site. It is used to identify the specific site for which the navigations are being retrieved or modified. |
| `navItemId?` | `string` | `null` | The `navItemId` parameter is the ID of a specific navigation item. It is optional and can be set to `null` if you want to perform operations on all navigation items. |

#### Returns

[`IQueryNavigations`](../interfaces/SharepointAPI.Navigations.IQueryNavigations.md)

The function `Navigations` returns an object of type `IQueryNavigations`.

#### Defined in

[src/sharepoint/navigations/index.ts:119](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/navigations/index.ts#L119)
