[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [Factory](../modules/Factory.md) / IBatch

# Interface: IBatch

[Factory](../modules/Factory.md).IBatch

## Implemented by

- [`_batch`](../classes/Factory._batch.md)

## Table of contents

### Properties

- [complete](Factory.IBatch.md#complete)
- [error](Factory.IBatch.md#error)
- [events](Factory.IBatch.md#events)
- [fn](Factory.IBatch.md#fn)
- [pending](Factory.IBatch.md#pending)
- [status](Factory.IBatch.md#status)
- [summary](Factory.IBatch.md#summary)

### Methods

- [concurrency](Factory.IBatch.md#concurrency)
- [createJob](Factory.IBatch.md#createjob)
- [end](Factory.IBatch.md#end)
- [find](Factory.IBatch.md#find)
- [on](Factory.IBatch.md#on)
- [progress](Factory.IBatch.md#progress)
- [push](Factory.IBatch.md#push)
- [solver](Factory.IBatch.md#solver)
- [start](Factory.IBatch.md#start)
- [updateControllerStatus](Factory.IBatch.md#updatecontrollerstatus)

## Properties

### complete

• **complete**: [`FnControllers`](../modules/Factory.md#fncontrollers)

#### Defined in

[dist/fetch-factory/batcher.d.ts:118](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.d.ts#L118)

___

### error

• **error**: [`FnControllers`](../modules/Factory.md#fncontrollers)

#### Defined in

[dist/fetch-factory/batcher.d.ts:119](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.d.ts#L119)

___

### events

• **events**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `end` | [`onEndCallback`](../modules/Factory.md#onendcallback) |
| `progress` | [`onProgressCallback`](../modules/Factory.md#onprogresscallback) |

#### Defined in

[dist/fetch-factory/batcher.d.ts:28](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.d.ts#L28)

___

### fn

• **fn**: [`FnControllers`](../modules/Factory.md#fncontrollers)

#### Defined in

[dist/fetch-factory/batcher.d.ts:27](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.d.ts#L27)

___

### pending

• **pending**: [`FnControllers`](../modules/Factory.md#fncontrollers)

#### Defined in

[dist/fetch-factory/batcher.d.ts:117](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.d.ts#L117)

___

### status

• **status**: ``"idle"`` \| ``"running"``

#### Defined in

[dist/fetch-factory/batcher.d.ts:115](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.d.ts#L115)

___

### summary

• **summary**: `any`

#### Defined in

[dist/fetch-factory/batcher.d.ts:116](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.d.ts#L116)

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

#### Defined in

[dist/fetch-factory/batcher.d.ts:36](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.d.ts#L36)

___

### createJob

▸ **createJob**\<`Arguments`\>(`description`, `controller`, `arg?`): `number`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Arguments` | extends `Record`\<`string`, `any`\> = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |
| `controller` | `Function` |
| `arg?` | `Arguments` |

#### Returns

`number`

#### Defined in

[dist/fetch-factory/batcher.d.ts:64](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.d.ts#L64)

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

#### Defined in

[dist/fetch-factory/batcher.d.ts:46](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.d.ts#L46)

___

### find

▸ **find**(`id`): [`Controller`](../modules/Factory.md#controller)\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

[`Controller`](../modules/Factory.md#controller)\<`any`\>

#### Defined in

[dist/fetch-factory/batcher.d.ts:113](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.d.ts#L113)

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

#### Defined in

[dist/fetch-factory/batcher.d.ts:66](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.d.ts#L66)

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

#### Defined in

[dist/fetch-factory/batcher.d.ts:61](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.d.ts#L61)

___

### push

▸ **push**\<`Arguments`\>(`controller`, `arg?`): `number`

Utilisée pour ajouter une nouvelle fonction de contrôleur à la file d'attente de traitement par lots.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Arguments` | extends `Record`\<`string`, `any`\> = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `controller` | `Function` |
| `arg?` | `Arguments` |

#### Returns

`number`

#### Defined in

[dist/fetch-factory/batcher.d.ts:63](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.d.ts#L63)

___

### solver

▸ **solver**\<`ResultOnSuccess`\>(`query`): [`BatchFallbackSolver`](Factory.BatchFallbackSolver.md)\<`ResultOnSuccess`\>

La méthode `solver` dans l'extrait de code définit une fonction qui permet d'ajouter un solveur en tant que requête
qui ne s'exécutera que si l'élément observé a été exécuté (passage de l'attente à l'état terminé ou état d'erreur)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ResultOnSuccess` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | [`BatchFallbackQuery`](Factory.BatchFallbackQuery.md)\<`ResultOnSuccess`\> | ## Sample ```typescript batcher.push(( args ) => { let [ arg1 , arg2 ] = args; return batcher.solver({ find : { id : "Controller ID" }, args : args, on : { success : ( next , result ) => { // DO STUFF WITH RESULT next( myController( ... ) ) }, pending : ( wait ) => { // DO STUFF ON ERROR // NB : WAIT HAVE TO BE USED wait(); } error : ( reject ) => { // DO STUFF ON ERROR reject(); } } }) } , args) ``` |

#### Returns

[`BatchFallbackSolver`](Factory.BatchFallbackSolver.md)\<`ResultOnSuccess`\>

#### Defined in

[dist/fetch-factory/batcher.d.ts:112](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.d.ts#L112)

___

### start

▸ **start**(): `Promise`\<`any`\>

La méthode `start()` est responsable du lancement du traitement par lots des contrôleurs en file d'attente.
Il renvoie une promesse qui se résout lorsque tous les contrôleurs ont été traités.

#### Returns

`Promise`\<`any`\>

#### Defined in

[dist/fetch-factory/batcher.d.ts:41](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.d.ts#L41)

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

#### Defined in

[dist/fetch-factory/batcher.d.ts:114](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/dist/fetch-factory/batcher.d.ts#L114)
