[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](../modules/SharepointAPI.md) / [Fields](../modules/SharepointAPI.Fields.md) / IField

# Interface: IField

[SharepointAPI](../modules/SharepointAPI.md).[Fields](../modules/SharepointAPI.Fields.md).IField

## Hierarchy

- `_Field`

- `IDeleteable`

  ↳ **`IField`**

## Callable

### IField

▸ **IField**\<`T`\>(`init?`): `Promise`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `IFieldInfo` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `init?` | `RequestInit` |

#### Returns

`Promise`\<`T`\>

#### Defined in

node_modules/@pnp/sp/fields/types.d.ts:172

## Table of contents

### Properties

- [InternalPromise](SharepointAPI.Fields.IField.md#internalpromise)
- [InternalReject](SharepointAPI.Fields.IField.md#internalreject)
- [InternalResolve](SharepointAPI.Fields.IField.md#internalresolve)
- [\_inheritingObservers](SharepointAPI.Fields.IField.md#_inheritingobservers)
- [\_url](SharepointAPI.Fields.IField.md#_url)
- [delete](SharepointAPI.Fields.IField.md#delete)
- [moments](SharepointAPI.Fields.IField.md#moments)
- [observers](SharepointAPI.Fields.IField.md#observers)
- [parentUrl](SharepointAPI.Fields.IField.md#parenturl)

### Accessors

- [emit](SharepointAPI.Fields.IField.md#emit)
- [on](SharepointAPI.Fields.IField.md#on)
- [query](SharepointAPI.Fields.IField.md#query)

### Methods

- [cloneObserversOnChange](SharepointAPI.Fields.IField.md#cloneobserversonchange)
- [concat](SharepointAPI.Fields.IField.md#concat)
- [error](SharepointAPI.Fields.IField.md#error)
- [execute](SharepointAPI.Fields.IField.md#execute)
- [expand](SharepointAPI.Fields.IField.md#expand)
- [getContextInfo](SharepointAPI.Fields.IField.md#getcontextinfo)
- [getParent](SharepointAPI.Fields.IField.md#getparent)
- [log](SharepointAPI.Fields.IField.md#log)
- [select](SharepointAPI.Fields.IField.md#select)
- [setShowInDisplayForm](SharepointAPI.Fields.IField.md#setshowindisplayform)
- [setShowInEditForm](SharepointAPI.Fields.IField.md#setshowineditform)
- [setShowInNewForm](SharepointAPI.Fields.IField.md#setshowinnewform)
- [start](SharepointAPI.Fields.IField.md#start)
- [toRequestUrl](SharepointAPI.Fields.IField.md#torequesturl)
- [toUrl](SharepointAPI.Fields.IField.md#tourl)
- [update](SharepointAPI.Fields.IField.md#update)
- [using](SharepointAPI.Fields.IField.md#using)

## Properties

### InternalPromise

• `Protected` **InternalPromise**: `symbol`

#### Inherited from

\_Field.InternalPromise

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:25

___

### InternalReject

• `Protected` **InternalReject**: `symbol`

#### Inherited from

\_Field.InternalReject

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:24

___

### InternalResolve

• `Protected` **InternalResolve**: `symbol`

#### Inherited from

\_Field.InternalResolve

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:23

___

### \_inheritingObservers

• `Protected` **\_inheritingObservers**: `boolean`

#### Inherited from

\_Field.\_inheritingObservers

#### Defined in

node_modules/@pnp/core/timeline.d.ts:81

___

### \_url

• `Protected` **\_url**: `string`

#### Inherited from

\_Field.\_url

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

\_Field.delete

#### Defined in

node_modules/@pnp/sp/fields/types.d.ts:151

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

\_Field.moments

#### Defined in

node_modules/@pnp/core/timeline.d.ts:77

___

### observers

• `Protected` **observers**: `ObserverCollection`

#### Inherited from

\_Field.observers

#### Defined in

node_modules/@pnp/core/timeline.d.ts:78

___

### parentUrl

• `Protected` **parentUrl**: `string`

#### Inherited from

\_Field.parentUrl

#### Defined in

node_modules/@pnp/sp/spqueryable.d.ts:13

## Accessors

### emit

• `get` **emit**(): `EmitProxyType`\<`T`\>

Property allowing access to invoke a moment from within this timeline

#### Returns

`EmitProxyType`\<`T`\>

#### Inherited from

\_Field.emit

#### Defined in

node_modules/@pnp/core/timeline.d.ts:116

___

### on

• `get` **on**(): `OnProxyType`\<`T`\>

Property allowing access to manage observers on moments within this timeline

#### Returns

`OnProxyType`\<`T`\>

#### Inherited from

\_Field.on

#### Defined in

node_modules/@pnp/core/timeline.d.ts:99

___

### query

• `get` **query**(): `URLSearchParams`

Querystring key, value pairs which will be included in the request

#### Returns

`URLSearchParams`

#### Inherited from

\_Field.query

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

\_Field.cloneObserversOnChange

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

\_Field.concat

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

\_Field.error

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

\_Field.execute

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

\_Field.expand

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

\_Field.getContextInfo

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

\_Field.getParent

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

\_Field.log

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

\_Field.select

#### Defined in

node_modules/@pnp/sp/spqueryable.d.ts:31

___

### setShowInDisplayForm

▸ **setShowInDisplayForm**(`show`): `Promise`\<`void`\>

Sets the value of the ShowInDisplayForm property for this field.

#### Parameters

| Name | Type |
| :------ | :------ |
| `show` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

\_Field.setShowInDisplayForm

#### Defined in

node_modules/@pnp/sp/fields/types.d.ts:162

___

### setShowInEditForm

▸ **setShowInEditForm**(`show`): `Promise`\<`void`\>

Sets the value of the ShowInEditForm property for this field.

#### Parameters

| Name | Type |
| :------ | :------ |
| `show` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

\_Field.setShowInEditForm

#### Defined in

node_modules/@pnp/sp/fields/types.d.ts:166

___

### setShowInNewForm

▸ **setShowInNewForm**(`show`): `Promise`\<`void`\>

Sets the value of the ShowInNewForm property for this field.

#### Parameters

| Name | Type |
| :------ | :------ |
| `show` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

\_Field.setShowInNewForm

#### Defined in

node_modules/@pnp/sp/fields/types.d.ts:170

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

\_Field.start

#### Defined in

node_modules/@pnp/core/timeline.d.ts:125

___

### toRequestUrl

▸ **toRequestUrl**(): `string`

Gets the full url with query information

#### Returns

`string`

#### Inherited from

\_Field.toRequestUrl

#### Defined in

node_modules/@pnp/sp/spqueryable.d.ts:25

___

### toUrl

▸ **toUrl**(): `string`

Gets the current url

#### Returns

`string`

#### Inherited from

\_Field.toUrl

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:46

___

### update

▸ **update**(`properties`, `fieldType?`): `Promise`\<[`IFieldUpdateResult`](SharepointAPI.Fields.IFieldUpdateResult.md)\>

Updates this field instance with the supplied properties

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `properties` | `any` | A plain object hash of values to update for the list |
| `fieldType?` | `string` | The type value such as SP.FieldLookup. Optional, looked up from the field if not provided |

#### Returns

`Promise`\<[`IFieldUpdateResult`](SharepointAPI.Fields.IFieldUpdateResult.md)\>

#### Inherited from

\_Field.update

#### Defined in

node_modules/@pnp/sp/fields/types.d.ts:158

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

\_Field.using

#### Defined in

node_modules/@pnp/core/timeline.d.ts:95
