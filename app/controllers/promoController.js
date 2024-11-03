// Imports
import dataMapper from "../dataMapper.js";

// Je crée un nouveau module (objet) qui va concerner toute la logique
// métier autour de l'informations des promotion
// Un controller sert à récupérer une vue et les données associées
const promoController = {
  // Ici, je déclare une nouvelle méthode pour
  // récupérer la page des promotions ainsi que les données
  // liées (toutes les promos)
  getPromotionsPage: async (req, res, next) => {
    // Le bloc 'try' sert à indiquer quelles instructions doivent être testées
    // et notamment les promesses
    try {
      const promos = await dataMapper.getAllPromotions();

      // Ensuite, on renvoie la page (.ejs) ainsi que les données récupérées
      // depuis le serveur
      res.render("promotionsPage", { promos });
    } catch (error) {
      // Si une erreur survient lors de la promesse (rejected)...
      // On renvoie une erreur 500
      error.status = 500;
      return next(error);
    }
  },

  // Méthode de récupération de la page d'une seule promo
  // et des données correspondantes
  getOnePromoPage: async (req, res, next) => {
    // Tout d'abord, je dois récupérer l'id passé en paramètre de l'URL
    // On traduit la chaîne de caractères en nombre
    const promoId = Number(req.params.promoId);

    try {
      // Je demande à résoudre la promesse
      const promo = await dataMapper.getOnePromotion(promoId);

      console.log(promo);

      // Ici, en indiquant que ma promo n'existe pas, j'indique que
      // - soit elle est undefined
      // soit null
      // soit égale à 0
      // soit "" (string vide)
      // Soit NaN (Not a Number)
      if (!promo) {
        // On crée une nouvelle erreur basée sur l'objet Error (JavaScript)
        const error = new Error("La promotion recherchée n'existe pas");
        // On lui ajoute une propriété status
        error.status = 404;
        // On renvoie notre méthode next() afin de passer
        // au middleware de gestion d'erreurs en lui passant
        // en argument l'erreur créée
        return next(error);
      }
      // Si j'ai un résultat, je renvoie la page et les données associées
      res.render("singlePromoPage", { promo });
    } catch (error) {
      // On ajoute le code de statut de la réponse HTTP afin de préciser
      // le type d'erreur
      error.status = 500;
      // On renvoie cette erreur au middleware qui gère toutes les erreurs
      return next(error);
    }
  },
};

export default promoController;
