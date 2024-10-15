[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [Session](../modules/Session.md) / RelationLayer

# Interface: RelationLayer

[Session](../modules/Session.md).RelationLayer

## Table of contents

### Methods

- [create](Session.RelationLayer.md#create)
- [delete](Session.RelationLayer.md#delete)
- [get](Session.RelationLayer.md#get)
- [update](Session.RelationLayer.md#update)

## Methods

### create

▸ **create**(`relation`): `Promise`\<`IRelation`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `relation` | `IRelation` |

#### Returns

`Promise`\<`IRelation`\>

#### Defined in

[src/session/layers/sessions/project/relations/index.ts:7](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/session/layers/sessions/project/relations/index.ts#L7)

___

### delete

▸ **delete**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/session/layers/sessions/project/relations/index.ts:9](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/session/layers/sessions/project/relations/index.ts#L9)

___

### get

▸ **get**\<`T`\>(): `Promise`\<`T` extends ``null`` ? `IRelation` : `IRelation`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] = ``null`` |

#### Returns

`Promise`\<`T` extends ``null`` ? `IRelation` : `IRelation`[]\>

#### Defined in

[src/session/layers/sessions/project/relations/index.ts:6](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/session/layers/sessions/project/relations/index.ts#L6)

___

### update

▸ **update**(`relation`): `Promise`\<`IRelation`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `relation` | `IRelation` |

#### Returns

`Promise`\<`IRelation`\>

#### Defined in

[src/session/layers/sessions/project/relations/index.ts:8](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/session/layers/sessions/project/relations/index.ts#L8)
