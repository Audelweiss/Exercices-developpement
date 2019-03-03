'use strict';   // Mode strict du JavaScript

var tab = [
    {
        prenom : "Toto",
        age : 12
    },
    {
        prenom : "Lucette",
        age : 14
    },
    {
        prenom : "Antoinette",
        age : 13
    },
    {
        prenom : "Gribouille",
        age : 13
    }
];

// Boucle while = la moins adaptée ici
document.write("<h2>Avec un compteur et un while</h2>");
var cpt = 0;
while (cpt < tab.length){
    document.write("Prénom : " + tab[cpt].prenom + " | Age : " + tab[cpt].age + " ans<br>");
    cpt++;
}

// Boucle for classique
document.write("<h2>Avec un for classique</h2>");
for(var i = 0; i < tab.length; i++){
    document.write("Prénom : " + tab[i].prenom + " | Age : " + tab[i].age + " ans<br>");
}

// Boucle for of
document.write("<h2>Avec un for...of</h2>");
for(var item of tab){
    document.write("Prénom : " + item.prenom + " | Age : " + item.age + " ans<br>");
}

// Boucle foreach
document.write("<h2>Avec un foreach</h2>");
tab.forEach(function(item){
    document.write("Prénom : " + item.prenom + " | Age : " + item.age + " ans<br>");
});