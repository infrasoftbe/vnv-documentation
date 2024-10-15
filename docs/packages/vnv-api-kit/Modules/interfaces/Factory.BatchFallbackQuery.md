[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [Factory](../modules/Factory.md) / BatchFallbackQuery

# Interface: BatchFallbackQuery\<ResultOnSuccess\>

[Factory](../modules/Factory.md).BatchFallbackQuery

## Type parameters

| Name |
| :------ |
| `ResultOnSuccess` |

## Table of contents

### Properties

- [args](Factory.BatchFallbackQuery.md#args)
- [find](Factory.BatchFallbackQuery.md#find)
- [on](Factory.BatchFallbackQuery.md#on)

## Properties

### args

• **args**: `any`

#### Defined in

[dist/fetch-factory/batcher.fallback.query.d.ts:6](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.fallback.query.d.ts#L6)

___

### find

• **find**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `number`[] |

#### Defined in

[dist/fetch-factory/batcher.fallback.query.d.ts:3](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.fallback.query.d.ts#L3)

___

### on

• **on**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `error` | (`reject`: (`error`: `any`) => `void`) => `any` |
| `pending` | (`wait`: () => `void`) => `any` |
| `success` | (`next`: (`fn`: `Promise`\<`any`\>) => `void`, `reject`: (`value?`: `any`) => `void`, `result`: `ResultOnSuccess`[]) => `any` |

#### Defined in

[dist/fetch-factory/batcher.fallback.query.d.ts:7](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.fallback.query.d.ts#L7)
