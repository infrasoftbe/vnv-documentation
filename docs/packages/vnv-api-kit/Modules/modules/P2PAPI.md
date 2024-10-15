[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / P2PAPI

# Namespace: P2PAPI

## Table of contents

### Functions

- [DownloadFile](P2PAPI.md#downloadfile)
- [FileStats](P2PAPI.md#filestats)
- [UploadFile](P2PAPI.md#uploadfile)

## Functions

### DownloadFile

▸ **DownloadFile**(`fileKey`, `options`): `Promise`\<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileKey` | `string` |
| `options` | `Object` |
| `options.filename` | `string` |
| `options.filext?` | `string` |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[src/p2p/download-file.ts:4](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/p2p/download-file.ts#L4)

___

### FileStats

▸ **FileStats**(`fileKey`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileKey` | `string` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/p2p/stats-file.ts:4](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/p2p/stats-file.ts#L4)

___

### UploadFile

▸ **UploadFile**(`buffer`, `fileName`, `fileProperties`): `Promise`\<\{ `fileToken`: `string` ; `filext`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Buffer` |
| `fileName` | `string` |
| `fileProperties` | `BlobPropertyBag` |

#### Returns

`Promise`\<\{ `fileToken`: `string` ; `filext`: `string`  }\>

#### Defined in

[src/p2p/upload-file.ts:3](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/p2p/upload-file.ts#L3)
