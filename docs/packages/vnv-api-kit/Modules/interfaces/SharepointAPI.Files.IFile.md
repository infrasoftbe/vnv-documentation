[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](../modules/SharepointAPI.md) / [Files](../modules/SharepointAPI.Files.md) / IFile

# Interface: IFile

[SharepointAPI](../modules/SharepointAPI.md).[Files](../modules/SharepointAPI.Files.md).IFile

## Hierarchy

- `_File`

- `IDeleteableWithETag`

  ↳ **`IFile`**

## Callable

### IFile

▸ **IFile**\<`T`\>(`init?`): `Promise`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `IFileInfo` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `init?` | `RequestInit` |

#### Returns

`Promise`\<`T`\>

#### Defined in

node_modules/@pnp/sp/files/types.d.ts:241

## Table of contents

### Properties

- [InternalPromise](SharepointAPI.Files.IFile.md#internalpromise)
- [InternalReject](SharepointAPI.Files.IFile.md#internalreject)
- [InternalResolve](SharepointAPI.Files.IFile.md#internalresolve)
- [\_inheritingObservers](SharepointAPI.Files.IFile.md#_inheritingobservers)
- [\_url](SharepointAPI.Files.IFile.md#_url)
- [delete](SharepointAPI.Files.IFile.md#delete)
- [moments](SharepointAPI.Files.IFile.md#moments)
- [observers](SharepointAPI.Files.IFile.md#observers)
- [parentUrl](SharepointAPI.Files.IFile.md#parenturl)

### Accessors

- [emit](SharepointAPI.Files.IFile.md#emit)
- [listItemAllFields](SharepointAPI.Files.IFile.md#listitemallfields)
- [on](SharepointAPI.Files.IFile.md#on)
- [query](SharepointAPI.Files.IFile.md#query)
- [versions](SharepointAPI.Files.IFile.md#versions)

### Methods

- [approve](SharepointAPI.Files.IFile.md#approve)
- [cancelUpload](SharepointAPI.Files.IFile.md#cancelupload)
- [checkin](SharepointAPI.Files.IFile.md#checkin)
- [checkout](SharepointAPI.Files.IFile.md#checkout)
- [cloneObserversOnChange](SharepointAPI.Files.IFile.md#cloneobserversonchange)
- [concat](SharepointAPI.Files.IFile.md#concat)
- [continueUpload](SharepointAPI.Files.IFile.md#continueupload)
- [copyByPath](SharepointAPI.Files.IFile.md#copybypath)
- [copyTo](SharepointAPI.Files.IFile.md#copyto)
- [deleteWithParams](SharepointAPI.Files.IFile.md#deletewithparams)
- [deny](SharepointAPI.Files.IFile.md#deny)
- [error](SharepointAPI.Files.IFile.md#error)
- [execute](SharepointAPI.Files.IFile.md#execute)
- [exists](SharepointAPI.Files.IFile.md#exists)
- [expand](SharepointAPI.Files.IFile.md#expand)
- [finishUpload](SharepointAPI.Files.IFile.md#finishupload)
- [getBlob](SharepointAPI.Files.IFile.md#getblob)
- [getBuffer](SharepointAPI.Files.IFile.md#getbuffer)
- [getContextInfo](SharepointAPI.Files.IFile.md#getcontextinfo)
- [getItem](SharepointAPI.Files.IFile.md#getitem)
- [getJSON](SharepointAPI.Files.IFile.md#getjson)
- [getLockedByUser](SharepointAPI.Files.IFile.md#getlockedbyuser)
- [getParent](SharepointAPI.Files.IFile.md#getparent)
- [getText](SharepointAPI.Files.IFile.md#gettext)
- [log](SharepointAPI.Files.IFile.md#log)
- [moveByPath](SharepointAPI.Files.IFile.md#movebypath)
- [moveCopyImpl](SharepointAPI.Files.IFile.md#movecopyimpl)
- [publish](SharepointAPI.Files.IFile.md#publish)
- [recycle](SharepointAPI.Files.IFile.md#recycle)
- [select](SharepointAPI.Files.IFile.md#select)
- [setContent](SharepointAPI.Files.IFile.md#setcontent)
- [setContentChunked](SharepointAPI.Files.IFile.md#setcontentchunked)
- [start](SharepointAPI.Files.IFile.md#start)
- [startUpload](SharepointAPI.Files.IFile.md#startupload)
- [toRequestUrl](SharepointAPI.Files.IFile.md#torequesturl)
- [toUrl](SharepointAPI.Files.IFile.md#tourl)
- [undoCheckout](SharepointAPI.Files.IFile.md#undocheckout)
- [unpublish](SharepointAPI.Files.IFile.md#unpublish)
- [using](SharepointAPI.Files.IFile.md#using)

## Properties

### InternalPromise

• `Protected` **InternalPromise**: `symbol`

#### Inherited from

\_File.InternalPromise

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:25

___

### InternalReject

• `Protected` **InternalReject**: `symbol`

#### Inherited from

\_File.InternalReject

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:24

___

### InternalResolve

• `Protected` **InternalResolve**: `symbol`

#### Inherited from

\_File.InternalResolve

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:23

___

### \_inheritingObservers

• `Protected` **\_inheritingObservers**: `boolean`

#### Inherited from

\_File.\_inheritingObservers

#### Defined in

node_modules/@pnp/core/timeline.d.ts:81

___

### \_url

• `Protected` **\_url**: `string`

#### Inherited from

\_File.\_url

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:22

___

### delete

• **delete**: (`this`: `ISPQueryable`\<`any`\>, `eTag?`: `string`) > `Promise`\<`void`\>

#### Type declaration

▸ (`this`, `eTag?`): `Promise`\<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ISPQueryable`\<`any`\> |
| `eTag?` | `string` |

##### Returns

`Promise`\<`void`\>

#### Inherited from

\_File.delete

#### Defined in

node_modules/@pnp/sp/files/types.d.ts:54

___

### moments

• `Protected` `Readonly` **moments**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `auth` | (`observers`: `QueryableAuthObserver`[], `url`: `URL`, `init`: `RequestInit`) > `Promise`\<[url: URL, init: RequestInit]\> |
| `construct` | (`observers`: `QueryableConstructObserver`[], `init`: `QueryableInit`, `path?`: `string`) > `Timeline`\<`any`\> |
| `data` | (`observers`: `QueryableDataObserver`\<`any`\>[], ...`args`: `any`[]) > `void` |
| `parse` | (`observers`: `QueryableParseObserver`[], `url`: `URL`, `response`: `Response`, `result`: `any`) > `Promise`\<[url: URL, response: Response, result: any]\> |
| `post` | (`observers`: `QueryablePostObserver`[], `url`: `URL`, `result`: `any`) > `Promise`\<[url: URL, result: any]\> |
| `pre` | (`observers`: `QueryablePreObserver`[], `url`: `string`, `init`: `RequestInit`, `result`: `any`) > `Promise`\<[url: string, init: RequestInit, result: any]\> |
| `send` | (`observers`: `QueryableSendObserver`[], `url`: `URL`, `init`: `RequestInit`) > `Promise`\<`Promise`\<`Response`\>\> |

#### Inherited from

\_File.moments

#### Defined in

node_modules/@pnp/core/timeline.d.ts:77

___

### observers

• `Protected` **observers**: `ObserverCollection`

#### Inherited from

\_File.observers

#### Defined in

node_modules/@pnp/core/timeline.d.ts:78

___

### parentUrl

• `Protected` **parentUrl**: `string`

#### Inherited from

\_File.parentUrl

#### Defined in

node_modules/@pnp/sp/spqueryable.d.ts:13

## Accessors

### emit

• `get` **emit**(): `EmitProxyType`\<`T`\>

Property allowing access to invoke a moment from within this timeline

#### Returns

`EmitProxyType`\<`T`\>

#### Inherited from

\_File.emit

#### Defined in

node_modules/@pnp/core/timeline.d.ts:116

___

### listItemAllFields

• `get` **listItemAllFields**(): `ISPInstance`\<`any`\>

Gets a value that specifies the list item field values for the list item corresponding to the file.

#### Returns

`ISPInstance`\<`any`\>

#### Inherited from

\_File.listItemAllFields

#### Defined in

node_modules/@pnp/sp/files/types.d.ts:59

___

### on

• `get` **on**(): `OnProxyType`\<`T`\>

Property allowing access to manage observers on moments within this timeline

#### Returns

`OnProxyType`\<`T`\>

#### Inherited from

\_File.on

#### Defined in

node_modules/@pnp/core/timeline.d.ts:99

___

### query

• `get` **query**(): `URLSearchParams`

Querystring key, value pairs which will be included in the request

#### Returns

`URLSearchParams`

#### Inherited from

\_File.query

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:41

___

### versions

• `get` **versions**(): `IVersions`

Gets a collection of versions

#### Returns

`IVersions`

#### Inherited from

\_File.versions

#### Defined in

node_modules/@pnp/sp/files/types.d.ts:64

## Methods

### approve

▸ **approve**(`comment?`): `Promise`\<`void`\>

Approves the file submitted for content approval with the specified comment.
Only documents in lists that are enabled for content approval can be approved.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `comment?` | `string` | The comment for the approval. |

#### Returns

`Promise`\<`void`\>

#### Inherited from

\_File.approve

#### Defined in

node_modules/@pnp/sp/files/types.d.ts:76

___

### cancelUpload

▸ **cancelUpload**(`uploadId`): `Promise`\<`void`\>

Stops the chunk upload session without saving the uploaded data. Does not support batching.
If the file doesn’t already exist in the library, the partially uploaded file will be deleted.
Use this in response to user action (as in a request to cancel an upload) or an error or exception.
Use the uploadId value that was passed to the StartUpload method that started the upload session.
This method is currently available only on Office 365.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uploadId` | `string` | The unique identifier of the upload session. |

#### Returns

`Promise`\<`void`\>

#### Inherited from

\_File.cancelUpload

#### Defined in

node_modules/@pnp/sp/files/types.d.ts:86

___

### checkin

▸ **checkin**(`comment?`, `checkinType?`): `Promise`\<`void`\>

Checks the file in to a document library based on the check-in type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `comment?` | `string` | A comment for the check-in. Its length must be < 1023. |
| `checkinType?` | `CheckinType` | The check-in type for the file. |

#### Returns

`Promise`\<`void`\>

#### Inherited from

\_File.checkin

#### Defined in

node_modules/@pnp/sp/files/types.d.ts:93

___

### checkout

▸ **checkout**(): `Promise`\<`void`\>

Checks out the file from a document library.

#### Returns

`Promise`\<`void`\>

#### Inherited from

\_File.checkout

#### Defined in

node_modules/@pnp/sp/files/types.d.ts:97

___

### cloneObserversOnChange

▸ **cloneObserversOnChange**(): `void`

By default a timeline references the same observer collection as a parent timeline,
if any changes are made to the observers this method first clones them ensuring we
maintain a local copy and de-ref the parent

#### Returns

`void`

#### Inherited from

\_File.cloneObserversOnChange

#### Defined in

node_modules/@pnp/core/timeline.d.ts:137

___

### concat

▸ **concat**(`pathPart`): `this`

Directly concatenates the supplied string to the current url, not normalizing "/" chars

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pathPart` | `string` | The string to concatenate to the url |

#### Returns

`this`

#### Inherited from

\_File.concat

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:32

___

### continueUpload

▸ **continueUpload**(`uploadId`, `fileOffset`, `fragment`): `Promise`\<`number`\>

Continues the chunk upload session with an additional fragment.
The current file content is not changed.
Use the uploadId value that was passed to the StartUpload method that started the upload session.
This method is currently available only on Office 365.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uploadId` | `string` | The unique identifier of the upload session. |
| `fileOffset` | `number` | The size of the offset into the file where the fragment starts. |
| `fragment` | `Blob` \| `ArrayBuffer` | The file contents. |

#### Returns

`Promise`\<`number`\>

The size of the total uploaded data in bytes.

#### Inherited from

\_File.continueUpload

#### Defined in

node_modules/@pnp/sp/files/types.d.ts:227

___

### copyByPath

▸ **copyByPath**(`destUrl`, `shouldOverWrite`, `options`): `Promise`\<[`IFile`](SharepointAPI.Files.IFile.md)\>

Moves the file by path to the specified destination url.
Also works with different site collections.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destUrl` | `string` | The absolute url or server relative url of the destination file path to move to. |
| `shouldOverWrite` | `boolean` | Should a file with the same name in the same location be overwritten? |
| `options` | `Partial`\<`Omit`\<`IMoveCopyOptions`, ``"RetainEditorAndModifiedOnMove"``\>\> | Allows you to supply the full set of options controlling the copy behavior |

#### Returns

`Promise`\<[`IFile`](SharepointAPI.Files.IFile.md)\>

#### Inherited from

\_File.copyByPath

#### Defined in

node_modules/@pnp/sp/files/types.d.ts:113

▸ **copyByPath**(`destUrl`, `shouldOverWrite`, `KeepBoth?`): `Promise`\<[`IFile`](SharepointAPI.Files.IFile.md)\>

Moves the file by path to the specified destination url.
Also works with different site collections.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destUrl` | `string` | The absolute url or server relative url of the destination file path to move to. |
| `shouldOverWrite` | `boolean` | Should a file with the same name in the same location be overwritten? |
| `KeepBoth?` | `boolean` | - |

#### Returns

`Promise`\<[`IFile`](SharepointAPI.Files.IFile.md)\>

#### Inherited from

\_File.copyByPath

#### Defined in

node_modules/@pnp/sp/files/types.d.ts:122

___

### copyTo

▸ **copyTo**(`url`, `shouldOverWrite?`): `Promise`\<`void`\>

Copies the file to the destination url.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The absolute url or server relative url of the destination file path to copy to. |
| `shouldOverWrite?` | `boolean` | Should a file with the same name in the same location be overwritten? |

#### Returns

`Promise`\<`void`\>

#### Inherited from

\_File.copyTo

#### Defined in

node_modules/@pnp/sp/files/types.d.ts:104

___

### deleteWithParams

▸ **deleteWithParams**(`parameters`): `Promise`\<`void`\>

Deletes the file object with options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | `Partial`\<`IFileDeleteParams`\> | Specifies the options to use when deleting a file. |

#### Returns

`Promise`\<`void`\>

#### Inherited from

\_File.deleteWithParams

#### Defined in

node_modules/@pnp/sp/files/types.d.ts:165

___

### deny

▸ **deny**(`comment?`): `Promise`\<`void`\>

Denies approval for a file that was submitted for content approval.
Only documents in lists that are enabled for content approval can be denied.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `comment?` | `string` | The comment for the denial. |

#### Returns

`Promise`\<`void`\>

#### Inherited from

\_File.deny

#### Defined in

node_modules/@pnp/sp/files/types.d.ts:129

___

### error

▸ **error**(`e?`): `void`

Shorthand method to emit an error event tied to this timeline

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e?` | `any` | Optional. Any error object to emit. If none is provided no emit occurs |

#### Returns

`void`

#### Inherited from

\_File.error

#### Defined in

node_modules/@pnp/core/timeline.d.ts:112

___

### execute

▸ **execute**(`userInit`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userInit` | `RequestInit` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

\_File.execute

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:47

___

### exists

▸ **exists**(): `Promise`\<`boolean`\>

Checks to see if the file represented by this object exists

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

\_File.exists

#### Defined in

node_modules/@pnp/sp/files/types.d.ts:181

___

### expand

▸ **expand**(`...expands`): `this`

Expands fields such as lookups to get additional data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...expands` | `string`[] | The Fields for which to expand the values |

#### Returns

`this`

#### Inherited from

\_File.expand

#### Defined in

node_modules/@pnp/sp/spqueryable.d.ts:37

___

### finishUpload

▸ **finishUpload**(`uploadId`, `fileOffset`, `fragment`): `Promise`\<`IFileAddResult`\>

Uploads the last file fragment and commits the file. The current file content is changed when this method completes.
Use the uploadId value that was passed to the StartUpload method that started the upload session.
This method is currently available only on Office 365.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uploadId` | `string` | The unique identifier of the upload session. |
| `fileOffset` | `number` | The size of the offset into the file where the fragment starts. |
| `fragment` | `Blob` \| `ArrayBuffer` | The file contents. |

#### Returns

`Promise`\<`IFileAddResult`\>

The newly uploaded file.

#### Inherited from

\_File.finishUpload

#### Defined in

node_modules/@pnp/sp/files/types.d.ts:238

___

### getBlob

▸ **getBlob**(): `Promise`\<`Blob`\>

Gets the contents of the file as a blob, does not work in Node.js. Not supported in batching.

#### Returns

`Promise`\<`Blob`\>

#### Inherited from

\_File.getBlob

#### Defined in

node_modules/@pnp/sp/files/readable-file.d.ts:12

___

### getBuffer

▸ **getBuffer**(): `Promise`\<`ArrayBuffer`\>

Gets the contents of a file as an ArrayBuffer, works in Node.js. Not supported in batching.

#### Returns

`Promise`\<`ArrayBuffer`\>

#### Inherited from

\_File.getBuffer

#### Defined in

node_modules/@pnp/sp/files/readable-file.d.ts:16

___

### getContextInfo

▸ **getContextInfo**(`path?`): `Promise`\<`IContextInfo`\>

Gets the context info for the specified path

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path?` | `string` | Optional. Absolute path to a SharePoint resource [Default: this.parentUrl] |

#### Returns

`Promise`\<`IContextInfo`\>

#### Inherited from

\_File.getContextInfo

#### Defined in

node_modules/@pnp/sp/context-info/index.d.ts:8

___

### getItem

▸ **getItem**\<`T`\>(`...selects`): `Promise`\<[`IItem`](SharepointAPI.Items.IItem.md) & `T`\>

Gets the associated list item for this folder, loading the default properties

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selects` | `string`[] |

#### Returns

`Promise`\<[`IItem`](SharepointAPI.Items.IItem.md) & `T`\>

#### Inherited from

\_File.getItem

#### Defined in

node_modules/@pnp/sp/files/types.d.ts:192

___

### getJSON

▸ **getJSON**(): `Promise`\<`any`\>

Gets the contents of a file as an ArrayBuffer, works in Node.js. Not supported in batching.

#### Returns

`Promise`\<`any`\>

#### Inherited from

\_File.getJSON

#### Defined in

node_modules/@pnp/sp/files/readable-file.d.ts:20

___

### getLockedByUser

▸ **getLockedByUser**(): `Promise`\<`ISiteUserProps`\>

Gets the current locked by user

#### Returns

`Promise`\<`ISiteUserProps`\>

#### Inherited from

\_File.getLockedByUser

#### Defined in

node_modules/@pnp/sp/files/types.d.ts:69

___

### getParent

▸ **getParent**\<`T`\>(`factory`, `path?`, `base?`): `T`

Gets a parent for this instance as specified

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ISPQueryable`\<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `factory` | `ISPInvokableFactory`\<`any`\> | The contructor for the class to create |
| `path?` | `string` | - |
| `base?` | `string` | - |

#### Returns

`T`

#### Inherited from

\_File.getParent

#### Defined in

node_modules/@pnp/sp/spqueryable.d.ts:43

___

### getText

▸ **getText**(): `Promise`\<`string`\>

Gets the contents of the file as text. Not supported in batching.

#### Returns

`Promise`\<`string`\>

#### Inherited from

\_File.getText

#### Defined in

node_modules/@pnp/sp/files/readable-file.d.ts:7

___

### log

▸ **log**(`message`, `level?`): `void`

Shorthand method to emit a logging event tied to this timeline

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message to log |
| `level?` | `number` | The level at which the message applies |

#### Returns

`void`

#### Inherited from

\_File.log

#### Defined in

node_modules/@pnp/core/timeline.d.ts:106

___

### moveByPath

▸ **moveByPath**(`destUrl`, `shouldOverWrite`, `options`): `Promise`\<[`IFile`](SharepointAPI.Files.IFile.md)\>

Moves the file by path to the specified destination url.
Also works with different site collections.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destUrl` | `string` | The absolute url or server relative url of the destination file path to move to. |
| `shouldOverWrite` | `boolean` | Should a file with the same name in the same location be overwritten? |
| `options` | `Partial`\<`Omit`\<`IMoveCopyOptions`, ``"ResetAuthorAndCreatedOnCopy"``\>\> | Allows you to supply the full set of options controlling the move behavior |

#### Returns

`Promise`\<[`IFile`](SharepointAPI.Files.IFile.md)\>

#### Inherited from

\_File.moveByPath

#### Defined in

node_modules/@pnp/sp/files/types.d.ts:138

▸ **moveByPath**(`destUrl`, `shouldOverWrite`, `KeepBoth?`): `Promise`\<[`IFile`](SharepointAPI.Files.IFile.md)\>

Moves the file by path to the specified destination url.
Also works with different site collections.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destUrl` | `string` | The absolute url or server relative url of the destination file path to move to. |
| `shouldOverWrite` | `boolean` | Should a file with the same name in the same location be overwritten? |
| `KeepBoth?` | `boolean` | - |

#### Returns

`Promise`\<[`IFile`](SharepointAPI.Files.IFile.md)\>

#### Inherited from

\_File.moveByPath

#### Defined in

node_modules/@pnp/sp/files/types.d.ts:147

___

### moveCopyImpl

▸ **moveCopyImpl**(`destUrl`, `options`, `overwrite`, `methodName`): `Promise`\<[`IFile`](SharepointAPI.Files.IFile.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `destUrl` | `string` |
| `options` | `Partial`\<`IMoveCopyOptions`\> |
| `overwrite` | `boolean` |
| `methodName` | `string` |

#### Returns

`Promise`\<[`IFile`](SharepointAPI.Files.IFile.md)\>

#### Inherited from

\_File.moveCopyImpl

#### Defined in

node_modules/@pnp/sp/files/types.d.ts:239

___

### publish

▸ **publish**(`comment?`): `Promise`\<`void`\>

Submits the file for content approval with the specified comment.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `comment?` | `string` | The comment for the published file. Its length must be < 1023. |

#### Returns

`Promise`\<`void`\>

#### Inherited from

\_File.publish

#### Defined in

node_modules/@pnp/sp/files/types.d.ts:153

___

### recycle

▸ **recycle**(): `Promise`\<`string`\>

Moves the file to the Recycle Bin and returns the identifier of the new Recycle Bin item.

#### Returns

`Promise`\<`string`\>

The GUID of the recycled file.

#### Inherited from

\_File.recycle

#### Defined in

node_modules/@pnp/sp/files/types.d.ts:159

___

### select

▸ **select**(`...selects`): `this`

Choose which fields to return

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...selects` | `string`[] | One or more fields to return |

#### Returns

`this`

#### Inherited from

\_File.select

#### Defined in

node_modules/@pnp/sp/spqueryable.d.ts:31

___

### setContent

▸ **setContent**(`content`): `Promise`\<[`IFile`](SharepointAPI.Files.IFile.md)\>

Sets the content of a file, for large files use setContentChunked. Not supported in batching.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | `string` \| `Blob` \| `ArrayBuffer` | The file content |

#### Returns

`Promise`\<[`IFile`](SharepointAPI.Files.IFile.md)\>

#### Inherited from

\_File.setContent

#### Defined in

node_modules/@pnp/sp/files/types.d.ts:188

___

### setContentChunked

▸ **setContentChunked**(`file`, `progress?`, `chunkSize?`): `Promise`\<`IFileAddResult`\>

Sets the contents of a file using a chunked upload approach. Not supported in batching.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `Blob` | The file to upload |
| `progress?` | (`data`: `IFileUploadProgressData`) > `void` | A callback function which can be used to track the progress of the upload |
| `chunkSize?` | `number` | The size of each file slice, in bytes (default: 10485760) |

#### Returns

`Promise`\<`IFileAddResult`\>

#### Inherited from

\_File.setContentChunked

#### Defined in

node_modules/@pnp/sp/files/types.d.ts:200

___

### start

▸ **start**(`init?`): `Promise`\<`any`\>

Starts a timeline

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `init?` | `any` | A value passed into the execute logic from the initiator of the timeline |

#### Returns

`Promise`\<`any`\>

The result of this.execute

**`Description`**

This method first emits "init" to allow for any needed initial conditions then calls execute with any supplied init

#### Inherited from

\_File.start

#### Defined in

node_modules/@pnp/core/timeline.d.ts:125

___

### startUpload

▸ **startUpload**(`uploadId`, `fragment`): `Promise`\<`number`\>

Starts a new chunk upload session and uploads the first fragment.
The current file content is not changed when this method completes.
The method is idempotent (and therefore does not change the result) as long as you use the same values for uploadId and stream.
The upload session ends either when you use the CancelUpload method or when you successfully
complete the upload session by passing the rest of the file contents through the ContinueUpload and FinishUpload methods.
The StartUpload and ContinueUpload methods return the size of the running total of uploaded data in bytes,
so you can pass those return values to subsequent uses of ContinueUpload and FinishUpload.
This method is currently available only on Office 365.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uploadId` | `string` | The unique identifier of the upload session. |
| `fragment` | `Blob` \| `ArrayBuffer` | The file contents. |

#### Returns

`Promise`\<`number`\>

The size of the total uploaded data in bytes.

#### Inherited from

\_File.startUpload

#### Defined in

node_modules/@pnp/sp/files/types.d.ts:215

___

### toRequestUrl

▸ **toRequestUrl**(): `string`

Gets the full url with query information

#### Returns

`string`

#### Inherited from

\_File.toRequestUrl

#### Defined in

node_modules/@pnp/sp/spqueryable.d.ts:25

___

### toUrl

▸ **toUrl**(): `string`

Gets the current url

#### Returns

`string`

#### Inherited from

\_File.toUrl

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:46

___

### undoCheckout

▸ **undoCheckout**(): `Promise`\<`void`\>

Reverts an existing checkout for the file.

#### Returns

`Promise`\<`void`\>

#### Inherited from

\_File.undoCheckout

#### Defined in

node_modules/@pnp/sp/files/types.d.ts:170

___

### unpublish

▸ **unpublish**(`comment?`): `Promise`\<`void`\>

Removes the file from content approval or unpublish a major version.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `comment?` | `string` | The comment for the unpublish operation. Its length must be < 1023. |

#### Returns

`Promise`\<`void`\>

#### Inherited from

\_File.unpublish

#### Defined in

node_modules/@pnp/sp/files/types.d.ts:176

___

### using

▸ **using**(`...behaviors`): `this`

Apply the supplied behavior(s) to this timeline

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...behaviors` | `TimelinePipe`\<`any`\>[] | One or more behaviors |

#### Returns

`this`

`this` Timeline

#### Inherited from

\_File.using

#### Defined in

node_modules/@pnp/core/timeline.d.ts:95
