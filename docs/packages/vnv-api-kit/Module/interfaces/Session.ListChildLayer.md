[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [Session](../modules/Session.md) / ListChildLayer

# Interface: ListChildLayer

[Session](../modules/Session.md).ListChildLayer

## Table of contents

### Methods

- [create](Session.ListChildLayer.md#create)
- [delete](Session.ListChildLayer.md#delete)
- [get](Session.ListChildLayer.md#get)
- [update](Session.ListChildLayer.md#update)

## Methods

### create

▸ **create**(`structureChild`): `Promise`\<`IListChild`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `structureChild` | `IListChild` |

#### Returns

`Promise`\<`IListChild`\>

#### Defined in

[src/session/layers/sessions/project/lists/index.ts:7](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/session/layers/sessions/project/lists/index.ts#L7)

___

### delete

▸ **delete**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/session/layers/sessions/project/lists/index.ts:9](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/session/layers/sessions/project/lists/index.ts#L9)

___

### get

▸ **get**\<`T`\>(): `Promise`\<`T` extends ``null`` ? `IListChild` : `IListChild`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] = ``null`` |

#### Returns

`Promise`\<`T` extends ``null`` ? `IListChild` : `IListChild`[]\>

#### Defined in

[src/session/layers/sessions/project/lists/index.ts:6](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/session/layers/sessions/project/lists/index.ts#L6)

___

### update

▸ **update**(`structureChild`): `Promise`\<`IListChild`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `structureChild` | `IListChild` |

#### Returns

`Promise`\<`IListChild`\>

#### Defined in

[src/session/layers/sessions/project/lists/index.ts:8](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/session/layers/sessions/project/lists/index.ts#L8)
