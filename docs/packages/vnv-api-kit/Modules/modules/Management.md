[@infrasoftbe/infrasoft-vnv-api-kit](../README.md) / [Exports](../modules.md) / Management

# Namespace: Management

## Table of contents

### Interfaces

- [BackupLayer](../interfaces/Management.BackupLayer.md)
- [ManagementLayer](../interfaces/Management.ManagementLayer.md)
- [ManagementProjectLayer](../interfaces/Management.ManagementProjectLayer.md)

### Functions

- [BackupClient](Management.md#backupclient)
- [ManagementClient](Management.md#managementclient)
- [ManagementProjectClient](Management.md#managementprojectclient)

## Functions

### BackupClient

▸ **BackupClient**(`identificator?`): `APILayer`\<[`BackupLayer`](../interfaces/Management.BackupLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identificator?` | `string` |

#### Returns

`APILayer`\<[`BackupLayer`](../interfaces/Management.BackupLayer.md)\>

#### Defined in

[src/management/layers/backup/index.ts:13](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/management/layers/backup/index.ts#L13)

___

### ManagementClient

▸ **ManagementClient**(`identificator?`): `APILayer`\<[`ManagementLayer`](../interfaces/Management.ManagementLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identificator?` | `string` |

#### Returns

`APILayer`\<[`ManagementLayer`](../interfaces/Management.ManagementLayer.md)\>

#### Defined in

[src/management/layers/index.ts:15](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/management/layers/index.ts#L15)

___

### ManagementProjectClient

▸ **ManagementProjectClient**(`identificator?`): `APILayer`\<[`ManagementProjectLayer`](../interfaces/Management.ManagementProjectLayer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `identificator?` | `string` |

#### Returns

`APILayer`\<[`ManagementProjectLayer`](../interfaces/Management.ManagementProjectLayer.md)\>

#### Defined in

[src/management/layers/project/index.ts:17](https://github.com/infrasoftbe/Infrasoft-vnv-api-kit/blob/783d42b/src/management/layers/project/index.ts#L17)
