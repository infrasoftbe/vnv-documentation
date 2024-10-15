[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [Session](../modules/Session.md) / ListLayer

# Interface: ListLayer

[Session](../modules/Session.md).ListLayer

## Table of contents

### Properties

- [layers](Session.ListLayer.md#layers)

### Methods

- [create](Session.ListLayer.md#create)
- [delete](Session.ListLayer.md#delete)
- [get](Session.ListLayer.md#get)
- [update](Session.ListLayer.md#update)

## Properties

### layers

• **layers**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Child` | `LayerFactory`\<[`ListChildLayer`](Session.ListChildLayer.md)\> |

#### Defined in

[src/session/layers/sessions/project/lists/index.ts:32](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/session/layers/sessions/project/lists/index.ts#L32)

## Methods

### create

▸ **create**(`structure`): `Promise`\<`IListInitOptions`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `structure` | `IListInitOptions` |

#### Returns

`Promise`\<`IListInitOptions`\>

#### Defined in

[src/session/layers/sessions/project/lists/index.ts:29](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/session/layers/sessions/project/lists/index.ts#L29)

___

### delete

▸ **delete**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/session/layers/sessions/project/lists/index.ts:31](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/session/layers/sessions/project/lists/index.ts#L31)

___

### get

▸ **get**\<`T`\>(): `Promise`\<`T` extends ``null`` ? `IListInitOptions` : `IListInitOptions`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] = ``null`` |

#### Returns

`Promise`\<`T` extends ``null`` ? `IListInitOptions` : `IListInitOptions`[]\>

#### Defined in

[src/session/layers/sessions/project/lists/index.ts:28](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/session/layers/sessions/project/lists/index.ts#L28)

___

### update

▸ **update**(`structure`): `Promise`\<`IListInitOptions`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `structure` | `IListInitOptions` |

#### Returns

`Promise`\<`IListInitOptions`\>

#### Defined in

[src/session/layers/sessions/project/lists/index.ts:30](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/session/layers/sessions/project/lists/index.ts#L30)
