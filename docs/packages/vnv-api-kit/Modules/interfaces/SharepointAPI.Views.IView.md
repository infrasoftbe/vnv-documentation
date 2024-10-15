[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](../modules/SharepointAPI.md) / [Views](../modules/SharepointAPI.Views.md) / IView

# Interface: IView

[SharepointAPI](../modules/SharepointAPI.md).[Views](../modules/SharepointAPI.Views.md).IView

## Hierarchy

- `_View`

- `IDeleteable`

  ↳ **`IView`**

## Callable

### IView

▸ **IView**\<`T`\>(`init?`): `Promise`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [`IViewInfo`](SharepointAPI.Views.IViewInfo.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `init?` | `RequestInit` |

#### Returns

`Promise`\<`T`\>

#### Defined in

node_modules/@pnp/sp/views/types.d.ts:48

## Table of contents

### Properties

- [InternalPromise](SharepointAPI.Views.IView.md#internalpromise)
- [InternalReject](SharepointAPI.Views.IView.md#internalreject)
- [InternalResolve](SharepointAPI.Views.IView.md#internalresolve)
- [\_inheritingObservers](SharepointAPI.Views.IView.md#_inheritingobservers)
- [\_url](SharepointAPI.Views.IView.md#_url)
- [delete](SharepointAPI.Views.IView.md#delete)
- [moments](SharepointAPI.Views.IView.md#moments)
- [observers](SharepointAPI.Views.IView.md#observers)
- [parentUrl](SharepointAPI.Views.IView.md#parenturl)

### Accessors

- [emit](SharepointAPI.Views.IView.md#emit)
- [fields](SharepointAPI.Views.IView.md#fields)
- [on](SharepointAPI.Views.IView.md#on)
- [query](SharepointAPI.Views.IView.md#query)

### Methods

- [cloneObserversOnChange](SharepointAPI.Views.IView.md#cloneobserversonchange)
- [concat](SharepointAPI.Views.IView.md#concat)
- [error](SharepointAPI.Views.IView.md#error)
- [execute](SharepointAPI.Views.IView.md#execute)
- [expand](SharepointAPI.Views.IView.md#expand)
- [getContextInfo](SharepointAPI.Views.IView.md#getcontextinfo)
- [getParent](SharepointAPI.Views.IView.md#getparent)
- [log](SharepointAPI.Views.IView.md#log)
- [renderAsHtml](SharepointAPI.Views.IView.md#renderashtml)
- [select](SharepointAPI.Views.IView.md#select)
- [setViewXml](SharepointAPI.Views.IView.md#setviewxml)
- [start](SharepointAPI.Views.IView.md#start)
- [toRequestUrl](SharepointAPI.Views.IView.md#torequesturl)
- [toUrl](SharepointAPI.Views.IView.md#tourl)
- [update](SharepointAPI.Views.IView.md#update)
- [using](SharepointAPI.Views.IView.md#using)

## Properties

### InternalPromise

• `Protected` **InternalPromise**: `symbol`

#### Inherited from

\_View.InternalPromise

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:25

___

### InternalReject

• `Protected` **InternalReject**: `symbol`

#### Inherited from

\_View.InternalReject

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:24

___

### InternalResolve

• `Protected` **InternalResolve**: `symbol`

#### Inherited from

\_View.InternalResolve

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:23

___

### \_inheritingObservers

• `Protected` **\_inheritingObservers**: `boolean`

#### Inherited from

\_View.\_inheritingObservers

#### Defined in

node_modules/@pnp/core/timeline.d.ts:81

___

### \_url

• `Protected` **\_url**: `string`

#### Inherited from

\_View.\_url

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:22

___

### delete

• **delete**: (`this`: `ISPQueryable`\<`any`\>) => `Promise`\<`void`\>

#### Type declaration

▸ (`this`): `Promise`\<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ISPQueryable`\<`any`\> |

##### Returns

`Promise`\<`void`\>

#### Inherited from

\_View.delete

#### Defined in

node_modules/@pnp/sp/views/types.d.ts:28

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

\_View.moments

#### Defined in

node_modules/@pnp/core/timeline.d.ts:77

___

### observers

• `Protected` **observers**: `ObserverCollection`

#### Inherited from

\_View.observers

#### Defined in

node_modules/@pnp/core/timeline.d.ts:78

___

### parentUrl

• `Protected` **parentUrl**: `string`

#### Inherited from

\_View.parentUrl

#### Defined in

node_modules/@pnp/sp/spqueryable.d.ts:13

## Accessors

### emit

• `get` **emit**(): `EmitProxyType`\<`T`\>

Property allowing access to invoke a moment from within this timeline

#### Returns

`EmitProxyType`\<`T`\>

#### Inherited from

\_View.emit

#### Defined in

node_modules/@pnp/core/timeline.d.ts:116

___

### fields

• `get` **fields**(): `IViewFields`

#### Returns

`IViewFields`

#### Inherited from

\_View.fields

#### Defined in

node_modules/@pnp/sp/views/types.d.ts:29

___

### on

• `get` **on**(): `OnProxyType`\<`T`\>

Property allowing access to manage observers on moments within this timeline

#### Returns

`OnProxyType`\<`T`\>

#### Inherited from

\_View.on

#### Defined in

node_modules/@pnp/core/timeline.d.ts:99

___

### query

• `get` **query**(): `URLSearchParams`

Querystring key, value pairs which will be included in the request

#### Returns

`URLSearchParams`

#### Inherited from

\_View.query

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:41

## Methods

### cloneObserversOnChange

▸ **cloneObserversOnChange**(): `void`

By default a timeline references the same observer collection as a parent timeline,
if any changes are made to the observers this method first clones them ensuring we
maintain a local copy and de-ref the parent

#### Returns

`void`

#### Inherited from

\_View.cloneObserversOnChange

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

\_View.concat

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:32

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

\_View.error

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

\_View.execute

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

\_View.expand

#### Defined in

node_modules/@pnp/sp/spqueryable.d.ts:37

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

\_View.getContextInfo

#### Defined in

node_modules/@pnp/sp/context-info/index.d.ts:8

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

\_View.getParent

#### Defined in

node_modules/@pnp/sp/spqueryable.d.ts:43

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

\_View.log

#### Defined in

node_modules/@pnp/core/timeline.d.ts:106

___

### renderAsHtml

▸ **renderAsHtml**(): `Promise`\<`string`\>

Returns the list view as HTML.

#### Returns

`Promise`\<`string`\>

#### Inherited from

\_View.renderAsHtml

#### Defined in

node_modules/@pnp/sp/views/types.d.ts:40

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

\_View.select

#### Defined in

node_modules/@pnp/sp/spqueryable.d.ts:31

___

### setViewXml

▸ **setViewXml**(`viewXml`): `Promise`\<`void`\>

Sets the view schema

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `viewXml` | `string` | The view XML to set |

#### Returns

`Promise`\<`void`\>

#### Inherited from

\_View.setViewXml

#### Defined in

node_modules/@pnp/sp/views/types.d.ts:46

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

\_View.start

#### Defined in

node_modules/@pnp/core/timeline.d.ts:125

___

### toRequestUrl

▸ **toRequestUrl**(): `string`

Gets the full url with query information

#### Returns

`string`

#### Inherited from

\_View.toRequestUrl

#### Defined in

node_modules/@pnp/sp/spqueryable.d.ts:25

___

### toUrl

▸ **toUrl**(): `string`

Gets the current url

#### Returns

`string`

#### Inherited from

\_View.toUrl

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:46

___

### update

▸ **update**(`props`): `Promise`\<[`IViewUpdateResult`](SharepointAPI.Views.IViewUpdateResult.md)\>

Updates this view intance with the supplied properties

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Partial`\<[`IViewInfo`](SharepointAPI.Views.IViewInfo.md)\> |

#### Returns

`Promise`\<[`IViewUpdateResult`](SharepointAPI.Views.IViewUpdateResult.md)\>

#### Inherited from

\_View.update

#### Defined in

node_modules/@pnp/sp/views/types.d.ts:35

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

\_View.using

#### Defined in

node_modules/@pnp/core/timeline.d.ts:95
