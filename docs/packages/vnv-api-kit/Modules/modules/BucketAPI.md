[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / BucketAPI

# Namespace: BucketAPI

## Table of contents

### Functions

- [AddFileS3Workspace](BucketAPI.md#addfiles3workspace)
- [GetAllS3WorkspaceFiles](BucketAPI.md#getalls3workspacefiles)
- [GetPresignedS3WorkspaceFile](BucketAPI.md#getpresigneds3workspacefile)

## Functions

### AddFileS3Workspace

▸ **AddFileS3Workspace**(`bucketId`, `attach`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bucketId` | `string` |
| `attach` | `string` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/bucket/file-post.ts:4](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/bucket/file-post.ts#L4)

___

### GetAllS3WorkspaceFiles

▸ **GetAllS3WorkspaceFiles**(`bucketname`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bucketname` | `string` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/bucket/file-get-all.ts:4](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/bucket/file-get-all.ts#L4)

___

### GetPresignedS3WorkspaceFile

▸ **GetPresignedS3WorkspaceFile**(`relativeUrl`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `relativeUrl` | `string` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/bucket/file-get-presigned.ts:4](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/bucket/file-get-presigned.ts#L4)
