[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [Factory](../modules/Factory.md) / \_batch

# Class: \_batch

[Factory](../modules/Factory.md)._batch

## Implements

- [`IBatch`](../interfaces/Factory.IBatch.md)

## Table of contents

### Constructors

- [constructor](Factory._batch.md#constructor)

### Properties

- [#private](Factory._batch.md##private)
- [find](Factory._batch.md#find)
- [start](Factory._batch.md#start)

### Accessors

- [complete](Factory._batch.md#complete)
- [error](Factory._batch.md#error)
- [events](Factory._batch.md#events)
- [fn](Factory._batch.md#fn)
- [pending](Factory._batch.md#pending)
- [status](Factory._batch.md#status)
- [summary](Factory._batch.md#summary)

### Methods

- [concurrency](Factory._batch.md#concurrency)
- [createJob](Factory._batch.md#createjob)
- [end](Factory._batch.md#end)
- [on](Factory._batch.md#on)
- [progress](Factory._batch.md#progress)
- [push](Factory._batch.md#push)
- [solver](Factory._batch.md#solver)
- [updateControllerResult](Factory._batch.md#updatecontrollerresult)
- [updateControllerStatus](Factory._batch.md#updatecontrollerstatus)

## Constructors

### constructor

• **new _batch**(): [`_batch`](Factory._batch.md)

#### Returns

[`_batch`](Factory._batch.md)

#### Defined in

[dist/fetch-factory/batcher.d.ts:143](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.d.ts#L143)

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

[dist/fetch-factory/batcher.d.ts:122](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.d.ts#L122)

___

### find

• **find**: (`id`: `number`) => [`Controller`](../modules/Factory.md#controller)\<`any`\>

#### Type declaration

▸ (`id`): [`Controller`](../modules/Factory.md#controller)\<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

##### Returns

[`Controller`](../modules/Factory.md#controller)\<`any`\>

#### Implementation of

[IBatch](../interfaces/Factory.IBatch.md).[find](../interfaces/Factory.IBatch.md#find)

#### Defined in

[dist/fetch-factory/batcher.d.ts:150](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.d.ts#L150)

___

### start

• **start**: \<ResultOnSuccess\>() => `Promise`\<`ResultOnSuccess`\>

#### Type declaration

▸ \<`ResultOnSuccess`\>(): `Promise`\<`ResultOnSuccess`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `ResultOnSuccess` | extends `any`[] = [] |

##### Returns

`Promise`\<`ResultOnSuccess`\>

#### Implementation of

[IBatch](../interfaces/Factory.IBatch.md).[start](../interfaces/Factory.IBatch.md#start)

#### Defined in

[dist/fetch-factory/batcher.d.ts:145](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.d.ts#L145)

## Accessors

### complete

• `get` **complete**(): `any`[]

#### Returns

`any`[]

#### Implementation of

[IBatch](../interfaces/Factory.IBatch.md).[complete](../interfaces/Factory.IBatch.md#complete)

#### Defined in

[dist/fetch-factory/batcher.d.ts:141](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.d.ts#L141)

___

### error

• `get` **error**(): `any`[]

#### Returns

`any`[]

#### Implementation of

[IBatch](../interfaces/Factory.IBatch.md).[error](../interfaces/Factory.IBatch.md#error)

#### Defined in

[dist/fetch-factory/batcher.d.ts:142](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.d.ts#L142)

___

### events

• `get` **events**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `end` | [`onEndCallback`](../modules/Factory.md#onendcallback) |
| `progress` | [`onProgressCallback`](../modules/Factory.md#onprogresscallback) |

#### Implementation of

[IBatch](../interfaces/Factory.IBatch.md).[events](../interfaces/Factory.IBatch.md#events)

#### Defined in

[dist/fetch-factory/batcher.d.ts:124](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.d.ts#L124)

___

### fn

• `get` **fn**(): [`FnControllers`](../modules/Factory.md#fncontrollers)

#### Returns

[`FnControllers`](../modules/Factory.md#fncontrollers)

#### Implementation of

[IBatch](../interfaces/Factory.IBatch.md).[fn](../interfaces/Factory.IBatch.md#fn)

#### Defined in

[dist/fetch-factory/batcher.d.ts:123](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.d.ts#L123)

___

### pending

• `get` **pending**(): `any`[]

#### Returns

`any`[]

#### Implementation of

[IBatch](../interfaces/Factory.IBatch.md).[pending](../interfaces/Factory.IBatch.md#pending)

#### Defined in

[dist/fetch-factory/batcher.d.ts:140](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.d.ts#L140)

___

### status

• `get` **status**(): ``"idle"`` \| ``"running"``

#### Returns

``"idle"`` \| ``"running"``

#### Implementation of

[IBatch](../interfaces/Factory.IBatch.md).[status](../interfaces/Factory.IBatch.md#status)

#### Defined in

[dist/fetch-factory/batcher.d.ts:128](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.d.ts#L128)

___

### summary

• `get` **summary**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `complete` | `number` |
| `concurrency` | `number` |
| `duration` | `number` |
| `end` | `number` |
| `error` | `number` |
| `pending` | `number` |
| `percent` | `number` |
| `start` | `number` |
| `total` | `number` |

#### Implementation of

[IBatch](../interfaces/Factory.IBatch.md).[summary](../interfaces/Factory.IBatch.md#summary)

#### Defined in

[dist/fetch-factory/batcher.d.ts:129](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.d.ts#L129)

## Methods

### concurrency

▸ **concurrency**(`n`): `void`

Définis le niveau de concurrence pour le traitement par lots. Il prend un seul paramètre « n » qui représente le nombre de tâches simultanées pouvant être exécutées en même temps.
En définissant le niveau de simultanéité, vous pouvez contrôler le nombre de tâches traitées simultanément dans le travail par lots.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`void`

#### Implementation of

[IBatch](../interfaces/Factory.IBatch.md).[concurrency](../interfaces/Factory.IBatch.md#concurrency)

#### Defined in

[dist/fetch-factory/batcher.d.ts:144](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.d.ts#L144)

___

### createJob

▸ **createJob**\<`Arguments`\>(`description`, `controller`, `args?`): `number`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Arguments` | extends `Record`\<`string`, `any`\> = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |
| `controller` | `Function` |
| `args?` | `Arguments` |

#### Returns

`number`

#### Implementation of

[IBatch](../interfaces/Factory.IBatch.md).[createJob](../interfaces/Factory.IBatch.md#createjob)

#### Defined in

[dist/fetch-factory/batcher.d.ts:149](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.d.ts#L149)

___

### end

▸ **end**(`callback`): `void`

Définis une fonction qui vous permet de définir une fonction de rappel à exécuter lorsque le traitement par lots des contrôleurs est terminé.
La méthode `end` prend un seul paramètre `callback` de type `onEndCallback`, qui est une fonction qui accepte une erreur et les résultats comme arguments.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`onEndCallback`](../modules/Factory.md#onendcallback) |

#### Returns

`void`

#### Implementation of

[IBatch](../interfaces/Factory.IBatch.md).[end](../interfaces/Factory.IBatch.md#end)

#### Defined in

[dist/fetch-factory/batcher.d.ts:146](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.d.ts#L146)

___

### on

▸ **on**(`event`, `callback`): `void`

Utilisée pour enregistrer les écouteurs d'événements pour les événements de progression et de fin dans le système de traitement par lots.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"progress"`` \| ``"end"`` |
| `callback` | [`onEndCallback`](../modules/Factory.md#onendcallback) \| [`onProgressCallback`](../modules/Factory.md#onprogresscallback) |

#### Returns

`void`

#### Implementation of

[IBatch](../interfaces/Factory.IBatch.md).[on](../interfaces/Factory.IBatch.md#on)

#### Defined in

[dist/fetch-factory/batcher.d.ts:151](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.d.ts#L151)

___

### progress

▸ **progress**(`callback`): `void`

Définit une fonction qui vous permet de définir une fonction de rappel à exécuter lorsqu'il y a une progression dans le traitement par lots des contrôleurs.
Le type `onProgressCallback` représente une fonction qui accepte un tableau `BatchProgressEvent` comme argument.
Ce tableau contient des informations sur la progression de chaque tâche par lots, y compris des détails tels que :
- l'index
- la valeur
- les tâches en attente
- le total des tâches
- l'état d'avancement
- le pourcentage d'achèvement
- l'heure de début
- l'heure de fin
- la durée

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`onProgressCallback`](../modules/Factory.md#onprogresscallback) |

#### Returns

`void`

#### Implementation of

[IBatch](../interfaces/Factory.IBatch.md).[progress](../interfaces/Factory.IBatch.md#progress)

#### Defined in

[dist/fetch-factory/batcher.d.ts:147](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.d.ts#L147)

___

### push

▸ **push**\<`Arguments`\>(`controller`, `args?`): `number`

Utilisée pour ajouter une nouvelle fonction de contrôleur à la file d'attente de traitement par lots.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Arguments` | extends `Record`\<`string`, `any`\> = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `controller` | `Function` |
| `args?` | `Arguments` |

#### Returns

`number`

#### Implementation of

[IBatch](../interfaces/Factory.IBatch.md).[push](../interfaces/Factory.IBatch.md#push)

#### Defined in

[dist/fetch-factory/batcher.d.ts:148](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.d.ts#L148)

___

### solver

▸ **solver**\<`ResultOnSuccess`\>(`query`): [`BatchFallbackSolver`](../interfaces/Factory.BatchFallbackSolver.md)\<`ResultOnSuccess`\>

La méthode `solver` dans l'extrait de code définit une fonction qui permet d'ajouter un solveur en tant que requête
qui ne s'exécutera que si l'élément observé a été exécuté (passage de l'attente à l'état terminé ou état d'erreur)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ResultOnSuccess` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | [`BatchFallbackQuery`](../interfaces/Factory.BatchFallbackQuery.md)\<`ResultOnSuccess`\> | ## Sample ```typescript batcher.push(( args ) => { let [ arg1 , arg2 ] = args; return batcher.solver({ find : { id : "Controller ID" }, args : args, on : { success : ( next , result ) => { // DO STUFF WITH RESULT next( myController( ... ) ) }, pending : ( wait ) => { // DO STUFF ON ERROR // NB : WAIT HAVE TO BE USED wait(); } error : ( reject ) => { // DO STUFF ON ERROR reject(); } } }) } , args) ``` |

#### Returns

[`BatchFallbackSolver`](../interfaces/Factory.BatchFallbackSolver.md)\<`ResultOnSuccess`\>

#### Implementation of

[IBatch](../interfaces/Factory.IBatch.md).[solver](../interfaces/Factory.IBatch.md#solver)

#### Defined in

[dist/fetch-factory/batcher.d.ts:152](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.d.ts#L152)

___

### updateControllerResult

▸ **updateControllerResult**(`controllerId`, `result`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `controllerId` | `number` |
| `result` | `any` |

#### Returns

`boolean`

#### Defined in

[dist/fetch-factory/batcher.d.ts:154](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.d.ts#L154)

___

### updateControllerStatus

▸ **updateControllerStatus**(`controllerId`, `status`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `controllerId` | `number` |
| `status` | ``"pending"`` \| ``"done"`` \| ``"error"`` |

#### Returns

`boolean`

#### Implementation of

[IBatch](../interfaces/Factory.IBatch.md).[updateControllerStatus](../interfaces/Factory.IBatch.md#updatecontrollerstatus)

#### Defined in

[dist/fetch-factory/batcher.d.ts:153](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/batcher.d.ts#L153)
