[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](../modules/SharepointAPI.md) / [Columns](../modules/SharepointAPI.Columns.md) / CanvasColumn

# Class: CanvasColumn

[SharepointAPI](../modules/SharepointAPI.md).[Columns](../modules/SharepointAPI.Columns.md).CanvasColumn

## Table of contents

### Constructors

- [constructor](SharepointAPI.Columns.CanvasColumn.md#constructor)

### Properties

- [\_memId](SharepointAPI.Columns.CanvasColumn.md#_memid)
- [\_section](SharepointAPI.Columns.CanvasColumn.md#_section)
- [controls](SharepointAPI.Columns.CanvasColumn.md#controls)
- [json](SharepointAPI.Columns.CanvasColumn.md#json)
- [Default](SharepointAPI.Columns.CanvasColumn.md#default)

### Accessors

- [data](SharepointAPI.Columns.CanvasColumn.md#data)
- [factor](SharepointAPI.Columns.CanvasColumn.md#factor)
- [order](SharepointAPI.Columns.CanvasColumn.md#order)
- [section](SharepointAPI.Columns.CanvasColumn.md#section)

### Methods

- [addControl](SharepointAPI.Columns.CanvasColumn.md#addcontrol)
- [getControl](SharepointAPI.Columns.CanvasColumn.md#getcontrol)
- [remove](SharepointAPI.Columns.CanvasColumn.md#remove)

## Constructors

### constructor

• **new CanvasColumn**(`json?`, `controls?`): [`CanvasColumn`](SharepointAPI.Columns.CanvasColumn.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json?` | `IClientsidePageColumnData` |
| `controls?` | `ColumnControl`\<`any`\>[] |

#### Returns

[`CanvasColumn`](SharepointAPI.Columns.CanvasColumn.md)

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:290

## Properties

### \_memId

• `Private` **\_memId**: `any`

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:289

___

### \_section

• `Private` **\_section**: `any`

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:288

___

### controls

• **controls**: `ColumnControl`\<`any`\>[]

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:286

___

### json

• `Protected` **json**: `IClientsidePageColumnData`

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:285

___

### Default

▪ `Static` **Default**: `IClientsidePageColumnData`

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:287

## Accessors

### data

• `get` **data**(): `IClientsidePageColumnData`

#### Returns

`IClientsidePageColumnData`

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:291

___

### factor

• `get` **factor**(): [`CanvasColumnFactor`](../modules/SharepointAPI.Columns.md#canvascolumnfactor)

#### Returns

[`CanvasColumnFactor`](../modules/SharepointAPI.Columns.md#canvascolumnfactor)

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:296

• `set` **factor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CanvasColumnFactor`](../modules/SharepointAPI.Columns.md#canvascolumnfactor) |

#### Returns

`void`

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:297

___

### order

• `get` **order**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:294

• `set` **order**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:295

___

### section

• `get` **section**(): `CanvasSection`

#### Returns

`CanvasSection`

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:292

• `set` **section**(`section`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `section` | `CanvasSection` |

#### Returns

`void`

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:293

## Methods

### addControl

▸ **addControl**(`control`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `control` | `ColumnControl`\<`any`\> |

#### Returns

`this`

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:298

___

### getControl

▸ **getControl**\<`T`\>(`index`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ColumnControl`\<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`T`

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:299

___

### remove

▸ **remove**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:300
