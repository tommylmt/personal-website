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
	<?php include('php/pdo.php'); ?>
	<?php include('php/left.php'); ?>

	<div class="right-admin" data-aos="fade-in" data-aos-delay="600">

		<!-- ONLY USE FOR RESPONSIVE -->
		<div class="hamburger-menu">
			<i class="fas fa-bars"></i>
		</div>

		<h1>Editer page de culture</h1>

		<h2>Les Films</h2>

		<div class="flex-elegant is-5">
			<?php
				$afficherFilm = $bd->query('SELECT * FROM Film ORDER BY IdFilm');

				while($donnees = $afficherFilm->fetch()){
					echo '<div class="child-elegant affichage-film-serie">
							<form action="modifier.php" method="POST" enctype="multipart/form-data">
								<input type="hidden" name="id" value="'. $donnees['IdFilm'] .'">
								<input type="hidden" name="type" value="Film">

								<img src="../'. $donnees['NomFichier'] .'">
								<input type="file" name="filmPhoto" required>

								<label for="">Réalisateur</label>
								<input type="text" name="nomArtiste" value="'. $donnees['NomArtiste'] .'">

								<div class="is-center">
									<input type="submit" name="modifier" value="Modifier le film">
								</div>
							</form>
						</div>';
				}

				$afficherFilm->closeCursor();
			?>
		</div>

		<h2>Les Séries</h2>

		<div class="flex-elegant is-5">
			<?php
				$afficherSerie = $bd->query('SELECT * FROM Serie ORDER BY IdSerie');

				while($donnees = $afficherSerie->fetch()){
					echo '<div class="child-elegant affichage-film-serie">
							<form action="modifier.php" method="POST" enctype="multipart/form-data">
								<input type="hidden" name="id" value="'. $donnees['IdSerie'] .'">
								<input type="hidden" name="type" value="Serie">

								<img src="../'. $donnees['NomFichier'] .'">
								<input type="file" name="filmPhoto" required>

								<label for="">Producteur</label>
								<input type="text" name="nomArtiste" value="'. $donnees['NomArtiste'] .'">

								<div class="is-center">
									<input type="submit" name="modifier" value="Modifier la série">
								</div>
							</form>
						</div>';
				}

				$afficherSerie->closeCursor();
			?>
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