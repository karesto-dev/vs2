# Configuration de l'envoi d'emails avec Nodemailer

## Variables d'environnement requises

Créez un fichier `.env.local` à la racine du projet avec les variables suivantes :

```env
GMAIL_USER=3r.elkhaddar@gmail.com
GMAIL_APP_PASSWORD=votre_mot_de_passe_application_ici
```

## Comment obtenir un mot de passe d'application Gmail

Pour utiliser Gmail avec Nodemailer, vous devez générer un **mot de passe d'application** (App Password) :

1. **Activer la validation en 2 étapes** sur votre compte Google (si ce n'est pas déjà fait)
   - Allez sur https://myaccount.google.com/security
   - Activez la "Validation en deux étapes"

2. **Générer un mot de passe d'application** :
   - Allez sur https://myaccount.google.com/apppasswords
   - Sélectionnez "Mail" comme application
   - Sélectionnez "Autre (nom personnalisé)" comme appareil
   - Entrez "Vorion Studio" comme nom
   - Cliquez sur "Générer"
   - **Copiez le mot de passe généré** (16 caractères, format : xxxx xxxx xxxx xxxx)

3. **Ajoutez le mot de passe dans `.env.local`** :
   - Remplacez `votre_mot_de_passe_application_ici` par le mot de passe généré
   - Supprimez les espaces du mot de passe (ex: `xxxxxxxxxxxxxxxx`)

## Exemple de fichier .env.local

```env
GMAIL_USER=3r.elkhaddar@gmail.com
GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
```

**Important** : Le fichier `.env.local` est déjà dans `.gitignore` et ne sera pas commité sur GitHub.

## Test

Une fois configuré, testez l'envoi d'email en remplissant le formulaire de contact sur le site.

