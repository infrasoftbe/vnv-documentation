[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](../modules/SharepointAPI.md) / [Navigations](../modules/SharepointAPI.Navigations.md) / ICreateNaviagationProps

# Interface: ICreateNaviagationProps

[SharepointAPI](../modules/SharepointAPI.md).[Navigations](../modules/SharepointAPI.Navigations.md).ICreateNaviagationProps

The `ICreateNaviagationProps` interface is defining the structure of the properties that can be used
when creating a new navigation node. It includes the following properties:

## Table of contents

### Properties

- [Children](SharepointAPI.Navigations.ICreateNaviagationProps.md#children)
- [Title](SharepointAPI.Navigations.ICreateNaviagationProps.md#title)
- [Url](SharepointAPI.Navigations.ICreateNaviagationProps.md#url)
- [Visible](SharepointAPI.Navigations.ICreateNaviagationProps.md#visible)

## Properties

### Children

• **Children**: [`ICreateNaviagationProps`](SharepointAPI.Navigations.ICreateNaviagationProps.md)[]

The `Children` property in the `ICreateNaviagationProps` interface is used to specify the child
navigation nodes when creating a new navigation node. It is an array of `ICreateNaviagationProps`
objects, which represent the properties of the child navigation nodes. Each
`ICreateNaviagationProps` object in the `Children` array can have its own `Title`, `Url`,
`Visible`, and `Children` properties, allowing for nested navigation nodes. This allows for the
creation of a hierarchical navigation structure with parent and child nodes.

#### Defined in

[src/sharepoint/navigations/index.ts:101](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/navigations/index.ts#L101)

___

### Title

• **Title**: `string`

The `Title:string;` property in the `IQueryNavigationsFilter` interface is defining an optional
property called `Title` of type string. This property can be used as a filter when querying
navigation nodes. If a value is provided for `Title`, it will filter the navigation nodes based on
their title. If `Title` is not provided or set to `null`, it will not apply any filter based on
the title.

#### Defined in

[src/sharepoint/navigations/index.ts:82](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/navigations/index.ts#L82)

___

### Url

• **Url**: `string`

The `Url:string;` property in the `ICreateNaviagationProps` interface is used to specify the URL
of the navigation node when creating a new navigation node. It is a required property and must be
provided when creating a new navigation node.

#### Defined in

[src/sharepoint/navigations/index.ts:87](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/navigations/index.ts#L87)

___

### Visible

• `Optional` **Visible**: `boolean`

The `Visible?:boolean;` property in the `ICreateNaviagationProps` interface is an optional
property that can be used when creating a new navigation node. It specifies whether the navigation
node should be visible or hidden. If the `Visible` property is set to `true`, the navigation node
will be visible. If it is set to `false` or not provided, the navigation node will be hidden.

#### Defined in

[src/sharepoint/navigations/index.ts:93](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/navigations/index.ts#L93)
