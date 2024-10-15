[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](../modules/SharepointAPI.md) / [Pages](../modules/SharepointAPI.Pages.md) / ICreatePageOptions

# Interface: ICreatePageOptions

[SharepointAPI](../modules/SharepointAPI.md).[Pages](../modules/SharepointAPI.Pages.md).ICreatePageOptions

The `ICreatePageOptions` interface is defining the structure for the optional `options` parameter in
the `create` method of the `IQueryPages` interface. It has a single property `WelcomePage` which is
of type `boolean`. This property is used to specify whether the created page should be set as the
welcome page for the site. If `WelcomePage` is set to `true`, the created page will be set as the
welcome page. If `WelcomePage` is not provided or set to `false`, the created page will not be set
as the welcome page.

## Table of contents

### Properties

- [WelcomePage](SharepointAPI.Pages.ICreatePageOptions.md#welcomepage)

## Properties

### WelcomePage

• `Optional` **WelcomePage**: `boolean`

#### Defined in

[src/sharepoint/pages/index.ts:39](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/pages/index.ts#L39)
