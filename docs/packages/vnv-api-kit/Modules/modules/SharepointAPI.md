[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / SharepointAPI

# Namespace: SharepointAPI

## Table of contents

### References

- [TClientId](SharepointAPI.md#tclientid)

### Namespaces

- [Columns](SharepointAPI.Columns.md)
- [Controls](SharepointAPI.Controls.md)
- [Fields](SharepointAPI.Fields.md)
- [Files](SharepointAPI.Files.md)
- [Items](SharepointAPI.Items.md)
- [Lists](SharepointAPI.Lists.md)
- [Navigations](SharepointAPI.Navigations.md)
- [Pages](SharepointAPI.Pages.md)
- [Parts](SharepointAPI.Parts.md)
- [Sections](SharepointAPI.Sections.md)
- [Sites](SharepointAPI.Sites.md)
- [Views](SharepointAPI.Views.md)
- [Webs](SharepointAPI.Webs.md)

### Enumerations

- [Clients](../enums/SharepointAPI.Clients.md)

### Interfaces

- [IQuerySP](../interfaces/SharepointAPI.IQuerySP.md)

### Functions

- [Sharepoint](SharepointAPI.md#sharepoint)

## References

### TClientId

Re-exports [TClientId](SharepointAPI.Sites.md#tclientid)

## Functions

### Sharepoint

▸ **Sharepoint**(`clientId`): [`IQuerySP`](../interfaces/SharepointAPI.IQuerySP.md)

The function exports a Sharepoint object that provides a baseUrl and a Sites method for querying
SharePoint sites.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clientId` | [`TClientId`](SharepointAPI.Sites.md#tclientid) | The `clientId` parameter is a unique identifier for a SharePoint client. It is used to construct the base URL for SharePoint API requests. |

#### Returns

[`IQuerySP`](../interfaces/SharepointAPI.IQuerySP.md)

The function `Sharepoint` returns an object with the following properties and methods:

#### Defined in

[src/sharepoint/index.ts:38](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/index.ts#L38)
