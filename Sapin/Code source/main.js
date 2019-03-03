'use strict';   // Mode strict du JavaScript

var etage = parseInt(prompt("Quel est le nombre d'étages du sapin ?")) * 2; //on multiplie par 2 car à chaque ligne on rajoute 2 étoiles et non 1 seule. Donc le socle du sapin, pour 5 étages, présente 9 étoiles et non 5.
var branche;

for (var i = 1; i <= etage; i += 2){
    //pour chaque étage, on réinitialise la branche
    branche = "";

    //les espaces au début de chaque ligne pour que le sapin soit bien aligné
    for( var x = 0; x < etage - i ; x++) {
        branche += "&nbsp;";
    }

    //boucle pour dessiner la branche
    for (var y = 1; y <= i; y++){
        branche += "*";
    }
    branche += "<br>";
    document.write(branche);
}

//autre solution, avec utilisation d'une boucle while
/*
var espace = etage + (etage - 2);
for (var i = 1; i <= etage; i++){
    if (i % 2 === 0){
        document.write("<br>");
        continue; //arrête cette itération et passe à la suivante
    }

    var cpt = 0;
    for (var y = 0; y < i; y++){
        while(cpt <= espace){
            document.write("&nbsp;");
            cpt++;
        }
        document.write("*");
    }
    espace -= 2;
}
*/


