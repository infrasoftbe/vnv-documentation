[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](../modules/SharepointAPI.md) / [Sites](../modules/SharepointAPI.Sites.md) / ISite

# Interface: ISite

[SharepointAPI](../modules/SharepointAPI.md).[Sites](../modules/SharepointAPI.Sites.md).ISite

## Hierarchy

- `_Site`

  ↳ **`ISite`**

## Callable

### ISite

▸ **ISite**\<`T`\>(`init?`): `Promise`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`ISiteInfo`](SharepointAPI.Sites.ISiteInfo.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `init?` | `RequestInit` |

#### Returns

`Promise`\<`T`\>

#### Defined in

node_modules/@pnp/sp/sites/types.d.ts:90

## Table of contents

### Properties

- [InternalPromise](SharepointAPI.Sites.ISite.md#internalpromise)
- [InternalReject](SharepointAPI.Sites.ISite.md#internalreject)
- [InternalResolve](SharepointAPI.Sites.ISite.md#internalresolve)
- [\_inheritingObservers](SharepointAPI.Sites.ISite.md#_inheritingobservers)
- [\_url](SharepointAPI.Sites.ISite.md#_url)
- [moments](SharepointAPI.Sites.ISite.md#moments)
- [observers](SharepointAPI.Sites.ISite.md#observers)
- [parentUrl](SharepointAPI.Sites.ISite.md#parenturl)

### Accessors

- [emit](SharepointAPI.Sites.ISite.md#emit)
- [on](SharepointAPI.Sites.ISite.md#on)
- [query](SharepointAPI.Sites.ISite.md#query)
- [rootWeb](SharepointAPI.Sites.ISite.md#rootweb)

### Methods

- [cloneObserversOnChange](SharepointAPI.Sites.ISite.md#cloneobserversonchange)
- [concat](SharepointAPI.Sites.ISite.md#concat)
- [createCommunicationSite](SharepointAPI.Sites.ISite.md#createcommunicationsite)
- [createCommunicationSiteFromProps](SharepointAPI.Sites.ISite.md#createcommunicationsitefromprops)
- [createModernTeamSite](SharepointAPI.Sites.ISite.md#createmodernteamsite)
- [createModernTeamSiteFromProps](SharepointAPI.Sites.ISite.md#createmodernteamsitefromprops)
- [delete](SharepointAPI.Sites.ISite.md#delete)
- [error](SharepointAPI.Sites.ISite.md#error)
- [execute](SharepointAPI.Sites.ISite.md#execute)
- [exists](SharepointAPI.Sites.ISite.md#exists)
- [expand](SharepointAPI.Sites.ISite.md#expand)
- [getChanges](SharepointAPI.Sites.ISite.md#getchanges)
- [getContextInfo](SharepointAPI.Sites.ISite.md#getcontextinfo)
- [getDocumentLibraries](SharepointAPI.Sites.ISite.md#getdocumentlibraries)
- [getParent](SharepointAPI.Sites.ISite.md#getparent)
- [getRootWeb](SharepointAPI.Sites.ISite.md#getrootweb)
- [getWebUrlFromPageUrl](SharepointAPI.Sites.ISite.md#getweburlfrompageurl)
- [log](SharepointAPI.Sites.ISite.md#log)
- [openWebById](SharepointAPI.Sites.ISite.md#openwebbyid)
- [select](SharepointAPI.Sites.ISite.md#select)
- [setSiteLogo](SharepointAPI.Sites.ISite.md#setsitelogo)
- [start](SharepointAPI.Sites.ISite.md#start)
- [toRequestUrl](SharepointAPI.Sites.ISite.md#torequesturl)
- [toUrl](SharepointAPI.Sites.ISite.md#tourl)
- [update](SharepointAPI.Sites.ISite.md#update)
- [using](SharepointAPI.Sites.ISite.md#using)

## Properties

### InternalPromise

• `Protected` **InternalPromise**: `symbol`

#### Inherited from

\_Site.InternalPromise

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:25

___

### InternalReject

• `Protected` **InternalReject**: `symbol`

#### Inherited from

\_Site.InternalReject

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:24

___

### InternalResolve

• `Protected` **InternalResolve**: `symbol`

#### Inherited from

\_Site.InternalResolve

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:23

___

### \_inheritingObservers

• `Protected` **\_inheritingObservers**: `boolean`

#### Inherited from

\_Site.\_inheritingObservers

#### Defined in

node_modules/@pnp/core/timeline.d.ts:81

___

### \_url

• `Protected` **\_url**: `string`

#### Inherited from

\_Site.\_url

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:22

___

### moments

• `Protected` `Readonly` **moments**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `auth` | (`observers`: `QueryableAuthObserver`[], `url`: `URL`, `init`: `RequestInit`) => `Promise`\<[url: URL, init: RequestInit]\> |
| `construct` | (`observers`: `QueryableConstructObserver`[], `init`: `QueryableInit`, `path?`: `string`) => `Timeline`\<`any`\> |
| `data` | (`observers`: `QueryableDataObserver`\<`any`\>[], ...`args`: `any`[]) => `void` |
| `parse` | (`observers`: `QueryableParseObserver`[], `url`: `URL`, `response`: `Response`, `result`: `any`) => `Promise`\<[url: URL, response: Response, result: any]\> |
| `post` | (`observers`: `QueryablePostObserver`[], `url`: `URL`, `result`: `any`) => `Promise`\<[url: URL, result: any]\> |
| `pre` | (`observers`: `QueryablePreObserver`[], `url`: `string`, `init`: `RequestInit`, `result`: `any`) => `Promise`\<[url: string, init: RequestInit, result: any]\> |
| `send` | (`observers`: `QueryableSendObserver`[], `url`: `URL`, `init`: `RequestInit`) => `Promise`\<`Promise`\<`Response`\>\> |

#### Inherited from

\_Site.moments

#### Defined in

node_modules/@pnp/core/timeline.d.ts:77

___

### observers

• `Protected` **observers**: `ObserverCollection`

#### Inherited from

\_Site.observers

#### Defined in

node_modules/@pnp/core/timeline.d.ts:78

___

### parentUrl

• `Protected` **parentUrl**: `string`

#### Inherited from

\_Site.parentUrl

#### Defined in

node_modules/@pnp/sp/spqueryable.d.ts:13

## Accessors

### emit

• `get` **emit**(): `EmitProxyType`\<`T`\>

Property allowing access to invoke a moment from within this timeline

#### Returns

`EmitProxyType`\<`T`\>

#### Inherited from

\_Site.emit

#### Defined in

node_modules/@pnp/core/timeline.d.ts:116

___

### on

• `get` **on**(): `OnProxyType`\<`T`\>

Property allowing access to manage observers on moments within this timeline

#### Returns

`OnProxyType`\<`T`\>

#### Inherited from

\_Site.on

#### Defined in

node_modules/@pnp/core/timeline.d.ts:99

___

### query

• `get` **query**(): `URLSearchParams`

Querystring key, value pairs which will be included in the request

#### Returns

`URLSearchParams`

#### Inherited from

\_Site.query

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:41

___

### rootWeb

• `get` **rootWeb**(): `IWeb`

Gets the root web of the site collection

#### Returns

`IWeb`

#### Inherited from

\_Site.rootWeb

#### Defined in

node_modules/@pnp/sp/sites/types.d.ts:10

## Methods

### cloneObserversOnChange

▸ **cloneObserversOnChange**(): `void`

By default a timeline references the same observer collection as a parent timeline,
if any changes are made to the observers this method first clones them ensuring we
maintain a local copy and de-ref the parent

#### Returns

`void`

#### Inherited from

\_Site.cloneObserversOnChange

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

\_Site.concat

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:32

___

### createCommunicationSite

▸ **createCommunicationSite**(`title`, `lcid`, `shareByEmailEnabled`, `url`, `description?`, `classification?`, `siteDesignId?`, `hubSiteId?`, `owner?`): `Promise`\<[`ISiteCreationResponse`](SharepointAPI.Sites.ISiteCreationResponse.md)\>

Creates a Modern communication site.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `title` | `string` | The title of the site to create |
| `lcid` | `number` | The language to use for the site. If not specified will default to 1033 (English). |
| `shareByEmailEnabled` | `boolean` | If set to true, it will enable sharing files via Email. By default it is set to false |
| `url` | `string` | The fully qualified URL (e.g. https://yourtenant.sharepoint.com/sites/mysitecollection) of the site. |
| `description?` | `string` | The description of the communication site. |
| `classification?` | `string` | The Site classification to use. For instance 'Contoso Classified'. See https://www.youtube.com/watch?v=E-8Z2ggHcS0 for more information |
| `siteDesignId?` | `string` | The Guid of the site design to be used. You can use the below default OOTB GUIDs: Topic: 00000000-0000-0000-0000-000000000000 Showcase: 6142d2a0-63a5-4ba0-aede-d9fefca2c767 Blank: f6cc5403-0d63-442e-96c0-285923709ffc |
| `hubSiteId?` | `string` | The id of the hub site to which the new site should be associated |
| `owner?` | `string` | Optional owner value, required if executing the method in app only mode |

#### Returns

`Promise`\<[`ISiteCreationResponse`](SharepointAPI.Sites.ISiteCreationResponse.md)\>

#### Inherited from

\_Site.createCommunicationSite

#### Defined in

node_modules/@pnp/sp/sites/types.d.ts:62

___

### createCommunicationSiteFromProps

▸ **createCommunicationSiteFromProps**(`props`): `Promise`\<[`ISiteCreationResponse`](SharepointAPI.Sites.ISiteCreationResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ICreateCommSiteProps`](SharepointAPI.Sites.ICreateCommSiteProps.md) |

#### Returns

`Promise`\<[`ISiteCreationResponse`](SharepointAPI.Sites.ISiteCreationResponse.md)\>

#### Inherited from

\_Site.createCommunicationSiteFromProps

#### Defined in

node_modules/@pnp/sp/sites/types.d.ts:63

___

### createModernTeamSite

▸ **createModernTeamSite**(`displayName`, `alias`, `isPublic?`, `lcid?`, `description?`, `classification?`, `owners?`, `hubSiteId?`, `siteDesignId?`): `Promise`\<[`ISiteCreationResponse`](SharepointAPI.Sites.ISiteCreationResponse.md)\>

Creates a Modern team site backed by Office 365 group. For use in SP Online only. This will not work with App-only tokens

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `displayName` | `string` | The title or display name of the Modern team site to be created |
| `alias` | `string` | Alias of the underlying Office 365 Group |
| `isPublic?` | `boolean` | Defines whether the Office 365 Group will be public (default), or private. |
| `lcid?` | `number` | The language to use for the site. If not specified will default to English (1033). |
| `description?` | `string` | The description of the site to be created. |
| `classification?` | `string` | The Site classification to use. For instance 'Contoso Classified'. See https://www.youtube.com/watch?v=E-8Z2ggHcS0 for more information |
| `owners?` | `string`[] | The Owners of the site to be created |
| `hubSiteId?` | `string` | - |
| `siteDesignId?` | `string` | - |

#### Returns

`Promise`\<[`ISiteCreationResponse`](SharepointAPI.Sites.ISiteCreationResponse.md)\>

#### Inherited from

\_Site.createModernTeamSite

#### Defined in

node_modules/@pnp/sp/sites/types.d.ts:80

___

### createModernTeamSiteFromProps

▸ **createModernTeamSiteFromProps**(`props`): `Promise`\<[`ISiteCreationResponse`](SharepointAPI.Sites.ISiteCreationResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ICreateTeamSiteProps`](SharepointAPI.Sites.ICreateTeamSiteProps.md) |

#### Returns

`Promise`\<[`ISiteCreationResponse`](SharepointAPI.Sites.ISiteCreationResponse.md)\>

#### Inherited from

\_Site.createModernTeamSiteFromProps

#### Defined in

node_modules/@pnp/sp/sites/types.d.ts:81

___

### delete

▸ **delete**(): `Promise`\<`void`\>

Deletes the current site

#### Returns

`Promise`\<`void`\>

#### Inherited from

\_Site.delete

#### Defined in

node_modules/@pnp/sp/sites/types.d.ts:32

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

\_Site.error

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

\_Site.execute

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:47

___

### exists

▸ **exists**(`url`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | Site Url that you want to check if exists |

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

\_Site.exists

#### Defined in

node_modules/@pnp/sp/sites/types.d.ts:68

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

\_Site.expand

#### Defined in

node_modules/@pnp/sp/spqueryable.d.ts:37

___

### getChanges

▸ **getChanges**(`query`): `Promise`\<`any`\>

Returns the collection of changes from the change log that have occurred within the list, based on the specified query

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `IChangeQuery` | The change query |

#### Returns

`Promise`\<`any`\>

#### Inherited from

\_Site.getChanges

#### Defined in

node_modules/@pnp/sp/sites/types.d.ts:16

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

\_Site.getContextInfo

#### Defined in

node_modules/@pnp/sp/context-info/index.d.ts:8

___

### getDocumentLibraries

▸ **getDocumentLibraries**(`absoluteWebUrl`): `Promise`\<`IDocumentLibraryInformation`[]\>

Gets the document libraries on a site. Static method. (SharePoint Online only)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `absoluteWebUrl` | `string` | The absolute url of the web whose document libraries should be returned |

#### Returns

`Promise`\<`IDocumentLibraryInformation`[]\>

#### Inherited from

\_Site.getDocumentLibraries

#### Defined in

node_modules/@pnp/sp/sites/types.d.ts:38

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

\_Site.getParent

#### Defined in

node_modules/@pnp/sp/spqueryable.d.ts:43

___

### getRootWeb

▸ **getRootWeb**(): `Promise`\<`IWeb`\>

Gets a Web instance representing the root web of the site collection
correctly setup for chaining within the library

#### Returns

`Promise`\<`IWeb`\>

#### Inherited from

\_Site.getRootWeb

#### Defined in

node_modules/@pnp/sp/sites/types.d.ts:27

___

### getWebUrlFromPageUrl

▸ **getWebUrlFromPageUrl**(`absolutePageUrl`): `Promise`\<`string`\>

Gets the site url from a page url

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `absolutePageUrl` | `string` | The absolute url of the page |

#### Returns

`Promise`\<`string`\>

#### Inherited from

\_Site.getWebUrlFromPageUrl

#### Defined in

node_modules/@pnp/sp/sites/types.d.ts:44

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

\_Site.log

#### Defined in

node_modules/@pnp/core/timeline.d.ts:106

___

### openWebById

▸ **openWebById**(`webId`): `Promise`\<`IOpenWebByIdResult`\>

Opens a web by id (using POST)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `webId` | `string` | The GUID id of the web to open |

#### Returns

`Promise`\<`IOpenWebByIdResult`\>

#### Inherited from

\_Site.openWebById

#### Defined in

node_modules/@pnp/sp/sites/types.d.ts:22

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

\_Site.select

#### Defined in

node_modules/@pnp/sp/spqueryable.d.ts:31

___

### setSiteLogo

▸ **setSiteLogo**(`logoProperties`): `Promise`\<`void`\>

Set's the site's `Site Logo` property, vs the Site Icon property available on the web's properties

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `logoProperties` | `ISiteLogoProperties` | An instance of ISiteLogoProperties which sets the new site logo. |

#### Returns

`Promise`\<`void`\>

#### Inherited from

\_Site.setSiteLogo

#### Defined in

node_modules/@pnp/sp/sites/types.d.ts:88

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

\_Site.start

#### Defined in

node_modules/@pnp/core/timeline.d.ts:125

___

### toRequestUrl

▸ **toRequestUrl**(): `string`

Gets the full url with query information

#### Returns

`string`

#### Inherited from

\_Site.toRequestUrl

#### Defined in

node_modules/@pnp/sp/spqueryable.d.ts:25

___

### toUrl

▸ **toUrl**(): `string`

Gets the current url

#### Returns

`string`

#### Inherited from

\_Site.toUrl

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:46

___

### update

▸ **update**(`props`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ISiteInfo`](SharepointAPI.Sites.ISiteInfo.md) |

#### Returns

`Promise`\<`any`\>

#### Inherited from

\_Site.update

#### Defined in

node_modules/@pnp/sp/sites/types.d.ts:82

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

\_Site.using

#### Defined in

node_modules/@pnp/core/timeline.d.ts:95
