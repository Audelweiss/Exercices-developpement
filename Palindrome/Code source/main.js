'use strict';   // Mode strict du JavaScript

/* On décompose la chaine de caractères en tableau et on compare chaque lettre.
La première avec la dernière et on recentre petit à petit. */ 

var saisie = prompt("Est-ce un palindrome ? \nSaississez un nombre ou un mot pour savoir.").split('');
var bResult = true;
for(var i = 0; i < Math.floor(saisie.length); i++){
    var index = saisie.length - (i+1);
    if(saisie[i] != saisie[index]){ 
        bResult = false;
        break;
    }  
}

if (bResult){
    document.write("<p>" + saisie.join('') + " est un palindrome.</p>");
} else {
    document.write("<p>" + saisie.join('') + " n'est pas un palindrome.</p>");
}