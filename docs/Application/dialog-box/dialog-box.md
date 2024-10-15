# Dialog-box

Ce composant est un outil centralisé pour gérer les modales dans notre projet. Il permet d'afficher des fenêtres modales (confirmations, alertes, formulaires, etc.) depuis n'importe où dans l'application, de manière simple et uniforme.

## Contexte

Le composant `Dialog` est basé sur `@patternfly/react-core`, et toute l'application est déjà enveloppée par défaut par le `DialogProvider`. **Il n'est donc pas nécessaire de ré-envelopper les composants de votre module avec ce `DialogProvider`**. Vous pouvez directement utiliser le hook `useDialog`, qui agit comme un utilitaire global pour ouvrir et configurer des modales dans n'importe quel module de l'application.

## Structure du composant

### `DialogProvider`

**Important :** Le `DialogProvider` est déjà implémenté à la racine de l'application. Vous **n'avez pas besoin** d'ajouter ou de ré-envelopper votre composant avec un `DialogProvider`. Toute l'application peut accéder aux fonctionnalités du `Dialog` grâce au hook `useDialog`.

### `useDialog`

Le hook `useDialog` est l'outil principal que vous utiliserez pour afficher et gérer les modales dans votre module. Il vous donne accès à un ensemble de méthodes pour configurer, ouvrir et fermer les modales sans avoir à vous soucier de la gestion d'état ou de props complexes.

### Méthodes principales exposées par `useDialog`

- **`showDialog`** : Affiche la modale.
- **`hideDialog`** : Ferme la modale.
- **`setDialogContent`** : Définit le contenu principal de la modale.
- **`setOnConfirm`** / **`setOnCancel`** : Définit les actions à exécuter pour les boutons "Confirmer" et "Annuler".
- **`setConfirmButtonDisabled` / `setCancelButtonDisabled`** : Active/désactive les boutons de confirmation et d'annulation.
- **`setActionDisabled`** : Désactive toutes les actions (utile pour des opérations asynchrones).

### Exemple d'utilisation

Prenons un exemple où l'on souhaite demander une confirmation avant de supprimer un élément.

```tsx
import React from 'react';
import { useDialog } from '<path-to>/dialog-context';

const DeleteItemButton = ({ itemId }) => {
  const {
    showDialog,
    hideDialog,
    setOnConfirm,
    setOnCancel,
    setDialogContent,
    setConfirmButtonDisabled,
    setCancelButtonDisabled,
  } = useDialog();

  const handleDeleteClick = () => {
    setOnConfirm(async () => {
      await deleteItem(itemId);  // Appel à une API de suppression
      hideDialog();              // Fermer la modale une fois l'action confirmée
    });

    setOnCancel(async () => {
      hideDialog();  // Fermer la modale si l'utilisateur annule
    });

    setDialogContent(<p>Êtes-vous sûr de vouloir supprimer cet élément ?</p>);
    showDialog();  // Afficher la modale
  };

  return (
    <button onClick={handleDeleteClick}>
      Supprimer l'élément
    </button>
  );
};
```

### Utilisation du `factory`

La méthode `factory` permet de créer et afficher rapidement une modale en passant directement le contenu à afficher. C'est une manière flexible de configurer des modales de manière dynamique sans avoir à utiliser toutes les méthodes individuellement.

### Exemple avec `factory`

Voici comment utiliser la méthode `factory` pour afficher les détails d'un élément dans une modale :

```tsx
import React from 'react';
import { useDialog } from '<path-to>/dialog-context';

const ItemDetailsButton = ({ item }) => {

  const {
    factory,
    setOnConfirm,
    setOnCancel,
    showDialog,
    hideDialog
  } = useDialog();

  const handleShowDetails = () => {
    // Définir une action simple pour fermer la modale à la confirmation
    setOnConfirm(async () => {
      hideDialog();
    });

    setOnCancel(async () => {
      hideDialog();
    });

    // Utilisation du factory pour afficher dynamiquement le contenu
    factory(
      <div>
        <h3>Détails de l'élément</h3>
        <p>Nom : {item.name}</p>
        <p>Description : {item.description}</p>
        <p>Prix : {item.price} €</p>
      </div>
    );

    // OU

    factory( () => {

      setOnConfirm(async () => {
        hideDialog();
      });

      setOnCancel(async () => {
        hideDialog();
      });

      return (
        <div>
          <h3>Détails de l'élément</h3>
          <p>Nom : {item.name}</p>
          <p>Description : {item.description}</p>
          <p>Prix : {item.price} €</p>
        </div>
      );

    });
  };

  return (
    <button onClick={handleShowDetails}>
      Afficher les détails
    </button>
  );
};

```

La méthode `factory` injecte directement du contenu dans la modale et l'affiche immédiatement. Cela simplifie grandement l'affichage de modales avec du contenu dynamique sans avoir à configurer manuellement chaque étape.

### Pourquoi ne pas utiliser `DialogProvider` dans vos composants ?

Dans notre application, le `DialogProvider` est déjà intégré par défaut à la racine. Le hook `useDialog` agit donc comme un utilitaire global, disponible partout dans l'application, sans avoir besoin de ré-initialiser le provider dans chaque composant. Cela permet de garantir que tous les modules peuvent facilement interagir avec les modales tout en conservant une gestion centralisée.

Si vous essayez d'instancier plusieurs `DialogProvider`, vous risquez de créer des conflits ou des comportements inattendus avec l'état des modales. **Utilisez uniquement le hook `useDialog`** pour manipuler les modales.

### Reset et gestion de l'état

Après utilisation d'une modale, vous pouvez appeler **`reset`** pour réinitialiser les boutons et les actions associées à la modale, afin d'éviter des conflits lors de la réutilisation :

```tsx
reset();  // Réinitialiser l'état de la modale après utilisation
```

## Conclusion

Le composant `Dialog` offre une gestion centralisée et uniforme des modales dans l'application. Grâce au hook `useDialog`, vous pouvez configurer et afficher des modales à partir de n'importe quel module sans vous soucier de la gestion de leur état ou de leur cycle de vie. La méthode `factory` simplifie également la création de modales dynamiques. Enfin, n'oubliez pas que le `DialogProvider` est déjà en place dans toute l'application, il n'est donc pas nécessaire de l'ajouter dans vos composants.