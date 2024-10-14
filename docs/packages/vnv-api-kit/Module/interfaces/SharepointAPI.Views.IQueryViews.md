[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](../modules/SharepointAPI.md) / [Views](../modules/SharepointAPI.Views.md) / IQueryViews

# Interface: IQueryViews

[SharepointAPI](../modules/SharepointAPI.md).[Views](../modules/SharepointAPI.Views.md).IQueryViews

The `IQueryViews` interface is defining the structure of an object that represents a query for
retrieving, creating, updating, and deleting views from a SharePoint list.

## Hierarchy

- `RequestBaseQuery`

  ↳ **`IQueryViews`**

## Table of contents

### Properties

- [baseUrl](SharepointAPI.Views.IQueryViews.md#baseurl)
- [childrenId](SharepointAPI.Views.IQueryViews.md#childrenid)
- [clientId](SharepointAPI.Views.IQueryViews.md#clientid)
- [columnOrder](SharepointAPI.Views.IQueryViews.md#columnorder)
- [controlOrder](SharepointAPI.Views.IQueryViews.md#controlorder)
- [endpoint](SharepointAPI.Views.IQueryViews.md#endpoint)
- [itemId](SharepointAPI.Views.IQueryViews.md#itemid)
- [listId](SharepointAPI.Views.IQueryViews.md#listid)
- [navItemId](SharepointAPI.Views.IQueryViews.md#navitemid)
- [pageId](SharepointAPI.Views.IQueryViews.md#pageid)
- [partId](SharepointAPI.Views.IQueryViews.md#partid)
- [sectionOrder](SharepointAPI.Views.IQueryViews.md#sectionorder)
- [siteId](SharepointAPI.Views.IQueryViews.md#siteid)
- [viewId](SharepointAPI.Views.IQueryViews.md#viewid)
- [websId](SharepointAPI.Views.IQueryViews.md#websid)

### Methods

- [Fields](SharepointAPI.Views.IQueryViews.md#fields)
- [create](SharepointAPI.Views.IQueryViews.md#create)
- [delete](SharepointAPI.Views.IQueryViews.md#delete)
- [get](SharepointAPI.Views.IQueryViews.md#get)
- [update](SharepointAPI.Views.IQueryViews.md#update)

## Properties

### baseUrl

• **baseUrl**: `string`

The `baseUrl:string;` is defining a property named `baseUrl` in the `RequestBaseQuery` type. The
property is of type `string` and represents the base URL for making requests. It is used as the
starting point for constructing the complete URL for the request.

#### Inherited from

RequestBaseQuery.baseUrl

#### Defined in

[src/sharepoint/type.requestQuery.ts:55](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/type.requestQuery.ts#L55)

___

### childrenId

• `Optional` **childrenId**: `string`

The `childrenId?:string|null;` line is defining a property named `childrenId` in the
`RequestBaseQuery` type. The property is optional and can be either a string or null. It
represents the ID of a child item or entity and can be used to specify a specific child item or
entity within a parent item or entity.

#### Inherited from

RequestBaseQuery.childrenId

#### Defined in

[src/sharepoint/type.requestQuery.ts:84](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/type.requestQuery.ts#L84)

___

### clientId

• **clientId**: [`TClientId`](../modules/SharepointAPI.Sites.md#tclientid)

The line `clientId:TClientId;` is defining a property named `clientId` in the `RequestBaseQuery`
type. The property is of type `TClientId`, which is a type that represents the unique identifier
for a client. The actual definition of `TClientId` is not provided in the code snippet, but it
could be a string or a number depending on how it is defined elsewhere in the code.

#### Inherited from

RequestBaseQuery.clientId

#### Defined in

[src/sharepoint/type.requestQuery.ts:67](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/type.requestQuery.ts#L67)

___

### columnOrder

• `Optional` **columnOrder**: `number`

The `columnOrder?:number | null;` line is defining a property named `columnOrder` in the
`RequestBaseQuery` type. The property is optional and can be either a number or null. It
represents the order of columns in a table or grid. By including the `columnOrder` property in the
`RequestBaseQuery` type, it allows for specifying the desired order of columns when making a
request or performing CRUD operations related to columns in a table or grid.

#### Inherited from

RequestBaseQuery.columnOrder

#### Defined in

[src/sharepoint/type.requestQuery.ts:125](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/type.requestQuery.ts#L125)

___

### controlOrder

• `Optional` **controlOrder**: `number`

The `controlOrder?:number | null;` line is defining a property named `controlOrder` in the
`RequestBaseQuery` type. The property is optional and can be either a number or null. It
represents the order of controls in a web part. By including the `controlOrder` property in the
`RequestBaseQuery` type, it allows for specifying the layout and arrangement of controls within a
web part when making a request or performing CRUD operations related to controls.

#### Inherited from

RequestBaseQuery.controlOrder

#### Defined in

[src/sharepoint/type.requestQuery.ts:132](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/type.requestQuery.ts#L132)

___

### endpoint

• **endpoint**: `string`

The `endpoint:string;` line is defining a property named `endpoint` in the `RequestBaseQuery`
type. The property is of type `string` and represents the specific endpoint or route that the
request should be made to. It is used to specify the specific API endpoint or URL path that the
request should be sent to in order to retrieve or manipulate data.

#### Inherited from

RequestBaseQuery.endpoint

#### Defined in

[src/sharepoint/type.requestQuery.ts:61](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/type.requestQuery.ts#L61)

___

### itemId

• `Optional` **itemId**: `string`

The `itemId?:string|null;` line is defining a property named `itemId` in the `RequestBaseQuery`
type. The property is optional and can be either a string or null. It represents the ID of a
specific item in a list or collection. By including the `itemId` property in the
`RequestBaseQuery` type, it allows for specifying a specific item when making a request.

#### Inherited from

RequestBaseQuery.itemId

#### Defined in

[src/sharepoint/type.requestQuery.ts:103](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/type.requestQuery.ts#L103)

___

### listId

• `Optional` **listId**: `string`

The `listId?:string|null;` line is defining a property named `listId` in the `RequestBaseQuery`
type. The property is optional and can be either a string or null. It represents the ID of a list
and can be used to specify a specific list when making a request.

#### Inherited from

RequestBaseQuery.listId

#### Defined in

[src/sharepoint/type.requestQuery.ts:89](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/type.requestQuery.ts#L89)

___

### navItemId

• `Optional` **navItemId**: `string`

The `navItemId?:string|null;` line is defining a property named `navItemId` in the
`RequestBaseQuery` type. The property is optional and can be either a string or null. It
represents the ID of a navigation item and can be used to specify the ID of a specific navigation
item within a navigation menu or bar.

#### Inherited from

RequestBaseQuery.navItemId

#### Defined in

[src/sharepoint/type.requestQuery.ts:78](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/type.requestQuery.ts#L78)

___

### pageId

• `Optional` **pageId**: `string`

The `pageId?:string|null;` line is defining a property named `pageId` in the `RequestBaseQuery`
type. The property is optional and can be either a string or null. It represents the ID of a page
and can be used to specify the ID of a specific page when making a request. Including the `pageId`
property in the `RequestBaseQuery` type allows for specifying a specific page when performing CRUD
operations or retrieving data related to a specific page.

#### Inherited from

RequestBaseQuery.pageId

#### Defined in

[src/sharepoint/type.requestQuery.ts:110](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/type.requestQuery.ts#L110)

___

### partId

• `Optional` **partId**: `string`

The `partId?:string;` line is defining a property named `partId` in the `RequestBaseQuery` type.
The property is optional and can be either a string or null. It represents the ID of a web part
and is used to uniquely identify a specific web part. Including the `partId` property in the
`RequestBaseQuery` type allows for specifying a specific web part when making a request or
performing CRUD operations related to web parts.

#### Inherited from

RequestBaseQuery.partId

#### Defined in

[src/sharepoint/type.requestQuery.ts:139](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/type.requestQuery.ts#L139)

___

### sectionOrder

• `Optional` **sectionOrder**: `number`

The `sectionOrder?:number | null;` line is defining a property named `sectionOrder` in the
`RequestBaseQuery` type. The property is optional and can be either a number or null. It
represents the order of sections in a page. It can be used to determine the layout or arrangement
of sections on a page. By including the `sectionOrder` property in the `RequestBaseQuery` type, it
allows for specifying the order of sections when making a request or performing CRUD operations
related to sections on a page.

#### Inherited from

RequestBaseQuery.sectionOrder

#### Defined in

[src/sharepoint/type.requestQuery.ts:118](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/type.requestQuery.ts#L118)

___

### siteId

• `Optional` **siteId**: `string`

The `siteId?:string|null;` line is defining a property named `siteId` in the `RequestBaseQuery`
type. The property is optional and can be either a string or null. It represents the ID of a site
and can be used to specify the site where the requested data or operation should be performed.

#### Inherited from

RequestBaseQuery.siteId

#### Defined in

[src/sharepoint/type.requestQuery.ts:72](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/type.requestQuery.ts#L72)

___

### viewId

• `Optional` **viewId**: `string`

The `viewId?:string|null;` line is defining a property named `viewId` in the `RequestBaseQuery`
type. The property is optional and can be either a string or null. It represents the ID of a
specific view in a list or collection. Views are used to define how data is displayed in a list or
collection, such as the columns to show, sorting, filtering, and grouping options. By including
the `viewId` property in the `RequestBaseQuery` type, it allows for specifying a specific view
when making a request.

#### Inherited from

RequestBaseQuery.viewId

#### Defined in

[src/sharepoint/type.requestQuery.ts:97](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/type.requestQuery.ts#L97)

___

### websId

• `Optional` **websId**: `string`

The `websId?:string;` line is defining a property named `websId` in the `RequestBaseQuery` type.
The property is optional and can be either a string or null. It represents the ID of a sub-website 
and can be used to specify a specific sub-website when making a request or performing
CRUD operations related to webs or websites. Including the `websId` property in the
`RequestBaseQuery` type allows for specifying a specific web or website when needed.

#### Inherited from

RequestBaseQuery.websId

#### Defined in

[src/sharepoint/type.requestQuery.ts:146](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/type.requestQuery.ts#L146)

## Methods

### Fields

▸ **Fields**(`fieldId`): [`IQueryFields`](SharepointAPI.Fields.IQueryFields.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldId` | `string` |

#### Returns

[`IQueryFields`](SharepointAPI.Fields.IQueryFields.md)

#### Defined in

[src/sharepoint/views/index.ts:41](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/views/index.ts#L41)

___

### create

▸ **create**(`props`): `Promise`\<[`IViewAddResult`](SharepointAPI.Views.IViewAddResult.md)\>

The `create` property in the `IQueryViews` interface is a function that takes an object `props` of
type `IViewCreateProps` as an argument and returns a promise that resolves to an `IViewAddResult`
object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IViewCreateProps`](SharepointAPI.Views.IViewCreateProps.md) |

#### Returns

`Promise`\<[`IViewAddResult`](SharepointAPI.Views.IViewAddResult.md)\>

#### Overrides

RequestBaseQuery.create

#### Defined in

[src/sharepoint/views/index.ts:29](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/views/index.ts#L29)

___

### delete

▸ **delete**(): `void`

The `delete:() => void;` is defining a property named `delete` in the `IQueryViews` interface.
This property is a function that takes no arguments and returns nothing (`void`). It is used to
delete a view from a SharePoint list.

#### Returns

`void`

#### Overrides

RequestBaseQuery.delete

#### Defined in

[src/sharepoint/views/index.ts:39](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/views/index.ts#L39)

___

### get

▸ **get**(): `Promise`\<[`IView`](SharepointAPI.Views.IView.md) \| [`IView`](SharepointAPI.Views.IView.md)[]\>

The `get` property in the `IQueryViews` interface is a function that returns a promise. The
promise resolves to either an array of `IView` objects or a single `IView` object. This function
is used to retrieve views from a SharePoint list.

#### Returns

`Promise`\<[`IView`](SharepointAPI.Views.IView.md) \| [`IView`](SharepointAPI.Views.IView.md)[]\>

#### Overrides

RequestBaseQuery.get

#### Defined in

[src/sharepoint/views/index.ts:24](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/views/index.ts#L24)

___

### update

▸ **update**(`props`): `Promise`\<[`IViewUpdateResult`](SharepointAPI.Views.IViewUpdateResult.md)\>

The `update` property in the `IQueryViews` interface is a function that takes an object `props` of
type `Partial<IViewInfo>` as an argument and returns a promise that resolves to an
`IViewUpdateResult` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Partial`\<[`IViewInfo`](SharepointAPI.Views.IViewInfo.md)\> |

#### Returns

`Promise`\<[`IViewUpdateResult`](SharepointAPI.Views.IViewUpdateResult.md)\>

#### Overrides

RequestBaseQuery.update

#### Defined in

[src/sharepoint/views/index.ts:34](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/views/index.ts#L34)
