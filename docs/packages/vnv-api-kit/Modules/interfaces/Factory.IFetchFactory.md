[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [Factory](../modules/Factory.md) / IFetchFactory

# Interface: IFetchFactory

[Factory](../modules/Factory.md).IFetchFactory

Spécifie les propriétés attendues par la fonction FetchFactory pour configurer une requête HTTP.

## Table of contents

### Properties

- [caller](Factory.IFetchFactory.md#caller)
- [format](Factory.IFetchFactory.md#format)
- [headers](Factory.IFetchFactory.md#headers)
- [method](Factory.IFetchFactory.md#method)

## Properties

### caller

• **caller**: `Function`

La fonction utilisée pour effectuer la requête HTTP.

#### Defined in

[dist/fetch-factory/index.d.ts:16](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/index.d.ts#L16)

___

### format

• `Optional` **format**: ``false`` \| ``"text"`` \| ``"json"``

#### Defined in

[dist/fetch-factory/index.d.ts:21](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/index.d.ts#L21)

___

### headers

• `Optional` **headers**: `Record`\<`string`, `string`\>

Les en-têtes de la requête HTTP.

#### Defined in

[dist/fetch-factory/index.d.ts:20](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/index.d.ts#L20)

___

### method

• **method**: ``"GET"`` \| ``"POST"`` \| ``"PUT"`` \| ``"PATCH"`` \| ``"DELETE"``

La méthode de la requête HTTP (GET, POST, PATCH ou DELETE).

#### Defined in

[dist/fetch-factory/index.d.ts:18](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/dist/fetch-factory/index.d.ts#L18)
