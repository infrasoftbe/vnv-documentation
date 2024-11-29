# Normes

## Architecture

### Application

```shell
  src/
  ├── modules/                  #
  ├── packages/                 #
  ├── preload/                  #
      └── context.ts            #
  ├── pages/                    #
  ├── components/               #
  └── charts/                   #
```

### Module

```shell
  root/
  ├── packages/
  │   ├── ui/                   # Code source de l'UI en TypeScript
  │   ├── application/          # Contient NeutralinoJs et les builds finaux
  │   │   ├── ui/               # Dossier distribué de l'UI
  │   │   ├── extensions/       # Dossier distribué des extensions
  │   └── extensions/           # Code source de chaque extension
  └── builder/                  # Contient les scripts et outils de build
```

## Resolvers

### Alias

- @**components** :
- @**charts** : 
- @**modules** : 
- @**preload** : 
- @**pages** : 
- @**icons** : 

