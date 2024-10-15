[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](../modules/SharepointAPI.md) / [Items](../modules/SharepointAPI.Items.md) / IItem

# Interface: IItem

[SharepointAPI](../modules/SharepointAPI.md).[Items](../modules/SharepointAPI.Items.md).IItem

## Hierarchy

- `_Item`

- `IDeleteableWithETag`

- `ISecurableMethods`

  ↳ **`IItem`**

## Callable

### IItem

▸ **IItem**\<`T`\>(`init?`): `Promise`\<`T`\>

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

node_modules/@pnp/sp/items/types.d.ts:121

node_modules/@pnp/sp/security/item.d.ts:5

node_modules/@pnp/sp/comments/item.d.ts:11

## Table of contents

### Properties

- [InternalPromise](SharepointAPI.Items.IItem.md#internalpromise)
- [InternalReject](SharepointAPI.Items.IItem.md#internalreject)
- [InternalResolve](SharepointAPI.Items.IItem.md#internalresolve)
- [\_inheritingObservers](SharepointAPI.Items.IItem.md#_inheritingobservers)
- [\_url](SharepointAPI.Items.IItem.md#_url)
- [comments](SharepointAPI.Items.IItem.md#comments)
- [delete](SharepointAPI.Items.IItem.md#delete)
- [firstUniqueAncestorSecurableObject](SharepointAPI.Items.IItem.md#firstuniqueancestorsecurableobject)
- [moments](SharepointAPI.Items.IItem.md#moments)
- [observers](SharepointAPI.Items.IItem.md#observers)
- [parentUrl](SharepointAPI.Items.IItem.md#parenturl)
- [roleAssignments](SharepointAPI.Items.IItem.md#roleassignments)

### Accessors

- [effectiveBasePermissions](SharepointAPI.Items.IItem.md#effectivebasepermissions)
- [effectiveBasePermissionsForUI](SharepointAPI.Items.IItem.md#effectivebasepermissionsforui)
- [emit](SharepointAPI.Items.IItem.md#emit)
- [fieldValuesAsHTML](SharepointAPI.Items.IItem.md#fieldvaluesashtml)
- [fieldValuesAsText](SharepointAPI.Items.IItem.md#fieldvaluesastext)
- [fieldValuesForEdit](SharepointAPI.Items.IItem.md#fieldvaluesforedit)
- [list](SharepointAPI.Items.IItem.md#list)
- [on](SharepointAPI.Items.IItem.md#on)
- [query](SharepointAPI.Items.IItem.md#query)
- [versions](SharepointAPI.Items.IItem.md#versions)

### Methods

- [breakRoleInheritance](SharepointAPI.Items.IItem.md#breakroleinheritance)
- [cloneObserversOnChange](SharepointAPI.Items.IItem.md#cloneobserversonchange)
- [concat](SharepointAPI.Items.IItem.md#concat)
- [currentUserHasPermissions](SharepointAPI.Items.IItem.md#currentuserhaspermissions)
- [deleteWithParams](SharepointAPI.Items.IItem.md#deletewithparams)
- [error](SharepointAPI.Items.IItem.md#error)
- [execute](SharepointAPI.Items.IItem.md#execute)
- [expand](SharepointAPI.Items.IItem.md#expand)
- [getContextInfo](SharepointAPI.Items.IItem.md#getcontextinfo)
- [getCurrentUserEffectivePermissions](SharepointAPI.Items.IItem.md#getcurrentusereffectivepermissions)
- [getLikedBy](SharepointAPI.Items.IItem.md#getlikedby)
- [getLikedByInformation](SharepointAPI.Items.IItem.md#getlikedbyinformation)
- [getParent](SharepointAPI.Items.IItem.md#getparent)
- [getParentInfos](SharepointAPI.Items.IItem.md#getparentinfos)
- [getUserEffectivePermissions](SharepointAPI.Items.IItem.md#getusereffectivepermissions)
- [getWopiFrameUrl](SharepointAPI.Items.IItem.md#getwopiframeurl)
- [hasPermissions](SharepointAPI.Items.IItem.md#haspermissions)
- [like](SharepointAPI.Items.IItem.md#like)
- [log](SharepointAPI.Items.IItem.md#log)
- [rate](SharepointAPI.Items.IItem.md#rate)
- [recycle](SharepointAPI.Items.IItem.md#recycle)
- [resetRoleInheritance](SharepointAPI.Items.IItem.md#resetroleinheritance)
- [select](SharepointAPI.Items.IItem.md#select)
- [setImageField](SharepointAPI.Items.IItem.md#setimagefield)
- [start](SharepointAPI.Items.IItem.md#start)
- [toRequestUrl](SharepointAPI.Items.IItem.md#torequesturl)
- [toUrl](SharepointAPI.Items.IItem.md#tourl)
- [unlike](SharepointAPI.Items.IItem.md#unlike)
- [update](SharepointAPI.Items.IItem.md#update)
- [userHasPermissions](SharepointAPI.Items.IItem.md#userhaspermissions)
- [using](SharepointAPI.Items.IItem.md#using)
- [validateUpdateListItem](SharepointAPI.Items.IItem.md#validateupdatelistitem)

## Properties

### InternalPromise

• `Protected` **InternalPromise**: `symbol`

#### Inherited from

\_Item.InternalPromise

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:25

___

### InternalReject

• `Protected` **InternalReject**: `symbol`

#### Inherited from

\_Item.InternalReject

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:24

___

### InternalResolve

• `Protected` **InternalResolve**: `symbol`

#### Inherited from

\_Item.InternalResolve

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:23

___

### \_inheritingObservers

• `Protected` **\_inheritingObservers**: `boolean`

#### Inherited from

\_Item.\_inheritingObservers

#### Defined in

node_modules/@pnp/core/timeline.d.ts:81

___

### \_url

• `Protected` **\_url**: `string`

#### Inherited from

\_Item.\_url

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:22

___

### comments

• `Readonly` **comments**: `IComments`

#### Inherited from

\_Item.comments

#### Defined in

node_modules/@pnp/sp/comments/item.d.ts:12

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

\_Item.delete

#### Defined in

node_modules/@pnp/sp/items/types.d.ts:50

___

### firstUniqueAncestorSecurableObject

• `Readonly` **firstUniqueAncestorSecurableObject**: `_SPInstance`\<`any`\>

#### Inherited from

\_Item.firstUniqueAncestorSecurableObject

#### Defined in

node_modules/@pnp/sp/security/types.d.ts:113

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

\_Item.moments

#### Defined in

node_modules/@pnp/core/timeline.d.ts:77

___

### observers

• `Protected` **observers**: `ObserverCollection`

#### Inherited from

\_Item.observers

#### Defined in

node_modules/@pnp/core/timeline.d.ts:78

___

### parentUrl

• `Protected` **parentUrl**: `string`

#### Inherited from

\_Item.parentUrl

#### Defined in

node_modules/@pnp/sp/spqueryable.d.ts:13

___

### roleAssignments

• `Readonly` **roleAssignments**: `IRoleAssignments`

#### Inherited from

\_Item.roleAssignments

#### Defined in

node_modules/@pnp/sp/security/types.d.ts:112

## Accessors

### effectiveBasePermissions

• `get` **effectiveBasePermissions**(): `ISPQueryable`\<`any`\>

Gets the effective base permissions for the item

#### Returns

`ISPQueryable`\<`any`\>

#### Inherited from

\_Item.effectiveBasePermissions

#### Defined in

node_modules/@pnp/sp/items/types.d.ts:55

___

### effectiveBasePermissionsForUI

• `get` **effectiveBasePermissionsForUI**(): `ISPQueryable`\<`any`\>

Gets the effective base permissions for the item in a UI context

#### Returns

`ISPQueryable`\<`any`\>

#### Inherited from

\_Item.effectiveBasePermissionsForUI

#### Defined in

node_modules/@pnp/sp/items/types.d.ts:60

___

### emit

• `get` **emit**(): `EmitProxyType`\<`T`\>

Property allowing access to invoke a moment from within this timeline

#### Returns

`EmitProxyType`\<`T`\>

#### Inherited from

\_Item.emit

#### Defined in

node_modules/@pnp/core/timeline.d.ts:116

___

### fieldValuesAsHTML

• `get` **fieldValuesAsHTML**(): `ISPInstance`\<`any`\>

Gets the field values for this list item in their HTML representation

#### Returns

`ISPInstance`\<`any`\>

#### Inherited from

\_Item.fieldValuesAsHTML

#### Defined in

node_modules/@pnp/sp/items/types.d.ts:65

___

### fieldValuesAsText

• `get` **fieldValuesAsText**(): `ISPInstance`\<`any`\>

Gets the field values for this list item in their text representation

#### Returns

`ISPInstance`\<`any`\>

#### Inherited from

\_Item.fieldValuesAsText

#### Defined in

node_modules/@pnp/sp/items/types.d.ts:70

___

### fieldValuesForEdit

• `get` **fieldValuesForEdit**(): `ISPInstance`\<`any`\>

Gets the field values for this list item for use in editing controls

#### Returns

`ISPInstance`\<`any`\>

#### Inherited from

\_Item.fieldValuesForEdit

#### Defined in

node_modules/@pnp/sp/items/types.d.ts:75

___

### list

• `get` **list**(): [`IList`](SharepointAPI.Lists.IList.md)

this item's list

#### Returns

[`IList`](SharepointAPI.Lists.IList.md)

#### Inherited from

\_Item.list

#### Defined in

node_modules/@pnp/sp/items/types.d.ts:83

___

### on

• `get` **on**(): `OnProxyType`\<`T`\>

Property allowing access to manage observers on moments within this timeline

#### Returns

`OnProxyType`\<`T`\>

#### Inherited from

\_Item.on

#### Defined in

node_modules/@pnp/core/timeline.d.ts:99

___

### query

• `get` **query**(): `URLSearchParams`

Querystring key, value pairs which will be included in the request

#### Returns

`URLSearchParams`

#### Inherited from

\_Item.query

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:41

___

### versions

• `get` **versions**(): `IItemVersions`

Gets the collection of versions associated with this item

#### Returns

`IItemVersions`

#### Inherited from

\_Item.versions

#### Defined in

node_modules/@pnp/sp/items/types.d.ts:79

## Methods

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

\_Item.breakRoleInheritance

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

\_Item.cloneObserversOnChange

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

\_Item.concat

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

\_Item.currentUserHasPermissions

#### Defined in

node_modules/@pnp/sp/security/types.d.ts:119

___

### deleteWithParams

▸ **deleteWithParams**(`parameters`): `Promise`\<`void`\>

Deletes the item object with options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parameters` | `Partial`\<`IItemDeleteParams`\> | Specifies the options to use when deleting a item. |

#### Returns

`Promise`\<`void`\>

#### Inherited from

\_Item.deleteWithParams

#### Defined in

node_modules/@pnp/sp/items/types.d.ts:100

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

\_Item.error

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

\_Item.execute

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

\_Item.expand

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

\_Item.getContextInfo

#### Defined in

node_modules/@pnp/sp/context-info/index.d.ts:8

___

### getCurrentUserEffectivePermissions

▸ **getCurrentUserEffectivePermissions**(): `Promise`\<`IBasePermissions`\>

#### Returns

`Promise`\<`IBasePermissions`\>

#### Inherited from

\_Item.getCurrentUserEffectivePermissions

#### Defined in

node_modules/@pnp/sp/security/types.d.ts:115

___

### getLikedBy

▸ **getLikedBy**(): `Promise`\<`ILikeData`[]\>

Gets the collection of people who have liked this item

#### Returns

`Promise`\<`ILikeData`[]\>

#### Inherited from

\_Item.getLikedBy

#### Defined in

node_modules/@pnp/sp/comments/item.d.ts:16

___

### getLikedByInformation

▸ **getLikedByInformation**(): `Promise`\<`ILikedByInformation`\>

Unlikes this item as the current user

#### Returns

`Promise`\<`ILikedByInformation`\>

#### Inherited from

\_Item.getLikedByInformation

#### Defined in

node_modules/@pnp/sp/comments/item.d.ts:28

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

\_Item.getParent

#### Defined in

node_modules/@pnp/sp/spqueryable.d.ts:43

___

### getParentInfos

▸ **getParentInfos**(): `Promise`\<`IItemParentInfos`\>

Gets the parent information for this item's list and web

#### Returns

`Promise`\<`IItemParentInfos`\>

#### Inherited from

\_Item.getParentInfos

#### Defined in

node_modules/@pnp/sp/items/types.d.ts:118

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

\_Item.getUserEffectivePermissions

#### Defined in

node_modules/@pnp/sp/security/types.d.ts:114

___

### getWopiFrameUrl

▸ **getWopiFrameUrl**(`action?`): `Promise`\<`string`\>

Gets a string representation of the full URL to the WOPI frame.
If there is no associated WOPI application, or no associated action, an empty string is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action?` | `number` | Display mode: 0: view, 1: edit, 2: mobileView, 3: interactivePreview |

#### Returns

`Promise`\<`string`\>

#### Inherited from

\_Item.getWopiFrameUrl

#### Defined in

node_modules/@pnp/sp/items/types.d.ts:107

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

\_Item.hasPermissions

#### Defined in

node_modules/@pnp/sp/security/types.d.ts:120

___

### like

▸ **like**(): `Promise`\<`void`\>

Likes this client-side page as the current user

#### Returns

`Promise`\<`void`\>

#### Inherited from

\_Item.like

#### Defined in

node_modules/@pnp/sp/comments/item.d.ts:20

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

\_Item.log

#### Defined in

node_modules/@pnp/core/timeline.d.ts:106

___

### rate

▸ **rate**(`rating`): `Promise`\<`number`\>

Rates this item as the current user

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rating` | `RatingValues` | rating number between 1-5 |

#### Returns

`Promise`\<`number`\>

rating number

#### Inherited from

\_Item.rate

#### Defined in

node_modules/@pnp/sp/comments/item.d.ts:34

___

### recycle

▸ **recycle**(): `Promise`\<`string`\>

Moves the list item to the Recycle Bin and returns the identifier of the new Recycle Bin item.

#### Returns

`Promise`\<`string`\>

#### Inherited from

\_Item.recycle

#### Defined in

node_modules/@pnp/sp/items/types.d.ts:94

___

### resetRoleInheritance

▸ **resetRoleInheritance**(): `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

#### Inherited from

\_Item.resetRoleInheritance

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

\_Item.select

#### Defined in

node_modules/@pnp/sp/spqueryable.d.ts:31

___

### setImageField

▸ **setImageField**(`fieldName`, `imageName`, `imageContent`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldName` | `string` |
| `imageName` | `string` |
| `imageContent` | `any` |

#### Returns

`Promise`\<`any`\>

#### Inherited from

\_Item.setImageField

#### Defined in

node_modules/@pnp/sp/items/types.d.ts:119

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

\_Item.start

#### Defined in

node_modules/@pnp/core/timeline.d.ts:125

___

### toRequestUrl

▸ **toRequestUrl**(): `string`

Gets the full url with query information

#### Returns

`string`

#### Inherited from

\_Item.toRequestUrl

#### Defined in

node_modules/@pnp/sp/spqueryable.d.ts:25

___

### toUrl

▸ **toUrl**(): `string`

Gets the current url

#### Returns

`string`

#### Inherited from

\_Item.toUrl

#### Defined in

node_modules/@pnp/queryable/queryable.d.ts:46

___

### unlike

▸ **unlike**(): `Promise`\<`void`\>

Unlikes this client-side page as the current user

#### Returns

`Promise`\<`void`\>

#### Inherited from

\_Item.unlike

#### Defined in

node_modules/@pnp/sp/comments/item.d.ts:24

___

### update

▸ **update**(`properties`, `eTag?`): `Promise`\<[`IItemUpdateResult`](SharepointAPI.Items.IItemUpdateResult.md)\>

Updates this list instance with the supplied properties

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `properties` | `Record`\<`string`, `any`\> | A plain object hash of values to update for the list |
| `eTag?` | `string` | Value used in the IF-Match header, by default "*" |

#### Returns

`Promise`\<[`IItemUpdateResult`](SharepointAPI.Items.IItemUpdateResult.md)\>

#### Inherited from

\_Item.update

#### Defined in

node_modules/@pnp/sp/items/types.d.ts:90

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

\_Item.userHasPermissions

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

\_Item.using

#### Defined in

node_modules/@pnp/core/timeline.d.ts:95

___

### validateUpdateListItem

▸ **validateUpdateListItem**(`formValues`, `bNewDocumentUpdate?`): `Promise`\<`IListItemFormUpdateValue`[]\>

Validates and sets the values of the specified collection of fields for the list item.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `formValues` | `IListItemFormUpdateValue`[] | The fields to change and their new values. |
| `bNewDocumentUpdate?` | `boolean` | true if the list item is a document being updated after upload; otherwise false. |

#### Returns

`Promise`\<`IListItemFormUpdateValue`[]\>

#### Inherited from

\_Item.validateUpdateListItem

#### Defined in

node_modules/@pnp/sp/items/types.d.ts:114
