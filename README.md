# Application Training Honda Brossard

Plateforme d'entraînement pour les vendeurs d'une concession automobile. Elle propose une simulation verbale guidée et une évaluation automatique sur 10 points.

## Fonctionnalités
- Scénario client en 4 étapes avec conseils à chaque étape.
- Saisie des réponses du vendeur et sauvegarde étape par étape.
- Évaluation finale avec note sur 10 et feedback détaillé.

## Utilisation
### Option 1 : en un clic (Windows)
1. Double-cliquez sur `start-windows.bat`.
2. La page s'ouvre automatiquement dans votre navigateur.

Si un message indique que Python est manquant, installez-le depuis https://www.python.org/ et cochez "Add Python to PATH".

### Option 2 : manuelle
Ouvrez `index.html` dans un navigateur ou lancez un serveur local :

```bash
python -m http.server
```

## Publier sur GitHub Pages (lien public)
1. Créez un dépôt GitHub et envoyez les fichiers du projet.
2. Allez dans **Settings → Pages**.
3. Dans **Build and deployment**, choisissez :
   - **Source** : Deploy from a branch
   - **Branch** : `main`
   - **Folder** : `/ (root)`
4. Cliquez **Save**.

Votre lien public sera :

```
https://<votre-utilisateur>.github.io/<nom-du-depot>/
```

> Exemple : si votre utilisateur est `hondabrossard` et le dépôt s'appelle `training-app`, le lien sera
> `https://hondabrossard.github.io/training-app/`.
