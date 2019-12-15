<?php 
	session_start();

	include("php/const.php");

	if($_POST['password'] == $_SESSION['password']){
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta content="width=device-width, initial-scale=1" name="viewport" />
	<title>Interface d'administration</title>

	<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="dist/css/elegant.css">
	<link rel="stylesheet" type="text/css" href="dist/css/style.css">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
</head>
<body class="general">
	<?php include('php/left.php'); ?>
	<div class="right-admin" data-aos="fade-in" data-aos-delay="600">

		<!-- ONLY USE FOR RESPONSIVE -->
		<div class="hamburger-menu">
			<i class="fas fa-bars"></i>
		</div>

		<h1>Interface d'administration</h1>

		<br />
		<h2>Technologies utilisees</h2>

		<ul>
			<li>jQuery pour les interactions simples cotes visuels utilisateurs et l'adaptativite</li>
			<li>PHP pour le traitement des donnees cotes serveur et la jonction avec la base de donnees</li>
			<li>MySQL pour la base de donnees</li>
		</ul>

		<br />
		<h2>Notion de session</h2>

		<p>Le login fonctionne sur l'utilisation d'une session, on se log en récupérant le contenue de l'input sur le fichier connect.php, on transmet les données de page en page avec <span class="is-code grey">session_start();</span> et on détruit en revenant sur le code la page de connexion avec l'attribut <span class="is-code grey">session_destroy();</span></p>

		<br />
		<h2>Stockage des variables</h2>

		<p>Les variables importantes notamment celles de session sont stockees dans un fichier <span class="is-code grey">const.php</span> et <span class="is-code grey">all-const.php</span> (pour le mot de passe maitre)</p>
		<p>Notez que l'on utilise <span class="is-code grey">PDO.php</span> pour le stockage de la connexion a la base de donnees et qu'on l'importe via la fonction PHP <span class="is-code grey">inlude('php/pdo.php');</span></p>
	</div>
	<?php include('php/js.php'); ?>
</body>
</html>
<?php 
	}
	else {
		header("Location: login.php?wrongpassword=true");
	}
?>