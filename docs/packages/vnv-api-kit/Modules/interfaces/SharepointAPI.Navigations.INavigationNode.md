[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](../modules/SharepointAPI.md) / [Navigations](../modules/SharepointAPI.Navigations.md) / INavigationNode

# Interface: INavigationNode

[SharepointAPI](../modules/SharepointAPI.md).[Navigations](../modules/SharepointAPI.Navigations.md).INavigationNode

## Hierarchy

- `_NavigationNode`

- `IDeleteable`

  ↳ **`INavigationNode`**

## Callable

### INavigationNode

▸ **INavigationNode**\<`T`\>(`init?`): `Promise`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `INavNodeInfo` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `init?` | `RequestInit` |

#### Returns

`Promise`\<`T`\>

#### Defined in

node_modules/@pnp/sp/navigation/types.d.ts:49

## Table of contents

### Properties

- [InternalPromise](SharepointAPI.Navigations.INavigationNode.md#internalpromise)
- [InternalReject](SharepointAPI.Navigations.INavigationNode.md#internalreject)
- [InternalResolve](SharepointAPI.Navigations.INavigationNode.md#internalresolve)
- [\_inheritingObservers](SharepointAPI.Navigations.INavigationNode.md#_inheritingobservers)
- [\_url](SharepointAPI.Navigations.INavigationNode.md#_url)
- [delete](SharepointAPI.Navigations.INavigationNode.md#delete)
- [moments](SharepointAPI.Navigations.INavigationNode.md#moments)
- [observers](SharepointAPI.Navigations.INavigationNode.md#observers)
- [parentUrl](SharepointAPI.Navigations.INavigationNode.md#parenturl)

### Accessors

- [children](SharepointAPI.Navigations.INavigationNode.md#children)
- [emit](SharepointAPI.Navigations.INavigationNode.md#emit)
- [on](SharepointAPI.Navigations.INavigationNode.md#on)
- [query](SharepointAPI.Navigations.INavigationNode.md#query)

### Methods

- [cloneObserversOnChange](SharepointAPI.Navigations.INavigationNode.md#cloneobserversonchange)
- [concat](SharepointAPI.Navigations.INavigationNode.md#concat)
- [error](SharepointAPI.Navigations.INavigationNode.md#error)
- [execute](SharepointAPI.Navigations.INavigationNode.md#execute)
- [expand](SharepointAPI.Navigations.INavigationNode.md#expand)
- [getContextInfo](SharepointAPI.Navigations.INavigationNode.md#getcontextinfo)
- [getParent](SharepointAPI.Navigations.INavigationNode.md#getparent)
- [log](SharepointAPI.Navigations.INavigationNode.md#log)
- [select](SharepointAPI.Navigations.INavigationNode.md#select)
- [start](SharepointAPI.Navigations.INavigationNode.md#start)
- [toRequestUrl](SharepointAPI.Navigations.INavigationNode.md#torequesturl)
- [toUrl](SharepointAPI.Navigations.INavigationNode.md#tourl)
- [update](SharepointAPI.Navigations.INavigationNode.md#update)
- [using](SharepointAPI.Navigations.INavigationNode.md#using)

## Properties

### InternalPromise

• `Protected` **InternalPromise**: `symbol`

#### Inherited from

\_NavigationNode.InternalPromise

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:25

___

### InternalReject

• `Protected` **InternalReject**: `symbol`

#### Inherited from

\_NavigationNode.InternalReject

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:24

___

### InternalResolve

• `Protected` **InternalResolve**: `symbol`

#### Inherited from

\_NavigationNode.InternalResolve

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:23

___

### \_inheritingObservers

• `Protected` **\_inheritingObservers**: `boolean`

#### Inherited from

\_NavigationNode.\_inheritingObservers

#### Defined in

node_modules/@pnp/core/timeline.d.ts:81

___

### \_url

• `Protected` **\_url**: `string`

#### Inherited from

\_NavigationNode.\_url

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

\_NavigationNode.delete

#### Defined in

node_modules/@pnp/sp/navigation/types.d.ts:37

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

\_NavigationNode.moments

#### Defined in

node_modules/@pnp/core/timeline.d.ts:77

___

### observers

• `Protected` **observers**: `ObserverCollection`

#### Inherited from

\_NavigationNode.observers

#### Defined in

node_modules/@pnp/core/timeline.d.ts:78

___

### parentUrl

• `Protected` **parentUrl**: `string`

#### Inherited from

\_NavigationNode.parentUrl

#### Defined in

node_modules/@pnp/sp/spqueryable.d.ts:13

## Accessors

### children

• `get` **children**(): `INavigationNodes`

Represents the child nodes of this node

#### Returns

`INavigationNodes`

#### Inherited from

\_NavigationNode.children

#### Defined in

node_modules/@pnp/sp/navigation/types.d.ts:41

___

### emit

• `get` **emit**(): `EmitProxyType`\<`T`\>

Property allowing access to invoke a moment from within this timeline

#### Returns

`EmitProxyType`\<`T`\>

#### Inherited from

\_NavigationNode.emit

#### Defined in

node_modules/@pnp/core/timeline.d.ts:116

___

### on

• `get` **on**(): `OnProxyType`\<`T`\>

Property allowing access to manage observers on moments within this timeline

#### Returns

`OnProxyType`\<`T`\>

#### Inherited from

\_NavigationNode.on

#### Defined in

node_modules/@pnp/core/timeline.d.ts:99

___

### query

• `get` **query**(): `URLSearchParams`

Querystring key, value pairs which will be included in the request

#### Returns

`URLSearchParams`

#### Inherited from

\_NavigationNode.query

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

\_NavigationNode.cloneObserversOnChange

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

\_NavigationNode.concat

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

\_NavigationNode.error

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

\_NavigationNode.execute

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

\_NavigationNode.expand

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

\_NavigationNode.getContextInfo

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

\_NavigationNode.getParent

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

\_NavigationNode.log

#### Defined in

node_modules/@pnp/core/timeline.d.ts:106

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

\_NavigationNode.select

#### Defined in

node_modules/@pnp/sp/spqueryable.d.ts:31

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

\_NavigationNode.start

#### Defined in

node_modules/@pnp/core/timeline.d.ts:125

___

### toRequestUrl

▸ **toRequestUrl**(): `string`

Gets the full url with query information

#### Returns

`string`

#### Inherited from

\_NavigationNode.toRequestUrl

#### Defined in

node_modules/@pnp/sp/spqueryable.d.ts:25

___

### toUrl

▸ **toUrl**(): `string`

Gets the current url

#### Returns

`string`

#### Inherited from

\_NavigationNode.toUrl

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:46

___

### update

▸ **update**(`properties`): `Promise`\<`INavNodeUpdateResult`\>

Updates this node

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `properties` | `Partial`\<`INavNodeInfo`\> | Properties used to update this node |

#### Returns

`Promise`\<`INavNodeUpdateResult`\>

#### Inherited from

\_NavigationNode.update

#### Defined in

node_modules/@pnp/sp/navigation/types.d.ts:47

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

\_NavigationNode.using

#### Defined in

node_modules/@pnp/core/timeline.d.ts:95
