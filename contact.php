<!DOCTYPE html>
<html lang="en">
<head>
	<meta content="width=device-width, initial-scale=1" name="viewport" />
	<meta charset="utf-8">
	<title>Contact me | Thomas Lamothe</title>

	<link rel="icon" type="image/png" href="img/icon.png">

	<link rel="stylesheet" type="text/css" href="css/reset.css">
	<link rel="stylesheet" type="text/css" href="css/aos.css">

	<link rel="stylesheet" type="text/css" href="css/fonts.css">
	<link rel="stylesheet" type="text/css" href="css/loader.css">
	<link rel="stylesheet" type="text/css" href="css/contact.css">
	<link rel="stylesheet" type="text/css" href="css/menu.css">
	<link rel="stylesheet" type="text/css" href="css/cursor.css">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">

	<!-- Librairie jQuery -->
	<script src="js/jquery.min.js"></script>
	<script src="js/aos.js"></script>
	<script src="js/gsap-latest-beta.min.js"></script>
</head>
<body>
	<?php include("php/pdo.php"); ?>
	<?php include("php/loader.php"); ?>
	<?php include("php/menu-white.php"); ?>

	<div class="main-contact">
		<div class="title-contact">
			<h3>Contact</h3>
		</div>
		<div class="content-contact">
			<h1 data-aos="fade-up" data-aos-delay="400">Thomas Lamothe <span class="small-nickname">(Toma)</span></h1>
			<h2 data-aos="fade-up" data-aos-delay="600">31400, Toulouse</h2>
			<h2 data-aos="fade-up" data-aos-delay="800">France</h2>

			<div class="align-tel-mail" data-aos="fade-in" data-aos-delay="500">
				<a href="mailto:thomaslamothe@free.fr"><i class="fas fa-envelope"></i> Fire me a mail</a>
				<a href="tel:+33781504402"><i class="fas fa-phone"></i> Call me</a>
			</div>

			<div class="social-networks">
				<ul>
					<li data-aos="fade-up" data-aos-delay="400"><a href="https://twitter.com/TomaRealOne" target="_blank"><span class="gradient-network"><i class="fab fa-twitter"></i></span></a></li>
					<li data-aos="fade-up" data-aos-delay="600"><a href="https://www.facebook.com/profile.php?id=100008666351665" target="_blank"><span class="gradient-network"><i class="fab fa-facebook-f"></i></span></a></li>
					<li data-aos="fade-up" data-aos-delay="800"><a href="https://www.instagram.com/tommy.lmt/" target="_blank"><span class="gradient-network"><i class="fab fa-instagram"></i></span></a></li>
					<li data-aos="fade-up" data-aos-delay="1000"><a href="https://behance.net/totolamoth4819" target="_blank"><span class="gradient-network"><i class="fab fa-behance"></i></span></a></li>
				</ul>
			</div>
		</div>
	</div>
	<script type="text/javascript">
		AOS.init();
	</script>
</body>
</html>