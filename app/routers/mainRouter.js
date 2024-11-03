// Imports
import express from "express";
import mainController from "../controllers/mainController.js";

// Ici, j'appelle une instance du module Router()
// d'express pour créer un router
const mainRouter = express.Router();

// Route pour la page d'accueil
mainRouter.get("/", mainController.getHomepage);

export default mainRouter;
