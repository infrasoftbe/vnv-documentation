[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](../modules/SharepointAPI.md) / [Columns](../modules/SharepointAPI.Columns.md) / ICreateColumnProps

# Interface: ICreateColumnProps

[SharepointAPI](../modules/SharepointAPI.md).[Columns](../modules/SharepointAPI.Columns.md).ICreateColumnProps

The `export interface ICreateColumnProps` defines the properties that can be passed when creating a
new `CanvasColumn` object. It includes two optional properties:

## Table of contents

### Properties

- [factor](SharepointAPI.Columns.ICreateColumnProps.md#factor)
- [layoutIndex](SharepointAPI.Columns.ICreateColumnProps.md#layoutindex)

## Properties

### factor

• `Optional` **factor**: [`CanvasColumnFactor`](../modules/SharepointAPI.Columns.md#canvascolumnfactor)

The `factor?:CanvasColumnFactor;` property in the `ICreateColumnProps` interface is an optional
property that can be passed when creating a new `CanvasColumn` object. It allows you to specify
the factor for the column, which determines its width relative to other columns in the section.
The `CanvasColumnFactor` type is an enum that defines the possible values for the factor property,
such as `One`, `Two`, `Three`, etc. By setting the factor property, you can control the width of
the column in the SharePoint page layout.

#### Defined in

[src/sharepoint/columns/index.ts:65](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/columns/index.ts#L65)

___

### layoutIndex

• `Optional` **layoutIndex**: `number`

The `layoutIndex?:number;` property in the `ICreateColumnProps` interface is an optional property
that can be passed when creating a new `CanvasColumn` object.

#### Defined in

[src/sharepoint/columns/index.ts:57](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/columns/index.ts#L57)
