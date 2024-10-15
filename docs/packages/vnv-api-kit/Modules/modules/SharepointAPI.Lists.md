[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](SharepointAPI.md) / Lists

# Namespace: Lists

[SharepointAPI](SharepointAPI.md).Lists

## Table of contents

### Enumerations

- [ListTypes](../enums/SharepointAPI.Lists.ListTypes.md)

### Interfaces

- [ICreateListOption](../interfaces/SharepointAPI.Lists.ICreateListOption.md)
- [IDocumentListItem](../interfaces/SharepointAPI.Lists.IDocumentListItem.md)
- [IGridListProps](../interfaces/SharepointAPI.Lists.IGridListProps.md)
- [IList](../interfaces/SharepointAPI.Lists.IList.md)
- [IQueryLists](../interfaces/SharepointAPI.Lists.IQueryLists.md)
- [IQueryListsFilter](../interfaces/SharepointAPI.Lists.IQueryListsFilter.md)

### Type Aliases

- [TDocumentListProps](SharepointAPI.Lists.md#tdocumentlistprops)
- [TListTypes](SharepointAPI.Lists.md#tlisttypes)

### Functions

- [Lists](SharepointAPI.Lists.md#lists)

## Type Aliases

### TDocumentListProps

Ƭ **TDocumentListProps**: [`IDocumentListItem`](../interfaces/SharepointAPI.Lists.IDocumentListItem.md)[]

#### Defined in

[src/sharepoint/lists/index.ts:119](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/lists/index.ts#L119)

___

### TListTypes

Ƭ **TListTypes**: ``0`` \| ``1``

#### Defined in

[src/sharepoint/lists/index.ts:32](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/lists/index.ts#L32)

## Functions

### Lists

▸ **Lists**(`baseUrl`, `clientId`, `siteId`, `listId?`): [`IQueryLists`](../interfaces/SharepointAPI.Lists.IQueryLists.md)

The function exports a Lists object with methods for getting,
creating, updating, and deleting lists in a SharePoint site.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `baseUrl` | `string` | `undefined` | - |
| `clientId` | [`TClientId`](SharepointAPI.Sites.md#tclientid) | `undefined` | The `clientId` parameter is the unique identifier for the client. It is of type `TClientId`. |
| `siteId` | `string` | `undefined` | The `siteId` parameter represents the ID of the site where the list is located. |
| `listId?` | `string` | `null` | The `listId` parameter is the unique identifier of a specific list. It is optional and can be set to `null` if you want to perform operations on all lists within a site. |

#### Returns

[`IQueryLists`](../interfaces/SharepointAPI.Lists.IQueryLists.md)

The function `Lists` returns an object with four properties: `get`, `create`, `update`, and
`delete`.

#### Defined in

[src/sharepoint/lists/index.ts:183](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/lists/index.ts#L183)
