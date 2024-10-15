[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](SharepointAPI.md) / Controls

# Namespace: Controls

[SharepointAPI](SharepointAPI.md).Controls

## Table of contents

### Interfaces

- [ICreateControlProps](../interfaces/SharepointAPI.Controls.ICreateControlProps.md)
- [IQueryControls](../interfaces/SharepointAPI.Controls.IQueryControls.md)
- [IQueryControlsFilter](../interfaces/SharepointAPI.Controls.IQueryControlsFilter.md)

### Functions

- [Controls](SharepointAPI.Controls.md#controls)

## Functions

### Controls

▸ **Controls**(`baseUrl`, `clientId`, `siteId`, `pageId`, `sectionOrder`, `columnOrder`, `controlOrder?`): [`IQueryControls`](../interfaces/SharepointAPI.Controls.IQueryControls.md)

The Controls function is a TypeScript function that creates an object with methods for getting,
creating, updating, and deleting controls.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `baseUrl` | `string` | `undefined` | The base URL for the API endpoint. |
| `clientId` | [`TClientId`](SharepointAPI.Sites.md#tclientid) | `undefined` | The `clientId` parameter is a unique identifier for the client. It is of type `TClientId`, which means it can be any valid client ID value. |
| `siteId` | `string` | `undefined` | The siteId parameter represents the unique identifier of the site where the controls are located. |
| `pageId` | `string` | `undefined` | The `pageId` parameter is a string that represents the unique identifier of a page. It is used to identify the specific page to which the controls belong. |
| `sectionOrder` | `number` | `undefined` | The `sectionOrder` parameter represents the order of the section in which the control is placed. It is a number that determines the position of the control within the section. |
| `columnOrder` | `number` | `undefined` | The column order parameter represents the order of the column in which the control is placed. It is a number that determines the position of the control within the column. |
| `controlOrder?` | `number` | `null` | The `controlOrder` parameter is the order or position of the control within its parent column. It is an optional parameter and can be set to `null` if not needed. |

#### Returns

[`IQueryControls`](../interfaces/SharepointAPI.Controls.IQueryControls.md)

The function `Controls` returns an object of type `IQueryControls`.

#### Defined in

[src/sharepoint/controls/index.ts:59](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/controls/index.ts#L59)
