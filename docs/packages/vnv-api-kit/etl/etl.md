# ETLAPI

## Excel

```ts

// Get all templates definition
ETLAPI().Excel().Tempaltes().get();

// Download all or one template definition
ETLAPI().Excel().Tempaltes( 'templateId' ).download();

// Get all validators kinds
ETLAPI().Excel().Validators().get();

// Audit excel file with a validator
ETLAPI().Excel().Validators( 'validatorKindId' ).audit( ...fileBuffer... );

```