"use strict";

var departT = 60;
var departS = 80;
var capT = 0.4;
var capS = 0.13;
var nbCap = 30;
var prixT = departT;
var prixS = departS;
var cpt, tmp;
for (cpt = 1; prixT < prixS; cpt++){
    if((cpt * nbCap) > 150){
        prixT = departT + (nbCap*capT)*(cpt-tmp);
    } else {
        tmp = cpt;
    }
    prixS = departS + (nbCap*capS)*cpt;
    console.log(cpt, prixS, prixT);
}

document.write("La Senseo devient plus rentable après " + cpt + " mois.")
document.write("Vous aurez dépensé " + prixS + "€ VS " + prixT+ "€ avec la Tassimo.")

