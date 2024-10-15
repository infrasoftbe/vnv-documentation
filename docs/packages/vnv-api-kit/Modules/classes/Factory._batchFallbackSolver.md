[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [Factory](../modules/Factory.md) / \_batchFallbackSolver

# Class: \_batchFallbackSolver\<ResultOnSuccess\>

[Factory](../modules/Factory.md)._batchFallbackSolver

## Type parameters

| Name |
| :------ |
| `ResultOnSuccess` |

## Hierarchy

- **`_batchFallbackSolver`**

  ↳ [`BatchFallbackSolver`](../interfaces/Factory.BatchFallbackSolver.md)

## Table of contents

### Constructors

- [constructor](Factory._batchFallbackSolver.md#constructor)

### Properties

- [\_onerror](Factory._batchFallbackSolver.md#_onerror)
- [\_onsuccess](Factory._batchFallbackSolver.md#_onsuccess)
- [\_onwait](Factory._batchFallbackSolver.md#_onwait)
- [batch](Factory._batchFallbackSolver.md#batch)
- [execute](Factory._batchFallbackSolver.md#execute)
- [onError](Factory._batchFallbackSolver.md#onerror)
- [onReject](Factory._batchFallbackSolver.md#onreject)
- [onSucces](Factory._batchFallbackSolver.md#onsucces)
- [onWait](Factory._batchFallbackSolver.md#onwait)
- [query](Factory._batchFallbackSolver.md#query)

### Accessors

- [find](Factory._batchFallbackSolver.md#find)
- [needs](Factory._batchFallbackSolver.md#needs)
- [needsResult](Factory._batchFallbackSolver.md#needsresult)
- [pending](Factory._batchFallbackSolver.md#pending)
- [resolvable](Factory._batchFallbackSolver.md#resolvable)

### Methods

- [init](Factory._batchFallbackSolver.md#init)

## Constructors

### constructor

• **new _batchFallbackSolver**\<`ResultOnSuccess`\>(`batch`, `query`): [`_batchFallbackSolver`](Factory._batchFallbackSolver.md)\<`ResultOnSuccess`\>

#### Type parameters

| Name |
| :------ |
| `ResultOnSuccess` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `batch` | [`Batch`](../modules/Factory.md#batch) |
| `query` | [`BatchFallbackQuery`](../interfaces/Factory.BatchFallbackQuery.md)\<`ResultOnSuccess`\> |

#### Returns

[`_batchFallbackSolver`](Factory._batchFallbackSolver.md)\<`ResultOnSuccess`\>

#### Defined in

[dist/fetch-factory/batcher.fallback.query.d.ts:20](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.fallback.query.d.ts#L20)

## Properties

### \_onerror

• **\_onerror**: `any`

#### Defined in

[dist/fetch-factory/batcher.fallback.query.d.ts:23](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.fallback.query.d.ts#L23)

___

### \_onsuccess

• **\_onsuccess**: `any`

#### Defined in

[dist/fetch-factory/batcher.fallback.query.d.ts:22](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.fallback.query.d.ts#L22)

___

### \_onwait

• **\_onwait**: `any`

#### Defined in

[dist/fetch-factory/batcher.fallback.query.d.ts:24](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.fallback.query.d.ts#L24)

___

### batch

• **batch**: [`Batch`](../modules/Factory.md#batch)

#### Defined in

[dist/fetch-factory/batcher.fallback.query.d.ts:14](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.fallback.query.d.ts#L14)

___

### execute

• **execute**: (`controllerId`: `number`) => `any`

#### Type declaration

▸ (`controllerId`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `controllerId` | `number` |

##### Returns

`any`

#### Defined in

[dist/fetch-factory/batcher.fallback.query.d.ts:29](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.fallback.query.d.ts#L29)

___

### onError

• **onError**: (`controllerId`: `number`) => (`value?`: `any`) => `void`

#### Type declaration

▸ (`controllerId`): (`value?`: `any`) => `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `controllerId` | `number` |

##### Returns

`fn`

▸ (`value?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `any` |

##### Returns

`void`

#### Defined in

[dist/fetch-factory/batcher.fallback.query.d.ts:27](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.fallback.query.d.ts#L27)

___

### onReject

• **onReject**: (`controllerId`: `number`) => (`value?`: `any`) => `void`

#### Type declaration

▸ (`controllerId`): (`value?`: `any`) => `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `controllerId` | `number` |

##### Returns

`fn`

▸ (`value?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `any` |

##### Returns

`void`

#### Defined in

[dist/fetch-factory/batcher.fallback.query.d.ts:28](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.fallback.query.d.ts#L28)

___

### onSucces

• **onSucces**: () => (`nextController`: `Promise`\<`any`\>) => `void`

#### Type declaration

▸ (): (`nextController`: `Promise`\<`any`\>) => `void`

##### Returns

`fn`

▸ (`nextController`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `nextController` | `Promise`\<`any`\> |

##### Returns

`void`

#### Defined in

[dist/fetch-factory/batcher.fallback.query.d.ts:25](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.fallback.query.d.ts#L25)

___

### onWait

• **onWait**: (`request`: [`Controller`](../modules/Factory.md#controller)\<`any`\>[]) => () => `void`

#### Type declaration

▸ (`request`): () => `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`Controller`](../modules/Factory.md#controller)\<`any`\>[] |

##### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[dist/fetch-factory/batcher.fallback.query.d.ts:26](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.fallback.query.d.ts#L26)

___

### query

• **query**: [`BatchFallbackQuery`](../interfaces/Factory.BatchFallbackQuery.md)\<`ResultOnSuccess`\>

#### Defined in

[dist/fetch-factory/batcher.fallback.query.d.ts:15](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.fallback.query.d.ts#L15)

## Accessors

### find

• `get` **find**(): (`id`: `number`) => [`Controller`](../modules/Factory.md#controller)\<`any`\> \| (`id`: `number`) => [`Controller`](../modules/Factory.md#controller)\<`any`\>

#### Returns

(`id`: `number`) => [`Controller`](../modules/Factory.md#controller)\<`any`\> \| (`id`: `number`) => [`Controller`](../modules/Factory.md#controller)\<`any`\>

#### Defined in

[dist/fetch-factory/batcher.fallback.query.d.ts:30](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.fallback.query.d.ts#L30)

___

### needs

• `get` **needs**(): `any`[]

#### Returns

`any`[]

#### Defined in

[dist/fetch-factory/batcher.fallback.query.d.ts:16](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.fallback.query.d.ts#L16)

___

### needsResult

• `get` **needsResult**(): `any`

#### Returns

`any`

#### Defined in

[dist/fetch-factory/batcher.fallback.query.d.ts:17](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.fallback.query.d.ts#L17)

___

### pending

• `get` **pending**(): `any`

#### Returns

`any`

#### Defined in

[dist/fetch-factory/batcher.fallback.query.d.ts:18](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.fallback.query.d.ts#L18)

___

### resolvable

• `get` **resolvable**(): `any`

#### Returns

`any`

#### Defined in

[dist/fetch-factory/batcher.fallback.query.d.ts:19](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.fallback.query.d.ts#L19)

## Methods

### init

▸ **init**\<`ResultOnSuccess`\>(`batch`, `query`): [`BatchFallbackSolver`](../interfaces/Factory.BatchFallbackSolver.md)\<`ResultOnSuccess`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ResultOnSuccess` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `batch` | [`Batch`](../modules/Factory.md#batch) |
| `query` | [`BatchFallbackQuery`](../interfaces/Factory.BatchFallbackQuery.md)\<`ResultOnSuccess`\> |

#### Returns

[`BatchFallbackSolver`](../interfaces/Factory.BatchFallbackSolver.md)\<`ResultOnSuccess`\>

#### Defined in

[dist/fetch-factory/batcher.fallback.query.d.ts:21](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.fallback.query.d.ts#L21)
