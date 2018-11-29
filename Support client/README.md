# Plateforme de support

Différents dossiers du répertoire :
`code html de base` : comprend le code source HTML de base des différentes pages
`code source final` : comprends le code source du projet complet, y compris le fichier pour importer directement la base de données
`screens` : les captures d'écran des différentes interfaces + modélisation de la base de données

## Etape 1 : la base de données

On a 2 tables dans notre BDD.

- demande : la liste des demandes à afficher sur la page d'accueil 
	 - [ ] nom
	 - [ ] email
	 - [ ] objet de la demande
	 - [ ] contenu de la demande
- catégories : chaque demande est rattachée à une catégorie
	 - [ ] libellé de catégorie

Créer la base de données, ne pas oublier les contraintes de clés étrangères. Si vous n'arrivez pas à imaginer la structure de votre table, vous avez sa modélisation dans `screens`.

Le fichier SQL permettant d'importer la base est également disponible dans `code source final`.

## Etape 2 : créer les interfaces

S'appuyer sur les screens pour créer les interfaces.
Je m'appuie sur la bibliothèque [Materialize](https://materializecss.com/) pour créer ce design material.

Le code HTML et CSS est récupérable dans le dossier `code html de base`.

> oui, je sais, ces interfaces ont quand même plus de gueule que celles de la 3wa 😂

## Etape 3 : ajouter une demande

Si les champs sont bien renseignés, on enregistre la demande dans la base de données puis on redirige vers la page d'accueil.

## Etape 4 : afficher la liste des demandes (accueil)

Afficher les demandes enregistrées sur la BDD par date décroissante.

On peut cliquer sur la demande pour en afficher le détail.

## Etape 5 : afficher la demande

On a cliqué sur une demande, on souhaite en afficher le détail. On affiche donc toute les infos de la demande sur laquelle on a cliqué. 