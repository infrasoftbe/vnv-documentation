[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](../modules/SharepointAPI.md) / [Pages](../modules/SharepointAPI.Pages.md) / IQueryPagesFilter

# Interface: IQueryPagesFilter

[SharepointAPI](../modules/SharepointAPI.md).[Pages](../modules/SharepointAPI.Pages.md).IQueryPagesFilter

The `export interface IQueryPagesFilter` is defining the structure of the filters that can be
applied when querying clientside pages. It has a single property `Title` which is optional and of
type `string`. This property is used to filter the pages based on their title. If a `Title` filter
is provided, only the pages with matching titles will be returned in the query results. If no
`Title` filter is provided, all pages will be returned.

## Table of contents

### Properties

- [Title](SharepointAPI.Pages.IQueryPagesFilter.md#title)

## Properties

### Title

• `Optional` **Title**: `string`

#### Defined in

[src/sharepoint/pages/index.ts:21](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/pages/index.ts#L21)
