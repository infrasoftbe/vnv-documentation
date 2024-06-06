---
sidebar_position: 0
---
# intro

## Cloning the Repository

To clone the repository containing the server and documentation, run the following command:

```bash
git clone https://github.com/infrasoftbe/vnv-documentation.git
```

Navigate to the project directory:

```bash
cd vnv-documentation
```

## Installing Dependencies

Install the necessary dependencies by running:

## Documentation

The documentation is built with Docusaurus. To start the documentation server locally:

```bash
npm run start
```

## Commit Guidelines

We follow specific commit message conventions to ensure clarity and consistency. Please follow these guidelines:

### Commit Message Format

```bash
<type>(<scope>): <subject>

<body>
```

- type: The type of change (e.g., feat, fix, docs, style, refactor, test, chore)
- scope: The scope of the change (e.g., server, webparts, react-app, docs)
- subject: A short description of the change
- body: (Optional) A more detailed description of the change

#### Commit types

Le type de commit indique la nature de la modification effectuée. Voici une liste des types de commit couramment utilisés :

- feat: Ajout d'une nouvelle fonctionnalité ou d'une nouvelle fonction.
- fix: Correction d'un bogue ou d'une erreur.
- docs: Modification de la documentation uniquement.
- style: Modification du style du code (par exemple, indentation, espacement).
- refactor: Modification du code qui ne corrige pas de bogue ni n'ajoute de fonctionnalité.
- test: Ajout ou modification de tests.
- chore: Tâches de maintenance diverses, telles que la mise à jour des dépendances ou la modification de la configuration.

#### Commit scope

La portée du commit indique la partie du projet affectée par la modification. Cela peut être un fichier, un dossier ou un module spécifique. Voici quelques exemples de portées :

- server: Modifications concernant le serveur.
- webparts: Modifications concernant les webparts.
- react-app: Modifications concernant l'application React.
- docs: Modifications concernant la documentation.
- style: Modifications du style (CSS, SASS, etc.).
- config: Modifications de la configuration du projet.

#### Commit subject

Le sujet du commit est une brève description de la modification effectuée. Il doit être clair et concis. Voici quelques exemples de sujets de commit :

- Ajout d'une nouvelle fonctionnalité de création de projet
- Correction d'un bogue dans la gestion des utilisateurs
- Mise à jour de la documentation pour inclure de nouveaux exemples
- Réorganisation du code pour améliorer la lisibilité

### Example

```bash
docs(server): add new endpoint for project creation

Added a new endpoint to handle project creation. This endpoint validates the input data and saves the project details to the database.
```

## Creating Blog Posts from Commits

We use commit messages to generate blog posts automatically. Follow these steps to ensure your commit messages are picked up correctly:

- Commit your changes: Make sure your commit messages follow the format outlined above.
- Push your changes: Push your changes to the main branch.
- Automated Blog Generation: The CI/CD pipeline will pick up your commit messages and create blog posts accordingly.

For more details on contributing, please refer to the CONTRIBUTING.md file.

## Contact and Support

For any questions or support, please contact us at support@infrasoft.com.
