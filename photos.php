<!DOCTYPE html>
<html>
<head>
	<meta content="width=device-width, initial-scale=1" name="viewport" />
	<meta charset="utf-8">
	<title>Photography work</title>

	<link rel="stylesheet" href="css/animate.css">
	<link rel="stylesheet" type="text/css" href="css/fonts.css">
	<link rel="stylesheet" type="text/css" href="css/fullpage.css">
	<link rel="stylesheet" type="text/css" href="css/loader.css">
	<link rel="stylesheet" type="text/css" href="css/menu.css">
	<link rel="stylesheet" type="text/css" href="css/photo.css">
	<link rel="stylesheet" type="text/css" href="css/cursor.css">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
	
	<!-- Librairie jQuery -->
	<script src="js/jquery.min.js"></script>
	<script src="js/fullpage.js"></script>
</head>
<body>
	<?php include("php/pdo.php"); ?>
	<?php include("php/loader.php"); ?>
	<?php include("php/menu-white.php"); ?>

	<div id="fullpage">
		<div class="section">
			<div class="container-title-photo">
				<div class="photo-title-holder">
					<h1>Photos</h1>
					<h2>I take <i class="fas fa-camera"></i> too</h2>
				</div>
			</div>
		</div>
		
		<?php
			$affichagePhotos = $bd->query("SELECT * FROM Photo ORDER BY IdProjetPhoto DESC");

			$number = 0;

			while($donnees = $affichagePhotos->fetch()){
				if($number % 2 == 0){
					$estDark = "";
				} else {
					$estDark = " night-one";
				}

				echo '<div class="section '. $estDark .'">
						<div class="slide">
							<div class="container-photo">
								<div class="a-photo">

									<img src="'. htmlspecialchars($donnees['NomPhotoUne']) .'">

									<div class="photo-info">
										<p>'. htmlspecialchars($donnees['DateProjet']) .'</p>
										<h2>'. htmlspecialchars($donnees['TitreProjet']) .' '. $number .'</h2>
									</div>
									<div class="sub-info">
										<p><i class="fas fa-camera"></i> '. htmlspecialchars($donnees['InfoAppareil']) .'</p>
										<p><i class="fas fa-palette"></i> '. htmlspecialchars($donnees['InfoRetouche']) .'</p>
									</div>

								</div>
							</div>
						</div>';

						if($donnees['NomPhotoDeux'] != ""){
							echo '<div class="slide">
								<div class="container-photo">
									<div class="a-photo-v2">

										<img src="'. htmlspecialchars($donnees['NomPhotoDeux']) .'">

										<div class="photo-info-design-two">
											<p>'. htmlspecialchars($donnees['DateProjet']) .'</p>
											<h2>'. htmlspecialchars($donnees['TitreProjet']) .'</h2>

											<div class="bar"></div>

											<p><i class="fas fa-camera"></i> '. htmlspecialchars($donnees['InfoAppareil']) .'</p>
											<p><i class="fas fa-palette"></i> '. htmlspecialchars($donnees['InfoRetouche']) .'</p>
										</div>
									</div>
								</div>
							</div>';
						}

						if($donnees['NomPhotoTrois'] != ""){
							echo '<div class="slide">
								<div class="container-photo">
									<div class="a-photo-v3">

										<img src="'. htmlspecialchars($donnees['NomPhotoTrois']) .'">

										<div class="photo-info-design-three">
											<div class="left-info">
												<p>'. htmlspecialchars($donnees['DateProjet']) .'</p>
												<h2>'. htmlspecialchars($donnees['TitreProjet']) .'</h2>
											</div>
											<div class="right-info">
												<p><i class="fas fa-camera"></i> '. htmlspecialchars($donnees['InfoAppareil']) .'</p>
												<p><i class="fas fa-palette"></i> '. htmlspecialchars($donnees['InfoRetouche']) .'</p>
											</div>
										</div>
									</div>
								</div>
							</div>';
						}

				echo '</div>';

				$number++;
			}

			$affichagePhotos->closeCursor();
		?>

	</div>

	<script src="js/gsap-latest-beta.min.js"></script>

	<script src="js/photos.js"></script>
</body>
</html>