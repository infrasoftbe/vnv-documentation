[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / [SharepointAPI](../modules/SharepointAPI.md) / [Lists](../modules/SharepointAPI.Lists.md) / IDocumentListItem

# Interface: IDocumentListItem

[SharepointAPI](../modules/SharepointAPI.md).[Lists](../modules/SharepointAPI.Lists.md).IDocumentListItem

The `export interface IDocumentListItem` is defining an interface in TypeScript. It specifies the
structure of an object that represents a document list item.

## Table of contents

### Properties

- [\_content](SharepointAPI.Lists.IDocumentListItem.md#_content)
- [\_fields](SharepointAPI.Lists.IDocumentListItem.md#_fields)
- [name](SharepointAPI.Lists.IDocumentListItem.md#name)
- [relativePath](SharepointAPI.Lists.IDocumentListItem.md#relativepath)
- [type](SharepointAPI.Lists.IDocumentListItem.md#type)

## Properties

### \_content

• **\_content**: `string`

The `_content:string;` property in the `IDocumentListItem` interface is used to store the content
of a document list item. It represents the actual content of the item, such as the text of a
document or the data in a file. The property is of type `string`, which means it can hold a string
value.

#### Defined in

[src/sharepoint/lists/index.ts:86](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/lists/index.ts#L86)

___

### \_fields

• **\_fields**: `Record`\<`string`, \{ `Options`: `Record`\<`string`, `any`\> ; `Show?`: `boolean` ; `Type`: `string` ; `Value`: `string`  }\>

The `_fields` property in the `IDocumentListItem` interface is used to define the fields of a
document list item. It is an object that contains key-value pairs, where the key is the field name
and the value is an object that describes the field.

#### Defined in

[src/sharepoint/lists/index.ts:91](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/lists/index.ts#L91)

___

### name

• **name**: `string`

The `name:string;` is defining a property called `name` in the `IGridListProps` interface. This
property is of type `string`, which means it can hold a string value. It represents the name of a
grid list.

#### Defined in

[src/sharepoint/lists/index.ts:80](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/lists/index.ts#L80)

___

### relativePath

• **relativePath**: `string`

The `relativePath:string;` property in the `IDocumentListItem` interface is used to store the
relative path of a document list item. It represents the path of the item relative to the root
folder of the document library.

#### Defined in

[src/sharepoint/lists/index.ts:75](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/lists/index.ts#L75)

___

### type

• **type**: ``"file"`` \| ``"folder"``

The `type:'file'|'folder';` is defining a property called `type` in the `IDocumentListItem`
interface. This property can have two possible values: `'file'` or `'folder'`. It is used to
indicate whether the item in the document list is a file or a folder.

#### Defined in

[src/sharepoint/lists/index.ts:70](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/63c0e77/src/sharepoint/lists/index.ts#L70)
