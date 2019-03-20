---


---

<h1 id="le-foreach-en-php">Le foreach en PHP</h1>
<p>Avec les clés d’index<br>
<code>foreach($leTableau as $indexDeLaLigne =&gt; $laLigne)</code></p>
<p>Sans les clés, on récupère uniquement la valeur<br>
<code>foreach($leTableau as $indexDeLaLigne =&gt; $laLigne)</code></p>
<h2 id="créer-un-tableau-qui-contient-une-liste-de-prénoms.-boucler-sur-le-tableau-pour-afficher--le-prénom-de-cet-élève-est-xxx">1) Créer un tableau qui contient une liste de prénoms. Boucler sur le tableau pour afficher : “Le prénom de cet élève est XXX”</h2>
<pre><code>$liste = [
	"Toto",
	"Juliette",
	"Gribouille"
	];
foreach($liste as $prenom){
	echo "Le prénom de cet élève est $prenom. &lt;br&gt;";
}
</code></pre>
<h3 id="a-même-tableau-que-précédent-mais-modifier-la-boucle-pour-afficher-le-prénom-de-lélève-n°x-est-xxx-attention-on-commence-avec-lélève-1-et-pas-0-et-oui-on-fait-ça-avec-une-foreach-">1.a) Même tableau que précédent, mais modifier la boucle pour afficher “Le prénom de l’élève n°X est XXX” (attention, on commence avec l’élève 1 et pas 0, et oui, on fait ça avec une foreach !!)</h3>
<pre><code>foreach($liste as $num =&gt; $prenom){
	$numero =  $num +1;
	echo  "Le prénom de l'élève n°$numero est $prenom. &lt;br&gt;";
}
</code></pre>
<h2 id="créer-un-tableau-de-contacts-sous-forme-dun-tableau-associatif-">2) Créer un tableau de contacts sous forme d’un tableau associatif :</h2>

<table>
<thead>
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>Toto</td>
<td>0123456789</td>
</tr>
<tr>
<td>Lulu</td>
<td>0123456789</td>
</tr>
</tbody>
</table><p>Afficher : “Le numéro de XXX est XXXXXXXXXX”  pour chacun des contacts</p>
<pre><code>$liste = [
	"Toto"  =&gt;  "0123456789",
	"Juliette"  =&gt;  "0123456789",
	"Gribouille"  =&gt;  "0123456789"
];
foreach($liste as $prenom =&gt; $numero){
	echo  "Le numéro de $prenom est $numero&lt;br&gt;";
}
</code></pre>
<h2 id="créer-un-tableau-qui-contient-à-chaque-ligne-une-fiche-contact">3) Créer un tableau qui contient à chaque ligne une fiche contact</h2>
<pre><code>	0 | Nom : Toto
	  | Age : 29
	  | Ville : Lyon
</code></pre>
<p>Afficher les informations de chaque contact :<br>
Toto : 29 ans | Vit à Lyon<br>
…</p>
<pre><code>$liste = [
    [
        "nom" =&gt; "Toto",
        "age" =&gt; "29",
        "ville" =&gt; "Lyon"
    ]
];
foreach($liste as $perso){
    echo $perso["nom"] . " : " . $perso["age"] . "ans | Vit à " . $perso["ville"] ."&lt;br&gt;";
}
</code></pre>
<h2 id="créer-un-tableau-contenant-une-liste-de-centres-dintérêts.">4) Créer un tableau contenant une liste de centres d’intérêts.</h2>
<p>Dans le HTML, créer un formulaire qui contient :</p>
<ul>
<li>un input pour saisir son nom</li>
<li>un input pour saisir son âge</li>
<li>la liste de centres d’intérêts faite en PHP (on peut en cocher plusieurs)</li>
</ul>
<p>Au submit, le traitement se fait sur la même page (gestion du $_POST et affiche<br>
XXXX a X ans et aime : natation, football, astronomie</p>
<p>(pour l’affichage des centres d’intérêt, on n’utilise pas le implode !!! on fait du FOREACH et on ne doit pas avoir de virgules à la fin)</p>
<p>Le formulaire ne doit pas s’afficher une fois qu’on a submit le formulaire.<br>
index.php</p>
<pre><code>$message = null;
if($_POST){
    $message = $_POST["nom"] . " a " . $_POST["age"] . " ans et aime : ";
    foreach($_POST["interets"] as $interet){
        $message .= $interet. ", ";
    }
    $message = substr($message, 0, strlen($message)-2);
} else {
    $interets = ["natation", "football", "peinture", "astronomie", "lecture"];
}
include "index.phtml";
</code></pre>
<p>index.phtml</p>
<pre><code>&lt;?php if($message == null): ?&gt;
    &lt;form action="boucles.php" method="post"&gt;
        &lt;ul&gt;
            &lt;li&gt;Prenom : &lt;input type="text" name="nom" placeholder="Prenom"&gt; &lt;/li&gt;
            &lt;li&gt;Age : &lt;input type="number" name="age"&gt;&lt;/li&gt;
            &lt;li&gt;Centres d'intérêt :
                &lt;ul&gt;
                    &lt;?php foreach ($interets as $interet): ?&gt;
                        &lt;li&gt;
                            &lt;input type="checkbox" name="interets[]" value="&lt;?= $interet ?&gt;"&gt; &lt;?= $interet ?&gt;
                        &lt;/li&gt;
                    &lt;?php endforeach; ?&gt;
                &lt;/ul&gt;
            &lt;/li&gt;
            &lt;li&gt;&lt;input type="submit" value="Envoyer"&gt; &lt;/li&gt;
        &lt;/ul&gt;
    &lt;/form&gt;
&lt;?php else: ?&gt;
    &lt;p&gt;&lt;?= $message ?&gt;&lt;/p&gt;
&lt;?php endif; ?&gt;
</code></pre>

