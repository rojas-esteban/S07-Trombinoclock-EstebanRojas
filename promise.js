// Ici, on va créer une promesse en JS
const promise = new Promise((resolve, reject) => {
  // Premier état de ma promesse, le lancement
  console.log("Promesse en état d'attente de résolution : Pending");

  // Je crée un nouveau nombre aléatoire
  const randomNumber = Math.round(Math.random() * 10);

  // On va simuler une réponse qui met du temps à revenir ~ 2 secondes
  setTimeout(() => {
    if (randomNumber > 5) {
      resolve(
        `La promesse est résolue, le nombre aléatoire est au dessus de 5`
      );
    } else {
      reject(
        `La promesse a échouée, le nombre aléatoire est égal ou en dessous de 5`
      );
    }
  }, 2000);
});

// QUand on souhaite traiter une promesse, on va utiliser deux méthodes :
// then() => Si ma promesse est résolue, je vais exécuté le code situé dans cette méthode
// catch() => Si ma promesse est rejetée, je vais exécuté le code dans cette partie

promise
  .then((value) => {
    // Si le nombre est supérieur à 5, j'affiche le nombre
    console.log(value);
  })
  .catch((error) => {
    // Ici, on va traiter l'erreur renvoyée par la promesse
    console.error(error);
  });
