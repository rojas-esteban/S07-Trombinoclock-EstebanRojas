const mainController = {
  // Ici, je vais créer une méthode qui va gérer
  // la logique située dans les middlewares à renvoyer
  // par le routeur
  getHomepage: (req, res) => {
    res.render("homepage");
  },
};

export default mainController;
