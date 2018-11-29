<!DOCTYPE html>
<html>

<head>
    <title>Liste des demandes</title>
    <meta name="charset" content="UTF-8" />
    <link rel="stylesheet" href="style.css">
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">

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
    <div class="body">
        <div class="arianne">
            <div class="col s12">
                <a href="./index.php">Liste des demandes</a> >
                <span>Demande #<?php echo $_REQUEST['id'];?></span>
            </div>
        </div>

        <!-- DEMANDE -->

        <?php 
        try{
        $pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION;
        $pdo_options[PDO::MYSQL_ATTR_INIT_COMMAND]=  'SET NAMES utf8';
        $bdd = new PDO('mysql:host=localhost;dbname=client_support','root', 'root', $pdo_options); 

        $requete = "SELECT m.*, c.libelle FROM demande m INNER JOIN categorie c ON m.id_categorie = c.id WHERE m.id=?;";
        $req = $bdd->prepare($requete);
        $req->execute([$_GET['id']]);
        $reponse = $req->fetch();
    } catch(Exception $e) {
        die('Erreur : ' . $e->getMessage());
    }
        if (count($reponse)>0){
            ?>
<div class="row">
            <div class="col s12 ">
                <div class="card ">
                    <div class="card-content ">
                        <span class="card-title"><div style="margin:-10px 15px 0 0;" class="chip"><?php echo htmlspecialchars($reponse['libelle']);?></div><?php echo htmlspecialchars($reponse['objet']);?></span>
                        <p>
                            <?php echo nl2br(htmlspecialchars($reponse['contenu']));?>
                        </p>
                    </div>
                    <div class="card-action">
                        <span><?php echo $reponse['nom'];?></span> le 
                        <span><?php echo substr($reponse['date'],8,2) . "/" . substr($reponse['date'],5,2) . "/" . substr($reponse['date'],0,4);?></span><div class="chip"><?php echo $reponse['email'];?></div>
                    </div>
                </div>
            </div>
        </div>
        
        <?php
        }
        ?>
    </div>


    <!-- Compiled and minified JavaScript -->
    <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
</body>

</html>