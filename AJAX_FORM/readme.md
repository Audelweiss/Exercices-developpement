---


---

<h1 id="gestion-des-formulaires-en-ajax">Gestion des formulaires en AJAX</h1>
<p>Captures d’écran dans les dossiers au dessus.</p>
<h2 id="step-1--formulaire-de-connexion-avec-identifiants-en-dur">Step 1 : formulaire de connexion avec identifiants en dur</h2>
<p>Créer un formulaire de connexion avec email et mot de passe. Au submit, le JS vérifie que les champs sont remplis et que l’email en est bien un. Si c’est le cas, l’appel Ajax peut être effectué (retour attendu en JSON).</p>
<p>Partie PHP : si l’email est égal à <code>test@3wa.fr</code> et le mot de passe à <code>azerty</code> alors on renvoie true, sinon false.</p>
<p>Success JS :</p>
<ul>
<li>Si true : on cache le formulaire (pas de redirection) et on affiche un message de validation</li>
<li>Si false : on affiche un message d’erreur au dessus du formulaire</li>
</ul>
<h2 id="step-2--appel-ajax-avec-vérification-bdd">Step 2 : appel AJAX avec vérification BDD</h2>
<p>Ici, c’est la partie PHP qui change. Au lieu de comparer avec des valeurs en dur, on va faire un appel à la BDD qui va permettre de vérifier si il y a bien un utilisateur qui existe avec ces informations. Renvoie true si l’utilisateur existe, sinon false.</p>
<p><img src="https://i.ibb.co/DzDkP7S/bdd.png" alt="Base de donnée. Champ cni = lien photo"></p>
<blockquote>
<p>Email doit être unique<br>
Champ cni = lien photo<br>
Champs password : on prévoit une éventuelle évolution du cryptage du mot de passe</p>
</blockquote>
<p>Penser à  créer un utilisateur manuellement afin de pouvoir faire la vérification…</p>
<h2 id="step-3--formulaire-informations-utilisateur">Step 3 : Formulaire informations utilisateur</h2>
<p>On crée un formulaire sur une autre page <code>infos.html</code> qui permettra de renseigner les infos d’un utilisateur (ici, on s’occupe juste de la gestion du formulaire et de l’AJAX, la liaison BDD vient à l’étape 4).</p>
<p>Le formulaire permet d’upload une image. Quand on submit, le PHP se charge de l’upload. En cas de success, on affiche les infos saisies dans un panel à gauche.</p>
<h2 id="step-4--upload-des-infos-dans-la-bdd">Step 4 : upload des infos dans la BDD</h2>
<p>Au submit, le PHP effectue l’upload de la photo + met à jour les données dans la BDD (il faut donc qu’il existe un utilisateur avec l’email saisi) pour cet utilisateur.</p>
<p>Au success, l’appel AJAX va appeler une autre fonction <code>search()</code> : cette fonction a pour objectif de retourner les informations d’un utilisateur à partir de son email. C’est le success de cet appel AJAX qui affichera les infos dans le panel de droite.</p>
<h2 id="step-5--on-regroupe-les-interfaces">Step 5 : on regroupe les interfaces</h2>
<p>L’idée : on se connecte, on accède à une nouvelle interface (à créer) qui liste les membres inscrits dans la BDD avec la possibilité de les modifier. Cette modification renvoie sur <code>infos.html</code> avec les champs pré-remplis.</p>
<h3 id="nouvelle-interface--liste-des-membres">Nouvelle interface : liste des membres</h3>
<p>Après la connexion (réussie), on propose un lien qui renvoie vers une nouvelle page <code>liste.html</code>.</p>
<p>Sur cette page, <strong>en AJAX</strong>, on appelle la BDD afin qu’elle nous retourne la liste des membres. On affiche cette liste avec les infos à notre disposition :</p>
<ul>
<li>On affiche l’email</li>
<li>Si on a un nom/ prénom, on les affiche à la place de l’email</li>
<li>Si on a l’adresse, on l’affiche</li>
</ul>
<p>Et un bouton <code>éditer</code> qui renvoie vers <code>infos.html</code> avec les champs pré-remplis avec les infos de l’utilisateur.</p>
<h2 id="step-6--améliorations">Step 6 : améliorations</h2>
<h3 id="connexion">Connexion</h3>
<p>Quand on rentre les identifiants :</p>
<ul>
<li>si l’utilisateur existe, on garde le même comportement que précédemment</li>
<li>si l’utilisateur existe mais que le mot de passe n’est pas bon, on l’indique</li>
<li>si l’utilisateur n’existe pas, on le crée, et on change le message de confirmation par “Inscription réussie” et pas “Connexion réussie” (ou échouée, dans le cas d’une erreur SQL avec un result false)</li>
</ul>
<blockquote>
<p>En faisant l’inscription, on peut aussi rajouter ici le cryptage du mot de passe</p>
</blockquote>
<h3 id="formulaire-informations">Formulaire informations</h3>
<p>A chaque changement dans l’input email, cela appelle la BDD. Du moment qu’on a un utilisateur existant avec cette adresse email, on affiche les infos et on pré-rempli les champs.</p>
<blockquote>
<p>Pensez à utiliser le code déjà existant. Cette fonctionnalité ne requiert logiquement qu’une ligne de code !</p>
</blockquote>

