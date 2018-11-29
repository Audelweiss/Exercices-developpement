# Guess the number

Code the game 😎👩‍💻

Comment le jeu fonctionne ? L'ordinateur génère un nombre aléatoire compris entre 0 et 500 (vous pouvez choisir de modifier ces valeurs si vous le souhaitez). Le programme demande ensuite à l'utilisateur de saisir un nombre jusqu'à ce qu'il trouve le nombre généré par l'utilisateur !

> Le code source est fourni, uniquement pour que vous puissiez comparer à votre code quand vous avez fini. A vous de ne pas avoir la tentation de regarder avant de réussir à le coder !

## Base

- Le programme détermine un nombre aléatoire à deviner
- Tant que l'utilisateur ne trouve pas ce nombre, le programme lui demande de saisir un nombre
- Une fois que l'utilisateur a trouvé, on lui affiche "Bien joué, c'était bien XXX"

## Amélioration 1 : adapter le message

Si l'utilisateur saisi un nombre supérieur au nombre aléatoire, on lui indique que c'est moins. A l'inverse, on lui indique que c'est plus.

    Nombre aléatoire à trouver : 50 
    Nombre saisi : 60 
    Message : Essaye encore ! C'est moins que 60. 
    Nombre saisi : 40 
    Message : Essaye encore ! C'est plus que 40.

 Si l'utilisateur ne saisi pas un nombre, on lui demande de saisir un nombre compris entre le min et le max défini.

## Amélioration 2 : afficher le nombre d'essais

Implémenter un compteur qui s'incrémente chaque fois que l'utilisateur fait un essai.

A la fin, on affiche donc "Bien joué, c'était bien XXX. Il t'aura fallu X essais."
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTg2Nzg0MzczN119
-->