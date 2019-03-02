//Math.floor : coupe le chiffre à la virgule (pas d'arrondi, si 4.8 => 4)
//Math.random : générè un chiffre aléatoire entre 0 et 1. On multiplie par 6 pour avoir un nombre entier entre 0 et 5 (cette façon de faire n'est pas la meilleure 😉)
var om = Math.floor(Math.random()*6);
var psg = Math.floor(Math.random()*6);

document.write("<p>OM " + om + "-" + psg + " PSG</p>");
if(om > psg) {
    document.write("<p>L'OM a gagné.</p>");
} else if (psg > om){
    document.write("<p>Le PSG a gagné.</p>");
} else {
    document.write("<p>C'est uné égalité.</p>");
}
