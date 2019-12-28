<!DOCTYPE html>
<html>
<head>
	<meta content="width=device-width, initial-scale=1" name="viewport" />
	<meta charset="utf-8">
	<title>About me | Thomas Lamothe</title>

	<link rel="stylesheet" href="css/animate.css">
	<link rel="stylesheet" type="text/css" href="css/fonts.css">
	<link rel="stylesheet" type="text/css" href="css/fullpage.css">
	<link rel="stylesheet" type="text/css" href="css/about.css">
	<link rel="stylesheet" type="text/css" href="css/timeline.css">
	<link rel="stylesheet" type="text/css" href="css/loader.css">
	<link rel="stylesheet" type="text/css" href="css/menu.css">
	<link rel="stylesheet" type="text/css" href="css/cursor.css">
	<link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">

	<!-- Librairie jQuery -->
	<script src="js/jquery.min.js"></script>
	<script src="js/fullpage.js"></script>

</head>
<body>
	<?php include("php/pdo.php"); ?>
	<?php include("php/const.php"); ?>
	<?php include("php/loader.php"); ?>
	<?php include("php/menu.php"); ?>

	<div id="fullpage">
		<div class="section">
			<div class="main-about">
				<div class="left-about">
					<div class="title-about">
						<h3>about</h3>
					</div>
					<div class="content-about">
						<h1>Hi,</h1>
						<p>I'm Thomas Lamothe, a <?= $age_tommy; ?> years old french Full Stack web Developer and web designer. I'm raised in <span class="mouse">Toulouse</span>, where I'm studying computer science. I also play guitar, composing my own musics and take photos.</p>
						<p>By the way, I coded this website by hand using PHP, GSAP, Frameworks and API in 2019.</p>
						<p>If my work have an interest for you, we can share a beer.</p>

						<button><a href="img/toma-cv.pdf"><span class="cv">Download CV</span></a></button>
					</div>
				</div>
				<div class="right-about">
					<img src="img/toma-min.png" width="100%">
				</div>
			</div>
		</div>
		<div class="section">
			<div class="main-timeline">
				<div class="left-timeline">
					<div class="title-timeline">
						<h3>work and experience</h3>
					</div>
				</div>
				<div class="right-timeline">
					<div class="wrapper-dots is-animated">
					    <div class="bar-to-dots"></div>
					  	
					    <?php 
					    	$affichageCV = $bd->query("SELECT * FROM Formation ORDER BY IdFormation");

					    	while($donnees = $affichageCV->fetch()){

					    		if($donnees['IsDiplome']){
					    			$estDiplome = "fa-graduation-cap";
					    		} else {
					    			$estDiplome = "fa-briefcase";
					    		}

					    		$desc = nl2br($donnees['Descriptif']);

					    		echo '<div class="a-dot-holder">
					      				<div class="a-dot"></div>
					       					<div class="container-dot">
					           					<h1><span class="graduate"><i class="fas '. htmlspecialchars($estDiplome) .'"></i></span> '. htmlspecialchars($donnees['Annee']) .'</h1>
					           					<h5>'. htmlspecialchars($donnees['NomPoste']) .' - '. htmlspecialchars($donnees['NomEntreprise']) .'</h5>
					           					<p>'. $desc .'</p>     
					      				</div>
					   		 		</div>';
					    	}

					    	$affichageCV->closeCursor();
					    ?>
					</div>
				</div>
			</div>
		</div>
		<div class="section">
			<div class="main-skills">
				<div class="left-skills">
					<div class="title-skills">
						<h3>SKILLS</h3>
					</div>
				</div>
				<div class="right-skills">
					<div class="a-categorie">
						<div class="title-skills-container">
							<h2>Web development</h2>
						</div>
						<div class="icons-wrapper first-wrapper">
							<div class="an-icon is-animated">
								<div class="descriptif-holder">
									<p>CSS 3</p>

									<div class="level">
										<div class="level-colored" style="width:95%;"></div>
									</div>
								</div>
								<i class="devicon-css3-plain"></i>
							</div>
							<div class="an-icon is-animated">
								<div class="descriptif-holder">
									<p>HTML 5</p>

									<div class="level">
										<div class="level-colored" style="width:95%;"></div>
									</div>
								</div>
								<i class="devicon-html5-plain"></i>
							</div>
							<div class="an-icon is-animated">
								<div class="descriptif-holder">
									<p>Javascript</p>

									<div class="level">
										<div class="level-colored" style="width:70%;"></div>
									</div>
								</div>
								<i class="devicon-javascript-plain"></i>
							</div>
							<div class="an-icon is-animated">
								<div class="descriptif-holder">
									<p>jQuery</p>

									<div class="level">
										<div class="level-colored" style="width:80%;"></div>
									</div>
								</div>
								<i class="devicon-jquery-plain"></i>
							</div>
							<div class="an-icon is-animated">
								<div class="descriptif-holder">
									<p>PHP</p>

									<div class="level">
										<div class="level-colored" style="width:65%;"></div>
									</div>
								</div>
								<i class="devicon-php-plain"></i>
							</div>
							<div class="an-icon is-animated">
								<div class="descriptif-holder">
									<p>Laravel</p>

									<div class="level">
										<div class="level-colored" style="width:45%;"></div>
									</div>
								</div>
								<i class="devicon-laravel-plain"></i>
							</div>
							<div class="an-icon is-animated">
								<div class="descriptif-holder">
									<p>Vue.js</p>

									<div class="level">
										<div class="level-colored" style="width:35%;"></div>
									</div>
								</div>
								<i class="devicon-vuejs-plain"></i>
							</div>
							<div class="an-icon is-animated">
								<div class="descriptif-holder">
									<p>Code Igniter</p>

									<div class="level">
										<div class="level-colored" style="width:35%;"></div>
									</div>
								</div>
								<i class="devicon-codeigniter-plain"></i>
							</div>
						</div>
					</div>
					<div class="a-categorie">
						<div class="title-skills-container">
							<h2>Design</h2>
						</div>
						<div class="icons-wrapper second-wrapper">
							<div class="an-icon is-animated">
								<div class="descriptif-holder">
									<p>Adobe Photoshop</p>

									<div class="level">
										<div class="level-colored" style="width:90%;"></div>
									</div>
								</div>
								<i class="devicon-photoshop-plain"></i>
							</div>
						</div>
					</div>
					<div class="a-categorie">
						<div class="title-skills-container">
							<h2>Software</h2>
						</div>
						<div class="icons-wrapper third-wrapper">
							<div class="an-icon is-animated">
								<div class="descriptif-holder">
									<p>Apache</p>

									<div class="level">
										<div class="level-colored" style="width:60%;"></div>
									</div>
								</div>
								<i class="devicon-apache-plain"></i>
							</div>
							<div class="an-icon is-animated">
								<div class="descriptif-holder">
									<p>Git</p>

									<div class="level">
										<div class="level-colored" style="width:65%;"></div>
									</div>
								</div>
								<i class="devicon-git-plain"></i>
							</div>
							<div class="an-icon is-animated">
								<div class="descriptif-holder">
									<p>SSH</p>

									<div class="level">
										<div class="level-colored" style="width:60%;"></div>
									</div>
								</div>
								<i class="devicon-ssh-plain"></i>
							</div>
							<div class="an-icon is-animated">
								<div class="descriptif-holder">
									<p>Slack</p>

									<div class="level">
										<div class="level-colored" style="width:90%;"></div>
									</div>
								</div>
								<i class="devicon-slack-plain"></i>
							</div>
							<div class="an-icon is-animated">
								<div class="descriptif-holder">
									<p>Trello</p>

									<div class="level">
										<div class="level-colored" style="width:95%;"></div>
									</div>
								</div>
								<i class="devicon-trello-plain"></i>
							</div>
						</div>
					</div>
					<div class="a-categorie">
						<div class="title-skills-container">
							<h2>Programming</h2>
						</div>
						<div class="icons-wrapper fourth-wrapper">
							<div class="an-icon is-animated">
								<div class="descriptif-holder">
									<p>Java</p>

									<div class="level">
										<div class="level-colored" style="width:80%;"></div>
									</div>
								</div>
								<i class="devicon-java-plain"></i>
							</div>
							<div class="an-icon is-animated">
								<div class="descriptif-holder">
									<p>MySQL</p>

									<div class="level">
										<div class="level-colored" style="width:75%;"></div>
									</div>
								</div>
								<i class="devicon-mysql-plain"></i>
							</div>
							<div class="an-icon is-animated">
								<div class="descriptif-holder">
									<p>Ruby</p>

									<div class="level">
										<div class="level-colored" style="width:40%;"></div>
									</div>
								</div>
								<i class="devicon-ruby-plain"></i>
							</div>
							<div class="an-icon is-animated">
								<div class="descriptif-holder">
									<p>Python</p>

									<div class="level">
										<div class="level-colored" style="width:55%;"></div>
									</div>
								</div>
								<i class="devicon-python-plain"></i>
							</div>
						</div>
					</div>	
				</div>
			</div>
		</div>
	</div>

	<script src="js/gsap-latest-beta.min.js"></script>
	<script src="js/about.js"></script>
</body>
</html>