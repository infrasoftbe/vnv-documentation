# Batcher

Cette libraire fourni un système de traitement par lots (Batcher) pour gérer l'exécution asynchrone et concurrente des contrôleurs.

## **Batcher**

Le **Batcher** est un système de traitement par lots permettant d'exécuter de manière asynchrone et concurrente une série de contrôleurs. Il fournit un contrôle sur le niveau de concurrence, la gestion des événements de progression et de fin, ainsi que la possibilité de résoudre des dépendances entre les contrôleurs avec un mécanisme de fallback.

### **Utilisation du Batcher**

Pour utiliser le Batcher, importez-le dans votre projet et créez une instance de batcher avec éventuellement une configuration :

```tsx
import { createBatch } from './batcher';

const batch = createBatch({
  concurrency: 4, // Niveau de concurrence
  progress: (progress) => {
    console.log('Progress:', progress);
  },
  end: (err, results) => {
    if (err) {
      console.error('Batch ended with error:', err);
    } else {
      console.log('Batch completed successfully:', results);
    }
  },
});
```

Ensuite, ajoutez des contrôleurs à la file d'attente du batcher et lancez le traitement par lots :

```tsx
batch.push(async (args) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return 'Task result';
});

// Ajoutez d'autres contrôleurs...

batch.start().then((results) => {
  console.log('Batch results:', results);
});
```

## **Fallback Resolver**

Le **Fallback Resolver** est une fonctionnalité du Batcher qui permet d'encapsuler un job qui sera utilisé uniquement si un autre job est résolu. Cela permet de gérer les dépendances entre les contrôleurs.

### **Utilisation du Fallback Resolver**

Pour utiliser le Fallback Resolver, créez une requête de fallback avec un ensemble de contrôleurs associés et leurs gestionnaires de succès, d'attente et d'erreur :

```tsx
import { BatchFallbackQuery } from './fallbackSolver';

const fallbackQuery: () => BatchFallbackQuery<any> = ( args:any[] ) => {
	return {
	  find: { id: [0] }, // Identifiants des contrôleurs associés
	  args: args, // Arguments facultatifs
	  on: {
	    success: (next, reject, result) => {
	      console.log('Fallback success:', result);
	      next(Promise.resolve('Fallback result'));
	    },
	    pending: (wait) => {
	      console.log('Fallback pending');
	      wait();
	    },
	    error: (reject) => {
	      console.log('Fallback error');
	      reject('Error occurred');
	    },
	  },
	}
};

batch.push((args) => {
  return batch.solver(fallbackQuery(args));
});

```

---