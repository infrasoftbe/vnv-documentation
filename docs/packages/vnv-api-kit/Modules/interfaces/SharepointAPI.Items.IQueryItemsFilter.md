[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](../modules/SharepointAPI.md) / [Items](../modules/SharepointAPI.Items.md) / IQueryItemsFilter

# Interface: IQueryItemsFilter

[SharepointAPI](../modules/SharepointAPI.md).[Items](../modules/SharepointAPI.Items.md).IQueryItemsFilter

The `export interface IQueryItemsFilter extends Record<string,string>{ Title:string; }` is defining
an interface called `IQueryItemsFilter`. This interface extends the `Record<string,string>`
interface, which means it is a dictionary-like object where the keys are strings and the values are
also strings.

## Hierarchy

- `Record`\<`string`, `string`\>

  ↳ **`IQueryItemsFilter`**

## Table of contents

### Properties

- [Title](SharepointAPI.Items.IQueryItemsFilter.md#title)

## Properties

### Title

• **Title**: `string`

The line `Title:string;` is defining a property called `Title` in the `IQueryItemsFilter`
interface. The `:string` part specifies that the value of the `Title` property should be of type
`string`. This means that when using the `IQueryItemsFilter` interface, you can provide a filter
object with a `Title` property, and the value of that property should be a string.

#### Defined in

[src/sharepoint/items/index.ts:23](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/items/index.ts#L23)
