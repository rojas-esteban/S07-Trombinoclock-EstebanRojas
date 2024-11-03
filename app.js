// Imports
import "dotenv/config"; // Appeler dotenv afin de pouvoir l'utiliser
import express from "express";
import mainRouter from "./app/routers/mainRouter.js";
import promoRouter from "./app/routers/promoRouter.js";
import errorHandler from "./app/middlewares/errorMiddleware.js";
import addStudent from "./app/routers/addStudent.js";


const app = express();

// Configuration d'EJS
app.set("views", "./app/views");
app.set("view engine", "ejs");

// COnfiguration du chemin vers les fichiers statiques
app.use(express.static("public"));

// * ROUTERS
app.use(mainRouter);
app.use(promoRouter);
app.use(addStudent);



// A mettre à la fin, le routeur de gestion des 404
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(
    `Le serveur Trombinoclock est mis en route sur le port ${process.env.PORT}`
  );
});
