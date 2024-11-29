# Fetch Factory

Cette libraire fourni un factory de requêtes HTTP réutilisables appelée Fetch Factory.

## **Fetch Factory**

La **Fetch Factory** permet de créer des fonctions de requête HTTP réutilisables avec des options spécifiques telles que la méthode et les en-têtes. Elle peut être utilisée pour effectuer des requêtes GET, POST, PUT, PATCH ou DELETE.

### **Utilisation du Fetch Factory**

Pour utiliser le Fetch Factory, importez-le dans votre projet et créez des fonctions de requête pour différents types de méthodes HTTP :

```tsx
import { FetchFactory, IFetchFactory } from './fetchFactory';

// Exemple d'utilisation pour une requête GET
export const MyGet = (headers: IFetchFactory['headers'] = {}) => {
  return FetchFactory<any, any>({
    caller: fetch.bind(window),
    method: "GET",
    headers: headers,
  });
}

MyGet({ 'content-type' : 'application/json' })('/api/data')
```

Vous pouvez également utiliser les fonctions de requête prédéfinies comme suit :

```tsx
import { Get, Post, Put, Patch, Delete } from './requests';

// Exemple d'utilisation des fonctions prédéfinies pour les requêtes HTTP
const fetchData = async () => {
  const responseData = await Get()('/api/data');
  console.log('Data:', responseData);
}
```