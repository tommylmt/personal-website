<!DOCTYPE html>
<html lang="en">
<head>
	<meta content="width=device-width, initial-scale=1" name="viewport" />
	<meta charset="utf-8">
	<title>Culture</title>

	<link rel="icon" type="image/png" href="img/icon.png">

	<link rel="stylesheet" href="css/animate.css">
	<link rel="stylesheet" type="text/css" href="css/fonts.css">
	<link rel="stylesheet" type="text/css" href="css/fullpage.css">
	<link rel="stylesheet" type="text/css" href="css/loader.css">
	<link rel="stylesheet" type="text/css" href="css/culture.css">
	<link rel="stylesheet" type="text/css" href="css/menu.css">
	<link rel="stylesheet" type="text/css" href="css/cursor.css">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
	
	<!-- Librairie jQuery -->
	<script src="js/jquery.min.js"></script>
	<script src="js/fullpage.js"></script>
</head>
<body>
	<?php include("php/const.php"); ?>
	<?php include("php/pdo.php"); ?>
	<?php include("php/loader.php"); ?>
	<?php include("php/menu-white.php"); ?>

	<div id="fullpage">
		<div class="section">
			<div class="container-title-culture">
				<div class="culture-title-holder">
					<h1>Culture in <span class="year"><?= $year; ?></span></h1>
					<h2>All the things I've <i class="fas fa-heart"></i> this year</h2>
				</div>
				<div class="blob first-blob">
					<img src="img/svg/blob-shape-one.svg" alt="a-blob">
				</div>
				<div class="blob second-blob">
					<img src="img/svg/blob-shape-two.svg" alt="a-blob">
				</div>
				<div class="blob third-blob">
					<img src="img/svg/blob-shape-three.svg" alt="a-blob">
				</div>
				<div class="blob fourth-blob">
					<img src="img/svg/blob-shape-four.svg" alt="a-blob">
				</div>
				<div class="blob fifth-blob">
					<img src="img/svg/blob-shape.svg" alt="a-blob">
				</div>
				<div class="blob six-blob">
					<img src="img/svg/blob-shape-six.svg" alt="a-blob">
				</div>
			</div>
		</div>
		<div class="section">
			<div class="main-movies">
				<div class="left-movie">
					<h3>Movies</h3>
				</div>
				<div class="right-movie">
					<?php 
						$affichageFilm = $bd->query("SELECT * FROM Film");

						while($donnees = $affichageFilm->fetch()){
							echo '<div class="a-movie is-animated">
									<img src="'. htmlspecialchars($donnees['NomFichier']) .'" alt="a-film">
									<div class="movie-infos">
										<h5>By '. htmlspecialchars($donnees['NomArtiste']) .'</h5>
									</div>
								</div>';
						}

						$affichageFilm->closeCursor();
					?>
				</div>
			</div>
		</div>
		<div class="section isNight">
			<div class="main-music">
				<div class="left-music">
					<h3 class="musical">Music</h3>
				</div>

				<div class="music-container">
					
				</div>
			</div>
		</div>
		<div class="section">
			<div class="main-shows">
				<div class="left-shows">
					<h3>TV shows</h3>
				</div>
				<div class="right-shows">
					<?php 
						$affichageSerie = $bd->query("SELECT * FROM Serie");

						while($donnees = $affichageSerie->fetch()){
							echo '<div class="a-show is-animated">
									<img src="'. htmlspecialchars($donnees['NomFichier']) .'" alt="a-music">
									<div class="shows-infos">
										<p>On '. htmlspecialchars($donnees['NomArtiste']) .'</p>
									</div>
								</div>';
						}

						$affichageSerie->closeCursor();
					?>
				</div>
			</div>
		</div>
	</div>

	<script src="js/gsap-latest-beta.min.js"></script>

	<script src="js/culture.js"></script>
</body>
</html>