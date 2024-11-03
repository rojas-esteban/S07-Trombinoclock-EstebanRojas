import express from "express";
import adminController from "../controllers/adminController.js";

const addStudent = express.Router();

// Route pour la page d'accueil
addStudent.get("/admin/addStudent", adminController.addStudent );

export default addStudent;