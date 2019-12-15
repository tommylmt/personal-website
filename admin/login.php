<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="utf-8">
	<meta content="width=device-width, initial-scale=1" name="viewport" />

	<title>Connexion</title>

	<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="dist/css/elegant.css">
	<link rel="stylesheet" type="text/css" href="dist/css/style.css">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
</head>
<body class="login">
	<?php include('php/const.php'); ?>

	<div class="wrapper-form" data-aos="fade-left">
		<h1>Connexion</h1>

		<div class="avatar-holder">
			<div class="img-container">
				<img src="dist/img/profil.jpg">
				<div class="connected">
					<i class="fas fa-lock"></i>	
				</div>
			</div>
			<h3>Toma</h3>
		</div>
		<form action="index.php" method="POST">
			<label for="password">Mot de passe</label>
			<input type="password" name="password" class="input-general" placeholder="Enter password" required>

			<div class="input-padding">
				<input type="submit" name="send" class="button">
			</div>
		</form>
	</div>

	<!-- ----------------------- -->
	<!-- LES BANNIERES D'ALERTES -->
	<!-- ----------------------- -->

	<?php 
		if(isset($_GET['wrongpassword'])){
			if($_GET['wrongpassword'] == true){
	?>
		<div class="error banner" data-aos="fade-down">
			<p>Erreur dans le mot de passe.</p> 
			<i class="fas fa-times"></i>
		</div>
	<?php		
			}
		}
		if(isset($_GET['sessiondestroy'])){
			session_destroy();
	?>
		<div class="good banner" data-aos="fade-down">
			<p>Vous avez ete deconnecte, session detruite avec succes.</p> 
			<i class="fas fa-times"></i>
		</div>
	<?php 	
		}
	?>
	<?php include('php/js.php'); ?>
</body>
</html>