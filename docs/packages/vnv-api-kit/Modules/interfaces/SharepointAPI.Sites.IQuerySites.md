[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](../modules/SharepointAPI.md) / [Sites](../modules/SharepointAPI.Sites.md) / IQuerySites

# Interface: IQuerySites

[SharepointAPI](../modules/SharepointAPI.md).[Sites](../modules/SharepointAPI.Sites.md).IQuerySites

The `IQuerySites` interface defines the structure and methods for querying, creating, updating, and
deleting sharepoint sites. It extends the `RequestBaseQuery` interface, which provides the base query
parameters for making API requests.

## Hierarchy

- `RequestBaseQuery`

  ↳ **`IQuerySites`**

## Table of contents

### Properties

- [baseUrl](SharepointAPI.Sites.IQuerySites.md#baseurl)
- [childrenId](SharepointAPI.Sites.IQuerySites.md#childrenid)
- [clientId](SharepointAPI.Sites.IQuerySites.md#clientid)
- [columnOrder](SharepointAPI.Sites.IQuerySites.md#columnorder)
- [controlOrder](SharepointAPI.Sites.IQuerySites.md#controlorder)
- [endpoint](SharepointAPI.Sites.IQuerySites.md#endpoint)
- [itemId](SharepointAPI.Sites.IQuerySites.md#itemid)
- [listId](SharepointAPI.Sites.IQuerySites.md#listid)
- [navItemId](SharepointAPI.Sites.IQuerySites.md#navitemid)
- [pageId](SharepointAPI.Sites.IQuerySites.md#pageid)
- [partId](SharepointAPI.Sites.IQuerySites.md#partid)
- [sectionOrder](SharepointAPI.Sites.IQuerySites.md#sectionorder)
- [siteId](SharepointAPI.Sites.IQuerySites.md#siteid)
- [viewId](SharepointAPI.Sites.IQuerySites.md#viewid)
- [websId](SharepointAPI.Sites.IQuerySites.md#websid)

### Methods

- [Files](SharepointAPI.Sites.IQuerySites.md#files)
- [Lists](SharepointAPI.Sites.IQuerySites.md#lists)
- [Navigations](SharepointAPI.Sites.IQuerySites.md#navigations)
- [Pages](SharepointAPI.Sites.IQuerySites.md#pages)
- [Parts](SharepointAPI.Sites.IQuerySites.md#parts)
- [Webs](SharepointAPI.Sites.IQuerySites.md#webs)
- [create](SharepointAPI.Sites.IQuerySites.md#create)
- [delete](SharepointAPI.Sites.IQuerySites.md#delete)
- [get](SharepointAPI.Sites.IQuerySites.md#get)
- [update](SharepointAPI.Sites.IQuerySites.md#update)

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

### Files

▸ **Files**(`fileId`): [`IQueryFiles`](SharepointAPI.Files.IQueryFiles.md)

The `Files( fileId:string ):IQueryFiles;` function is returning an object of type `IQueryFiles`.
It is used to access and manipulate files within a SharePoint site. The `fileId` parameter is
optional and represents the ID of a specific file. If a `fileId` is provided, it is used to
construct the endpoint URL for the specific file. If no `fileId` is provided, the endpoint URL
will retrieve all files for the specified site.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileId` | `string` |

#### Returns

[`IQueryFiles`](SharepointAPI.Files.IQueryFiles.md)

#### Defined in

[src/sharepoint/sites/index.ts:161](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/sites/index.ts#L161)

___

### Lists

▸ **Lists**(`listId`): [`IQueryLists`](SharepointAPI.Lists.IQueryLists.md)

The `Lists` property in the `IQuerySites` interface is a function that returns an object of type
`IQueryLists`. It takes a parameter `listId` of type `string | null`, which represents the ID of a
specific list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `listId` | `string` |

#### Returns

[`IQueryLists`](SharepointAPI.Lists.IQueryLists.md)

#### Defined in

[src/sharepoint/sites/index.ts:147](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/sites/index.ts#L147)

___

### Navigations

▸ **Navigations**(`navItemId`): [`IQueryNavigations`](SharepointAPI.Navigations.IQueryNavigations.md)

The `Navigations` function is used to access and manipulate navigations within a SharePoint site.
It returns an object of type `IQueryNavigations`, which provides methods for querying, creating,
updating, and deleting navigations.

#### Parameters

| Name | Type |
| :------ | :------ |
| `navItemId` | `string` |

#### Returns

[`IQueryNavigations`](SharepointAPI.Navigations.IQueryNavigations.md)

#### Defined in

[src/sharepoint/sites/index.ts:180](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/sites/index.ts#L180)

___

### Pages

▸ **Pages**(`pageId`): [`IQueryPages`](SharepointAPI.Pages.IQueryPages.md)

The `Pages( pageId:string ):IQueryPages;` function is returning an object of type `IQueryPages`.
It is used to access and manipulate pages within a SharePoint site. The `pageId` parameter is
optional and represents the ID of a specific page. If a `pageId` is provided, it is used to
construct the endpoint URL for the specific page. If no `pageId` is provided, the endpoint URL
will retrieve all pages for the specified site.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pageId` | `string` |

#### Returns

[`IQueryPages`](SharepointAPI.Pages.IQueryPages.md)

#### Defined in

[src/sharepoint/sites/index.ts:175](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/sites/index.ts#L175)

___

### Parts

▸ **Parts**(`partId`): [`IQueryParts`](SharepointAPI.Parts.IQueryParts.md)

The `Parts( partId:string ):IQueryParts;` function is returning an object of type `IQueryParts`.
It is used to access and manipulate parts (components) of a SharePoint site. The `partId`
parameter is optional and represents the ID of a specific part. If a `partId` is provided, it is
used to construct the endpoint URL for the specific part. If no `partId` is provided, the endpoint
URL will retrieve all parts for the specified site.

#### Parameters

| Name | Type |
| :------ | :------ |
| `partId` | `string` |

#### Returns

[`IQueryParts`](SharepointAPI.Parts.IQueryParts.md)

#### Defined in

[src/sharepoint/sites/index.ts:154](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/sites/index.ts#L154)

___

### Webs

▸ **Webs**(`websId`): [`IQueryWebs`](SharepointAPI.Webs.IQueryWebs.md)

The `Webs( websId:string ):IQueryWebs;` function is returning an object of type `IQueryWebs`. It
is used to access and manipulate webs (subsites) within a SharePoint site. The `websId` parameter
is optional and represents the ID of a specific web. If a `websId` is provided, it is used to
construct the endpoint URL for the specific web. If no `websId` is provided, the endpoint URL will
retrieve all webs for the specified site.

#### Parameters

| Name | Type |
| :------ | :------ |
| `websId` | `string` |

#### Returns

[`IQueryWebs`](SharepointAPI.Webs.IQueryWebs.md)

#### Defined in

[src/sharepoint/sites/index.ts:168](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/sites/index.ts#L168)

___

### create

▸ **create**(`siteTemplate`, `siteProps`): `Promise`\<[`ISiteCreationResponse`](SharepointAPI.Sites.ISiteCreationResponse.md)\>

The `create` method in the `IQuerySites` interface is a function that is used to create a new
site. It takes two parameters: `siteTemplate` of type `TSiteTemplate` and `siteProps` of type
`ICreateCommSiteProps` or `ICreateTeamSiteProps`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `siteTemplate` | [`TSiteTemplate`](../modules/SharepointAPI.Sites.md#tsitetemplate) |
| `siteProps` | [`ICreateCommSiteProps`](SharepointAPI.Sites.ICreateCommSiteProps.md) \| [`ICreateTeamSiteProps`](SharepointAPI.Sites.ICreateTeamSiteProps.md) |

#### Returns

`Promise`\<[`ISiteCreationResponse`](SharepointAPI.Sites.ISiteCreationResponse.md)\>

#### Overrides

RequestBaseQuery.create

#### Defined in

[src/sharepoint/sites/index.ts:131](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/sites/index.ts#L131)

___

### delete

▸ **delete**(): `Promise`\<`void`\>

The `delete` method in the `IQuerySites` interface is a function that is used to delete a specific
site. It takes no parameters and returns a `Promise` that resolves to `void`. This method is used
to delete the site associated with the `siteId` specified in the `Sites` function.

#### Returns

`Promise`\<`void`\>

#### Overrides

RequestBaseQuery.delete

#### Defined in

[src/sharepoint/sites/index.ts:142](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/sites/index.ts#L142)

___

### get

▸ **get**(`filter?`): `Promise`\<[`ISite`](SharepointAPI.Sites.ISite.md)[]\>

The `get` method in the `IQuerySites` interface is a function that retrieves information about
sites. It takes an optional `filter` parameter of type `IQuerySitesFilter`, which allows you to
specify filters for the sites you want to retrieve. The `filter` parameter is an object that
contains key-value pairs, where the keys are the names of the filter properties and the values are
the filter values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter?` | [`IQuerySitesFilter`](SharepointAPI.Sites.IQuerySitesFilter.md) |

#### Returns

`Promise`\<[`ISite`](SharepointAPI.Sites.ISite.md)[]\>

#### Overrides

RequestBaseQuery.get

#### Defined in

[src/sharepoint/sites/index.ts:126](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/sites/index.ts#L126)

___

### update

▸ **update**(`siteProps`): `Promise`\<`void`\>

The `update` method in the `IQuerySites` interface is a function that is used to update the
properties of an existing site. It takes a parameter `siteProps` of type
`Partial<TSiteUpdateProps>`, which is a partial object containing the updated values for the site
properties.

#### Parameters

| Name | Type |
| :------ | :------ |
| `siteProps` | `Partial`\<[`TSiteUpdateProps`](../modules/SharepointAPI.Sites.md#tsiteupdateprops)\> |

#### Returns

`Promise`\<`void`\>

#### Overrides

RequestBaseQuery.update

#### Defined in

[src/sharepoint/sites/index.ts:137](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/sites/index.ts#L137)
