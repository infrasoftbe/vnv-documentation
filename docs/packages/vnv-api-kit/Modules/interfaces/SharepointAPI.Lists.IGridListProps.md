[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](../modules/SharepointAPI.md) / [Lists](../modules/SharepointAPI.Lists.md) / IGridListProps

# Interface: IGridListProps

[SharepointAPI](../modules/SharepointAPI.md).[Lists](../modules/SharepointAPI.Lists.md).IGridListProps

The `export interface IGridListProps` is defining an interface in TypeScript. It specifies the
structure of an object that represents the properties of a grid list.

## Table of contents

### Properties

- [data](SharepointAPI.Lists.IGridListProps.md#data)
- [name](SharepointAPI.Lists.IGridListProps.md#name)
- [view](SharepointAPI.Lists.IGridListProps.md#view)

## Properties

### data

• **data**: `Object`

The `data` property in the `IGridListProps` interface is used to store the headers and data for a
grid list.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Record`\<`string`, `any`\>[] | The `data : Record<string,any>[]` property in the `IGridListProps` interface is used to store an array of objects that represent the data for a grid list. Each object in the array is of type `Record<string,any>`, which means it can have any number of properties with any value. This allows flexibility in defining and storing the data for a grid list, as each object can have different properties based on the specific requirements of the grid list. |
| `headers` | \{ `type`: ``"Text"`` \| ``"URL"`` ; `value`: `string`  }[] | The `headers` property in the `IGridListProps` interface is used to store an array of objects that represent the headers of a grid list. Each object in the array has two properties: `type` and `value`. |

#### Defined in

[src/sharepoint/lists/index.ts:49](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/lists/index.ts#L49)

___

### name

• **name**: `string`

The `name:string;` is defining a property called `name` in the `IGridListProps` interface. This
property is of type `string`, which means it can hold a string value. It represents the name of a
grid list.

#### Defined in

[src/sharepoint/lists/index.ts:40](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/lists/index.ts#L40)

___

### view

• **view**: `string`

The `view:string;` property in the `IGridListProps` interface is used to store the name of the
view that should be displayed for the grid list. It represents the specific view that the user
wants to see when viewing the grid list.

#### Defined in

[src/sharepoint/lists/index.ts:45](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/lists/index.ts#L45)
