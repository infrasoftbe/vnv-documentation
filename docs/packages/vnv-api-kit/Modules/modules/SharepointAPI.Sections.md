[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](SharepointAPI.md) / Sections

# Namespace: Sections

[SharepointAPI](SharepointAPI.md).Sections

## Table of contents

### Interfaces

- [IClientsideWebPartData](../interfaces/SharepointAPI.Sections.IClientsideWebPartData.md)
- [IQuerySections](../interfaces/SharepointAPI.Sections.IQuerySections.md)
- [IQuerySectionsFilter](../interfaces/SharepointAPI.Sections.IQuerySectionsFilter.md)

### Functions

- [Sections](SharepointAPI.Sections.md#sections)

## Functions

### Sections

▸ **Sections**(`baseUrl`, `clientId`, `siteId`, `pageId`, `sectionOrder?`): [`IQuerySections`](../interfaces/SharepointAPI.Sections.IQuerySections.md)

The function `Sections` is a TypeScript function that returns an object with methods for retrieving,
creating, updating, and deleting sections, as well as accessing columns within a section.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `baseUrl` | `string` | `undefined` | The base URL for the API endpoint. |
| `clientId` | [`TClientId`](SharepointAPI.Sites.md#tclientid) | `undefined` | The `clientId` parameter is of type `TClientId`, which represents the client ID. It is used to identify the client for whom the sections are being queried or created. |
| `siteId` | `string` | `undefined` | The siteId parameter represents the ID of the site for which the sections are being queried or created. |
| `pageId` | `string` | `undefined` | The pageId parameter is a string that represents the unique identifier of a page. |
| `sectionOrder?` | `number` | `null` | The sectionOrder parameter is used to specify the order of the section within a page. It is an optional parameter and can be either a number or null. If a number is provided, it represents the order of the section. If null is provided, the section order is not specified. |

#### Returns

[`IQuerySections`](../interfaces/SharepointAPI.Sections.IQuerySections.md)

The function `Sections` returns an object that contains various methods and properties
related to sections.

#### Defined in

[src/sharepoint/sections/index.ts:61](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/sections/index.ts#L61)
