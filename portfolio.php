<!DOCTYPE html>
<html>
<head>
	<meta content="width=device-width, initial-scale=1" name="viewport" />
	<meta charset="utf-8">
	<title>My Work</title>

	<link rel="stylesheet" href="css/animate.css">
	<link rel="stylesheet" type="text/css" href="css/fonts.css">
	<link rel="stylesheet" type="text/css" href="css/fullpage.css">
	<link rel="stylesheet" type="text/css" href="css/loader.css">
	<link rel="stylesheet" type="text/css" href="css/menu.css">
	<link rel="stylesheet" type="text/css" href="css/webdev.css">
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
			<div class="container-title-webdev">
				<div class="webdev-title-holder">
					<h1><span class="year">Web</span> Development</h1>
					<h2>I do Full Stack Development and UX design</h2>
				</div>
			</div>
		</div>
		<?php 

			$affichageProjet = $bd->query("SELECT * FROM Webdev ORDER BY IdProjet DESC");

			$number = 0;

			while($donnees = $affichageProjet->fetch()){

				$descriptif = nl2br($donnees['DescriptifProjet']);
				$tags = explode(" ", $donnees['TagsProjet']);
				
				if($number % 2 == 0){
					echo '<div class="section">
							<div class="project-wrapper">
								<div class="container">
									<div class="right-project">
										<div class="img-container">
											<img src="'. htmlspecialchars($donnees['NomPhoto']) .'">
										</div>
									</div>
									<div class="left-project">
										<div class="title-project">
											<p>'. htmlspecialchars($donnees['AnneeProjet']) .'</p>
											<h2>'. htmlspecialchars($donnees['NomProjet']) .'</h2>
										</div>

										<div class="desc">
											<p>'. $descriptif .'</p>
										</div>
										<div class="tags">
											<ul>';

											foreach ($tags as $aTag) {
												echo '<li>'. $aTag .'</li>';
											}

										echo'</ul>
										</div>
									</div>	
								</div>						
							</div>
						</div>';
				} else {
					echo '<div class="section">
							<div class="project-wrapper night-one">
								<div class="container">
									<div class="left-project">
										<div class="title-project">
											<p>'. htmlspecialchars($donnees['AnneeProjet']) .'</p>
											<h2>'. htmlspecialchars($donnees['NomProjet']) .'</h2>
										</div>

										<div class="desc">
											<p>'. $descriptif .'</p>
										</div>
										<div class="tags">
											<ul>';

											foreach ($tags as $aTag) {
												echo '<li>'. $aTag .'</li>';
											}

										echo'</ul>
										</div>
									</div>
									<div class="right-project">
										<div class="img-container">
											<img src="'. htmlspecialchars($donnees['NomPhoto']) .'">
										</div>
									</div>
								</div>						
							</div>
						</div>';
				}

				$number++;
			}

			$affichageProjet->closeCursor();

		?>
	</div>

	<script src="js/gsap-latest-beta.min.js"></script>

	<script src="js/portfolio.js"></script>
</body>
</html>