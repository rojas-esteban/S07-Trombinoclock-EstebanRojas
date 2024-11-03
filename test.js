import pg from "pg";
const { Client } = pg;

// Adresse de connexion à notre base de données
// Il faut renseigner les paramètres suivants :
// dbuser => L'utilisateur de la base de données
// secretpassword => le mot de passe
// database.server.com:3211 => c'est le serveur (nous ici le serveur local)
// mydb => le nom de la base de données
const client = new Client(process.env.PG_URL);

// On envoie une demande de connexion à la BDD
client.connect();

// A partir de maintenant ,pour faire un appel à la base de de données
// via des requêtes en SQL, nous allons utiliser un fonction de rappel
// afin de gérer le résultat de que nous renvoie celle-ci

// On a une fonction de rappel avec deux paramètres :
// - error => gestion de potentielles erreurs survenues lors d'une opération vers le    serveur de BDD
// - result => Contient le résultat renvoyé par le serveur en cas de succès

// * VERSION 1 - USAGE SYNCHRONE CACA BOU !

/* client.query("SELECT * FROM promo;", (error, result) => {
  // Si j'ai une erreur
  if (error) {
    // J'affiche l'erreur dans la console de mon serveur web
    console.error(error);
    // J'arrête le client
    client.end();
    // On s'assure que la fonction se termine à cet endroit
    return;
  }

  // Si le résultat est reçu, je le renvoie dans la console sur serveur web
  // via un console.table()
  console.table(result.rows);

  // Je vais chercher une promo par son nom depuis mon tableau de résultats
  const searchedPromo = result.rows.find((promo) => promo.name === "Papaye");

  // J'affiche le résultat pour ma promo recherchée
  console.table(searchedPromo);

  // Je souhaite récupérer désormais les étudiants de cette promo
  client.query(
    `SELECT * FROM student WHERE promo_id = ${searchedPromo.id}`,
    (error, result) => {
      // Si j'ai une erreur
      if (error) {
        // J'affiche l'erreur dans la console de mon serveur web
        console.error(error);
        // J'arrête le client
        client.end();
        // On s'assure que la fonction se termine à cet endroit
        return;
      }

      // Si ma requête est réussie
      console.table(result.rows);
      client.end();
    }
  );
}); */

// * VERSION 2 - APPELER LE SERVEUR DE BDD POUR FAIRE DES REQUÊTES ASYNCHRONES VIA DES PROMESSES
/* client
  .query("SELECT * FROM promo")
  // Si ma promesse pou récupérer toutes les promos fonctionne...
  .then((result) => {
    // si ça fonctionne, je renvoie un tableau
    console.table(result.rows);
    // Je cherche une promotion dont le nom est "Papaye"
    // dans le résultat récupéré depuis le serveur
    const searchedPromo = result.rows.find((promo) => promo.name === "Papaye");
    // J'affiche les infos de cette promotion
    console.table(searchedPromo);
    // Je souhaite récupérer les étudiants de la promo trouvée auparavant
    // Je vais retourner le résultat de la promesse que je vais traiter par la suite
    // dans un autre bloc .then()
    return client.query(
      `SELECT * FROM student WHERE promo_id = ${searchedPromo.id}`
    );
  })
  // Ici, je traite différemment le cas de la promesse qui cherche les étudiants d'une promo
  .then((result) => {
    console.table(result.rows);
    // On met un client.end() pour terminer la communication entre le serveur web et la base de données
    // Pas nécessaire à mettre, hormis si la sécurité du site est en péril
    client.end();
  })
  // Si j'ai une erreur lors de ma promesse...
  // La gestion des erreurs est centralisée dans un même bloc d'instructions
  .catch((error) => {
    console.error(error);
    client.end();
  }); */

// * VERSION 3 - Récupérer des données en asynchrone via async / await

async function multipleQueries() {
  // Le bloc 'try' sert à renseigner les instructions à tester
  // comme les promesses
  try {
    // Je vais tester ma requête pour récupérer toutes les promos
    const result = await client.query("SELECT * FROM promo");

    console.table(result.rows);

    // Je vais chercher une promo par son nom en me basant sur le résultat de la promesse reçue
    const searchedPromo = result.rows.find((promo) => promo.name === "Papaye");

    console.table(searchedPromo);

    // Maintenant, je vais chercher les étudiants de la promotion ciblée
    const studentsPromo = await client.query(
      `SELECT * FROM student where promo_id = ${searchedPromo.id}`
    );

    console.table(studentsPromo.rows);
  } catch (error) {
    // Si une promesse n'est pas résolue (fulfilled), on renvoie au bloc catch pour le traitement d'erreur
    console.error(error);
    client.end();
  }
}

multipleQueries();
