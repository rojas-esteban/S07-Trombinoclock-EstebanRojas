// Imports
import client from "./modules/client.js";

const dataMapper = {
  // Méthode pour récupérer toutes les promotions
  // depuis la base de données
  getAllPromotions: async () => {
    // Je stocke ma requête sql pour l'utiliser par la suite
    const sql = `SELECT * FROM promo;`;

    // On traite de manière asynchrone la promesse de récupération d'un résultat (fulfilled);
    // ici, une requête pour récupérer toutes les promotions
    const result = await client.query(sql);

    // Je retourne le résultat
    return result.rows;
  },

  // Méthode de récupération d'une seule promotion
  getOnePromotion: async (promoId) => {
    // On va stocker notre requête SQL dans une constante
    const sql = `SELECT * FROM promo WHERE id = ${promoId}`;

    // Je demande à résoudre la promesse
    const result = await client.query(sql);

    return result.rows[0];
  },

  // Méthode de récupération des étudiants d'une promo
  getStudentsPromo: async (promoId) => {
    // Pour faire l'appel au serveur, je dois
    // lui écrire une requête
    const sql = `SELECT * FROM student WHERE promo_id = ${promoId}`;

    // Je cherche à récupérer le résultat de la promesse
    const result = await client.query(sql);

    return result.rows;
  },
};

export default dataMapper;
