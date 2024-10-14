[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [Session](../modules/Session.md) / StructureChildLayer

# Interface: StructureChildLayer

[Session](../modules/Session.md).StructureChildLayer

## Table of contents

### Methods

- [create](Session.StructureChildLayer.md#create)
- [delete](Session.StructureChildLayer.md#delete)
- [get](Session.StructureChildLayer.md#get)
- [update](Session.StructureChildLayer.md#update)

## Methods

### create

▸ **create**(`structureChild`): `Promise`\<`IStructureChild`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `structureChild` | `IStructureChild` |

#### Returns

`Promise`\<`IStructureChild`\>

#### Defined in

[src/session/layers/sessions/project/structures/index.ts:7](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/session/layers/sessions/project/structures/index.ts#L7)

___

### delete

▸ **delete**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/session/layers/sessions/project/structures/index.ts:9](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/session/layers/sessions/project/structures/index.ts#L9)

___

### get

▸ **get**\<`T`\>(): `Promise`\<`T` extends ``null`` ? `IStructureChild` : `IStructureChild`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] = ``null`` |

#### Returns

`Promise`\<`T` extends ``null`` ? `IStructureChild` : `IStructureChild`[]\>

#### Defined in

[src/session/layers/sessions/project/structures/index.ts:6](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/session/layers/sessions/project/structures/index.ts#L6)

___

### update

▸ **update**(`structureChild`): `Promise`\<`IStructureChild`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `structureChild` | `IStructureChild` |

#### Returns

`Promise`\<`IStructureChild`\>

#### Defined in

[src/session/layers/sessions/project/structures/index.ts:8](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/session/layers/sessions/project/structures/index.ts#L8)
