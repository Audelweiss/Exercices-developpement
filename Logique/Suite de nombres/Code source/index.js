"use strict";

var tab = [0];
//console.log(tab[tab.length - 1]); 
for(var i = 1; tab[tab.length - 1] < 100; i++){
    tab.push(i + tab[tab.length - 1]);
}
console.log(tab);