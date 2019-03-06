/**********************************

VARIABLES

Jusqu'à présent, on utilisait le var et const pour nos différentes variables. Introduit par ES6, let a une portée limitée au bloc dans lequel la variable est crée.

**********************************/ 

if (true) var varResult = "variable var"
if (true) {
    let letResult = "variable let" //impossible de faire la déclaration de variable sur une ligne comme pour var, obligé d'encercler d'accolades
} 
console.log("step 1 - les variables : " + varResult)
//console.log(letResult)
//variable var      main.js:13
//Uncaught ReferenceError: letResult is not defined     main.js:14 -> letResult n'existe que dans le if, que dans le bloc où la variable est créée, contrairement au var

//affectation par décomposition
let [a, b, ...reste] = [1, 2, 3, 4, 5]
console.log(`step 1.2 - affectation par décomposition : ${reste}`)
let recompo = {a, b, ...reste}
console.log(`step 1.2 - affectation par décomposition : `, recompo)



/**********************************

TEMPLATE STRING

...ou la concaténation facile. Au lieu d'utiliser les simple ou double quote, on va utiliser les antiquote -> ` et ${} pour mettre du contenu à l'intérieur d'une chaine de caractères.

**********************************/ 

let prenom = "Toto"
let age = 12
console.log(`Step 2 - template string : Je m'appelle ${prenom} et j'ai ${age} ans`) //pas de + ni de fermeture de quote, tout se fait entre les `` et on met le js à l'intérieur de ${...}

/**********************************

OBJETS LITTERAUX

Pour stocker des variables et fonctions dans les objets

**********************************/ 

let objet = {
    test() {
        console.log("step 3 - fonction dans objet")
    }
}
objet.test()

/**********************************

FONCTION FLECHEE

Une façon raccourcie d'écrire une fonction, 

**********************************/ 

let fctObj = {
    test(){
        document.addEventListener("click", (event) => {
            console.log(`step 4 - fonction fléchée et this`, this)
            this.autre()
        })
    },
    autre(){
        console.log(`step 4.1 - fonction fléchée et this`)
    }
}
fctObj.test()

//sans fonction fléchée, il aurait fallu bind
// let fctObj2 = {
//     test(){
//         document.addEventListener("click", function(event) {
//             console.log(`step 4 - fonction fléchée et this`, this)
//             this.autre()
//         }.bind(this)) //on bind le this pour corriger le contexte
//     },
//     autre(){
//         console.log(`step 4.1 - fonction fléchée et this`)
//     }
// }
// fctObj2.test()

/* 

Autres nouveautés : boucle for...of, classe et héritage

ES7 : manipulation des objets avec Object.entries ou values

*/

let obj = {
    a: 1,
    b: 2,
    c: 3
}
console.log("ES7 - manipulation objets clé-valeur : ", obj,Object.entries(obj)) //décompose en tableau à 2 dimensions avec chaque paire clé valeur
console.log("ES7 - manipulation objets valeur : ", obj,Object.values(obj)) //ne récupère que les valeurs
console.log("ES7 - manipulation objets clé : ", obj,Object.keys(obj)) //ne récupère que les clés

