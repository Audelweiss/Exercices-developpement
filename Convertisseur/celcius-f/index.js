'use strict';   // Mode strict du JavaScript

// définition des variables
var deg, result;

//gestionnaire d'évenement sur le bouton F > C
document.getElementById("tocel").addEventListener('click', function(){
    deg = parseFloat(document.getElementById("deg").value); //on récupère la température saisie par l'utilisateur
    result = (deg - 32) * 5/9; // on fait la conversion (google est notre ami)
    document.getElementById("convert").textContent = deg + "°F équivaut à " + result.toFixed(2) + "°C."; //on affiche le résultat dans le <p> en arrondissant à 2 décimales
});

document.getElementById("tofa").addEventListener('click', function(){
    deg = parseFloat(document.getElementById("deg").value); //on récupère la température saisie par l'utilisateur
    result = (deg * 5/9) + 32 ; // on fait la conversion (google est notre ami)
    document.getElementById("convert").textContent = deg + "°C équivaut à " + result.toFixed(2) + "°F."; //on affiche le résultat dans le <p> en arrondissant à 2 décimales
});