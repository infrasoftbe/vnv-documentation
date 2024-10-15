[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](../modules/SharepointAPI.md) / [Sites](../modules/SharepointAPI.Sites.md) / IQuerySitesFilter

# Interface: IQuerySitesFilter

[SharepointAPI](../modules/SharepointAPI.md).[Sites](../modules/SharepointAPI.Sites.md).IQuerySitesFilter

The `IQuerySitesFilter` interface is defining a filter object that can be used to filter the sites
returned by the `get` method in the `IQuerySites` interface. It extends the `Record<string, string>`
interface, which allows for dynamic key-value pairs.

## Hierarchy

- `Record`\<`string`, `string`\>

  ↳ **`IQuerySitesFilter`**

## Table of contents

### Properties

- [CollectionId](SharepointAPI.Sites.IQuerySitesFilter.md#collectionid)
- [Name](SharepointAPI.Sites.IQuerySitesFilter.md#name)
- [SiteId](SharepointAPI.Sites.IQuerySitesFilter.md#siteid)

## Properties

### CollectionId

• `Optional` **CollectionId**: `any`

The `CollectionId?:string;` property in the `IQuerySitesFilter` interface is an optional parameter
that represents the ID of a specific site collection. It can be used as a filter to retrieve sites
within a specific site collection. If the `CollectionId` property is provided in the filter object
when calling the `get` method in the `IQuerySites` interface, the API will return sites that
belong to the specified site collection. If the `CollectionId` property is not provided, the API
will return sites from all site collections.

#### Defined in

[src/sharepoint/sites/index.ts:106](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/sites/index.ts#L106)

___

### Name

• `Optional` **Name**: `any`

The `Name?:string;` property in the `IQuerySitesFilter` interface is an optional parameter that
represents the name of a specific site. It can be used as a filter to retrieve sites with a
specific name. The `?` symbol indicates that the property is optional, meaning it can be omitted
when using the `get` method in the `IQuerySites` interface.

#### Defined in

[src/sharepoint/sites/index.ts:112](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/sites/index.ts#L112)

___

### SiteId

• `Optional` **SiteId**: `any`

The `SiteId?:string;` is a property in the `IQuerySitesFilter` interface. It represents the ID of
a specific site and is an optional parameter. It can be used as a filter to retrieve sites with a
specific ID.

#### Defined in

[src/sharepoint/sites/index.ts:98](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/sites/index.ts#L98)
