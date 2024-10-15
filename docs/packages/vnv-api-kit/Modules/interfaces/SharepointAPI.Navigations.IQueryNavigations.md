[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](../modules/SharepointAPI.md) / [Navigations](../modules/SharepointAPI.Navigations.md) / IQueryNavigations

# Interface: IQueryNavigations

[SharepointAPI](../modules/SharepointAPI.md).[Navigations](../modules/SharepointAPI.Navigations.md).IQueryNavigations

The `IQueryNavigations` interface defines the structure and methods for querying navigation nodes.
It extends the `RequestBaseQuery` interface, which provides common properties for making HTTP
requests.

## Hierarchy

- `RequestBaseQuery`

  ↳ **`IQueryNavigations`**

## Table of contents

### Properties

- [baseUrl](SharepointAPI.Navigations.IQueryNavigations.md#baseurl)
- [childrenId](SharepointAPI.Navigations.IQueryNavigations.md#childrenid)
- [clientId](SharepointAPI.Navigations.IQueryNavigations.md#clientid)
- [columnOrder](SharepointAPI.Navigations.IQueryNavigations.md#columnorder)
- [controlOrder](SharepointAPI.Navigations.IQueryNavigations.md#controlorder)
- [endpoint](SharepointAPI.Navigations.IQueryNavigations.md#endpoint)
- [itemId](SharepointAPI.Navigations.IQueryNavigations.md#itemid)
- [listId](SharepointAPI.Navigations.IQueryNavigations.md#listid)
- [navItemId](SharepointAPI.Navigations.IQueryNavigations.md#navitemid)
- [pageId](SharepointAPI.Navigations.IQueryNavigations.md#pageid)
- [partId](SharepointAPI.Navigations.IQueryNavigations.md#partid)
- [sectionOrder](SharepointAPI.Navigations.IQueryNavigations.md#sectionorder)
- [siteId](SharepointAPI.Navigations.IQueryNavigations.md#siteid)
- [viewId](SharepointAPI.Navigations.IQueryNavigations.md#viewid)
- [websId](SharepointAPI.Navigations.IQueryNavigations.md#websid)

### Methods

- [Childrens](SharepointAPI.Navigations.IQueryNavigations.md#childrens)
- [create](SharepointAPI.Navigations.IQueryNavigations.md#create)
- [delete](SharepointAPI.Navigations.IQueryNavigations.md#delete)
- [get](SharepointAPI.Navigations.IQueryNavigations.md#get)
- [update](SharepointAPI.Navigations.IQueryNavigations.md#update)

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

### Childrens

▸ **Childrens**(`childrenId`): [`IQueryNavigationChildren`](SharepointAPI.Navigations.IQueryNavigationChildren.md)

The `Childrens` method in the `IQueryNavigations` interface is used to retrieve the children of a
navigation node. It takes in a parameter `childrenId` of type `string` or `null` and returns an
object of type `IQueryNavigationChildren`. This object represents the query for retrieving the
children of the navigation node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `childrenId` | `string` |

#### Returns

[`IQueryNavigationChildren`](SharepointAPI.Navigations.IQueryNavigationChildren.md)

#### Defined in

[src/sharepoint/navigations/index.ts:69](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/navigations/index.ts#L69)

___

### create

▸ **create**(`props`, `options`): `Promise`\<`any`[]\>

The `create` method in the `IQueryNavigations` interface is used to create a new navigation node.
It takes in two parameters:

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ICreateNaviagationProps`](SharepointAPI.Navigations.ICreateNaviagationProps.md) |
| `options` | `Object` |
| `options.quicklaunch?` | `boolean` |

#### Returns

`Promise`\<`any`[]\>

#### Overrides

RequestBaseQuery.create

#### Defined in

[src/sharepoint/navigations/index.ts:52](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/navigations/index.ts#L52)

___

### delete

▸ **delete**(): `Promise`\<`void`\>

The `delete():Promise<void>;` method is a function that is used to delete a navigation node. It
returns a promise that resolves to `void`, indicating that the delete operation has been
completed.

#### Returns

`Promise`\<`void`\>

#### Overrides

RequestBaseQuery.delete

#### Defined in

[src/sharepoint/navigations/index.ts:63](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/navigations/index.ts#L63)

___

### get

▸ **get**(`filters`): `Promise`\<[[`INavigationNode`](SharepointAPI.Navigations.INavigationNode.md)] \| [`INavigationNode`](SharepointAPI.Navigations.INavigationNode.md)[]\>

The `get` function is a method of the `IQueryNavigations` interface. It takes in a parameter
`filters` of type `IQueryNavigationsFilter` or `null` and returns a promise that resolves to an
array of `INavigationNode` objects or a single `INavigationNode` object wrapped in an array.

#### Parameters

| Name | Type |
| :------ | :------ |
| `filters` | [`IQueryNavigationsFilter`](SharepointAPI.Navigations.IQueryNavigationsFilter.md) |

#### Returns

`Promise`\<[[`INavigationNode`](SharepointAPI.Navigations.INavigationNode.md)] \| [`INavigationNode`](SharepointAPI.Navigations.INavigationNode.md)[]\>

#### Overrides

RequestBaseQuery.get

#### Defined in

[src/sharepoint/navigations/index.ts:48](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/navigations/index.ts#L48)

___

### update

▸ **update**(): `Promise`\<`void`\>

The `update()` method in the `IQueryNavigations` interface is a placeholder for updating a
navigation node. It returns a promise that resolves to `void`, indicating that the update
operation has been completed. However, the implementation of the `update()` method is not provided
in the code snippet, so its functionality is not defined.

#### Returns

`Promise`\<`void`\>

#### Overrides

RequestBaseQuery.update

#### Defined in

[src/sharepoint/navigations/index.ts:58](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/navigations/index.ts#L58)
