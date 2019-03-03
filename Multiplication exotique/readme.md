# Multiplication exotique

## Sens 1

    Pour le chiffre 9 :

    9 * 12 + 2 = 11
    9 * 123 + 3 = 111
    9 * 1234 + 4 = 1111
    9 * 12345 + 5 = 11111
    9 * 123456 + 6 = 111111
    9 * 1234567 + 7 = 1111111
    9 * 12345678 + 8 = 11111111
    9 * 123456789 + 9 = 111111111

On demande à l'utilisateur de saisir un chiffre (qui doit être un entier). Le calcul correspond à `x * a + b` où à chaque itération, `a et b se concatènent` et `b prend +1`.

> Il faut ici faire bien attention au type des variables et les manipuler de façon à ce que les concaténations comme les calculs puissent se faire ! 😉

## Sens 2

    1 * 1 = 1
    11 * 11 = 121
    111 * 111 = 12321
    1111 * 1111 = 1234321
    11111 * 11111 = 123454321
    111111 * 111111 = 12345654321
    1111111 * 1111111 = 1234567654321
    11111111 * 11111111 = 123456787654321
    111111111 * 111111111 = 12345678987654320

Cette fois-ci, toujours avec le même entier, on commence par `1 * 1` pour terminer par une multiplication avec autant de 1 que le nombre que l'utilisateur a saisi.