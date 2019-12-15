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

		<h1>Upload de fichier</h1>

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