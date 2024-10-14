[@infrasoftbe/infrasoft-project](../README.md) / [Exports](../modules.md) / INodeQuery

# Interface: INodeQuery

The above code is defining an interface called `INodeQuery` in TypeScript. This interface is used to
define the properties that can be used to query for nodes in a system. The properties include
`type`, `id`, `name`, `token`, `meta`, `create_dt`, and `update_dt`. Each property is optional and
can be used to filter the nodes based on their corresponding values.

## Table of contents

### Properties

- [create\_dt](INodeQuery.md#create_dt)
- [id](INodeQuery.md#id)
- [meta](INodeQuery.md#meta)
- [name](INodeQuery.md#name)
- [token](INodeQuery.md#token)
- [type](INodeQuery.md#type)
- [update\_dt](INodeQuery.md#update_dt)

## Properties

### create\_dt

• `Optional` **create\_dt**: `string`

node create_dt to find

#### Defined in

[packages/infrasoft-vnv-project/src/model.ts:608](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/model.ts#L608)

___

### id

• `Optional` **id**: `string`

nodeId to find

#### Defined in

[packages/infrasoft-vnv-project/src/model.ts:600](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/model.ts#L600)

___

### meta

• `Optional` **meta**: [`AllNodeMetadata`](../modules.md#allnodemetadata)

node metadata to find

#### Defined in

[packages/infrasoft-vnv-project/src/model.ts:606](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/model.ts#L606)

___

### name

• `Optional` **name**: `string`

nodeName to find

#### Defined in

[packages/infrasoft-vnv-project/src/model.ts:602](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/model.ts#L602)

___

### token

• `Optional` **token**: `string`

nodeToken to find

#### Defined in

[packages/infrasoft-vnv-project/src/model.ts:604](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/model.ts#L604)

___

### type

• `Optional` **type**: [`NodeType`](../modules.md#nodetype)

nodeType to find

#### Defined in

[packages/infrasoft-vnv-project/src/model.ts:598](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/model.ts#L598)

___

### update\_dt

• `Optional` **update\_dt**: `string`

node update_dt to find

#### Defined in

[packages/infrasoft-vnv-project/src/model.ts:610](https://github.com/infrasoftbe/Infrasoft-vnv-ritual-project/blob/8c55713745804fbf004d7add2c4b90690c1560d1/src/model.ts#L610)
