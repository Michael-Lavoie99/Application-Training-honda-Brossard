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

## Publier sur GitHub Pages (pas à pas)
### Étape 1 : créer le dépôt GitHub
1. Allez sur https://github.com/new
2. Nom du dépôt : par exemple `training-app`.
3. Cliquez **Create repository**.

### Étape 2 : envoyer les fichiers depuis Windows
Ouvrez **PowerShell** dans le dossier du projet, puis exécutez :

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<votre-utilisateur>/<nom-du-depot>.git
git push -u origin main
```

> Remplacez `<votre-utilisateur>` et `<nom-du-depot>` par vos informations.

### Étape 3 : activer GitHub Pages
1. Ouvrez votre dépôt sur GitHub.
2. Allez dans **Settings → Pages**.
3. Dans **Build and deployment**, choisissez :
   - **Source** : Deploy from a branch
   - **Branch** : `main`
   - **Folder** : `/ (root)`
4. Cliquez **Save**.

### Étape 4 : récupérer le lien public
Votre lien public sera :

```
https://<votre-utilisateur>.github.io/<nom-du-depot>/
```

> Exemple : si votre utilisateur est `hondabrossard` et le dépôt s'appelle `training-app`, le lien sera
> `https://hondabrossard.github.io/training-app/`.

Si vous me donnez votre **nom d'utilisateur GitHub** et le **nom du dépôt**, je peux vous écrire le lien exact.

## Résoudre les conflits GitHub (pull request)
Si GitHub affiche *"This branch has conflicts that must be resolved"* :

### Option A : via l’interface GitHub
1. Ouvrez la pull request.
2. Cliquez sur **Resolve conflicts**.
3. Dans chaque fichier, choisissez une option :
   - **Accept current change** (garder la version de la branche cible)
   - **Accept incoming change** (garder la version de votre branche)
   - **Accept both changes** (garder les deux, puis corriger manuellement)
4. Supprimez les marqueurs de conflit :
   - `<<<<<<<`, `=======`, `>>>>>>>`
5. Cliquez **Mark as resolved** puis **Commit merge**.

### Option B : en ligne de commande
```bash
git checkout <votre-branche>
git fetch origin
git merge origin/main
# Résolvez les conflits dans les fichiers indiqués
git add .
git commit -m "Resolve merge conflicts"
git push
```

> Si vous voulez, donnez-moi la liste des fichiers en conflit et je vous indiquerai exactement quoi garder.

### Me donner la liste des fichiers en conflit
Dans votre terminal, vous pouvez copier/coller l’un de ces résultats :

```bash
git status --short
```

ou plus directement :

```bash
git diff --name-only --diff-filter=U
```

Ces commandes affichent les fichiers en conflit (marqués `UU`). Envoyez-moi la sortie et je vous guiderai fichier par fichier.
