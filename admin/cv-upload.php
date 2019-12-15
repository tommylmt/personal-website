<?php 
	session_start();

	include('php/pdo.php');
	require_once('php/base.php');

	$main = new Gestionnaire();

	$isDiplome = $main->isDiplomeToBoolean($_POST['isDiplome']);

	$ajouterCV = $bd->prepare('INSERT INTO Formation(Annee, IsDiplome, NomPoste, NomEntreprise, Descriptif) VALUES(:annee, :diplome, :nompo, :nomen, :descriptif)');

	$ajouterCV->execute(array(
		"annee" => $_POST['annee'],
		"diplome" => $isDiplome,
		"nompo" => $_POST['nomPoste'],
		"nomen" => $_POST['nomEntreprise'],
		"descriptif" => $_POST['descriptif']
	));

	header('location: cv.php');
?>