<div class="left-admin" data-aos="fade-right" data-aos-delay="200">
	<div class="close">
		<i class="fas fa-times"></i>
	</div>
	<div class="avatar-left">
		<img src="dist/img/logo-white.svg">
	</div>
	<div class="main-list">
		<ul>
			<li><a href="photos.php" class="is-link-title">Nouveau projet photo</a></li>
			<li><a href="photo-list.php" class="is-link-title">Liste projets photos</a></li>
			<li><a href="web.php" class="is-link-title">Nouveau projet web</a></li>
			<li><a href="web-list.php" class="is-link-title">Liste projets web</a></li>
			<li><a href="cv.php" class="is-link-title">Modifier CV</a></li>
			<li><a href="culture.php" class="is-link-title">Editer Culture</a></li>
			<li><a href="drive.php" class="is-link-title">Drive</a></li>
			<li><a href="files.php" class="is-link-title">Liste des fichiers</a></li>
		</ul>
	</div>
	<div class="disconnect">
		<div class="img-disconnect">
			<img src="<?= $_SESSION['avatar']; ?>">
			<p><?= $_SESSION['name']; ?></p>	
		</div>
		<form action="login.php" method="get">
			<input type="submit" name="sessiondestroy" value="Deconnexion">
		</form>
	</div>
</div>