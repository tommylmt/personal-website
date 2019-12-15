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
	<?php include('php/pdo.php'); ?>
	<?php include('php/left.php'); ?>

	<div class="right-admin" data-aos="fade-in" data-aos-delay="600">

		<!-- ONLY USE FOR RESPONSIVE -->
		<div class="hamburger-menu">
			<i class="fas fa-bars"></i>
		</div>

		<h1>Ajouter une compétence au CV</h1>

		<div class="flex-elegant is-2">
			<div class="child-elegant">
			<?php 

				$afficherCV = $bd->query('SELECT * FROM Formation');

				while($donnees = $afficherCV->fetch()){
					echo "<div class='cv-formation'>
				 			<h2>". $donnees['Annee'] ."</h2>
				 			<p>". $donnees['NomPoste'] ." - ". $donnees['NomEntreprise'] ."</p>
				 			<br />
				 			<p>est un Diplome : ". $donnees['IsDiplome'] ."</p>
				 			<br />
				 			<button class='error'><a href='delete.php?id=". $donnees['IdFormation'] ."&db=Formation'>Supprimer</a></button>
						</div>";
				}

				$afficherCV->closeCursor();

			?> 
			</div>
			<div class="child-elegant">
				<form action="cv-upload.php" method="POST">
					<h2>Ajouter une compétence au CV</h2>

					<br />
					<label for="annee">Année de la formation</label>
					<input type="text" name="annee" placeholder="<?= date('Y') - 2 ." - ". date('Y'); ?>">

					<label for="nomPoste">Nom du poste</label>
					<input type="text" name="nomPoste" placeholder="Etudiant en …">

					<label for="nomEntreprise">Nom de l'établissement</label>
					<input type="text" name="nomEntreprise" placeholder="Université…">

					<label for="descriptif">Descriptif</label>
					<textarea placeholder="Chef de projet MOA…" name="descriptif"></textarea>

					<label>
						<input type="checkbox" name="isDiplome">
						Est un diplome
					</label>

					<div class="is-center">
						<input type="submit" name="envoyerData" value="Ajouter au CV" class="is-gradient">
					</div>
				</form>
			</div>
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