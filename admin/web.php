<?php 
	session_start();

	include("php/const.php");

	if($_SESSION['password'] == $password){
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

		<h1>Nouveau projet Web</h1>

		<form action="web-upload.php" method="POST" class="web-adding" enctype="multipart/form-data">
			<div class="flex-elegant is-2">
				<div class="child-elegant">
					<div class="illustration-photo is-center">
						<i class="fas fa-camera"></i>
						<input type="file" name="photo" placeholder="Uploader photo">
					</div>	
				</div>
				<div class="child-elegant">
					<label for="anneeProjet">Année du projet</label>
					<input type="text" name="anneeProjet" placeholder="<?= date('Y'); ?>" >

					<label for="titreProjet">Titre du projet</label>
					<input type="text" name="titreProjet" placeholder="Refonte du site…" >

					<label for="descriptif">Descriptif</label>
					<textarea name="descriptif" placeholder="projet developpé en HTML/CSS base en PHP"></textarea>

					<label for="tags">Tags</label>
					<input type="text" name="tags" placeholder="HTML CSS JS">

					<div class="is-center margin-web">
						<input type="submit" name="envoyerWeb" value="Uploader le projet" class="is-gradient">
					</div>
				</div>
			</div>
		</form>
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