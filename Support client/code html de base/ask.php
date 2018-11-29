<!DOCTYPE html>
<html>

<head>
    <title>Nouvelle demande</title>
    <meta name="charset" content="UTF-8" />

</head>

<body>
    <header>
        <nav>
            <div>
                <ul>
                    <li><a href="index.php">Liste des demandes</a></li>
                    <li><a href="ask.php">Faire une demande</a></li>
                </ul>
            </div>
        </nav>
    </header>
    <h1>Envoyer une nouvelle demande</h1>
    <h2>Merci de remplir les champs ci-dessous afin de valider l'envoi de votre demande.</h2>
    <!-- FORMULAIRE -->
    <form action="traitement.php" method="post">
        <input id="nom" name="nom" type="text" class="validate">
        <label for="nom">Votre nom</label>
        <input id="email" name="email" type="email" class="validate">
        <label for="email">Votre email</label>
        <input id="objet" name="objet" type="text" class="validate">
        <label for="objet">Objet de la demande</label>
        <select name="cat" id="cat">
                    <option value="0">S&eacute;lectionner une cat&eacute;gorie...</option>
                            <option value="valeur">Catégorie</option>
          </select>
        <textarea id="msg" name="msg"></textarea>
        <label for="msg">Expliquez votre demande</label>
        <button type="submit">Envoyer</button>
    </form>

</body>

</html>