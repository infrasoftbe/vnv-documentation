[@infrasoftbe/infrasoft-project](../README.md) / [Exports](../modules.md) / JSONSchema3or4

# Interface: JSONSchema3or4

## Indexable

▪ [k: `string`]: `any`

## Table of contents

### Properties

- [$ref](JSONSchema3or4.md#$ref)
- [$schema](JSONSchema3or4.md#$schema)
- [additionalItems](JSONSchema3or4.md#additionalitems)
- [additionalProperties](JSONSchema3or4.md#additionalproperties)
- [allOf](JSONSchema3or4.md#allof)
- [anyOf](JSONSchema3or4.md#anyof)
- [default](JSONSchema3or4.md#default)
- [definitions](JSONSchema3or4.md#definitions)
- [dependencies](JSONSchema3or4.md#dependencies)
- [description](JSONSchema3or4.md#description)
- [disallow](JSONSchema3or4.md#disallow)
- [divisibleBy](JSONSchema3or4.md#divisibleby)
- [enum](JSONSchema3or4.md#enum)
- [exclusiveMaximum](JSONSchema3or4.md#exclusivemaximum)
- [exclusiveMinimum](JSONSchema3or4.md#exclusiveminimum)
- [extends](JSONSchema3or4.md#extends)
- [format](JSONSchema3or4.md#format)
- [id](JSONSchema3or4.md#id)
- [items](JSONSchema3or4.md#items)
- [maxItems](JSONSchema3or4.md#maxitems)
- [maxLength](JSONSchema3or4.md#maxlength)
- [maxProperties](JSONSchema3or4.md#maxproperties)
- [maximum](JSONSchema3or4.md#maximum)
- [minItems](JSONSchema3or4.md#minitems)
- [minLength](JSONSchema3or4.md#minlength)
- [minProperties](JSONSchema3or4.md#minproperties)
- [minimum](JSONSchema3or4.md#minimum)
- [multipleOf](JSONSchema3or4.md#multipleof)
- [not](JSONSchema3or4.md#not)
- [oneOf](JSONSchema3or4.md#oneof)
- [pattern](JSONSchema3or4.md#pattern)
- [patternProperties](JSONSchema3or4.md#patternproperties)
- [properties](JSONSchema3or4.md#properties)
- [required](JSONSchema3or4.md#required)
- [title](JSONSchema3or4.md#title)
- [type](JSONSchema3or4.md#type)
- [uniqueItems](JSONSchema3or4.md#uniqueitems)

## Properties

### $ref

• `Optional` **$ref**: `string`

#### Defined in

node_modules/@types/to-json-schema/index.d.ts:21

___

### $schema

• `Optional` **$schema**: `string`

#### Defined in

node_modules/@types/to-json-schema/index.d.ts:22

___

### additionalItems

• `Optional` **additionalItems**: `boolean` \| [`JSONSchema3or4`](JSONSchema3or4.md)

#### Defined in

node_modules/@types/to-json-schema/index.d.ts:38

___

### additionalProperties

• `Optional` **additionalProperties**: `boolean` \| [`JSONSchema3or4`](JSONSchema3or4.md)

#### Defined in

node_modules/@types/to-json-schema/index.d.ts:48

___

### allOf

• `Optional` **allOf**: `JSONSchema4`[]

#### Defined in

node_modules/@types/to-json-schema/index.d.ts:66

___

### anyOf

• `Optional` **anyOf**: `JSONSchema4`[]

#### Defined in

node_modules/@types/to-json-schema/index.d.ts:67

___

### default

• `Optional` **default**: `JSONSchema4Type`

#### Defined in

node_modules/@types/to-json-schema/index.d.ts:26

___

### definitions

• `Optional` **definitions**: `Object`

#### Index signature

▪ [k: `string`]: `JSONSchema4`

#### Defined in

node_modules/@types/to-json-schema/index.d.ts:50

___

### dependencies

• `Optional` **dependencies**: `Object`

#### Index signature

▪ [k: `string`]: [`JSONSchema3or4`](JSONSchema3or4.md) \| `string` \| `string`[]

#### Defined in

node_modules/@types/to-json-schema/index.d.ts:59

___

### description

• `Optional` **description**: `string`

#### Defined in

node_modules/@types/to-json-schema/index.d.ts:24

___

### disallow

• `Optional` **disallow**: `string` \| (`string` \| [`JSONSchema3or4`](JSONSchema3or4.md))[]

JSON Schema 3 only

#### Defined in

node_modules/@types/to-json-schema/index.d.ts:72

___

### divisibleBy

• `Optional` **divisibleBy**: `number`

JSON Schema 3 uses `divisibleBy` instead of `multipleOf`.

#### Defined in

node_modules/@types/to-json-schema/index.d.ts:29

___

### enum

• `Optional` **enum**: `JSONSchema4Type`[]

#### Defined in

node_modules/@types/to-json-schema/index.d.ts:63

___

### exclusiveMaximum

• `Optional` **exclusiveMaximum**: `boolean`

#### Defined in

node_modules/@types/to-json-schema/index.d.ts:31

___

### exclusiveMinimum

• `Optional` **exclusiveMinimum**: `boolean`

#### Defined in

node_modules/@types/to-json-schema/index.d.ts:33

___

### extends

• `Optional` **extends**: [`JSONSchema3or4`](JSONSchema3or4.md) \| [`JSONSchema3or4`](JSONSchema3or4.md)[]

#### Defined in

node_modules/@types/to-json-schema/index.d.ts:74

___

### format

• `Optional` **format**: `string`

#### Defined in

node_modules/@types/to-json-schema/index.d.ts:78

___

### id

• `Optional` **id**: `string`

#### Defined in

node_modules/@types/to-json-schema/index.d.ts:20

___

### items

• `Optional` **items**: [`JSONSchema3or4`](JSONSchema3or4.md) \| [`JSONSchema3or4`](JSONSchema3or4.md)[]

#### Defined in

node_modules/@types/to-json-schema/index.d.ts:39

___

### maxItems

• `Optional` **maxItems**: `number`

#### Defined in

node_modules/@types/to-json-schema/index.d.ts:41

___

### maxLength

• `Optional` **maxLength**: `number`

#### Defined in

node_modules/@types/to-json-schema/index.d.ts:34

___

### maxProperties

• `Optional` **maxProperties**: `number`

#### Defined in

node_modules/@types/to-json-schema/index.d.ts:44

___

### maximum

• `Optional` **maximum**: `number`

#### Defined in

node_modules/@types/to-json-schema/index.d.ts:30

___

### minItems

• `Optional` **minItems**: `number`

#### Defined in

node_modules/@types/to-json-schema/index.d.ts:42

___

### minLength

• `Optional` **minLength**: `number`

#### Defined in

node_modules/@types/to-json-schema/index.d.ts:35

___

### minProperties

• `Optional` **minProperties**: `number`

#### Defined in

node_modules/@types/to-json-schema/index.d.ts:45

___

### minimum

• `Optional` **minimum**: `number`

#### Defined in

node_modules/@types/to-json-schema/index.d.ts:32

___

### multipleOf

• `Optional` **multipleOf**: `number`

#### Defined in

node_modules/@types/to-json-schema/index.d.ts:27

___

### not

• `Optional` **not**: `JSONSchema4`

#### Defined in

node_modules/@types/to-json-schema/index.d.ts:69

___

### oneOf

• `Optional` **oneOf**: `JSONSchema4`[]

#### Defined in

node_modules/@types/to-json-schema/index.d.ts:68

___

### pattern

• `Optional` **pattern**: `string`

#### Defined in

node_modules/@types/to-json-schema/index.d.ts:36

___

### patternProperties

• `Optional` **patternProperties**: `Object`

#### Index signature

▪ [k: `string`]: [`JSONSchema3or4`](JSONSchema3or4.md)

#### Defined in

node_modules/@types/to-json-schema/index.d.ts:56

___

### properties

• `Optional` **properties**: `Object`

#### Index signature

▪ [k: `string`]: [`JSONSchema3or4`](JSONSchema3or4.md)

#### Defined in

node_modules/@types/to-json-schema/index.d.ts:52

___

### required

• `Optional` **required**: `boolean` \| `string`[]

#### Defined in

node_modules/@types/to-json-schema/index.d.ts:47

___

### title

• `Optional` **title**: `string`

#### Defined in

node_modules/@types/to-json-schema/index.d.ts:23

___

### type

• `Optional` **type**: `JSONSchema4TypeName` \| `JSONSchema4TypeName`[]

#### Defined in

node_modules/@types/to-json-schema/index.d.ts:64

___

### uniqueItems

• `Optional` **uniqueItems**: `boolean`

#### Defined in

node_modules/@types/to-json-schema/index.d.ts:43
