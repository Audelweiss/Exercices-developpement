'use strict';   // Mode strict du JavaScript

var chiffre = parseInt(prompt("Choississez un nombre ")); 
var tmp = 1;
var result;

// SENS 1

document.write("<h2>Pour le chiffre " + chiffre + " :</h2>")

for (var i = 2; i <= chiffre; i++){
    result = chiffre * tmp + i;
    document.write("<p>" + chiffre + " * " + tmp + " + " + i + " = " + result + "</p>");
    tmp = Number(String(tmp) + String(i)); //pour le chiffre du milieu, on fait une concaténation entre le tmp et le nouveau chiffre additionné, puis on converti la string en nombre pour pouvoir faire le calcul
}

// SENS 2

document.write("<h3>Et dans l'autre sens :</h3>");

tmp = 1;
for (var i = 1; i <= chiffre; i++){
    result = tmp * tmp;
    document.write("<p>" + tmp + " * " + tmp +  " = " + result + "</p>");
    tmp = Number(String(tmp) + String(1)); 
}
