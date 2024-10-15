[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [Session](../modules/Session.md) / StructureLayer

# Interface: StructureLayer

[Session](../modules/Session.md).StructureLayer

## Table of contents

### Properties

- [layers](Session.StructureLayer.md#layers)

### Methods

- [create](Session.StructureLayer.md#create)
- [delete](Session.StructureLayer.md#delete)
- [get](Session.StructureLayer.md#get)
- [update](Session.StructureLayer.md#update)

## Properties

### layers

• **layers**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Child` | `LayerFactory`\<[`StructureChildLayer`](Session.StructureChildLayer.md)\> |

#### Defined in

[src/session/layers/sessions/project/structures/index.ts:32](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/session/layers/sessions/project/structures/index.ts#L32)

## Methods

### create

▸ **create**(`structure`): `Promise`\<`IStructureInitOptions`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `structure` | `IStructureInitOptions` |

#### Returns

`Promise`\<`IStructureInitOptions`\>

#### Defined in

[src/session/layers/sessions/project/structures/index.ts:29](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/session/layers/sessions/project/structures/index.ts#L29)

___

### delete

▸ **delete**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/session/layers/sessions/project/structures/index.ts:31](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/session/layers/sessions/project/structures/index.ts#L31)

___

### get

▸ **get**\<`T`\>(): `Promise`\<`T` extends ``null`` ? `IStructureInitOptions` : `IStructureInitOptions`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] = ``null`` |

#### Returns

`Promise`\<`T` extends ``null`` ? `IStructureInitOptions` : `IStructureInitOptions`[]\>

#### Defined in

[src/session/layers/sessions/project/structures/index.ts:28](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/session/layers/sessions/project/structures/index.ts#L28)

___

### update

▸ **update**(`structure`): `Promise`\<`IStructureInitOptions`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `structure` | `IStructureInitOptions` |

#### Returns

`Promise`\<`IStructureInitOptions`\>

#### Defined in

[src/session/layers/sessions/project/structures/index.ts:30](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/session/layers/sessions/project/structures/index.ts#L30)
