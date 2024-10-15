[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](../modules/SharepointAPI.md) / [Webs](../modules/SharepointAPI.Webs.md) / IQueryWebs

# Interface: IQueryWebs

[SharepointAPI](../modules/SharepointAPI.md).[Webs](../modules/SharepointAPI.Webs.md).IQueryWebs

The `IQueryWebs` interface defines the structure and methods for querying and interacting with
SharePoint webs. It extends the `RequestBaseQuery` interface, which provides common properties for
making HTTP requests.

## Hierarchy

- `RequestBaseQuery`

  ↳ **`IQueryWebs`**

## Table of contents

### Properties

- [baseUrl](SharepointAPI.Webs.IQueryWebs.md#baseurl)
- [childrenId](SharepointAPI.Webs.IQueryWebs.md#childrenid)
- [clientId](SharepointAPI.Webs.IQueryWebs.md#clientid)
- [columnOrder](SharepointAPI.Webs.IQueryWebs.md#columnorder)
- [controlOrder](SharepointAPI.Webs.IQueryWebs.md#controlorder)
- [endpoint](SharepointAPI.Webs.IQueryWebs.md#endpoint)
- [itemId](SharepointAPI.Webs.IQueryWebs.md#itemid)
- [listId](SharepointAPI.Webs.IQueryWebs.md#listid)
- [navItemId](SharepointAPI.Webs.IQueryWebs.md#navitemid)
- [pageId](SharepointAPI.Webs.IQueryWebs.md#pageid)
- [partId](SharepointAPI.Webs.IQueryWebs.md#partid)
- [sectionOrder](SharepointAPI.Webs.IQueryWebs.md#sectionorder)
- [siteId](SharepointAPI.Webs.IQueryWebs.md#siteid)
- [viewId](SharepointAPI.Webs.IQueryWebs.md#viewid)
- [websId](SharepointAPI.Webs.IQueryWebs.md#websid)

### Methods

- [Files](SharepointAPI.Webs.IQueryWebs.md#files)
- [Lists](SharepointAPI.Webs.IQueryWebs.md#lists)
- [Navigations](SharepointAPI.Webs.IQueryWebs.md#navigations)
- [Pages](SharepointAPI.Webs.IQueryWebs.md#pages)
- [create](SharepointAPI.Webs.IQueryWebs.md#create)
- [delete](SharepointAPI.Webs.IQueryWebs.md#delete)
- [get](SharepointAPI.Webs.IQueryWebs.md#get)
- [update](SharepointAPI.Webs.IQueryWebs.md#update)

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

### Files

▸ **Files**(`fileId`): [`IQueryFiles`](SharepointAPI.Files.IQueryFiles.md)

The `Files` property in the `IQueryWebs` interface represents a function that takes in a `fileId`
parameter of type `string` or `null` and returns an object of type `IQueryFiles`. This function is
used to query and interact with files within the web. The `fileId` parameter is optional and can
be used to specify a specific file to retrieve or update. If no `fileId` is provided, the function
will return a general query object for files within the web.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileId` | `string` |

#### Returns

[`IQueryFiles`](SharepointAPI.Files.IQueryFiles.md)

#### Defined in

[src/sharepoint/webs/index.ts:56](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/webs/index.ts#L56)

___

### Lists

▸ **Lists**(`listId`): [`IQueryLists`](SharepointAPI.Lists.IQueryLists.md)

The `Lists` property in the `IQueryWebs` interface represents a function that takes in a `listId`
parameter of type `string` or `null` and returns an object of type `IQueryLists`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `listId` | `string` |

#### Returns

[`IQueryLists`](SharepointAPI.Lists.IQueryLists.md)

#### Defined in

[src/sharepoint/webs/index.ts:49](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/webs/index.ts#L49)

___

### Navigations

▸ **Navigations**(`navitemId`): [`IQueryNavigations`](SharepointAPI.Navigations.IQueryNavigations.md)

The `Navigations` property in the `IQueryWebs` interface represents a function that takes in a
`navitemId` parameter of type `string` or `null` and returns an object of type
`IQueryNavigations`. This function is used to query and interact with navigations within the web.
The `navitemId` parameter is optional and can be used to specify a specific navigation item to
retrieve or update. If no `navitemId` is provided, the function will return a general query object
for navigations within the web.

#### Parameters

| Name | Type |
| :------ | :------ |
| `navitemId` | `string` |

#### Returns

[`IQueryNavigations`](SharepointAPI.Navigations.IQueryNavigations.md)

#### Defined in

[src/sharepoint/webs/index.ts:69](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/webs/index.ts#L69)

___

### Pages

▸ **Pages**(`pageId`): [`IQueryPages`](SharepointAPI.Pages.IQueryPages.md)

The `Pages` property in the `IQueryWebs` interface represents a function that takes in a `pageId`
parameter of type `string` or `null` and returns an object of type `IQueryPages`. This function is
used to query and interact with pages within the web.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pageId` | `string` |

#### Returns

[`IQueryPages`](SharepointAPI.Pages.IQueryPages.md)

#### Defined in

[src/sharepoint/webs/index.ts:61](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/webs/index.ts#L61)

___

### create

▸ **create**(`props`): `Promise`\<[`IWebAddResult`](SharepointAPI.Webs.IWebAddResult.md)\>

The `create` property in the `IQueryWebs` interface represents a function that takes in an object
of type `ICreateWebsProps` as a parameter and returns a promise that resolves to an
`IWebAddResult`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ICreateWebsProps`](SharepointAPI.Webs.ICreateWebsProps.md) |

#### Returns

`Promise`\<[`IWebAddResult`](SharepointAPI.Webs.IWebAddResult.md)\>

#### Overrides

RequestBaseQuery.create

#### Defined in

[src/sharepoint/webs/index.ts:31](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/webs/index.ts#L31)

___

### delete

▸ **delete**(): `Promise`\<`void`\>

The `delete:() => Promise<void>;` property in the `IQueryWebs` interface represents a function
that takes no parameters and returns a promise that resolves to `void`. This function is used to
delete the web. When called, it sends a DELETE request to the web's endpoint and returns a promise
that resolves when the deletion is successful.

#### Returns

`Promise`\<`void`\>

#### Overrides

RequestBaseQuery.delete

#### Defined in

[src/sharepoint/webs/index.ts:45](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/webs/index.ts#L45)

___

### get

▸ **get**(): `Promise`\<`void`\>

The `get:() => Promise<void>;` is a property in the `IQueryWebs` interface that represents a
function that returns a promise. This function is used to retrieve information about the sharepoint's site sub sites. It
does not take any parameters and returns a promise that resolves to `void`.

#### Returns

`Promise`\<`void`\>

#### Overrides

RequestBaseQuery.get

#### Defined in

[src/sharepoint/webs/index.ts:26](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/webs/index.ts#L26)

___

### update

▸ **update**(`props`): `Promise`\<[`IWebUpdateResult`](SharepointAPI.Webs.IWebUpdateResult.md)\>

The `update` property in the `IQueryWebs` interface represents a function that takes in an object
of type `IWebInfo` as a parameter and returns a promise that resolves to an `IWebUpdateResult`.
This function is used to update the information of a web. The `props` parameter contains the
updated information for the web, such as the title, description, web template, language, and
permissions. The function sends a PATCH request to the web's endpoint with the updated information
and returns the result of the update operation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IWebInfo`](SharepointAPI.Webs.IWebInfo.md) |

#### Returns

`Promise`\<[`IWebUpdateResult`](SharepointAPI.Webs.IWebUpdateResult.md)\>

#### Overrides

RequestBaseQuery.update

#### Defined in

[src/sharepoint/webs/index.ts:39](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/webs/index.ts#L39)
