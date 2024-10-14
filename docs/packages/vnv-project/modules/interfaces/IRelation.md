[@infrasoftbe/infrasoft-project](../README.md) / [Exports](../modules.md) / IRelation

# Interface: IRelation

The `IRelation` interface defines the structure of a relation between two nodes in a project. It has
the following properties:

## Implemented by

- [`_relation`](../classes/relation.md)

## Table of contents

### Properties

- [create\_dt](IRelation.md#create_dt)
- [f\_id](IRelation.md#f_id)
- [f\_token](IRelation.md#f_token)
- [r\_type](IRelation.md#r_type)
- [t\_id](IRelation.md#t_id)
- [t\_token](IRelation.md#t_token)
- [update\_dt](IRelation.md#update_dt)

## Properties

### create\_dt

• **create\_dt**: `number`

creation timestamp of relation

#### Defined in

[packages/infrasoft-vnv-project/src/models/relation.interface.ts:18](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/relation.interface.ts#L18)

___

### f\_id

• **f\_id**: `string`

from_node_id

#### Defined in

[packages/infrasoft-vnv-project/src/models/relation.interface.ts:8](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/relation.interface.ts#L8)

___

### f\_token

• **f\_token**: `string`

from_node_token

#### Defined in

[packages/infrasoft-vnv-project/src/models/relation.interface.ts:10](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/relation.interface.ts#L10)

___

### r\_type

• **r\_type**: [`RelationKind`](../modules.md#relationkind)

relation_type

#### Defined in

[packages/infrasoft-vnv-project/src/models/relation.interface.ts:12](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/relation.interface.ts#L12)

___

### t\_id

• **t\_id**: `string`

to_node_id

#### Defined in

[packages/infrasoft-vnv-project/src/models/relation.interface.ts:14](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/relation.interface.ts#L14)

___

### t\_token

• **t\_token**: `string`

to_node_token

#### Defined in

[packages/infrasoft-vnv-project/src/models/relation.interface.ts:16](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/relation.interface.ts#L16)

___

### update\_dt

• **update\_dt**: `number`

last update timestamp of relation

#### Defined in

[packages/infrasoft-vnv-project/src/models/relation.interface.ts:20](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/models/relation.interface.ts#L20)
