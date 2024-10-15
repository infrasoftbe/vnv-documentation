[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](SharepointAPI.md) / Items

# Namespace: Items

[SharepointAPI](SharepointAPI.md).Items

## Table of contents

### Interfaces

- [IItem](../interfaces/SharepointAPI.Items.IItem.md)
- [IItemAddResult](../interfaces/SharepointAPI.Items.IItemAddResult.md)
- [IItemUpdateResult](../interfaces/SharepointAPI.Items.IItemUpdateResult.md)
- [IQueryItems](../interfaces/SharepointAPI.Items.IQueryItems.md)
- [IQueryItemsFilter](../interfaces/SharepointAPI.Items.IQueryItemsFilter.md)

### Functions

- [Items](SharepointAPI.Items.md#items)

## Functions

### Items

▸ **Items**(`baseUrl`, `clientId`, `siteId`, `listId`, `itemId?`): [`IQueryItems`](../interfaces/SharepointAPI.Items.IQueryItems.md)

The `Items` function is a TypeScript function that returns an object with methods for querying,
creating, updating, and deleting items in a specified list.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `baseUrl` | `string` | `undefined` | The base URL for the API endpoint. |
| `clientId` | [`TClientId`](SharepointAPI.Sites.md#tclientid) | `undefined` | The `clientId` parameter is of type `TClientId`, which represents the client ID. It is used to identify the client for which the items are being queried. |
| `siteId` | `string` | `undefined` | The siteId parameter represents the ID of the site where the items are located. |
| `listId` | `string` | `undefined` | The `listId` parameter is the unique identifier of a list. It is used to specify which list the items belong to or should be created in. |
| `itemId?` | `string` | `null` | The `itemId` parameter is the unique identifier of an item in a list. It is used to specify which item to perform operations on, such as retrieving, updating, or deleting the item. If `itemId` is `null`, it means that the operation is not specific to a particular item and |

#### Returns

[`IQueryItems`](../interfaces/SharepointAPI.Items.IQueryItems.md)

an object of type `IQueryItems`.

#### Defined in

[src/sharepoint/items/index.ts:69](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/items/index.ts#L69)
