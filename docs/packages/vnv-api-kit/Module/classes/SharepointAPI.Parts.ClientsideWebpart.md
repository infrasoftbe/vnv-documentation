[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](../modules/SharepointAPI.md) / [Parts](../modules/SharepointAPI.Parts.md) / ClientsideWebpart

# Class: ClientsideWebpart

[SharepointAPI](../modules/SharepointAPI.md).[Parts](../modules/SharepointAPI.Parts.md).ClientsideWebpart

## Hierarchy

- `ColumnControl`\<[`IClientsideWebPartData`](../interfaces/SharepointAPI.Sections.IClientsideWebPartData.md)\>

  ↳ **`ClientsideWebpart`**

## Table of contents

### Constructors

- [constructor](SharepointAPI.Parts.ClientsideWebpart.md#constructor)

### Properties

- [json](SharepointAPI.Parts.ClientsideWebpart.md#json)
- [Default](SharepointAPI.Parts.ClientsideWebpart.md#default)

### Accessors

- [column](SharepointAPI.Parts.ClientsideWebpart.md#column)
- [data](SharepointAPI.Parts.ClientsideWebpart.md#data)
- [dataVersion](SharepointAPI.Parts.ClientsideWebpart.md#dataversion)
- [description](SharepointAPI.Parts.ClientsideWebpart.md#description)
- [height](SharepointAPI.Parts.ClientsideWebpart.md#height)
- [id](SharepointAPI.Parts.ClientsideWebpart.md#id)
- [order](SharepointAPI.Parts.ClientsideWebpart.md#order)
- [title](SharepointAPI.Parts.ClientsideWebpart.md#title)
- [width](SharepointAPI.Parts.ClientsideWebpart.md#width)

### Methods

- [getProperties](SharepointAPI.Parts.ClientsideWebpart.md#getproperties)
- [getServerProcessedContent](SharepointAPI.Parts.ClientsideWebpart.md#getserverprocessedcontent)
- [import](SharepointAPI.Parts.ClientsideWebpart.md#import)
- [onColumnChange](SharepointAPI.Parts.ClientsideWebpart.md#oncolumnchange)
- [remove](SharepointAPI.Parts.ClientsideWebpart.md#remove)
- [setData](SharepointAPI.Parts.ClientsideWebpart.md#setdata)
- [setProperties](SharepointAPI.Parts.ClientsideWebpart.md#setproperties)
- [setServerProcessedContent](SharepointAPI.Parts.ClientsideWebpart.md#setserverprocessedcontent)
- [fromComponentDef](SharepointAPI.Parts.ClientsideWebpart.md#fromcomponentdef)

## Constructors

### constructor

• **new ClientsideWebpart**(`json?`): [`ClientsideWebpart`](SharepointAPI.Parts.ClientsideWebpart.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json?` | [`IClientsideWebPartData`](../interfaces/SharepointAPI.Sections.IClientsideWebPartData.md)\<`any`\> |

#### Returns

[`ClientsideWebpart`](SharepointAPI.Parts.ClientsideWebpart.md)

#### Overrides

ColumnControl\&lt;IClientsideWebPartData\&gt;.constructor

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:327

## Properties

### json

• `Protected` **json**: [`IClientsideWebPartData`](../interfaces/SharepointAPI.Sections.IClientsideWebPartData.md)\<`any`\>

#### Inherited from

ColumnControl.json

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:303

___

### Default

▪ `Static` **Default**: [`IClientsideWebPartData`](../interfaces/SharepointAPI.Sections.IClientsideWebPartData.md)\<`any`\>

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:326

## Accessors

### column

• `get` **column**(): [`CanvasColumn`](SharepointAPI.Columns.CanvasColumn.md)

#### Returns

[`CanvasColumn`](SharepointAPI.Columns.CanvasColumn.md)

#### Inherited from

ColumnControl.column

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:310

• `set` **column**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CanvasColumn`](SharepointAPI.Columns.CanvasColumn.md) |

#### Returns

`void`

#### Inherited from

ColumnControl.column

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:311

___

### data

• `get` **data**(): `T`

#### Returns

`T`

#### Inherited from

ColumnControl.data

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:309

___

### dataVersion

• `get` **dataVersion**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:339

• `set` **dataVersion**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:340

___

### description

• `get` **description**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:331

• `set` **description**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:332

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:335

• `set` **height**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:336

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Inherited from

ColumnControl.id

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:308

___

### order

• `get` **order**(): `number`

#### Returns

`number`

#### Overrides

ColumnControl.order

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:333

• `set` **order**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Overrides

ColumnControl.order

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:334

___

### title

• `get` **title**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:329

• `set` **title**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:330

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:337

• `set` **width**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:338

## Methods

### getProperties

▸ **getProperties**\<`T`\>(): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Returns

`T`

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:342

___

### getServerProcessedContent

▸ **getServerProcessedContent**\<`T`\>(): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Returns

`T`

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:344

___

### import

▸ **import**(`component`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `IClientsidePageComponent` |

#### Returns

`void`

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:346

___

### onColumnChange

▸ **onColumnChange**(`col`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `col` | [`CanvasColumn`](SharepointAPI.Columns.CanvasColumn.md) |

#### Returns

`void`

#### Overrides

ColumnControl.onColumnChange

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:345

___

### remove

▸ **remove**(): `void`

#### Returns

`void`

#### Inherited from

ColumnControl.remove

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:312

___

### setData

▸ **setData**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IClientsideWebPartData`](../interfaces/SharepointAPI.Sections.IClientsideWebPartData.md)\<`any`\> |

#### Returns

`void`

#### Inherited from

ColumnControl.setData

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:313

___

### setProperties

▸ **setProperties**\<`T`\>(`properties`): `this`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties` | `T` |

#### Returns

`this`

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:341

___

### setServerProcessedContent

▸ **setServerProcessedContent**\<`T`\>(`properties`): `this`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties` | `T` |

#### Returns

`this`

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:343

___

### fromComponentDef

▸ **fromComponentDef**(`definition`): [`ClientsideWebpart`](SharepointAPI.Parts.ClientsideWebpart.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `IClientsidePageComponent` |

#### Returns

[`ClientsideWebpart`](SharepointAPI.Parts.ClientsideWebpart.md)

#### Defined in

node_modules/@pnp/sp/clientside-pages/types.d.ts:328
