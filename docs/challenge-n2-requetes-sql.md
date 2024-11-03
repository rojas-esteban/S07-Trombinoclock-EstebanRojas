# Challenge n°2 - Requêtes SQL

## Toutes les promos dans l'ordre alphabétique @Adrien

```sql
SELECT *
FROM promo
ORDER BY name ASC;
```

## Tous les étudiants, dans l'ordre alphabétique des noms de famille @Luna

```sql
SELECT *
FROM student
ORDER BY last_name;
```

## Tous les étudiants de la promo 135 @Hamid B.

```sql
SELECT *
FROM student
WHERE promo_id = 135;
```

## Les étudiants dont le nom ou le prénom comprend la chaîne de caractères "max" @Nathan

```sql
SELECT * FROM student
WHERE first_name ILIKE '%max%'
OR last_name ILIKE '%max%';
```
