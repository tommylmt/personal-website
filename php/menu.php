	<div class="wrapper">
		<div class="logo-principal-all">
			<a href="index.php"><img src="img/logo.svg" alt="Toma" width="60px"></a>
		</div>
		<div class="open-menu">
			<div class="a-bar-up"></div>
			<div class="a-bar-down"></div>
		</div>
		<div class="menu">
			<div class="logo-white-menu">
				<a href="index.php"><img src="img/logo-white.svg" width="60px"></a>
			</div>
			<div class="close">
				<p><i class="fas fa-times"></i></p>
			</div>
			<ul>
				<li class="un"><a href="about.php"><div class="tiret"></div>About me</a></li>
				<li class="deux submenu"><a href="#"><div class="tiret"></div>Work</a>
					<ul class="submenu-container">
						<li><a href="portfolio.php"><div class="tiretsub"></div>Web Development</a></li>
						<li><a href="photos.php"><div class="tiretsub"></div>Photos</a></li>		
					</ul>
				</li>
				<li class="trois"><a href="culture.php"><div class="tiret"></div>Culture</a></li>
				<li class="quatre"><a href="contact.php"><div class="tiret"></div>Contact</a></li>
			</ul>

			<!-- The cursor elements --> 
		    <div class="cursor cursor--small"></div>
		    <canvas class="cursor cursor--canvas" resize></canvas>
		</div>
	</div>

	<!-- LE CURSEUR EN JS -->
  	<script src="https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.12.0/paper-core.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/simplex-noise/2.4.0/simplex-noise.min.js"></script>
	
	<script src="js/cursor.js"></script>
	<script src="js/menu.js"></script>