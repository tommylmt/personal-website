<?php 
	session_start();

	require_once('php/base.php');

	include('php/pdo.php');

	// Creation d'un gestionnaire
	$main = new Gestionnaire();

	// On place la photo 1 dans le dossier
	$photo = $main->uploaderWeb($_FILES['photo']);

	// Inscription en base de données

	$insert = $bd->prepare('INSERT INTO Webdev(AnneeProjet, NomProjet, DescriptifProjet, TagsProjet, NomPhoto) VALUES(:annee, :titre, :descriptif, :tags, :photo)');

	$insert->execute(array(
		"annee" => $_POST['anneeProjet'],
		"titre" => $_POST['titreProjet'],
		"descriptif" => $_POST['descriptif'],
		"tags" => $_POST['tags'],
		"photo" => $photo
	));

	// Redirection vers liste des projets
	header('location: web-list.php');
?>