<?php 
	session_start();

	include("php/all-const.php");

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

		<h1>Nouveau Projet Photo</h1>

		<form action="photo-upload.php" method="POST" class="photo-adding" enctype="multipart/form-data">
			<div class="flex-elegant is-3">
				<div class="infoProjet child-elegant">
					<label for="dateProject">Appareil Photo</label>
					<input type="text" name="appareil" placeholder="Canon EOS 200D">

					<label for="dateProject">Infos retouche</label>
					<input type="text" name="retouche" placeholder="Adobe Lightroom">
				</div>	
				<div class="nomProjet child-elegant">
					<label for="nameProject">Nom du projet</label>
					<input type="text" name="nameProject" placeholder="Manif en Centre Ville">
				</div>
				<div class="dateProjet child-elegant">
					<label for="dateProject">date du projet</label>
					<input type="text" name="dateProject" placeholder="Aout 2018">
				</div>	
			</div>
			<div class="is-photo-project flex-elegant is-3 is-not-space-around">
				<div class="child-elegant is-center photo-upload1">
					<div class="illustration-photo">
						<i class="fas fa-camera"></i>
						<input type="file" name="photo1" placeholder="Uploader première photo">
					</div>
				</div>
			</div>

			<br />
			<div class="is-center">
				<input type="submit" name="envoyerPhoto" value="Uploader le projet" class="is-gradient">
			</div>
		</form>

		<br />
		<div class="is-center">
			<button class="add-photo">Ajouter une photo</button>
		</div>
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