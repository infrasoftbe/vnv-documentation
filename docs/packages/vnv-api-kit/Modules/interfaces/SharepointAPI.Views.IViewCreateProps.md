[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](../modules/SharepointAPI.md) / [Views](../modules/SharepointAPI.Views.md) / IViewCreateProps

# Interface: IViewCreateProps

[SharepointAPI](../modules/SharepointAPI.md).[Views](../modules/SharepointAPI.Views.md).IViewCreateProps

The `export interface IViewCreateProps` is defining the structure of an object that represents the
properties needed to create a new view in SharePoint. It has three properties:

## Table of contents

### Properties

- [PersonalView](SharepointAPI.Views.IViewCreateProps.md#personalview)
- [Title](SharepointAPI.Views.IViewCreateProps.md#title)
- [additionalSettings](SharepointAPI.Views.IViewCreateProps.md#additionalsettings)

## Properties

### PersonalView

• `Optional` **PersonalView**: `boolean`

The `PersonalView?: boolean;` property in the `IViewCreateProps` interface is defining an optional
property named `PersonalView` of type `boolean`.

#### Defined in

[src/sharepoint/views/index.ts:55](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/views/index.ts#L55)

___

### Title

• **Title**: `string`

The `Title: string;` is defining a property named `Title` in the `IViewCreateProps` interface.
This property is of type `string`, which means it can only hold string values. It represents the
title of the view that will be created in SharePoint.

#### Defined in

[src/sharepoint/views/index.ts:51](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/views/index.ts#L51)

___

### additionalSettings

• `Optional` **additionalSettings**: `Record`\<`string`, `any`\>

The `additionalSettings?: Record<string, any>;` property in the `IViewCreateProps` interface is
defining an optional property named `additionalSettings`.

#### Defined in

[src/sharepoint/views/index.ts:59](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/views/index.ts#L59)
