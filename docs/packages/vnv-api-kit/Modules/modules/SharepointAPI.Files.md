[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](SharepointAPI.md) / Files

# Namespace: Files

[SharepointAPI](SharepointAPI.md).Files

## Table of contents

### Interfaces

- [IFile](../interfaces/SharepointAPI.Files.IFile.md)
- [IQueryFiles](../interfaces/SharepointAPI.Files.IQueryFiles.md)
- [IQueryFilesFilter](../interfaces/SharepointAPI.Files.IQueryFilesFilter.md)

### Functions

- [Files](SharepointAPI.Files.md#files)

## Functions

### Files

▸ **Files**(`baseUrl`, `clientId`, `siteId`, `fileId?`): `Object`

The `Files` function is a TypeScript module that provides methods for interacting with files,
including getting, creating, updating, and deleting files.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `baseUrl` | `string` | `undefined` | The base URL for the files API. |
| `clientId` | [`TClientId`](SharepointAPI.Sites.md#tclientid) | `undefined` | The `clientId` parameter is of type `TClientId`, which is a custom type that represents the client ID. It is used to identify the client associated with the files. |
| `siteId` | `string` | `undefined` | The `siteId` parameter is a string that represents the ID of a site. It is used to identify a specific site in the system. |
| `fileId?` | `string` | `null` | The `fileId` parameter is a string that represents the ID of a specific file. It is optional and can be set to `null` if no specific file ID is provided. |

#### Returns

`Object`

The function `Files` returns an object with the following properties and methods:

| Name | Type |
| :------ | :------ |
| `baseUrl` | `string` |
| `clientId` | [`TClientId`](SharepointAPI.Sites.md#tclientid) |
| `fileId` | `string` |
| `siteId` | `string` |
| `get endpoint()` | `string` |
| `create` | () => `any` |
| `delete` | () => `any` |
| `get` | (`filters`: `any`) => `Promise`\<`any`\> |
| `update` | () => `any` |

#### Defined in

[src/sharepoint/files/index.ts:81](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/files/index.ts#L81)
