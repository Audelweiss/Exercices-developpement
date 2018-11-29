'use strict';   // Mode strict du JavaScript

var salaireB;

do {
    salaireB = parseFloat(prompt("Quel est le montant de votre salaire brut mensuel ?"));
} while (isNaN(salaireB));

var bCharge = confirm("Souhaitez-vous connaitre le montant de charges pompé par l'Etat ?"); //renvoie true ou false

var net = salaireB * 0.77; // salaire * (100-23) / 100

if (bCharge) {
    alert("Pour un brut de " + salaireB + "€, votre net sera de " + net + "€. L'Etat vous prend donc " + (salaireB*0.23) + "€.");
} else {
    alert("Pour un brut de " + salaireB + "€, votre net sera de " + net + "€.");
}

