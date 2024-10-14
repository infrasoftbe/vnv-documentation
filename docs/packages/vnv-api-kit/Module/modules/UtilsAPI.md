[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / UtilsAPI

# Namespace: UtilsAPI

## Table of contents

### Functions

- [ExcelToJson](UtilsAPI.md#exceltojson)
- [JsonToExcel](UtilsAPI.md#jsontoexcel)

## Functions

### ExcelToJson

▸ **ExcelToJson**(`data`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `FormData` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/utils/xls-to-json.ts:4](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/utils/xls-to-json.ts#L4)

___

### JsonToExcel

▸ **JsonToExcel**(`data`, `template`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `template` | ``"1"`` \| ``"2"`` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[src/utils/json-to-xls.ts:4](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/utils/json-to-xls.ts#L4)
