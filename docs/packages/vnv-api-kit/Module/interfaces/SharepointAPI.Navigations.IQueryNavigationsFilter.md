[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](../modules/SharepointAPI.md) / [Navigations](../modules/SharepointAPI.Navigations.md) / IQueryNavigationsFilter

# Interface: IQueryNavigationsFilter

[SharepointAPI](../modules/SharepointAPI.md).[Navigations](../modules/SharepointAPI.Navigations.md).IQueryNavigationsFilter

The `export interface IQueryNavigationsFilter` is defining an interface for the filters that can be
applied when querying navigation nodes. It includes three optional properties: `quicklaunch`,
`topNavigationBar`, and `Title`. These properties can be used to filter the navigation nodes based
on whether they are in the quick launch, top navigation bar, or have a specific title.

## Table of contents

### Properties

- [Title](SharepointAPI.Navigations.IQueryNavigationsFilter.md#title)
- [quicklaunch](SharepointAPI.Navigations.IQueryNavigationsFilter.md#quicklaunch)
- [topNavigationBar](SharepointAPI.Navigations.IQueryNavigationsFilter.md#topnavigationbar)

## Properties

### Title

• `Optional` **Title**: `string`

The `Title?:string;` property in the `IQueryNavigationsFilter` interface is defining an optional
property called `Title` of type string. This property can be used as a filter when querying
navigation nodes. If a value is provided for `Title`, it will filter the navigation nodes based on
their title. If `Title` is not provided or set to `null`, it will not apply any filter based on
the title.

#### Defined in

[src/sharepoint/navigations/index.ts:36](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/navigations/index.ts#L36)

___

### quicklaunch

• `Optional` **quicklaunch**: `boolean`

The `quicklaunch?:boolean;` property in the `IQueryNavigationsFilter` interface is defining an
optional property called `quicklaunch` of type boolean. This property can be used as a filter when
querying navigation nodes. If `quicklaunch` is set to `true`, it will filter the navigation nodes
that are in the quick launch. If `quicklaunch` is set to `false` or not provided, it will not
apply any filter based on the quick launch.

#### Defined in

[src/sharepoint/navigations/index.ts:22](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/navigations/index.ts#L22)

___

### topNavigationBar

• `Optional` **topNavigationBar**: `boolean`

The `topNavigationBar?:boolean;` property in the `IQueryNavigationsFilter` interface is defining
an optional property called `topNavigationBar` of type boolean. This property can be used as a
filter when querying navigation nodes. If `topNavigationBar` is set to `true`, it will filter the
navigation nodes that are in the top navigation bar. If `topNavigationBar` is set to `false` or
not provided, it will not apply any filter based on the top navigation bar.

#### Defined in

[src/sharepoint/navigations/index.ts:29](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/navigations/index.ts#L29)
