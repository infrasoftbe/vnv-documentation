[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](../modules/SharepointAPI.md) / [Webs](../modules/SharepointAPI.Webs.md) / ICreateWebsProps

# Interface: ICreateWebsProps

[SharepointAPI](../modules/SharepointAPI.md).[Webs](../modules/SharepointAPI.Webs.md).ICreateWebsProps

The `export interface ICreateWebsProps` defines the structure of the properties that can be passed
to the `create` method of the `IQueryWebs` interface. It specifies the required properties `Title`
and `Url`, which are both of type `string`. It also includes optional properties such as
`Description`, `WebTemplate`, `Language`, and `UseSamePermissionsAsParentSite`, which have their
respective types specified. These properties can be used to provide additional information when
creating a new web in SharePoint.

## Table of contents

### Properties

- [Description](SharepointAPI.Webs.ICreateWebsProps.md#description)
- [Language](SharepointAPI.Webs.ICreateWebsProps.md#language)
- [Title](SharepointAPI.Webs.ICreateWebsProps.md#title)
- [Url](SharepointAPI.Webs.ICreateWebsProps.md#url)
- [UseSamePermissionsAsParentSite](SharepointAPI.Webs.ICreateWebsProps.md#usesamepermissionsasparentsite)
- [WebTemplate](SharepointAPI.Webs.ICreateWebsProps.md#webtemplate)

## Properties

### Description

• `Optional` **Description**: `string`

The `Description?: string;` property in the `ICreateWebsProps` interface is an optional property
that can be used when creating a new web in SharePoint. It allows you to provide a description for
the web. The `Description` property is of type `string`, and you can provide a description for the
web as a string value. If you don't provide a description, the property is optional and can be
left undefined.

#### Defined in

[src/sharepoint/webs/index.ts:96](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/webs/index.ts#L96)

___

### Language

• `Optional` **Language**: `number`

The `Language?: number;` property in the `ICreateWebsProps` interface is an optional property that
can be used when creating a new web in SharePoint. It allows you to specify the language of the
web using a language code. The `Language` property is of type `number`, which represents the
language code. By providing a language code, you can set the language of the web to a specific
language.

#### Defined in

[src/sharepoint/webs/index.ts:110](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/webs/index.ts#L110)

___

### Title

• **Title**: `string`

The `Title: string;` is a property in the `ICreateWebsProps` interface. It specifies that the
`Title` property should be of type `string`. This property is used when creating a new web in
SharePoint and represents the title or name of the web.

#### Defined in

[src/sharepoint/webs/index.ts:84](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/webs/index.ts#L84)

___

### Url

• **Url**: `string`

The `Url: string;` property in the `ICreateWebsProps` interface is used to specify the URL of the
web when creating a new web in SharePoint. It represents the address or location where the web
will be accessible.

#### Defined in

[src/sharepoint/webs/index.ts:89](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/webs/index.ts#L89)

___

### UseSamePermissionsAsParentSite

• `Optional` **UseSamePermissionsAsParentSite**: `boolean`

The `UseSamePermissionsAsParentSite?: boolean;` property in the `ICreateWebsProps` interface is an
optional property that can be used when creating a new web in SharePoint.

#### Defined in

[src/sharepoint/webs/index.ts:114](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/webs/index.ts#L114)

___

### WebTemplate

• `Optional` **WebTemplate**: `string`

The `WebTemplate?: string;` property in the `ICreateWebsProps` interface is an optional property
that can be used when creating a new web in SharePoint. It allows you to specify the web template
to be used for the new web. The `WebTemplate` property is of type `string`, and you can provide
the template name or ID as a string value. By specifying a web template, you can define the
structure and functionality of the new web based on a predefined template.

#### Defined in

[src/sharepoint/webs/index.ts:103](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/webs/index.ts#L103)
