// Imports
import dataMapper from "../dataMapper.js";

// Quand on crée un controller, on démarre
// en créant un nouvel objet
const studentController = {
  // Je crée une nouvelle méthode qui va permettre
  // de gérer l'affichage d'une vue pour les étudiants
  // d'une promo ainsi que les données affiliées
  getStudentsPromoPage: async (req, res, next) => {
    // On va récupérer l'id d'une promo
    const promoId = Number(req.params.promoId); // "5" (type string) => 5 (type int)

    try {
      // Je vais appeler la méthode du dataMapper pour récupérer
      // les étudiants d'une promo
      const promoStudents = await dataMapper.getStudentsPromo(promoId);

      // Si c'est le cas, je renvoie la page associée aux données
      res.render("studentsPromoPage", { promoStudents });
    } catch (error) {
      // On ajoute le code de statut de la réponse HTTP afin de préciser
      // le type d'erreur
      error.status = 500;
      // On renvoie cette erreur au middleware qui gère toutes les erreurs
      return next(error);
    }
  },
};

export default studentController;
