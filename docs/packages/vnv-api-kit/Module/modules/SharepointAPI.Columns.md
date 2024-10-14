[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](SharepointAPI.md) / Columns

# Namespace: Columns

[SharepointAPI](SharepointAPI.md).Columns

## Table of contents

### Classes

- [CanvasColumn](../classes/SharepointAPI.Columns.CanvasColumn.md)

### Interfaces

- [ICreateColumnProps](../interfaces/SharepointAPI.Columns.ICreateColumnProps.md)
- [IQueryColumns](../interfaces/SharepointAPI.Columns.IQueryColumns.md)
- [IQueryColumnsFilter](../interfaces/SharepointAPI.Columns.IQueryColumnsFilter.md)

### Type Aliases

- [CanvasColumnFactor](SharepointAPI.Columns.md#canvascolumnfactor)

### Functions

- [Columns](SharepointAPI.Columns.md#columns)

## Type Aliases

### CanvasColumnFactor

Ƭ **CanvasColumnFactor**: ``0`` \| ``2`` \| ``4`` \| ``6`` \| ``8`` \| ``12``

Column size factor. Max value is 12 (= one column), other options are 8,6,4 or 0

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:31

## Functions

### Columns

▸ **Columns**(`baseUrl`, `clientId`, `siteId`, `pageId`, `sectionOrder`, `columnOrder`): [`IQueryColumns`](../interfaces/SharepointAPI.Columns.IQueryColumns.md)

The above function exports a TypeScript module that defines a Columns object with methods for
retrieving, creating, updating, and deleting columns in a web application.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseUrl` | `string` | The `baseUrl` parameter is a string that represents the base URL for the API endpoint. It is used to construct the complete URL for the columns endpoint. |
| `clientId` | [`TClientId`](SharepointAPI.Sites.md#tclientid) | The `clientId` parameter is of type `TClientId`, which represents the client ID. It is used to identify the client for whom the columns are being queried or created. |
| `siteId` | `string` | The `siteId` parameter represents the ID of the site for which the columns are being queried, created, updated, or deleted. |
| `pageId` | `string` | The `pageId` parameter represents the unique identifier of a page. |
| `sectionOrder` | `number` | The `sectionOrder` parameter represents the order of the section within a page. It is used to identify the specific section to which the column belongs. |
| `columnOrder` | `number` | The `columnOrder` parameter is a number that represents the order of the column within a section. It can also be `null` if the column order is not specified. |

#### Returns

[`IQueryColumns`](../interfaces/SharepointAPI.Columns.IQueryColumns.md)

The function `Columns` returns an object of type `IQueryColumns`.

#### Defined in

[src/sharepoint/columns/index.ts:85](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/columns/index.ts#L85)
