<?php
try{
    $pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION;
    $bdd = new PDO('mysql:host=localhost;dbname=client_support','root', 'root', $pdo_options); //MAMP : mot de passe = root
} catch(Exception $e) {
    die('Erreur : ' . $e->getMessage());
}

// Vérification existence paramètre + affectation variable
if (isset($_POST['nom'])){$nom = $_POST['nom'];}
if (isset($_POST['email'])){$email = $_POST['email'];}
if (isset($_POST['objet'])){$objet = $_POST['objet'];}
if (isset($_POST['msg'])){$msg = $_POST['msg'];}
if (isset($_POST['cat']) && $_POST['cat'] != '0'){$cat = $_POST['cat'];}
// On vérifie que toutes les variables ne sont pas vides
if (empty($nom) || empty($email) || empty($objet) || empty($msg)) {
    echo "Merci de remplir tous les champs. <a href='ask.php'>Retour</a>";
} else {
    //$bdd = connexionBDD();
    $req = $bdd->prepare("INSERT INTO demande(nom, email, objet, contenu, id_categorie) VALUES(?,?,?,?,?)");
    $req->execute([$nom, $email, $objet, $msg, $cat]);
    header('Location: ./index.php');
    exit();
}
?>