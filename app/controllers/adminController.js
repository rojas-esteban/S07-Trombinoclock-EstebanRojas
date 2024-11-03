import dataMapper from "../dataMapper.js";

const adminController = {

    addStudent: async (req, res, next) => {
        
        try {
            const promos = await dataMapper.getAllPromotions();

            // Ensuite, on renvoie la page (.ejs) ainsi que les données récupérées
            // depuis le serveur
           
            res.render("addStudentPage", { promos });
        } catch (error) {
            // Si une erreur survient lors de la promesse (rejected)...
            // On renvoie une erreur 500
            error.status = 500;
            return next(error);
        }
    }
}

export default adminController;