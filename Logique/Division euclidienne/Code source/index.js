"use strict";

var a, b, q, r, cpt;

cpt = 0;
a = parseInt(prompt("Saisir un nombre à diviser :"));
b = parseInt(prompt("Saisir un diviseur :"));

if (a < b){
    q = 0;
    r = a;
} else {
    while(a >= b){
        a = a - b; //ou a -= b
        cpt++; //équivalent cpt = cpt + 1
    }
    q = cpt;
    r = a;
}
document.write("<p>Pour la division" + a + "/" + b + "<p>");
document.write("<p>Le quotient vaut : " + q + "<p>");
document.write("<p>Le reste vaut : " + r + "<p>");