[@infrasoftbe/infrasoft-project](../README.md) / [Exports](../modules.md) / \_relation

# Class: \_relation

The Relation class represents a relationship between two nodes and provides methods for updating and
deleting the relationship.

## Implements

- [`IRelation`](../interfaces/IRelation.md)

## Table of contents

### Constructors

- [constructor](relation.md#constructor)

### Properties

- [create\_dt](relation.md#create_dt)
- [f\_id](relation.md#f_id)
- [f\_token](relation.md#f_token)
- [r\_type](relation.md#r_type)
- [t\_id](relation.md#t_id)
- [t\_token](relation.md#t_token)
- [update\_dt](relation.md#update_dt)

### Accessors

- [jsonReady](relation.md#jsonready)

### Methods

- [delete](relation.md#delete)
- [update](relation.md#update)

## Constructors

### constructor

• **new _relation**(`options`, `project?`): [`_relation`](relation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IRelation`](../interfaces/IRelation.md) |
| `project?` | [`ProxyNodeExtended`](../modules.md#proxynodeextended) |

#### Returns

[`_relation`](relation.md)

#### Defined in

[packages/infrasoft-vnv-project/src/models/relation.model.ts:20](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/relation.model.ts#L20)

## Properties

### create\_dt

• **create\_dt**: `number`

creation timestamp of relation

#### Implementation of

[IRelation](../interfaces/IRelation.md).[create_dt](../interfaces/IRelation.md#create_dt)

#### Defined in

[packages/infrasoft-vnv-project/src/models/relation.model.ts:17](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/relation.model.ts#L17)

___

### f\_id

• **f\_id**: `string`

from_node_id

#### Implementation of

[IRelation](../interfaces/IRelation.md).[f_id](../interfaces/IRelation.md#f_id)

#### Defined in

[packages/infrasoft-vnv-project/src/models/relation.model.ts:9](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/relation.model.ts#L9)

___

### f\_token

• **f\_token**: `string`

from_node_token

#### Implementation of

[IRelation](../interfaces/IRelation.md).[f_token](../interfaces/IRelation.md#f_token)

#### Defined in

[packages/infrasoft-vnv-project/src/models/relation.model.ts:11](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/relation.model.ts#L11)

___

### r\_type

• **r\_type**: [`RelationKind`](../modules.md#relationkind)

relation_type

#### Implementation of

[IRelation](../interfaces/IRelation.md).[r_type](../interfaces/IRelation.md#r_type)

#### Defined in

[packages/infrasoft-vnv-project/src/models/relation.model.ts:12](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/relation.model.ts#L12)

___

### t\_id

• **t\_id**: `string`

Node

#### Implementation of

[IRelation](../interfaces/IRelation.md).[t_id](../interfaces/IRelation.md#t_id)

#### Defined in

[packages/infrasoft-vnv-project/src/models/relation.model.ts:14](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/relation.model.ts#L14)

___

### t\_token

• **t\_token**: `string`

to_node_token

#### Implementation of

[IRelation](../interfaces/IRelation.md).[t_token](../interfaces/IRelation.md#t_token)

#### Defined in

[packages/infrasoft-vnv-project/src/models/relation.model.ts:16](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/relation.model.ts#L16)

___

### update\_dt

• **update\_dt**: `number`

last update timestamp of relation

#### Implementation of

[IRelation](../interfaces/IRelation.md).[update_dt](../interfaces/IRelation.md#update_dt)

#### Defined in

[packages/infrasoft-vnv-project/src/models/relation.model.ts:18](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/relation.model.ts#L18)

## Accessors

### jsonReady

• `get` **jsonReady**(): `this`

#### Returns

`this`

#### Defined in

[packages/infrasoft-vnv-project/src/models/relation.model.ts:32](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/relation.model.ts#L32)

## Methods

### delete

▸ **delete**(): `void`

#### Returns

`void`

#### Defined in

[packages/infrasoft-vnv-project/src/models/relation.model.ts:28](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/relation.model.ts#L28)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[packages/infrasoft-vnv-project/src/models/relation.model.ts:24](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/relation.model.ts#L24)
