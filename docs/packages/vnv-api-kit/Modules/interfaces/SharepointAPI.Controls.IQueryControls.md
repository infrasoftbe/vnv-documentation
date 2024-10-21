[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](../modules/SharepointAPI.md) / [Controls](../modules/SharepointAPI.Controls.md) / IQueryControls

# Interface: IQueryControls

[SharepointAPI](../modules/SharepointAPI.md).[Controls](../modules/SharepointAPI.Controls.md).IQueryControls

The `export interface IQueryControls` is defining an interface in TypeScript. This interface extends
the `RequestBaseQuery` interface and adds additional properties and methods specific to querying
controls.

## Hierarchy

- `RequestBaseQuery`

  ↳ **`IQueryControls`**

## Table of contents

### Properties

- [baseUrl](SharepointAPI.Controls.IQueryControls.md#baseurl)
- [childrenId](SharepointAPI.Controls.IQueryControls.md#childrenid)
- [clientId](SharepointAPI.Controls.IQueryControls.md#clientid)
- [columnOrder](SharepointAPI.Controls.IQueryControls.md#columnorder)
- [controlOrder](SharepointAPI.Controls.IQueryControls.md#controlorder)
- [endpoint](SharepointAPI.Controls.IQueryControls.md#endpoint)
- [itemId](SharepointAPI.Controls.IQueryControls.md#itemid)
- [listId](SharepointAPI.Controls.IQueryControls.md#listid)
- [navItemId](SharepointAPI.Controls.IQueryControls.md#navitemid)
- [pageId](SharepointAPI.Controls.IQueryControls.md#pageid)
- [partId](SharepointAPI.Controls.IQueryControls.md#partid)
- [sectionOrder](SharepointAPI.Controls.IQueryControls.md#sectionorder)
- [siteId](SharepointAPI.Controls.IQueryControls.md#siteid)
- [viewId](SharepointAPI.Controls.IQueryControls.md#viewid)
- [websId](SharepointAPI.Controls.IQueryControls.md#websid)

### Methods

- [create](SharepointAPI.Controls.IQueryControls.md#create)
- [delete](SharepointAPI.Controls.IQueryControls.md#delete)
- [get](SharepointAPI.Controls.IQueryControls.md#get)
- [update](SharepointAPI.Controls.IQueryControls.md#update)

## Properties

### baseUrl

• **baseUrl**: `string`

The `baseUrl:string;` is defining a property named `baseUrl` in the `RequestBaseQuery` type. The
property is of type `string` and represents the base URL for making requests. It is used as the
starting point for constructing the complete URL for the request.

#### Inherited from

RequestBaseQuery.baseUrl

#### Defined in

[src/sharepoint/type.requestQuery.ts:55](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/type.requestQuery.ts#L55)

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

[src/sharepoint/type.requestQuery.ts:84](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/type.requestQuery.ts#L84)

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

[src/sharepoint/type.requestQuery.ts:67](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/type.requestQuery.ts#L67)

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

[src/sharepoint/type.requestQuery.ts:125](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/type.requestQuery.ts#L125)

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

[src/sharepoint/type.requestQuery.ts:132](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/type.requestQuery.ts#L132)

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

[src/sharepoint/type.requestQuery.ts:61](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/type.requestQuery.ts#L61)

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

[src/sharepoint/type.requestQuery.ts:103](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/type.requestQuery.ts#L103)

___

### listId

• `Optional` **listId**: `string`

The `listId?:string|null;` line is defining a property named `listId` in the `RequestBaseQuery`
type. The property is optional and can be either a string or null. It represents the ID of a list
and can be used to specify a specific list when making a request.

#### Inherited from

RequestBaseQuery.listId

#### Defined in

[src/sharepoint/type.requestQuery.ts:89](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/type.requestQuery.ts#L89)

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

[src/sharepoint/type.requestQuery.ts:78](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/type.requestQuery.ts#L78)

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

[src/sharepoint/type.requestQuery.ts:110](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/type.requestQuery.ts#L110)

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

[src/sharepoint/type.requestQuery.ts:139](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/type.requestQuery.ts#L139)

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

[src/sharepoint/type.requestQuery.ts:118](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/type.requestQuery.ts#L118)

___

### siteId

• `Optional` **siteId**: `string`

The `siteId?:string|null;` line is defining a property named `siteId` in the `RequestBaseQuery`
type. The property is optional and can be either a string or null. It represents the ID of a site
and can be used to specify the site where the requested data or operation should be performed.

#### Inherited from

RequestBaseQuery.siteId

#### Defined in

[src/sharepoint/type.requestQuery.ts:72](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/type.requestQuery.ts#L72)

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

[src/sharepoint/type.requestQuery.ts:97](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/type.requestQuery.ts#L97)

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

[src/sharepoint/type.requestQuery.ts:146](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/type.requestQuery.ts#L146)

## Methods

### create

▸ **create**(`props`): `Promise`\<`void`\>

The `create()` method in the `IQueryControls` interface is used to create a new control. It takes
a parameter `props` of type `ICreateControlProps`, which represents the properties of the control
to be created. The method returns a promise that resolves to `void`, indicating that no specific
value is returned upon successful creation of the control.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ICreateControlProps`](SharepointAPI.Controls.ICreateControlProps.md) |

#### Returns

`Promise`\<`void`\>

#### Overrides

RequestBaseQuery.create

#### Defined in

[src/sharepoint/controls/index.ts:23](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/controls/index.ts#L23)

___

### delete

▸ **delete**(): `Promise`\<`void`\>

The `delete()` method in the `IQueryControls` interface is used to delete a control. It returns a
promise that resolves to `void`, indicating that no specific value is returned upon successful
deletion of the control.

#### Returns

`Promise`\<`void`\>

#### Overrides

RequestBaseQuery.delete

#### Defined in

[src/sharepoint/controls/index.ts:33](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/controls/index.ts#L33)

___

### get

▸ **get**(`filters`): `Promise`\<[[`CanvasColumn`](../classes/SharepointAPI.Columns.CanvasColumn.md)] \| [`CanvasColumn`](../classes/SharepointAPI.Columns.CanvasColumn.md)[]\>

The `get()` function is a method of the `IQueryControls` interface. It takes an optional `filters`
parameter of type `IQueryControlsFilter` or `null`. It returns a promise that resolves to either
an array of `CanvasColumn` objects or a single `CanvasColumn` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `filters` | [`IQueryControlsFilter`](SharepointAPI.Controls.IQueryControlsFilter.md) |

#### Returns

`Promise`\<[[`CanvasColumn`](../classes/SharepointAPI.Columns.CanvasColumn.md)] \| [`CanvasColumn`](../classes/SharepointAPI.Columns.CanvasColumn.md)[]\>

#### Overrides

RequestBaseQuery.get

#### Defined in

[src/sharepoint/controls/index.ts:17](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/controls/index.ts#L17)

___

### update

▸ **update**(): `Promise`\<`void`\>

The `update()` method in the `IQueryControls` interface is used to update an existing control. It
returns a promise that resolves to `void`, indicating that no specific value is returned upon
successful update of the control.

#### Returns

`Promise`\<`void`\>

#### Overrides

RequestBaseQuery.update

#### Defined in

[src/sharepoint/controls/index.ts:28](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/controls/index.ts#L28)