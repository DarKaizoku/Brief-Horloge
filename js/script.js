// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()

//Stocker l'heure , minute , seconde  dans des varaiables

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré

// Déplacer les aiguilles
function demarrerLaMontre() {
    let direct = new Date();
      let sec = direct.getSeconds();
      let min = direct.getMinutes();
      let hour = direct.getHours();
      console.log(direct);
    };

var interval = setInterval(demarrerLaMontre, 1000);




// Exercuter la fonction chaque second


//recursivité
