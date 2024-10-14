[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / Factory

# Namespace: Factory

## Table of contents

### Namespaces

- [Decorators](Factory.Decorators.md)

### Classes

- [\_batch](../classes/Factory._batch.md)
- [\_batchFallbackSolver](../classes/Factory._batchFallbackSolver.md)

### Interfaces

- [BatchFallbackQuery](../interfaces/Factory.BatchFallbackQuery.md)
- [BatchFallbackSolver](../interfaces/Factory.BatchFallbackSolver.md)
- [IBatch](../interfaces/Factory.IBatch.md)
- [IFactoryConfig](../interfaces/Factory.IFactoryConfig.md)
- [IFetchFactory](../interfaces/Factory.IFetchFactory.md)

### Type Aliases

- [Batch](Factory.md#batch)
- [BatchConfig](Factory.md#batchconfig)
- [BatchJob](Factory.md#batchjob)
- [BatchProgressEvent](Factory.md#batchprogressevent)
- [Controller](Factory.md#controller)
- [FnControllers](Factory.md#fncontrollers)
- [TFetchFactory](Factory.md#tfetchfactory)
- [onEndCallback](Factory.md#onendcallback)
- [onProgressCallback](Factory.md#onprogresscallback)

### Variables

- [FactoryConfig](Factory.md#factoryconfig)

### Functions

- [Delete](Factory.md#delete)
- [FetchFactory](Factory.md#fetchfactory)
- [Get](Factory.md#get)
- [Patch](Factory.md#patch)
- [Post](Factory.md#post)
- [Put](Factory.md#put)
- [composeFromFactory](Factory.md#composefromfactory)
- [createBatch](Factory.md#createbatch)
- [getFactoryHostname](Factory.md#getfactoryhostname)
- [getFactoryPort](Factory.md#getfactoryport)
- [getFactoryProtocol](Factory.md#getfactoryprotocol)
- [getFactoryURL](Factory.md#getfactoryurl)

## Type Aliases

### Batch

Ƭ **Batch**: [`IBatch`](../interfaces/Factory.IBatch.md) \| [`_batch`](../classes/Factory._batch.md)

#### Defined in

[dist/fetch-factory/batcher.d.ts:156](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.d.ts#L156)

___

### BatchConfig

Ƭ **BatchConfig**: `Partial`\<\{ `concurrency`: `number` ; `end`: [`onEndCallback`](Factory.md#onendcallback) ; `progress`: [`onProgressCallback`](Factory.md#onprogresscallback)  }\>

#### Defined in

[dist/fetch-factory/batcher.d.ts:157](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.d.ts#L157)

___

### BatchJob

Ƭ **BatchJob**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `complete` | `number` |
| `duration` | `number` |
| `end` | `string` |
| `index` | `number` |
| `pending` | `number` |
| `percent` | `number` |
| `start` | `string` |
| `total` | `number` |
| `value` | `string` |

#### Defined in

[dist/fetch-factory/batcher.d.ts:3](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.d.ts#L3)

___

### BatchProgressEvent

Ƭ **BatchProgressEvent**: [`BatchJob`](Factory.md#batchjob)[]

#### Defined in

[dist/fetch-factory/batcher.d.ts:14](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.d.ts#L14)

___

### Controller

Ƭ **Controller**\<`ResultOnSuccess`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ResultOnSuccess` | `any` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `args` | `Record`\<`string`, `any`\> |
| `controller` | `Function` |
| `description` | `string` |
| `id` | `number` |
| `result?` | `ResultOnSuccess` |
| `status` | ``"pending"`` \| ``"done"`` \| ``"error"`` |

#### Defined in

[dist/fetch-factory/batcher.d.ts:17](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.d.ts#L17)

___

### FnControllers

Ƭ **FnControllers**: [`Controller`](Factory.md#controller)[]

#### Defined in

[dist/fetch-factory/batcher.d.ts:25](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.d.ts#L25)

___

### TFetchFactory

Ƭ **TFetchFactory**\<`DATA_TYPE`, `RETURN_DATA_TYPE`\>: (`endpoint`: `string`, `data?`: `DATA_TYPE`) => `Promise`\<`RETURN_DATA_TYPE`\>

Fonction de requête HTTP réutilisable créée par FetchFactory.

#### Type parameters

| Name |
| :------ |
| `DATA_TYPE` |
| `RETURN_DATA_TYPE` |

#### Type declaration

▸ (`endpoint`, `data?`): `Promise`\<`RETURN_DATA_TYPE`\>

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpoint` | `string` | L'URL de l'endpoint à appeler. |
| `data?` | `DATA_TYPE` | Les données à envoyer avec la requête (facultatif). |

##### Returns

`Promise`\<`RETURN_DATA_TYPE`\>

#### Defined in

[dist/fetch-factory/index.d.ts:10](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/index.d.ts#L10)

___

### onEndCallback

Ƭ **onEndCallback**: (`err`: `any`, `results`: `any`) => `void`

#### Type declaration

▸ (`err`, `results`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `any` |
| `results` | `any` |

##### Returns

`void`

#### Defined in

[dist/fetch-factory/batcher.d.ts:16](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.d.ts#L16)

___

### onProgressCallback

Ƭ **onProgressCallback**: (`progress`: [`BatchProgressEvent`](Factory.md#batchprogressevent) & `any`) => `void`

#### Type declaration

▸ (`progress`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `progress` | [`BatchProgressEvent`](Factory.md#batchprogressevent) & `any` |

##### Returns

`void`

#### Defined in

[dist/fetch-factory/batcher.d.ts:15](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.d.ts#L15)

## Variables

### FactoryConfig

• `Const` **FactoryConfig**: [`IFactoryConfig`](../interfaces/Factory.IFactoryConfig.md)

#### Defined in

[dist/fetch-factory/config.d.ts:13](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/config.d.ts#L13)

## Functions

### Delete

▸ **Delete**\<`T`, `X`\>(`headers?`, `format?`): [`TFetchFactory`](Factory.md#tfetchfactory)\<`T`, `X`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `X` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `headers?` | `Record`\<`string`, `string`\> |
| `format?` | ``false`` \| ``"text"`` \| ``"json"`` |

#### Returns

[`TFetchFactory`](Factory.md#tfetchfactory)\<`T`, `X`\>

#### Defined in

[dist/fetch-factory/request.d.ts:6](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/request.d.ts#L6)

___

### FetchFactory

▸ **FetchFactory**\<`DATA_TYPE`, `RETURN_DATA_TYPE`\>(`options`): [`TFetchFactory`](Factory.md#tfetchfactory)\<`DATA_TYPE`, `RETURN_DATA_TYPE`\>

Crée une fonction réutilisable pour effectuer des requêtes HTTP avec des options spécifiques.

#### Type parameters

| Name |
| :------ |
| `DATA_TYPE` |
| `RETURN_DATA_TYPE` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`IFetchFactory`](../interfaces/Factory.IFetchFactory.md) | Les options de la requête HTTP, définies par l'interface IFetchFactory. |

#### Returns

[`TFetchFactory`](Factory.md#tfetchfactory)\<`DATA_TYPE`, `RETURN_DATA_TYPE`\>

Une fonction qui renvoie une promesse contenant les données de la réponse.

#### Defined in

[dist/fetch-factory/index.d.ts:28](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/index.d.ts#L28)

___

### Get

▸ **Get**\<`T`, `X`\>(`headers?`, `format?`): [`TFetchFactory`](Factory.md#tfetchfactory)\<`T`, `X`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `X` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `headers?` | `Record`\<`string`, `string`\> |
| `format?` | ``false`` \| ``"text"`` \| ``"json"`` |

#### Returns

[`TFetchFactory`](Factory.md#tfetchfactory)\<`T`, `X`\>

#### Defined in

[dist/fetch-factory/request.d.ts:2](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/request.d.ts#L2)

___

### Patch

▸ **Patch**\<`T`, `X`\>(`headers?`, `format?`): [`TFetchFactory`](Factory.md#tfetchfactory)\<`T`, `X`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `X` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `headers?` | `Record`\<`string`, `string`\> |
| `format?` | ``false`` \| ``"text"`` \| ``"json"`` |

#### Returns

[`TFetchFactory`](Factory.md#tfetchfactory)\<`T`, `X`\>

#### Defined in

[dist/fetch-factory/request.d.ts:5](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/request.d.ts#L5)

___

### Post

▸ **Post**\<`T`, `X`\>(`headers?`, `format?`): [`TFetchFactory`](Factory.md#tfetchfactory)\<`T`, `X`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `X` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `headers?` | `Record`\<`string`, `string`\> |
| `format?` | ``false`` \| ``"text"`` \| ``"json"`` |

#### Returns

[`TFetchFactory`](Factory.md#tfetchfactory)\<`T`, `X`\>

#### Defined in

[dist/fetch-factory/request.d.ts:3](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/request.d.ts#L3)

___

### Put

▸ **Put**\<`T`, `X`\>(`headers?`, `format?`): [`TFetchFactory`](Factory.md#tfetchfactory)\<`T`, `X`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `X` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `headers?` | `Record`\<`string`, `string`\> |
| `format?` | ``false`` \| ``"text"`` \| ``"json"`` |

#### Returns

[`TFetchFactory`](Factory.md#tfetchfactory)\<`T`, `X`\>

#### Defined in

[dist/fetch-factory/request.d.ts:4](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/request.d.ts#L4)

___

### composeFromFactory

▸ **composeFromFactory**(`relativePath`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `relativePath` | `string` |

#### Returns

`string`

#### Defined in

[dist/fetch-factory/config.d.ts:18](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/config.d.ts#L18)

___

### createBatch

▸ **createBatch**(`config?`): [`Batch`](Factory.md#batch)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | `Partial`\<\{ `concurrency`: `number` ; `end`: [`onEndCallback`](Factory.md#onendcallback) ; `progress`: [`onProgressCallback`](Factory.md#onprogresscallback)  }\> |

#### Returns

[`Batch`](Factory.md#batch)

#### Defined in

[dist/fetch-factory/batcher.d.ts:162](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.d.ts#L162)

___

### getFactoryHostname

▸ **getFactoryHostname**(): `string`

#### Returns

`string`

#### Defined in

[dist/fetch-factory/config.d.ts:15](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/config.d.ts#L15)

___

### getFactoryPort

▸ **getFactoryPort**(): `number`

#### Returns

`number`

#### Defined in

[dist/fetch-factory/config.d.ts:16](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/config.d.ts#L16)

___

### getFactoryProtocol

▸ **getFactoryProtocol**(): ``"http:"`` \| ``"https:"``

#### Returns

``"http:"`` \| ``"https:"``

#### Defined in

[dist/fetch-factory/config.d.ts:14](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/config.d.ts#L14)

___

### getFactoryURL

▸ **getFactoryURL**(): `string`

#### Returns

`string`

#### Defined in

[dist/fetch-factory/config.d.ts:17](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/config.d.ts#L17)
