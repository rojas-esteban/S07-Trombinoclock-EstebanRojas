# Requêtes SQL Challenge n° 3

## Insérer dans la table "student" un étudiant qui s'appelle "Chuck Norris" appartenant à la promo 5 (c) Donovan

```sql
INSERT INTO "student"
("first_name", "last_name", "github_username", "profile_picture_url","promo_id")
VALUES ('Chuck', 'Norris', NULL, NULL, 5);
```

## Insérer dans la table "promo" une promo qui s'appelle "César" et ne possède pas d'orga (c) Jean-Pierre

```sql
INSERT INTO "promo"
("name", "github_organization")
VALUES ('César', NULL);
```

## Mettre à jour la promo 5 pour la renommer "Cleo" (c) Cyrille

```sql
UPDATE "promo"
SET "name" = 'Cleo'
WHERE id = 5;
```

## Supprimer la promo 123 (c) Abdel

```sql
DELETE FROM "promo"
WHERE "id" = 123;
```
