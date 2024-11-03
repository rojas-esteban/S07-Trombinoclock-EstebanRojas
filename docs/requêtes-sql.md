# Requêtes SQL

## Récupérer toutes les promos

`SELECT * FROM promo;` Renvoie toutes les promos

## Afficher uniquement une colonne de données

`SELECT first_name FROM student;` Renvoie uniquement la colonne first_name

## Filtrer les données par nom

`SELECT * FROM promo WHERE name = 'Papaye';` Renvoie les promos dont le nom est "Papaye"

## Condition AND/OR

`SELECT * FROM promo WHERE name = 'Papaye' OR id = 5;` Renvoie une promo dont l'id est 5 ou le nom est "Papaye"
`SELECT * FROM promo WHERE name = 'Papaye' AND id = 5;` Renvoie une promo qui contient le nom Papaye et l'id 5 (s'il le trouve)

## Condition avec LIKE

`SELECT * FROM promo WHERE name ILIKE 'p%';`

## Créer une table

```sql
CREATE TABLE "nom_table" (
    "id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR(32) NOT NULL,
    "last_name" VARCHAR(32) NOT NULL,
    "profile_picture_url" VARCHAR(255)
);
```

---

## Ajouter des données

### Ajouter une seule nouvelle entrée

```sql
sql
INSERT INTO "nom_table" (
    "first_name",
    "last_name",
    "profile_picture_url"
)
VALUES (
    'John',
    'Doe',
    'https://example.com/john-doe.jpg'
);
```

### Ajouter plusieurs nouvelles entrées

```sql
sql
INSERT INTO "nom_table" (
    "first_name",
    "last_name",
    "profile_picture_url"
)
VALUES
('John','Doe', 'https://example.com/john-doe.jpg'),
('Jane', 'Doe', NULL);
```

---

## Mettre à jour une donnée

Ici, notre utilisateur veut changer uniquement son image de profil :

```sql
UPDATE "nom_table"
SET
"first_name" = 'John',
"last_name" = 'Doe',
"profile_picture_url" = 'https://sample.uk/john.jpg'
WHERE id = 1; # On renseigne l'ID de l'utilisateur pour appliquer les modifications
```

---

## Supprimer une donnée

```sql
DELETE FROM "nom_table"
WHERE "id" = 1;
```

---

## Renommer un champ d'une table

```sql
ALTER TABLE "nom_table"
RENAME COLUMN "ancien_nom_colonne" TO "nouveau_nom_colonne";
```

---

## Vider une table de ses données

```sql
TRUNCATE TABLE "nom_table";
```

---

## Supprimer une table

```sql
DROP TABLE "nom_table";
```
