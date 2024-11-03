// Imports
import express from "express";
import promoController from "../controllers/promoController.js";
import studentController from "../controllers/studentController.js";

const promoRouter = express.Router();

// Route pour la page de toutes les promotions
promoRouter.get("/promotions", promoController.getPromotionsPage);

// Route pour récupérer une seule promo via son id
// Une route prend deux arguments :
// - une URL avec un paramètre de route (via les :)
// - un controller qui va gérer ce que dois faire le site à l'appel de la route
promoRouter.get("/promotions/:promoId", promoController.getOnePromoPage);

// Route pour récupérer la page des étudiants composant une promotion
promoRouter.get(
  "/promotions/:promoId/etudiants",
  studentController.getStudentsPromoPage
);

export default promoRouter;
