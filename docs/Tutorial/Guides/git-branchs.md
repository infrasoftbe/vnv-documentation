# GitBranch

## Normes de nomenclature des branches

Pour assurer une gestion claire et cohérente des branches, l'organisation **Infrasoftbe** adopte les conventions suivantes :

### Branches principales
- **main** : Contient la version stable de production.
- **develop** : Contient la dernière version en développement actif. Toutes les nouvelles fonctionnalités et corrections de bugs sont fusionnées ici avant de passer à `main`.

:::danger

  ## ⚠️ **Note importante** 

  La branche `develop` doit rester générique et ne pas être nominative (***éviter*** les noms du type `develop/<nom-du-développeur>`). 

  Les branches doivent exclusivement être utilisées pour :  ***Développer des fonctionnalités*** , ***Appliquer des corrections*** , ***Produire une release*** , ***Réaliser un hotfix*** , ***Créer un fork ou expérimenter*** ou ***Résoudre des conflits de merge***.

:::

### Branches de fonctionnalités
Utilisées pour développer de nouvelles fonctionnalités spécifiques.
- Nom : `feature/<nom-fonctionnalité>`
- Exemple : `feature/amélioration-interface-utilisateur`

### Branches de correction
Utilisées pour corriger des bugs dans les branches principales.
- Nom : `fix/<description-courte-bug>`
- Exemple : `fix/correction-erreur-login`

### Branches de versions
Utilisées pour préparer une version avant son déploiement.
- Nom : `release/<version> | <env>`
- Exemple : `release/1.2.0 | dev - test - prod`

### Branches de hotfix
Utilisées pour des corrections urgentes dans la version de production.
- Nom : `hotfix/<description-courte>`
- Exemple : `hotfix/correction-critique`

### Branches expérimentales
Pour expérimenter sans impacter les branches principales.
- Nom : `experiment/<nom-expérimentation>`
- Exemple : `experiment/essai-nouvelle-librairie`

### Branches de merge
Utilisées pour résoudre les conflits lorsque plusieurs branches doivent être fusionnées. Elles servent de zones temporaires pour effectuer un merge manuel.
- Nom : `merge/<source>-to-<cible>`
- Exemple : `merge/feature-interface-to-develop`

Ces branches doivent être supprimées après que le merge ait été correctement complété et validé.

---

## Notifications et collaboration via Teams

**Teams** a été configuré comme outil de communication pour suivre les changements dans les branches Git. Cela permet aux membres de l'équipe de rester informés des modifications sans avoir à surveiller manuellement chaque dépôt.

### Configuration des notifications
- Teams est intégré avec le dépôt Git pour recevoir des notifications automatiques concernant les changements de branches.
- Exemple de commande pour s'abonner à une catégorie spécifique de branches :  

```shell
subscribe <org-name>/<repo-name> commits:“release/*”
```

Cette commande permet d'observer toutes les branches correspondant à `release/*` et de recevoir des notifications en temps réel.

### Bénéfices des normes et des filtres
En combinant l'utilisation des normes de nomenclature des branches et les filtres de notification, l'équipe peut :
- Identifier rapidement l'objectif d'une branche (grâce au nom standardisé).
- Rester au courant des activités importantes (comme les mises à jour dans `release/*`).
- Réduire les malentendus en recevant des notifications ciblées uniquement sur les branches pertinentes.

### Meilleures pratiques
- Utilisez les conventions de nommage pour faciliter les recherches dans Teams.
- Configurez des filtres dans Teams pour ne recevoir que les notifications pertinentes à votre projet ou domaine.
- Documentez les branches importantes dans vos réunions d'équipe pour assurer une synchronisation efficace.

---
