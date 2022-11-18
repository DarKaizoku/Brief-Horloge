// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()

let d = new Date();
let hour = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
console.log(hour);

//Stocker l'heure , minute , seconde  dans des varaiables

hourT();

function hourT () {
let d = new Date();
let hour = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
console.log(hour);
}

let interval = setInterval (hourT, 1000);

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré


// Déplacer les aiguilles 
function demarrerLaMontre() {



}
// Exercuter la fonction chaque second
//var interval = setInterval(demarrerLaMontre, 1000);

//recursivité