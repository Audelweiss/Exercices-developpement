<!DOCTYPE html>
<html>

<head>
    <title>Nouvelle demande</title>
    <meta name="charset" content="UTF-8" />
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
    <link rel="stylesheet" href="style.css">

</head>

<body>
    <header>
        <nav>
            <div class="nav-wrapper">
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="index.php">Liste des demandes</a></li>
                    <li><a href="ask.php">Faire une demande</a></li>
                </ul>
            </div>
        </nav>
    </header>
    <h1>Envoyer une nouvelle demande</h1>
    <h2>Merci de remplir les champs ci-dessous afin de valider l'envoi de votre demande.</h2>
    <!-- FORMULAIRE -->
    <div class="row form">
        <form class="col s12" action="traitement.php" method="post">
            <div class="row">
                <div class="input-field col s6">
                    <input id="nom" name="nom" type="text" class="validate">
                    <label for="nom">Votre nom</label>
                </div>
                <div class="input-field col s6">
                    <input id="email" name="email" type="email" class="validate">
                    <label for="email">Votre email</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s7">
                    <input id="objet" name="objet" type="text" class="validate">
                    <label for="objet">Objet de la demande</label>
                </div>
                <div class="input-field col s5">
                    <select name="cat" id="cat">
                    <option value="0">S&eacute;lectionner une cat&eacute;gorie...</option>
          <?php
                try{
                    $pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION; 
                    $pdo_options[PDO::MYSQL_ATTR_INIT_COMMAND]=  'SET NAMES utf8';
                    $bdd = new PDO('mysql:host=localhost;dbname=client_support','root', 'root', $pdo_options); //MAMP : mot de passe = root
                } catch(Exception $e) {
                    die('Erreur : ' . $e->getMessage());
                }
                        $reponse = $bdd->query("SELECT * FROM categorie;");
                        while ($cat = $reponse->fetch()){
                            ?>
                            <option value="<?php echo $cat['id']; ?>"><?php echo $cat['libelle']; ?></option>
                            <?php
                        }
            ?>
          </select>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <textarea id="msg" name="msg" class="materialize-textarea"></textarea>
                    <label for="msg">Expliquez votre demande</label>
                </div>
            </div>
            <div class="bouton">
                <button type="submit" class="waves-effect waves-light btn">Envoyer</button>
            </div>
        </form>
    </div>

    <!-- Compiled and minified JavaScript -->
    <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
    <!--<script>
        $(document).ready(function() {
    $('select').material_select();
});
    </script>-->
</body>

</html>