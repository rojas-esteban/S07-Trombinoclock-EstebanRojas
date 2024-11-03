// On crée un middleware permettant de prendre en charge (handling)
// toutes les erreurs passées à notre code
const errorHandler = (err, req, res, next) => {
  // Il faut indiquer le message d'erreur ainsi que le code de status de la réponse HTTP
  res.status(err.status).render("errorPage", { errorMessage: err.message });
};

export default errorHandler;
