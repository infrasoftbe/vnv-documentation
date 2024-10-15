[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [Factory](../modules/Factory.md) / BatchFallbackSolver

# Interface: BatchFallbackSolver\<ResultOnSuccess\>

[Factory](../modules/Factory.md).BatchFallbackSolver

## Type parameters

| Name | Type |
| :------ | :------ |
| `ResultOnSuccess` | `any` |

## Hierarchy

- [`_batchFallbackSolver`](../classes/Factory._batchFallbackSolver.md)\<`ResultOnSuccess`\>

  ↳ **`BatchFallbackSolver`**

## Table of contents

### Properties

- [\_onerror](Factory.BatchFallbackSolver.md#_onerror)
- [\_onsuccess](Factory.BatchFallbackSolver.md#_onsuccess)
- [\_onwait](Factory.BatchFallbackSolver.md#_onwait)
- [batch](Factory.BatchFallbackSolver.md#batch)
- [execute](Factory.BatchFallbackSolver.md#execute)
- [onError](Factory.BatchFallbackSolver.md#onerror)
- [onReject](Factory.BatchFallbackSolver.md#onreject)
- [onSucces](Factory.BatchFallbackSolver.md#onsucces)
- [onWait](Factory.BatchFallbackSolver.md#onwait)
- [query](Factory.BatchFallbackSolver.md#query)

### Accessors

- [find](Factory.BatchFallbackSolver.md#find)
- [needs](Factory.BatchFallbackSolver.md#needs)
- [needsResult](Factory.BatchFallbackSolver.md#needsresult)
- [pending](Factory.BatchFallbackSolver.md#pending)
- [resolvable](Factory.BatchFallbackSolver.md#resolvable)

## Properties

### \_onerror

• **\_onerror**: `any`

#### Inherited from

[_batchFallbackSolver](../classes/Factory._batchFallbackSolver.md).[_onerror](../classes/Factory._batchFallbackSolver.md#_onerror)

#### Defined in

[dist/fetch-factory/batcher.fallback.query.d.ts:23](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.fallback.query.d.ts#L23)

___

### \_onsuccess

• **\_onsuccess**: `any`

#### Inherited from

[_batchFallbackSolver](../classes/Factory._batchFallbackSolver.md).[_onsuccess](../classes/Factory._batchFallbackSolver.md#_onsuccess)

#### Defined in

[dist/fetch-factory/batcher.fallback.query.d.ts:22](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.fallback.query.d.ts#L22)

___

### \_onwait

• **\_onwait**: `any`

#### Inherited from

[_batchFallbackSolver](../classes/Factory._batchFallbackSolver.md).[_onwait](../classes/Factory._batchFallbackSolver.md#_onwait)

#### Defined in

[dist/fetch-factory/batcher.fallback.query.d.ts:24](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.fallback.query.d.ts#L24)

___

### batch

• **batch**: [`Batch`](../modules/Factory.md#batch)

#### Inherited from

[_batchFallbackSolver](../classes/Factory._batchFallbackSolver.md).[batch](../classes/Factory._batchFallbackSolver.md#batch)

#### Defined in

[dist/fetch-factory/batcher.fallback.query.d.ts:14](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.fallback.query.d.ts#L14)

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

#### Inherited from

[_batchFallbackSolver](../classes/Factory._batchFallbackSolver.md).[execute](../classes/Factory._batchFallbackSolver.md#execute)

#### Defined in

[dist/fetch-factory/batcher.fallback.query.d.ts:29](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.fallback.query.d.ts#L29)

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

#### Inherited from

[_batchFallbackSolver](../classes/Factory._batchFallbackSolver.md).[onError](../classes/Factory._batchFallbackSolver.md#onerror)

#### Defined in

[dist/fetch-factory/batcher.fallback.query.d.ts:27](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.fallback.query.d.ts#L27)

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

#### Inherited from

[_batchFallbackSolver](../classes/Factory._batchFallbackSolver.md).[onReject](../classes/Factory._batchFallbackSolver.md#onreject)

#### Defined in

[dist/fetch-factory/batcher.fallback.query.d.ts:28](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.fallback.query.d.ts#L28)

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

#### Inherited from

[_batchFallbackSolver](../classes/Factory._batchFallbackSolver.md).[onSucces](../classes/Factory._batchFallbackSolver.md#onsucces)

#### Defined in

[dist/fetch-factory/batcher.fallback.query.d.ts:25](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.fallback.query.d.ts#L25)

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

#### Inherited from

[_batchFallbackSolver](../classes/Factory._batchFallbackSolver.md).[onWait](../classes/Factory._batchFallbackSolver.md#onwait)

#### Defined in

[dist/fetch-factory/batcher.fallback.query.d.ts:26](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.fallback.query.d.ts#L26)

___

### query

• **query**: [`BatchFallbackQuery`](Factory.BatchFallbackQuery.md)\<`ResultOnSuccess`\>

#### Inherited from

[_batchFallbackSolver](../classes/Factory._batchFallbackSolver.md).[query](../classes/Factory._batchFallbackSolver.md#query)

#### Defined in

[dist/fetch-factory/batcher.fallback.query.d.ts:15](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.fallback.query.d.ts#L15)

## Accessors

### find

• `get` **find**(): (`id`: `number`) => [`Controller`](../modules/Factory.md#controller)\<`any`\> \| (`id`: `number`) => [`Controller`](../modules/Factory.md#controller)\<`any`\>

#### Returns

(`id`: `number`) => [`Controller`](../modules/Factory.md#controller)\<`any`\> \| (`id`: `number`) => [`Controller`](../modules/Factory.md#controller)\<`any`\>

#### Inherited from

\_batchFallbackSolver.find

#### Defined in

[dist/fetch-factory/batcher.fallback.query.d.ts:30](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.fallback.query.d.ts#L30)

___

### needs

• `get` **needs**(): `any`[]

#### Returns

`any`[]

#### Inherited from

\_batchFallbackSolver.needs

#### Defined in

[dist/fetch-factory/batcher.fallback.query.d.ts:16](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.fallback.query.d.ts#L16)

___

### needsResult

• `get` **needsResult**(): `any`

#### Returns

`any`

#### Inherited from

\_batchFallbackSolver.needsResult

#### Defined in

[dist/fetch-factory/batcher.fallback.query.d.ts:17](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.fallback.query.d.ts#L17)

___

### pending

• `get` **pending**(): `any`

#### Returns

`any`

#### Inherited from

\_batchFallbackSolver.pending

#### Defined in

[dist/fetch-factory/batcher.fallback.query.d.ts:18](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.fallback.query.d.ts#L18)

___

### resolvable

• `get` **resolvable**(): `any`

#### Returns

`any`

#### Inherited from

\_batchFallbackSolver.resolvable

#### Defined in

[dist/fetch-factory/batcher.fallback.query.d.ts:19](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.fallback.query.d.ts#L19)
