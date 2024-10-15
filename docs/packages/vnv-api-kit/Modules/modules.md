[@infrasoftbe/infrasoft-vnv-api-kit](README.md) / Exports

# @infrasoftbe/infrasoft-vnv-api-kit

## Table of contents

### References

- [Sharepoint](modules.md#sharepoint)

### Namespaces

- [BucketAPI](modules/BucketAPI.md)
- [Factory](modules/Factory.md)
- [Management](modules/Management.md)
- [Neo4j](modules/Neo4j.md)
- [P2PAPI](modules/P2PAPI.md)
- [Session](modules/Session.md)
- [SharepointAPI](modules/SharepointAPI.md)
- [UtilsAPI](modules/UtilsAPI.md)

### Type Aliases

- [TBucketAPI](modules.md#tbucketapi)
- [TNeo4jAPI](modules.md#tneo4japi)
- [TP2PAPI](modules.md#tp2papi)
- [TSessionAPI](modules.md#tsessionapi)
- [TUtilsAPI](modules.md#tutilsapi)

### Variables

- [Graph365](modules.md#graph365)

### Functions

- [Bucket](modules.md#bucket)
- [ManagementAPI](modules.md#managementapi)
- [Neo4jAPI](modules.md#neo4japi)
- [P2P](modules.md#p2p)
- [SessionAPI](modules.md#sessionapi)
- [Utils](modules.md#utils)

## References

### Sharepoint

Re-exports [Sharepoint](modules/SharepointAPI.md#sharepoint)

## Type Aliases

### TBucketAPI

Ƭ **TBucketAPI**: typeof [`BucketAPI`](modules/BucketAPI.md)

#### Defined in

[src/index.ts:34](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/index.ts#L34)

___

### TNeo4jAPI

Ƭ **TNeo4jAPI**: typeof [`Neo4jAPI`](modules.md#neo4japi)

#### Defined in

[src/index.ts:37](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/index.ts#L37)

___

### TP2PAPI

Ƭ **TP2PAPI**: typeof [`P2PAPI`](modules/P2PAPI.md)

#### Defined in

[src/index.ts:30](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/index.ts#L30)

___

### TSessionAPI

Ƭ **TSessionAPI**: typeof [`SessionAPI`](modules.md#sessionapi)

#### Defined in

[src/index.ts:29](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/index.ts#L29)

___

### TUtilsAPI

Ƭ **TUtilsAPI**: typeof [`UtilsAPI`](modules/UtilsAPI.md)

#### Defined in

[src/index.ts:31](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/index.ts#L31)

## Variables

### Graph365

• `Const` **Graph365**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get Client()` | (`clientId`: ``0`` \| ``1``) => `IQueryGraph` |

#### Defined in

[src/index.ts:61](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/index.ts#L61)

## Functions

### Bucket

▸ **Bucket**(): [`BucketAPI`](modules/BucketAPI.md)

#### Returns

[`BucketAPI`](modules/BucketAPI.md)

#### Defined in

[src/index.ts:44](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/index.ts#L44)

___

### ManagementAPI

▸ **ManagementAPI**(`identificator?`): `APILayer`\<[`ManagementLayer`](interfaces/Management.ManagementLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identificator?` | `string` |

#### Returns

`APILayer`\<[`ManagementLayer`](interfaces/Management.ManagementLayer.md)\>

#### Defined in

[src/index.ts:5](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/index.ts#L5)

___

### Neo4jAPI

▸ **Neo4jAPI**(`identificator?`): `APILayer`\<[`DatabaseLayer`](interfaces/Neo4j.DatabaseLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identificator?` | `string` |

#### Returns

`APILayer`\<[`DatabaseLayer`](interfaces/Neo4j.DatabaseLayer.md)\>

#### Defined in

[src/index.ts:8](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/index.ts#L8)

___

### P2P

▸ **P2P**(): [`P2PAPI`](modules/P2PAPI.md)

#### Returns

[`P2PAPI`](modules/P2PAPI.md)

#### Defined in

[src/index.ts:45](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/index.ts#L45)

___

### SessionAPI

▸ **SessionAPI**(`identificator?`): `APILayer`\<[`SessionLayer`](interfaces/Session.SessionLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identificator?` | `string` |

#### Returns

`APILayer`\<[`SessionLayer`](interfaces/Session.SessionLayer.md)\>

#### Defined in

[src/index.ts:2](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/index.ts#L2)

___

### Utils

▸ **Utils**(): [`UtilsAPI`](modules/UtilsAPI.md)

#### Returns

[`UtilsAPI`](modules/UtilsAPI.md)

#### Defined in

[src/index.ts:46](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/index.ts#L46)
