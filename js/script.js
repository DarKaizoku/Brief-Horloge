// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()


//Stocker l'heure , minute , seconde  dans des variables

//Stocker l'heure , minute , seconde  dans des varaiables

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré

// Déplacer les aiguilles
function demarrerLaMontre() {
    let date = new Date();
    const hours = ((date.getHours() + 11) % 12 + 1 );
    const minutes = date.getMinutes();
    const seconds= date.getSeconds();
    const hourDeg = hours * 30 ;       //360/12
    const minuteDeg = minutes * 6; /* 360degrés / 60 minutes = 6 */
    const secondDeg = seconds * 6;
    console.log(date, hours, minutes, seconds,hourDeg,minuteDeg,secondDeg);
    document.querySelector("#hour").style.transform = `rotate(${hourDeg}deg)`;
    document.querySelector("#minute").style.transform = `rotate(${minuteDeg}deg)`;
    document.querySelector("#second").style.transform = `rotate(${secondDeg}deg)`;

}
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);

//recursivité



var interval = setInterval(demarrerLaMontre, 1000);




// Exercuter la fonction chaque second


//recursivité
