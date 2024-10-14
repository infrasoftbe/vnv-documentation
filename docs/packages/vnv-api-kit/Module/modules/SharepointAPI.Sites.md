[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](SharepointAPI.md) / Sites

# Namespace: Sites

[SharepointAPI](SharepointAPI.md).Sites

## Table of contents

### Enumerations

- [SiteTemplate](../enums/SharepointAPI.Sites.SiteTemplate.md)

### Interfaces

- [ICreateCommSiteProps](../interfaces/SharepointAPI.Sites.ICreateCommSiteProps.md)
- [ICreateTeamSiteProps](../interfaces/SharepointAPI.Sites.ICreateTeamSiteProps.md)
- [IQuerySites](../interfaces/SharepointAPI.Sites.IQuerySites.md)
- [IQuerySitesFilter](../interfaces/SharepointAPI.Sites.IQuerySitesFilter.md)
- [ISite](../interfaces/SharepointAPI.Sites.ISite.md)
- [ISiteCreationResponse](../interfaces/SharepointAPI.Sites.ISiteCreationResponse.md)
- [ISiteInfo](../interfaces/SharepointAPI.Sites.ISiteInfo.md)

### Type Aliases

- [TClientId](SharepointAPI.Sites.md#tclientid)
- [TSitePropsKeys](SharepointAPI.Sites.md#tsitepropskeys)
- [TSiteTemplate](SharepointAPI.Sites.md#tsitetemplate)
- [TSiteUpdateProps](SharepointAPI.Sites.md#tsiteupdateprops)

### Functions

- [Sites](SharepointAPI.Sites.md#sites)

## Type Aliases

### TClientId

Ƭ **TClientId**: ``0`` \| ``1``

#### Defined in

[src/sharepoint/index.ts:22](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/index.ts#L22)

___

### TSitePropsKeys

Ƭ **TSitePropsKeys**: ``"AllowRssFeeds"`` \| ``"AlternateCssUrl"`` \| ``"AppInstanceId"`` \| ``"ClassicWelcomePage"`` \| ``"Configuration"`` \| ``"Created"`` \| ``"CurrentChangeToken"`` \| ``"CustomMasterUrl"`` \| ``"Description"`` \| ``"DesignPackageId"`` \| ``"DocumentLibraryCalloutOfficeWebAppPreviewersDisabled"`` \| ``"EnableMinimalDownload"`` \| ``"FooterEmphasis"`` \| ``"FooterEnabled"`` \| ``"FooterLayout"`` \| ``"HeaderEmphasis"`` \| ``"HeaderLayout"`` \| ``"HideTitleInHeader"`` \| ``"HorizontalQuickLaunch"`` \| ``"Id"`` \| ``"IsEduClass"`` \| ``"IsEduClassProvisionChecked"`` \| ``"IsEduClassProvisionPending"`` \| ``"IsHomepageModernized"`` \| ``"IsMultilingual"`` \| ``"IsRevertHomepageLinkHidden"`` \| ``"Language"`` \| ``"LastItemModifiedDate"`` \| ``"LastItemUserModifiedDate"`` \| ``"LogoAlignment"`` \| ``"MasterUrl"`` \| ``"MegaMenuEnabled"`` \| ``"NavAudienceTargetingEnabled"`` \| ``"NoCrawl"`` \| ``"ObjectCacheEnabled"`` \| ``"OverwriteTranslationsOnChange"`` \| ``"ResourcePath"`` \| ``"QuickLaunchEnabled"`` \| ``"RecycleBinEnabled"`` \| ``"SearchScope"`` \| ``"ServerRelativeUrl"`` \| ``"SiteLogoUrl"`` \| ``"SyndicationEnabled"`` \| ``"TenantAdminMembersCanShare"`` \| ``"Title"`` \| ``"TreeViewEnabled"`` \| ``"UIVersion"`` \| ``"UIVersionConfigurationEnabled"`` \| ``"Url"`` \| ``"WebTemplate"`` \| ``"WelcomePage"``

#### Defined in

[src/sharepoint/sites/index.ts:35](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/sites/index.ts#L35)

___

### TSiteTemplate

Ƭ **TSiteTemplate**: ``1`` \| ``2``

#### Defined in

[src/sharepoint/sites/index.ts:33](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/sites/index.ts#L33)

___

### TSiteUpdateProps

Ƭ **TSiteUpdateProps**: `Record`\<[`TSitePropsKeys`](SharepointAPI.Sites.md#tsitepropskeys), `string`\>

#### Defined in

[src/sharepoint/sites/index.ts:88](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/sites/index.ts#L88)

## Functions

### Sites

▸ **Sites**(`baseUrl`, `clientId`, `siteId?`): [`IQuerySites`](../interfaces/SharepointAPI.Sites.IQuerySites.md)

The `Sites` function is used to query, create, update, and delete sites, as well as access related
resources such as lists, parts, files, webs, and pages.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `baseUrl` | `any` | `undefined` | The `baseUrl` parameter is a string that represents the base URL of the API endpoint for the sites. It is used to construct the URL for various API requests. |
| `clientId` | [`TClientId`](SharepointAPI.Sites.md#tclientid) | `undefined` | The `clientId` parameter is of type `TClientId`, which represents the client ID for authentication purposes. It is used to identify the client making the request to the API. |
| `siteId?` | `string` | `null` | The `siteId` parameter is a string that represents the ID of a specific site. It is an optional parameter and can be set to `null` if not needed. |

#### Returns

[`IQuerySites`](../interfaces/SharepointAPI.Sites.IQuerySites.md)

The function `Sites` returns an object of type `IQuerySites`.

#### Defined in

[src/sharepoint/sites/index.ts:196](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/sites/index.ts#L196)
