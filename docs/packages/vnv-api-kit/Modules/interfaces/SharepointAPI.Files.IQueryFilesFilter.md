[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](../modules/SharepointAPI.md) / [Files](../modules/SharepointAPI.Files.md) / IQueryFilesFilter

# Interface: IQueryFilesFilter

[SharepointAPI](../modules/SharepointAPI.md).[Files](../modules/SharepointAPI.Files.md).IQueryFilesFilter

The `export interface IQueryFilesFilter` is defining an interface in TypeScript. It specifies the
properties that can be used to filter the query for files. The properties include `Id`, `Url`,
`ServerRelativePath`, and `shareObject`. These properties are optional and can be of type `string`
or `boolean`.

## Table of contents

### Properties

- [Id](SharepointAPI.Files.IQueryFilesFilter.md#id)
- [ServerRelativePath](SharepointAPI.Files.IQueryFilesFilter.md#serverrelativepath)
- [Url](SharepointAPI.Files.IQueryFilesFilter.md#url)
- [shareObject](SharepointAPI.Files.IQueryFilesFilter.md#shareobject)

## Properties

### Id

• `Optional` **Id**: `string`

The `Id?:string;` in the `IQueryFilesFilter` interface is defining an optional property called
`Id` of type `string`. The `?` symbol indicates that the property is optional, meaning it can be
omitted when creating an object that implements this interface.

#### Defined in

[src/sharepoint/files/index.ts:21](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/files/index.ts#L21)

___

### ServerRelativePath

• `Optional` **ServerRelativePath**: `string`

The `ServerRelativePath?:string;` property in the `IQueryFilesFilter` interface is defining an
optional property called `ServerRelativePath` of type `string`. The `?` symbol indicates that the
property is optional, meaning it can be omitted when creating an object that implements this
interface. This property allows you to filter the query for files based on their server-relative
path.

#### Defined in

[src/sharepoint/files/index.ts:34](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/files/index.ts#L34)

___

### Url

• `Optional` **Url**: `string`

The `Url?:string;` in the `IQueryFilesFilter` interface is defining an optional property called
`Url` of type `string`. The `?` symbol indicates that the property is optional, meaning it can be
omitted when creating an object that implements this interface. This property allows you to filter
the query for files based on their URL.

#### Defined in

[src/sharepoint/files/index.ts:27](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/files/index.ts#L27)

___

### shareObject

• `Optional` **shareObject**: `boolean`

The `shareObject?:boolean;` property in the `IQueryFilesFilter` interface is defining an optional
property called `shareObject` of type `boolean`. The `?` symbol indicates that the property is
optional, meaning it can be omitted when creating an object that implements this interface. This
property allows you to filter the query for files based on whether they are shared objects or not.
If `shareObject` is set to `true`, the query will return files that are shared objects. If
`shareObject` is set to `false` or omitted, the query will return all files regardless of their
shared status.

#### Defined in

[src/sharepoint/files/index.ts:43](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/files/index.ts#L43)
