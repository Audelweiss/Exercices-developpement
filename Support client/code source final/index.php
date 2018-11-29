<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Liste des demandes</title>
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
    <h1>Liste des demandes</h1>
    <!-- LISTE DES DEMANDES -->
    <div class="collection body">
    <div class="row collection-item">
        <div class="col s1">ID</div>
            <div class="col s3">Nom</div>
            <div class="col s6">Objet</div>
            <div class="col s2">Date</div>
    </div>
    <?php 
    //Connexion à la BDD
    try{
        $pdo_options[PDO::MYSQL_ATTR_INIT_COMMAND]=  'SET NAMES utf8';
        $pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION;
        $bdd = new PDO('mysql:host=localhost;dbname=client_support','root', 'root', $pdo_options);
        $liste = "";
    $requete = "SELECT id, nom, objet, date FROM demande ORDER BY date DESC;";
    $reponse = $bdd->query($requete); 
    } catch(Exception $e) {
        die('Erreur : ' . $e->getMessage());
    }
    
    while($dem = $reponse->fetch()){
    ?>
        <a href="dem.php?id=<?php echo $dem['id'] ?>" class="row collection-item">
            <div class="col s1">#<?php echo $dem['id'] ?></div>
            <div class="col s3"><?php echo $dem['nom'] ?></div>
            <div class="col s6"><?php echo htmlspecialchars($dem['objet']) ?></div>
            <div class="col s2"><?php echo substr($dem['date'],0,10) ?></div>
        </a>
    <?php 
    }
    
    ?>
    </div>
    <!-- Compiled and minified JavaScript -->
    <script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
</body>

</html>