[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](../modules/SharepointAPI.md) / [Pages](../modules/SharepointAPI.Pages.md) / IClientsidePage

# Interface: IClientsidePage

[SharepointAPI](../modules/SharepointAPI.md).[Pages](../modules/SharepointAPI.Pages.md).IClientsidePage

## Hierarchy

- `_ClientsidePage`

  ↳ **`IClientsidePage`**

## Callable

### IClientsidePage

▸ **IClientsidePage**\<`T`\>(`init?`): `Promise`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `init?` | `RequestInit` |

#### Returns

`Promise`\<`T`\>

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:231

## Table of contents

### Properties

- [InternalPromise](SharepointAPI.Pages.IClientsidePage.md#internalpromise)
- [InternalReject](SharepointAPI.Pages.IClientsidePage.md#internalreject)
- [InternalResolve](SharepointAPI.Pages.IClientsidePage.md#internalresolve)
- [\_inheritingObservers](SharepointAPI.Pages.IClientsidePage.md#_inheritingobservers)
- [\_url](SharepointAPI.Pages.IClientsidePage.md#_url)
- [commentsDisabled](SharepointAPI.Pages.IClientsidePage.md#commentsdisabled)
- [json](SharepointAPI.Pages.IClientsidePage.md#json)
- [moments](SharepointAPI.Pages.IClientsidePage.md#moments)
- [observers](SharepointAPI.Pages.IClientsidePage.md#observers)
- [parentUrl](SharepointAPI.Pages.IClientsidePage.md#parenturl)
- [sections](SharepointAPI.Pages.IClientsidePage.md#sections)

### Accessors

- [authorByLine](SharepointAPI.Pages.IClientsidePage.md#authorbyline)
- [bannerImageUrl](SharepointAPI.Pages.IClientsidePage.md#bannerimageurl)
- [description](SharepointAPI.Pages.IClientsidePage.md#description)
- [emit](SharepointAPI.Pages.IClientsidePage.md#emit)
- [hasVerticalSection](SharepointAPI.Pages.IClientsidePage.md#hasverticalsection)
- [headerTextAlignment](SharepointAPI.Pages.IClientsidePage.md#headertextalignment)
- [layoutType](SharepointAPI.Pages.IClientsidePage.md#layouttype)
- [on](SharepointAPI.Pages.IClientsidePage.md#on)
- [pageLayout](SharepointAPI.Pages.IClientsidePage.md#pagelayout)
- [query](SharepointAPI.Pages.IClientsidePage.md#query)
- [reservedHeight](SharepointAPI.Pages.IClientsidePage.md#reservedheight)
- [showPublishDate](SharepointAPI.Pages.IClientsidePage.md#showpublishdate)
- [showTopicHeader](SharepointAPI.Pages.IClientsidePage.md#showtopicheader)
- [thumbnailUrl](SharepointAPI.Pages.IClientsidePage.md#thumbnailurl)
- [title](SharepointAPI.Pages.IClientsidePage.md#title)
- [topicHeader](SharepointAPI.Pages.IClientsidePage.md#topicheader)
- [verticalSection](SharepointAPI.Pages.IClientsidePage.md#verticalsection)

### Methods

- [addSection](SharepointAPI.Pages.IClientsidePage.md#addsection)
- [addVerticalSection](SharepointAPI.Pages.IClientsidePage.md#addverticalsection)
- [cloneObserversOnChange](SharepointAPI.Pages.IClientsidePage.md#cloneobserversonchange)
- [concat](SharepointAPI.Pages.IClientsidePage.md#concat)
- [copy](SharepointAPI.Pages.IClientsidePage.md#copy)
- [copyTo](SharepointAPI.Pages.IClientsidePage.md#copyto)
- [delete](SharepointAPI.Pages.IClientsidePage.md#delete)
- [discardPageCheckout](SharepointAPI.Pages.IClientsidePage.md#discardpagecheckout)
- [error](SharepointAPI.Pages.IClientsidePage.md#error)
- [execute](SharepointAPI.Pages.IClientsidePage.md#execute)
- [expand](SharepointAPI.Pages.IClientsidePage.md#expand)
- [findControl](SharepointAPI.Pages.IClientsidePage.md#findcontrol)
- [findControlById](SharepointAPI.Pages.IClientsidePage.md#findcontrolbyid)
- [fromJSON](SharepointAPI.Pages.IClientsidePage.md#fromjson)
- [getCanvasContent1](SharepointAPI.Pages.IClientsidePage.md#getcanvascontent1)
- [getContextInfo](SharepointAPI.Pages.IClientsidePage.md#getcontextinfo)
- [getControls](SharepointAPI.Pages.IClientsidePage.md#getcontrols)
- [getItem](SharepointAPI.Pages.IClientsidePage.md#getitem)
- [getLayoutWebpartsContent](SharepointAPI.Pages.IClientsidePage.md#getlayoutwebpartscontent)
- [getParent](SharepointAPI.Pages.IClientsidePage.md#getparent)
- [load](SharepointAPI.Pages.IClientsidePage.md#load)
- [log](SharepointAPI.Pages.IClientsidePage.md#log)
- [promoteToNews](SharepointAPI.Pages.IClientsidePage.md#promotetonews)
- [recycle](SharepointAPI.Pages.IClientsidePage.md#recycle)
- [save](SharepointAPI.Pages.IClientsidePage.md#save)
- [saveAsTemplate](SharepointAPI.Pages.IClientsidePage.md#saveastemplate)
- [schedulePublish](SharepointAPI.Pages.IClientsidePage.md#schedulepublish)
- [select](SharepointAPI.Pages.IClientsidePage.md#select)
- [setAuthorById](SharepointAPI.Pages.IClientsidePage.md#setauthorbyid)
- [setAuthorByLoginName](SharepointAPI.Pages.IClientsidePage.md#setauthorbyloginname)
- [setBannerImage](SharepointAPI.Pages.IClientsidePage.md#setbannerimage)
- [setBannerImageFromExternalUrl](SharepointAPI.Pages.IClientsidePage.md#setbannerimagefromexternalurl)
- [setControls](SharepointAPI.Pages.IClientsidePage.md#setcontrols)
- [share](SharepointAPI.Pages.IClientsidePage.md#share)
- [start](SharepointAPI.Pages.IClientsidePage.md#start)
- [toRequestUrl](SharepointAPI.Pages.IClientsidePage.md#torequesturl)
- [toUrl](SharepointAPI.Pages.IClientsidePage.md#tourl)
- [using](SharepointAPI.Pages.IClientsidePage.md#using)

## Properties

### InternalPromise

• `Protected` **InternalPromise**: `symbol`

#### Inherited from

\_ClientsidePage.InternalPromise

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:25

___

### InternalReject

• `Protected` **InternalReject**: `symbol`

#### Inherited from

\_ClientsidePage.InternalReject

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:24

___

### InternalResolve

• `Protected` **InternalResolve**: `symbol`

#### Inherited from

\_ClientsidePage.InternalResolve

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:23

___

### \_inheritingObservers

• `Protected` **\_inheritingObservers**: `boolean`

#### Inherited from

\_ClientsidePage.\_inheritingObservers

#### Defined in

node_modules/@pnp/core/timeline.d.ts:81

___

### \_url

• `Protected` **\_url**: `string`

#### Inherited from

\_ClientsidePage.\_url

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:22

___

### commentsDisabled

• **commentsDisabled**: `boolean`

#### Inherited from

\_ClientsidePage.commentsDisabled

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:38

___

### json

• `Protected` `Optional` **json**: `Partial`\<`IPageData`\>

#### Inherited from

\_ClientsidePage.json

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:36

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

\_ClientsidePage.moments

#### Defined in

node_modules/@pnp/core/timeline.d.ts:77

___

### observers

• `Protected` **observers**: `ObserverCollection`

#### Inherited from

\_ClientsidePage.observers

#### Defined in

node_modules/@pnp/core/timeline.d.ts:78

___

### parentUrl

• `Protected` **parentUrl**: `string`

#### Inherited from

\_ClientsidePage.parentUrl

#### Defined in

node_modules/@pnp/sp/spqueryable.d.ts:13

___

### sections

• **sections**: `CanvasSection`[]

#### Inherited from

\_ClientsidePage.sections

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:37

## Accessors

### authorByLine

• `get` **authorByLine**(): `string`

#### Returns

`string`

#### Inherited from

\_ClientsidePage.authorByLine

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:71

___

### bannerImageUrl

• `get` **bannerImageUrl**(): `string`

#### Returns

`string`

#### Inherited from

\_ClientsidePage.bannerImageUrl

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:50

• `set` **bannerImageUrl**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

\_ClientsidePage.bannerImageUrl

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:51

___

### description

• `get` **description**(): `string`

#### Returns

`string`

#### Inherited from

\_ClientsidePage.description

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:60

• `set` **description**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

\_ClientsidePage.description

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:61

___

### emit

• `get` **emit**(): `EmitProxyType`\<`T`\>

Property allowing access to invoke a moment from within this timeline

#### Returns

`EmitProxyType`\<`T`\>

#### Inherited from

\_ClientsidePage.emit

#### Defined in

node_modules/@pnp/core/timeline.d.ts:116

___

### hasVerticalSection

• `get` **hasVerticalSection**(): `boolean`

#### Returns

`boolean`

#### Inherited from

\_ClientsidePage.hasVerticalSection

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:70

___

### headerTextAlignment

• `get` **headerTextAlignment**(): `TextAlignment`

#### Returns

`TextAlignment`

#### Inherited from

\_ClientsidePage.headerTextAlignment

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:64

• `set` **headerTextAlignment**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `TextAlignment` |

#### Returns

`void`

#### Inherited from

\_ClientsidePage.headerTextAlignment

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:65

___

### layoutType

• `get` **layoutType**(): `LayoutType`

#### Returns

`LayoutType`

#### Inherited from

\_ClientsidePage.layoutType

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:62

• `set` **layoutType**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `LayoutType` |

#### Returns

`void`

#### Inherited from

\_ClientsidePage.layoutType

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:63

___

### on

• `get` **on**(): `OnProxyType`\<`T`\>

Property allowing access to manage observers on moments within this timeline

#### Returns

`OnProxyType`\<`T`\>

#### Inherited from

\_ClientsidePage.on

#### Defined in

node_modules/@pnp/core/timeline.d.ts:99

___

### pageLayout

• `get` **pageLayout**(): `ClientsidePageLayoutType`

#### Returns

`ClientsidePageLayoutType`

#### Inherited from

\_ClientsidePage.pageLayout

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:48

• `set` **pageLayout**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `ClientsidePageLayoutType` |

#### Returns

`void`

#### Inherited from

\_ClientsidePage.pageLayout

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:49

___

### query

• `get` **query**(): `URLSearchParams`

Querystring key, value pairs which will be included in the request

#### Returns

`URLSearchParams`

#### Inherited from

\_ClientsidePage.query

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:41

___

### reservedHeight

• `get` **reservedHeight**(): `number`

#### Returns

`number`

#### Inherited from

\_ClientsidePage.reservedHeight

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:58

• `set` **reservedHeight**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

\_ClientsidePage.reservedHeight

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:59

___

### showPublishDate

• `get` **showPublishDate**(): `boolean`

#### Returns

`boolean`

#### Inherited from

\_ClientsidePage.showPublishDate

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:68

• `set` **showPublishDate**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

\_ClientsidePage.showPublishDate

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:69

___

### showTopicHeader

• `get` **showTopicHeader**(): `boolean`

#### Returns

`boolean`

#### Inherited from

\_ClientsidePage.showTopicHeader

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:66

• `set` **showTopicHeader**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

\_ClientsidePage.showTopicHeader

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:67

___

### thumbnailUrl

• `get` **thumbnailUrl**(): `string`

#### Returns

`string`

#### Inherited from

\_ClientsidePage.thumbnailUrl

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:52

• `set` **thumbnailUrl**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

\_ClientsidePage.thumbnailUrl

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:53

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Inherited from

\_ClientsidePage.title

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:56

• `set` **title**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

\_ClientsidePage.title

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:57

___

### topicHeader

• `get` **topicHeader**(): `string`

#### Returns

`string`

#### Inherited from

\_ClientsidePage.topicHeader

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:54

• `set` **topicHeader**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

\_ClientsidePage.topicHeader

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:55

___

### verticalSection

• `get` **verticalSection**(): `CanvasSection`

#### Returns

`CanvasSection`

#### Inherited from

\_ClientsidePage.verticalSection

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:72

## Methods

### addSection

▸ **addSection**(): `CanvasSection`

Add a section to this page

#### Returns

`CanvasSection`

#### Inherited from

\_ClientsidePage.addSection

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:76

___

### addVerticalSection

▸ **addVerticalSection**(): `CanvasSection`

Add a section to this page

#### Returns

`CanvasSection`

#### Inherited from

\_ClientsidePage.addVerticalSection

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:80

___

### cloneObserversOnChange

▸ **cloneObserversOnChange**(): `void`

By default a timeline references the same observer collection as a parent timeline,
if any changes are made to the observers this method first clones them ensuring we
maintain a local copy and de-ref the parent

#### Returns

`void`

#### Inherited from

\_ClientsidePage.cloneObserversOnChange

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

\_ClientsidePage.concat

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:32

___

### copy

▸ **copy**(`web`, `pageName`, `title`, `publish?`, `promotedState?`): `Promise`\<[`IClientsidePage`](SharepointAPI.Pages.IClientsidePage.md)\>

Creates a new page with all of the content copied from this page

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `web` | `IWeb` | The web where we will create the copy |
| `pageName` | `string` | The file name of the new page |
| `title` | `string` | The title of the new page |
| `publish?` | `boolean` | If true the page will be published (Default: true) |
| `promotedState?` | `PromotedState` | - |

#### Returns

`Promise`\<[`IClientsidePage`](SharepointAPI.Pages.IClientsidePage.md)\>

#### Inherited from

\_ClientsidePage.copy

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:125

___

### copyTo

▸ **copyTo**(`page`, `publish?`): `Promise`\<[`IClientsidePage`](SharepointAPI.Pages.IClientsidePage.md)\>

Copies the content from this page to the supplied page instance NOTE: fully overwriting any previous content!!

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `page` | [`IClientsidePage`](SharepointAPI.Pages.IClientsidePage.md) | Page whose content we replace with this page's content |
| `publish?` | `boolean` | If true the page will be published after the copy, if false it will be saved but left unpublished (Default: true) |

#### Returns

`Promise`\<[`IClientsidePage`](SharepointAPI.Pages.IClientsidePage.md)\>

#### Inherited from

\_ClientsidePage.copyTo

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:132

___

### delete

▸ **delete**(): `Promise`\<`void`\>

Delete this page

#### Returns

`Promise`\<`void`\>

#### Inherited from

\_ClientsidePage.delete

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:173

___

### discardPageCheckout

▸ **discardPageCheckout**(): `Promise`\<`void`\>

Discards the checkout of this page

#### Returns

`Promise`\<`void`\>

#### Inherited from

\_ClientsidePage.discardPageCheckout

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:100

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

\_ClientsidePage.error

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

\_ClientsidePage.execute

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:47

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

\_ClientsidePage.expand

#### Defined in

node_modules/@pnp/sp/spqueryable.d.ts:37

___

### findControl

▸ **findControl**\<`T`\>(`predicate`): `T`

Finds a control within this page's control tree using the supplied predicate

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ColumnControl`\<`any`\> = `ColumnControl`\<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`c`: `ColumnControl`\<`any`\>) => `boolean` | Takes a control and returns true or false, if true that control is returned by findControl |

#### Returns

`T`

#### Inherited from

\_ClientsidePage.findControl

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:116

___

### findControlById

▸ **findControlById**\<`T`\>(`id`): `T`

Finds a control by the specified instance id

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ColumnControl`\<`any`\> = `ColumnControl`\<`any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Instance id of the control to find |

#### Returns

`T`

#### Inherited from

\_ClientsidePage.findControlById

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:110

___

### fromJSON

▸ **fromJSON**(`pageData`): `this`

Loads this instance from the appropriate JSON data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pageData` | `Partial`\<`IPageData`\> | JSON data to load (replaces any existing data) |

#### Returns

`this`

#### Inherited from

\_ClientsidePage.fromJSON

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:86

___

### getCanvasContent1

▸ **getCanvasContent1**(): `string`

#### Returns

`string`

#### Inherited from

\_ClientsidePage.getCanvasContent1

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:196

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

\_ClientsidePage.getContextInfo

#### Defined in

node_modules/@pnp/sp/context-info/index.d.ts:8

___

### getControls

▸ **getControls**(): `IClientsideControlBaseData`[]

#### Returns

`IClientsideControlBaseData`[]

#### Inherited from

\_ClientsidePage.getControls

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:199

___

### getItem

▸ **getItem**\<`T`\>(`...selects`): `Promise`\<[`IItem`](SharepointAPI.Items.IItem.md) & `T`\>

Gets the list item associated with this clientside page

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...selects` | `string`[] | Specific set of fields to include when getting the item |

#### Returns

`Promise`\<[`IItem`](SharepointAPI.Items.IItem.md) & `T`\>

#### Inherited from

\_ClientsidePage.getItem

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:165

___

### getLayoutWebpartsContent

▸ **getLayoutWebpartsContent**(): `string`

#### Returns

`string`

#### Inherited from

\_ClientsidePage.getLayoutWebpartsContent

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:197

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

\_ClientsidePage.getParent

#### Defined in

node_modules/@pnp/sp/spqueryable.d.ts:43

___

### load

▸ **load**(): `Promise`\<[`IClientsidePage`](SharepointAPI.Pages.IClientsidePage.md)\>

Loads this page's content from the server

#### Returns

`Promise`\<[`IClientsidePage`](SharepointAPI.Pages.IClientsidePage.md)\>

#### Inherited from

\_ClientsidePage.load

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:90

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

\_ClientsidePage.log

#### Defined in

node_modules/@pnp/core/timeline.d.ts:106

___

### promoteToNews

▸ **promoteToNews**(): `Promise`\<`boolean`\>

Promotes this page as a news item

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

\_ClientsidePage.promoteToNews

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:104

___

### recycle

▸ **recycle**(): `Promise`\<`void`\>

Recycle this page

#### Returns

`Promise`\<`void`\>

#### Inherited from

\_ClientsidePage.recycle

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:169

___

### save

▸ **save**(`publish?`): `Promise`\<`boolean`\>

Persists the content changes (sections, columns, and controls) [does not work with batching]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `publish?` | `boolean` | If true the page is published, if false the changes are persisted to SharePoint but not published [Default: true] |

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

\_ClientsidePage.save

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:96

___

### saveAsTemplate

▸ **saveAsTemplate**(`publish?`): `Promise`\<[`IClientsidePage`](SharepointAPI.Pages.IClientsidePage.md)\>

Saves a copy of this page as a template in this library's Templates folder

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `publish?` | `boolean` | If true the template is published, false the template is not published (default: true) |

#### Returns

`Promise`\<[`IClientsidePage`](SharepointAPI.Pages.IClientsidePage.md)\>

IClientsidePage instance representing the new template page

#### Inherited from

\_ClientsidePage.saveAsTemplate

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:187

___

### schedulePublish

▸ **schedulePublish**(`publishDate`): `Promise`\<`string`\>

Schedules a page for publishing

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `publishDate` | `Date` | Date to publish the item |

#### Returns

`Promise`\<`string`\>

Version which was scheduled to be published

#### Inherited from

\_ClientsidePage.schedulePublish

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:180

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

\_ClientsidePage.select

#### Defined in

node_modules/@pnp/sp/spqueryable.d.ts:31

___

### setAuthorById

▸ **setAuthorById**(`authorId`): `Promise`\<`void`\>

Sets the authors for this page from the supplied list of user integer ids

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `authorId` | `number` | The integer id of the user to set as the author |

#### Returns

`Promise`\<`void`\>

#### Inherited from

\_ClientsidePage.setAuthorById

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:153

___

### setAuthorByLoginName

▸ **setAuthorByLoginName**(`authorLoginName`): `Promise`\<`void`\>

Sets the authors for this page from the supplied list of user integer ids

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `authorLoginName` | `string` | The login name of the user (ex: i:0#.f\|membership\|name@tenant.com) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

\_ClientsidePage.setAuthorByLoginName

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:159

___

### setBannerImage

▸ **setBannerImage**(`url`, `props?`): `void`

Sets the modern page banner image

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | Url of the image to display |
| `props?` | `IBannerImageProps` | - |

#### Returns

`void`

#### Inherited from

\_ClientsidePage.setBannerImage

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:140

___

### setBannerImageFromExternalUrl

▸ **setBannerImageFromExternalUrl**(`url`, `props?`): `Promise`\<`void`\>

Sets the banner image url from an external source. You must call save to persist the changes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | absolute url of the external file |
| `props?` | `IBannerImageProps` | optional set of properties to control display of the banner image |

#### Returns

`Promise`\<`void`\>

#### Inherited from

\_ClientsidePage.setBannerImageFromExternalUrl

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:147

___

### setControls

▸ **setControls**(`controls`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `controls` | `IClientsideControlBaseData`[] |

#### Returns

`void`

#### Inherited from

\_ClientsidePage.setControls

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:198

___

### share

▸ **share**(`emails`, `message`): `Promise`\<`void`\>

Share this Page's Preview content by Email

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emails` | `string`[] | Set of emails to which the preview is shared |
| `message` | `string` | The message to include |

#### Returns

`Promise`\<`void`\>

void

#### Inherited from

\_ClientsidePage.share

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:195

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

\_ClientsidePage.start

#### Defined in

node_modules/@pnp/core/timeline.d.ts:125

___

### toRequestUrl

▸ **toRequestUrl**(): `string`

Gets the full url with query information

#### Returns

`string`

#### Inherited from

\_ClientsidePage.toRequestUrl

#### Defined in

node_modules/@pnp/sp/spqueryable.d.ts:25

___

### toUrl

▸ **toUrl**(): `string`

Gets the current url

#### Returns

`string`

#### Inherited from

\_ClientsidePage.toUrl

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:46

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

\_ClientsidePage.using

#### Defined in

node_modules/@pnp/core/timeline.d.ts:95
