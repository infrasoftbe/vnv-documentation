[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](../modules/SharepointAPI.md) / [Sections](../modules/SharepointAPI.Sections.md) / IClientsideWebPartData

# Interface: IClientsideWebPartData\<PropertiesType\>

[SharepointAPI](../modules/SharepointAPI.md).[Sections](../modules/SharepointAPI.Sections.md).IClientsideWebPartData

## Type parameters

| Name | Type |
| :------ | :------ |
| `PropertiesType` | `any` |

## Hierarchy

- `ICanvasControlBaseData`

  ↳ **`IClientsideWebPartData`**

## Table of contents

### Properties

- [addedFromPersistedData](SharepointAPI.Sections.IClientsideWebPartData.md#addedfrompersisteddata)
- [controlType](SharepointAPI.Sections.IClientsideWebPartData.md#controltype)
- [displayMode](SharepointAPI.Sections.IClientsideWebPartData.md#displaymode)
- [emphasis](SharepointAPI.Sections.IClientsideWebPartData.md#emphasis)
- [id](SharepointAPI.Sections.IClientsideWebPartData.md#id)
- [position](SharepointAPI.Sections.IClientsideWebPartData.md#position)
- [reservedHeight](SharepointAPI.Sections.IClientsideWebPartData.md#reservedheight)
- [reservedWidth](SharepointAPI.Sections.IClientsideWebPartData.md#reservedwidth)
- [webPartData](SharepointAPI.Sections.IClientsideWebPartData.md#webpartdata)
- [webPartId](SharepointAPI.Sections.IClientsideWebPartData.md#webpartid)

## Properties

### addedFromPersistedData

• **addedFromPersistedData**: `boolean`

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:455

___

### controlType

• **controlType**: ``3``

#### Overrides

ICanvasControlBaseData.controlType

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:450

___

### displayMode

• **displayMode**: `number`

#### Inherited from

ICanvasControlBaseData.displayMode

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:419

___

### emphasis

• **emphasis**: `IClientControlEmphasis`

#### Inherited from

ICanvasControlBaseData.emphasis

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:418

___

### id

• **id**: `string`

#### Inherited from

ICanvasControlBaseData.id

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:417

___

### position

• **position**: `IPosition`

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:451

___

### reservedHeight

• **reservedHeight**: `number`

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:453

___

### reservedWidth

• **reservedWidth**: `number`

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:454

___

### webPartData

• **webPartData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dataVersion` | `string` |
| `description` | `string` |
| `id` | `string` |
| `instanceId` | `string` |
| `properties` | `PropertiesType` |
| `serverProcessedContent?` | \{ `htmlStrings?`: `Record`\<`string`, `string`\> ; `imageSources?`: `Record`\<`string`, `string`\> ; `links?`: `Record`\<`string`, `string`\> ; `searchablePlainTexts?`: `Record`\<`string`, `string`\>  } |
| `serverProcessedContent.htmlStrings?` | `Record`\<`string`, `string`\> |
| `serverProcessedContent.imageSources?` | `Record`\<`string`, `string`\> |
| `serverProcessedContent.links?` | `Record`\<`string`, `string`\> |
| `serverProcessedContent.searchablePlainTexts?` | `Record`\<`string`, `string`\> |
| `title` | `string` |

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:456

___

### webPartId

• **webPartId**: `string`

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:452
