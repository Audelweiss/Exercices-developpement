'use strict';   // Mode strict du JavaScript

// Le message va varier en fonction de ce que saisi l'utilisateur, on utilise donc une variable
var message = "Quel est le nombre ? \n Il est compris entre 0 et 500."

// nombre aléatoire compris entre 0 et 500 à deviner
var number = getRandomInteger(0, 500);

// compteur qui va indiquer le nombre d'essais avant de trouver le nombre
var cpt = 0;

//la variable qui contient le nombre saisi par l'utilisateur
var guess;

// on demande à l'utilisateur de saisir un nombre TANT QU'il est différent du nombre aléatoire number
do
{
    guess = parseInt(window.prompt(message));
    
    // si l'utilisateur ne saisi pas un nombre
    if (isNaN(guess)){
        message = "Il faut saisir un nombre compris entre 0 et 500 banane !";
    } 
    // si le nombre saisi est inférieur au nombre à deviner
    else if (guess < number){
        message = "Essaye encore ! C'est plus que " + guess;
    } 
    // si le nombre saisi est supérieur au nombre à deviner
    else {
        message = "Essaye encore ! C'est moins que " + guess;
    }
    cpt++; // on incrémente de façon à compter l'essai nécessaire
}
while(isNaN(number) || guess != number);

// on affiche le nombre 
document.write('<p>Bien joué, c\'était bien <strong>' + number + '</strong> ! Il t\'aura fallu ' + cpt + ' essais.</p>');


// la fonction utilities qui génère un nombre aléatoire
function getRandomInteger(min, max)
{
    // Renvoie un nombre entier aléatoire compris entre les arguments min et max inclus.
	return Math.floor(Math.random() * (max - min + 1)) + min;
}