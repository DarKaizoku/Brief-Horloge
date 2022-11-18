// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()

let date = new Date();

let heure = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

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

}
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);

//recursivité
document.querySelector("#hour").style.transform = `rotate(${hour}deg)`;
document.querySelector("#minute").style.transform = `rotate(${minute}deg)`;
document.querySelector("#second").style.transform = `rotate(${second}deg)`;
    let direct = new Date();
      let sec = direct.getSeconds();
      let min = direct.getMinutes();
      let hour = direct.getHours();
      console.log(direct);
    };

var interval = setInterval(demarrerLaMontre, 1000);




// Exercuter la fonction chaque second


//recursivité
