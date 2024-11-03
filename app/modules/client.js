// Imports
import pg from "pg";
const { Client } = pg;

// Création d'un nouveau client pour se connecter à la BDD
const client = new Client(process.env.PG_URL);

// On envoie une demande de connexion à la BDD
client.connect();

// J'exporte le client pour l'usage
export default client;
