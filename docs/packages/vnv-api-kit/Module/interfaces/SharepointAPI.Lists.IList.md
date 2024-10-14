[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](../modules/SharepointAPI.md) / [Lists](../modules/SharepointAPI.Lists.md) / IList

# Interface: IList

[SharepointAPI](../modules/SharepointAPI.md).[Lists](../modules/SharepointAPI.Lists.md).IList

## Hierarchy

- `_List`

- `IDeleteableWithETag`

- `ISecurableMethods`

  ↳ **`IList`**

## Callable

### IList

▸ **IList**\<`T`\>(`init?`): `Promise`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `IListInfo` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `init?` | `RequestInit` |

#### Returns

`Promise`\<`T`\>

#### Defined in

node_modules/@pnp/sp/lists/types.d.ts:152

node_modules/@pnp/sp/security/list.d.ts:5

node_modules/@pnp/sp/items/list.d.ts:6

## Table of contents

### Properties

- [InternalPromise](SharepointAPI.Lists.IList.md#internalpromise)
- [InternalReject](SharepointAPI.Lists.IList.md#internalreject)
- [InternalResolve](SharepointAPI.Lists.IList.md#internalresolve)
- [\_inheritingObservers](SharepointAPI.Lists.IList.md#_inheritingobservers)
- [\_url](SharepointAPI.Lists.IList.md#_url)
- [delete](SharepointAPI.Lists.IList.md#delete)
- [firstUniqueAncestorSecurableObject](SharepointAPI.Lists.IList.md#firstuniqueancestorsecurableobject)
- [items](SharepointAPI.Lists.IList.md#items)
- [moments](SharepointAPI.Lists.IList.md#moments)
- [observers](SharepointAPI.Lists.IList.md#observers)
- [parentUrl](SharepointAPI.Lists.IList.md#parenturl)
- [roleAssignments](SharepointAPI.Lists.IList.md#roleassignments)

### Accessors

- [effectiveBasePermissions](SharepointAPI.Lists.IList.md#effectivebasepermissions)
- [emit](SharepointAPI.Lists.IList.md#emit)
- [eventReceivers](SharepointAPI.Lists.IList.md#eventreceivers)
- [informationRightsManagementSettings](SharepointAPI.Lists.IList.md#informationrightsmanagementsettings)
- [on](SharepointAPI.Lists.IList.md#on)
- [query](SharepointAPI.Lists.IList.md#query)
- [relatedFields](SharepointAPI.Lists.IList.md#relatedfields)

### Methods

- [addValidateUpdateItemUsingPath](SharepointAPI.Lists.IList.md#addvalidateupdateitemusingpath)
- [breakRoleInheritance](SharepointAPI.Lists.IList.md#breakroleinheritance)
- [cloneObserversOnChange](SharepointAPI.Lists.IList.md#cloneobserversonchange)
- [concat](SharepointAPI.Lists.IList.md#concat)
- [currentUserHasPermissions](SharepointAPI.Lists.IList.md#currentuserhaspermissions)
- [error](SharepointAPI.Lists.IList.md#error)
- [execute](SharepointAPI.Lists.IList.md#execute)
- [expand](SharepointAPI.Lists.IList.md#expand)
- [getChanges](SharepointAPI.Lists.IList.md#getchanges)
- [getContextInfo](SharepointAPI.Lists.IList.md#getcontextinfo)
- [getCurrentUserEffectivePermissions](SharepointAPI.Lists.IList.md#getcurrentusereffectivepermissions)
- [getItemsByCAMLQuery](SharepointAPI.Lists.IList.md#getitemsbycamlquery)
- [getListItemChangesSinceToken](SharepointAPI.Lists.IList.md#getlistitemchangessincetoken)
- [getParent](SharepointAPI.Lists.IList.md#getparent)
- [getParentInfos](SharepointAPI.Lists.IList.md#getparentinfos)
- [getUserEffectivePermissions](SharepointAPI.Lists.IList.md#getusereffectivepermissions)
- [hasPermissions](SharepointAPI.Lists.IList.md#haspermissions)
- [log](SharepointAPI.Lists.IList.md#log)
- [recycle](SharepointAPI.Lists.IList.md#recycle)
- [renderListData](SharepointAPI.Lists.IList.md#renderlistdata)
- [renderListDataAsStream](SharepointAPI.Lists.IList.md#renderlistdataasstream)
- [renderListFormData](SharepointAPI.Lists.IList.md#renderlistformdata)
- [reserveListItemId](SharepointAPI.Lists.IList.md#reservelistitemid)
- [resetRoleInheritance](SharepointAPI.Lists.IList.md#resetroleinheritance)
- [select](SharepointAPI.Lists.IList.md#select)
- [start](SharepointAPI.Lists.IList.md#start)
- [toRequestUrl](SharepointAPI.Lists.IList.md#torequesturl)
- [toUrl](SharepointAPI.Lists.IList.md#tourl)
- [update](SharepointAPI.Lists.IList.md#update)
- [userHasPermissions](SharepointAPI.Lists.IList.md#userhaspermissions)
- [using](SharepointAPI.Lists.IList.md#using)

## Properties

### InternalPromise

• `Protected` **InternalPromise**: `symbol`

#### Inherited from

\_List.InternalPromise

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:25

___

### InternalReject

• `Protected` **InternalReject**: `symbol`

#### Inherited from

\_List.InternalReject

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:24

___

### InternalResolve

• `Protected` **InternalResolve**: `symbol`

#### Inherited from

\_List.InternalResolve

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:23

___

### \_inheritingObservers

• `Protected` **\_inheritingObservers**: `boolean`

#### Inherited from

\_List.\_inheritingObservers

#### Defined in

node_modules/@pnp/core/timeline.d.ts:81

___

### \_url

• `Protected` **\_url**: `string`

#### Inherited from

\_List.\_url

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:22

___

### delete

• **delete**: (`this`: `ISPQueryable`\<`any`\>, `eTag?`: `string`) => `Promise`\<`void`\>

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

\_List.delete

#### Defined in

node_modules/@pnp/sp/lists/types.d.ts:56

___

### firstUniqueAncestorSecurableObject

• `Readonly` **firstUniqueAncestorSecurableObject**: `_SPInstance`\<`any`\>

#### Inherited from

\_List.firstUniqueAncestorSecurableObject

#### Defined in

node_modules/@pnp/sp/security/types.d.ts:113

___

### items

• `Readonly` **items**: `IItems`

#### Inherited from

\_List.items

#### Defined in

node_modules/@pnp/sp/items/list.d.ts:7

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

\_List.moments

#### Defined in

node_modules/@pnp/core/timeline.d.ts:77

___

### observers

• `Protected` **observers**: `ObserverCollection`

#### Inherited from

\_List.observers

#### Defined in

node_modules/@pnp/core/timeline.d.ts:78

___

### parentUrl

• `Protected` **parentUrl**: `string`

#### Inherited from

\_List.parentUrl

#### Defined in

node_modules/@pnp/sp/spqueryable.d.ts:13

___

### roleAssignments

• `Readonly` **roleAssignments**: `IRoleAssignments`

#### Inherited from

\_List.roleAssignments

#### Defined in

node_modules/@pnp/sp/security/types.d.ts:112

## Accessors

### effectiveBasePermissions

• `get` **effectiveBasePermissions**(): `ISPQueryable`\<`any`\>

Gets the effective base permissions of this list

#### Returns

`ISPQueryable`\<`any`\>

#### Inherited from

\_List.effectiveBasePermissions

#### Defined in

node_modules/@pnp/sp/lists/types.d.ts:61

___

### emit

• `get` **emit**(): `EmitProxyType`\<`T`\>

Property allowing access to invoke a moment from within this timeline

#### Returns

`EmitProxyType`\<`T`\>

#### Inherited from

\_List.emit

#### Defined in

node_modules/@pnp/core/timeline.d.ts:116

___

### eventReceivers

• `get` **eventReceivers**(): `ISPCollection`\<`any`[]\>

Gets the event receivers attached to this list

#### Returns

`ISPCollection`\<`any`[]\>

#### Inherited from

\_List.eventReceivers

#### Defined in

node_modules/@pnp/sp/lists/types.d.ts:66

___

### informationRightsManagementSettings

• `get` **informationRightsManagementSettings**(): `ISPQueryable`\<`any`\>

Gets the IRM settings for this list

#### Returns

`ISPQueryable`\<`any`\>

#### Inherited from

\_List.informationRightsManagementSettings

#### Defined in

node_modules/@pnp/sp/lists/types.d.ts:76

___

### on

• `get` **on**(): `OnProxyType`\<`T`\>

Property allowing access to manage observers on moments within this timeline

#### Returns

`OnProxyType`\<`T`\>

#### Inherited from

\_List.on

#### Defined in

node_modules/@pnp/core/timeline.d.ts:99

___

### query

• `get` **query**(): `URLSearchParams`

Querystring key, value pairs which will be included in the request

#### Returns

`URLSearchParams`

#### Inherited from

\_List.query

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:41

___

### relatedFields

• `get` **relatedFields**(): `ISPQueryable`\<`any`\>

Gets the related fields of this list

#### Returns

`ISPQueryable`\<`any`\>

#### Inherited from

\_List.relatedFields

#### Defined in

node_modules/@pnp/sp/lists/types.d.ts:71

## Methods

### addValidateUpdateItemUsingPath

▸ **addValidateUpdateItemUsingPath**(`formValues`, `decodedUrl`, `bNewDocumentUpdate?`, `checkInComment?`, `additionalProps?`): `Promise`\<`IListItemFormUpdateValue`[]\>

Creates an item using path (in a folder), validates and sets its field values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `formValues` | `IListItemFormUpdateValue`[] | The fields to change and their new values. |
| `decodedUrl` | `string` | Path decoded url; folder's server relative path. |
| `bNewDocumentUpdate?` | `boolean` | true if the list item is a document being updated after upload; otherwise false. |
| `checkInComment?` | `string` | Optional check in comment. |
| `additionalProps?` | `Object` | Optional set of additional properties LeafName new document file name, |
| `additionalProps.leafName?` | `string` | If creating a document or folder, the name |
| `additionalProps.objectType?` | ``0`` \| ``1`` \| ``2`` | 0: File, 1: Folder, 2: Web |

#### Returns

`Promise`\<`IListItemFormUpdateValue`[]\>

#### Inherited from

\_List.addValidateUpdateItemUsingPath

#### Defined in

node_modules/@pnp/sp/lists/types.d.ts:137

___

### breakRoleInheritance

▸ **breakRoleInheritance**(`copyRoleAssignments?`, `clearSubscopes?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `copyRoleAssignments?` | `boolean` |
| `clearSubscopes?` | `boolean` |

#### Returns

`Promise`\<`any`\>

#### Inherited from

\_List.breakRoleInheritance

#### Defined in

node_modules/@pnp/sp/security/types.d.ts:116

___

### cloneObserversOnChange

▸ **cloneObserversOnChange**(): `void`

By default a timeline references the same observer collection as a parent timeline,
if any changes are made to the observers this method first clones them ensuring we
maintain a local copy and de-ref the parent

#### Returns

`void`

#### Inherited from

\_List.cloneObserversOnChange

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

\_List.concat

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:32

___

### currentUserHasPermissions

▸ **currentUserHasPermissions**(`permission`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `permission` | `PermissionKind` |

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

\_List.currentUserHasPermissions

#### Defined in

node_modules/@pnp/sp/security/types.d.ts:119

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

\_List.error

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

\_List.execute

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

\_List.expand

#### Defined in

node_modules/@pnp/sp/spqueryable.d.ts:37

___

### getChanges

▸ **getChanges**(`query`): `Promise`\<`any`\>

Returns the collection of changes from the change log that have occurred within the list, based on the specified query.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `IChangeQuery` | A query that is performed against the change log. |

#### Returns

`Promise`\<`any`\>

#### Inherited from

\_List.getChanges

#### Defined in

node_modules/@pnp/sp/lists/types.d.ts:88

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

\_List.getContextInfo

#### Defined in

node_modules/@pnp/sp/context-info/index.d.ts:8

___

### getCurrentUserEffectivePermissions

▸ **getCurrentUserEffectivePermissions**(): `Promise`\<`IBasePermissions`\>

#### Returns

`Promise`\<`IBasePermissions`\>

#### Inherited from

\_List.getCurrentUserEffectivePermissions

#### Defined in

node_modules/@pnp/sp/security/types.d.ts:115

___

### getItemsByCAMLQuery

▸ **getItemsByCAMLQuery**(`query`, `...expands`): `Promise`\<`any`\>

Returns the collection of items in the list based on the provided CamlQuery

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `ICamlQuery` | A query that is performed against the list |
| `...expands` | `string`[] | An expanded array of n items that contains fields to expand in the CamlQuery |

#### Returns

`Promise`\<`any`\>

#### Inherited from

\_List.getItemsByCAMLQuery

#### Defined in

node_modules/@pnp/sp/lists/types.d.ts:94

___

### getListItemChangesSinceToken

▸ **getListItemChangesSinceToken**(`query`): `Promise`\<`string`\>

See: https://msdn.microsoft.com/en-us/library/office/dn292554.aspx

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `IChangeLogItemQuery` | An object that defines the change log item query |

#### Returns

`Promise`\<`string`\>

#### Inherited from

\_List.getListItemChangesSinceToken

#### Defined in

node_modules/@pnp/sp/lists/types.d.ts:99

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

\_List.getParent

#### Defined in

node_modules/@pnp/sp/spqueryable.d.ts:43

___

### getParentInfos

▸ **getParentInfos**(): `Promise`\<`IListParentInfos`\>

Gets the parent information for this item's list and web

#### Returns

`Promise`\<`IListParentInfos`\>

#### Inherited from

\_List.getParentInfos

#### Defined in

node_modules/@pnp/sp/lists/types.d.ts:150

___

### getUserEffectivePermissions

▸ **getUserEffectivePermissions**(`loginName`): `Promise`\<`IBasePermissions`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `loginName` | `string` |

#### Returns

`Promise`\<`IBasePermissions`\>

#### Inherited from

\_List.getUserEffectivePermissions

#### Defined in

node_modules/@pnp/sp/security/types.d.ts:114

___

### hasPermissions

▸ **hasPermissions**(`value`, `perm`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `IBasePermissions` |
| `perm` | `PermissionKind` |

#### Returns

`boolean`

#### Inherited from

\_List.hasPermissions

#### Defined in

node_modules/@pnp/sp/security/types.d.ts:120

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

\_List.log

#### Defined in

node_modules/@pnp/core/timeline.d.ts:106

___

### recycle

▸ **recycle**(): `Promise`\<`string`\>

Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.

#### Returns

`Promise`\<`string`\>

#### Inherited from

\_List.recycle

#### Defined in

node_modules/@pnp/sp/lists/types.d.ts:103

___

### renderListData

▸ **renderListData**(`viewXml`): `Promise`\<`IRenderListData`\>

Renders list data based on the view xml provided

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `viewXml` | `string` | A string object representing a view xml |

#### Returns

`Promise`\<`IRenderListData`\>

#### Inherited from

\_List.renderListData

#### Defined in

node_modules/@pnp/sp/lists/types.d.ts:108

___

### renderListDataAsStream

▸ **renderListDataAsStream**(`parameters`, `overrideParameters?`, `query?`): `Promise`\<`IRenderListDataAsStreamResult`\>

Returns the data for the specified query view

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | `IRenderListDataParameters` | The parameters to be used to render list data as JSON string. |
| `overrideParameters?` | `any` | - |
| `query?` | `Map`\<`string`, `string`\> | Allows setting of query parameters |

#### Returns

`Promise`\<`IRenderListDataAsStreamResult`\>

#### Inherited from

\_List.renderListDataAsStream

#### Defined in

node_modules/@pnp/sp/lists/types.d.ts:116

___

### renderListFormData

▸ **renderListFormData**(`itemId`, `formId`, `mode`): `Promise`\<`IListFormData`\>

Gets the field values and field schema attributes for a list item.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `itemId` | `number` | Item id of the item to render form data for |
| `formId` | `string` | The id of the form |
| `mode` | `ControlMode` | Enum representing the control mode of the form (Display, Edit, New) |

#### Returns

`Promise`\<`IListFormData`\>

#### Inherited from

\_List.renderListFormData

#### Defined in

node_modules/@pnp/sp/lists/types.d.ts:123

___

### reserveListItemId

▸ **reserveListItemId**(): `Promise`\<`number`\>

Reserves a list item ID for idempotent list item creation.

#### Returns

`Promise`\<`number`\>

#### Inherited from

\_List.reserveListItemId

#### Defined in

node_modules/@pnp/sp/lists/types.d.ts:127

___

### resetRoleInheritance

▸ **resetRoleInheritance**(): `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

#### Inherited from

\_List.resetRoleInheritance

#### Defined in

node_modules/@pnp/sp/security/types.d.ts:117

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

\_List.select

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

\_List.start

#### Defined in

node_modules/@pnp/core/timeline.d.ts:125

___

### toRequestUrl

▸ **toRequestUrl**(): `string`

Gets the full url with query information

#### Returns

`string`

#### Inherited from

\_List.toRequestUrl

#### Defined in

node_modules/@pnp/sp/spqueryable.d.ts:25

___

### toUrl

▸ **toUrl**(): `string`

Gets the current url

#### Returns

`string`

#### Inherited from

\_List.toUrl

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:46

___

### update

▸ **update**(`properties`, `eTag?`): `Promise`\<`IListUpdateResult`\>

Updates this list intance with the supplied properties

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `properties` | `Partial`\<`IListInfo`\> | A plain object hash of values to update for the list |
| `eTag?` | `string` | Value used in the IF-Match header, by default "*" |

#### Returns

`Promise`\<`IListUpdateResult`\>

#### Inherited from

\_List.update

#### Defined in

node_modules/@pnp/sp/lists/types.d.ts:83

___

### userHasPermissions

▸ **userHasPermissions**(`loginName`, `permission`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `loginName` | `string` |
| `permission` | `PermissionKind` |

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

\_List.userHasPermissions

#### Defined in

node_modules/@pnp/sp/security/types.d.ts:118

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

\_List.using

#### Defined in

node_modules/@pnp/core/timeline.d.ts:95
