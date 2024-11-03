# SQL - création d'une base de données

## Se connecter à PostgreSQL

1. Ouvrir un terminal
2. Entrer la commande : `sudo -u postgres psql`

---

## Créer un nouvel utilisateur

Lorsque vous êtes connecté à PostgreSQL :

- `CREATE USER nom_utilisateur WITH LOGIN PASSWORD 'mot_de_passe';`
- Renvoie la réponse `CREATE ROLE` si l'opération est un succès
- Pour voir la liste des utilisateurs : `\du`

---

## Créer une nouvelle base de données

Lorsque vous êtes connecté à PostgreSQL :

- On crée une nouvelle base de données : `CREATE DATABASE nom_de_ma_base OWNER 'admin';`
- Renvoie la réponse `CREATE DATABASE` si l'opération est un succès
- Pour voir la liste des bases de données disponibles : `\l` ou `\l+` (pour plus de détails)

---

## Se connecter directement à une base de données

D'ici, vous avez deux options selon le compte auquel vous êtes connecté 🔍

### Connexion directe depuis le terminal

- Si vous êtes encore connecté en tant que super utilisateur (postgres), vous pouvez quitter la session via la commande `\q`

- Désormais, on peut se connecter directement à notre base de données depuis notre **terminal** (~~pas depuis postgre~~ ⚠️) via la commande : `psql -U nom_utilisateur -d nom_de_la_base`
- Le terminal vous demande le mot de passe lié à votre utilisateur. L'écran n'affiche rien à la saisie, C'EST NORMAL ! (confidentialité 🤫)
- Si l'opération réussit, vous voyez apparaître le nom de votre base : `nom_de_la_base=>`

### Connexion depuis PostgreSQL

- Si vous êtes déjà connecté via votre compte `nom_utilisateur`, vous pouvez accéder directement à la bas de données via la commande `\c nom_de_la_base`

---

## Ajouter des données dans la base via un fichier

Lorsque l'on est connecté à notre base :

- ⚠️ On vérifie que l'on est bien sur la bonne base, le nom s'affiche dans notre terminal : `nom_de_la_base=>`
- Pour ajouter un fichier :
  - ⚠️ On récupère le chemin de notre fichier à importer (sur Linux, clic droit sur le fichier > Propriétés > Général : Emplacement)
  - Puis on l'ajoute dans notre commande : `\i /chemin/vers/fichier.sql`

## Afficher la structure d'une table

On peut récupérer les informations d'une base de données via cette commande :
`\d nom_table`

## Afficher toutes les tables présentes dans notre base de données

```bash
\dt
```

---
