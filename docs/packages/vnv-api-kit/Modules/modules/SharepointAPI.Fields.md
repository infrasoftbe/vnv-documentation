[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](SharepointAPI.md) / Fields

# Namespace: Fields

[SharepointAPI](SharepointAPI.md).Fields

## Table of contents

### Interfaces

- [IField](../interfaces/SharepointAPI.Fields.IField.md)
- [IFieldAddResult](../interfaces/SharepointAPI.Fields.IFieldAddResult.md)
- [IFieldCreationProperties](../interfaces/SharepointAPI.Fields.IFieldCreationProperties.md)
- [IFieldUpdateResult](../interfaces/SharepointAPI.Fields.IFieldUpdateResult.md)
- [IQueryFields](../interfaces/SharepointAPI.Fields.IQueryFields.md)
- [IQueryItemsFilter](../interfaces/SharepointAPI.Fields.IQueryItemsFilter.md)

### Functions

- [Fields](SharepointAPI.Fields.md#fields)

## Functions

### Fields

▸ **Fields**(`baseUrl`, `clientId`, `siteId`, `listId`, `fieldId?`): `Object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `baseUrl` | `string` | `undefined` |
| `clientId` | [`TClientId`](SharepointAPI.Sites.md#tclientid) | `undefined` |
| `siteId` | `string` | `undefined` |
| `listId` | `string` | `undefined` |
| `fieldId` | `string` | `null` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `baseUrl` | `string` |
| `clientId` | [`TClientId`](SharepointAPI.Sites.md#tclientid) |
| `fieldId` | `string` |
| `listId` | `string` |
| `siteId` | `string` |
| `get endpoint()` | `string` |
| `create` | (`itemProps`: `Partial`\<[`IField`](../interfaces/SharepointAPI.Fields.IField.md)\>) => `Promise`\<`any`\> |
| `delete` | () => `Promise`\<`any`\> |
| `get` | (`filters`: [`IQueryItemsFilter`](../interfaces/SharepointAPI.Fields.IQueryItemsFilter.md)) => `Promise`\<`any`\> |
| `update` | () => `any` |

#### Defined in

[src/sharepoint/fields/index.ts:44](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/sharepoint/fields/index.ts#L44)
