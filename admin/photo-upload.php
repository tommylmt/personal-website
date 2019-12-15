<?php 
	session_start();

	require_once('php/base.php');

	include('php/pdo.php');

	// Creation d'un gestionnaire
	$main = new Gestionnaire();

	// On place la photo 1 dans le dossier
	$photoUne = $main->uploaderPhoto($_FILES['photo1']);

	// On verifie si la photo deux existe
	// Si c'est le cas on la place dans le dossier
	if(!isset($_FILES['photo2'])){
		$photoDeux = "";
	} else {
		$photoDeux = $main->uploaderPhoto($_FILES['photo2']);
	}

	// On verifie si la photo trois existe
	// Si c'est le cas on la place dans le dossier
	if(!isset($_FILES['photo3'])){
		$photoTrois = "";
	} else {
		$photoTrois = $main->uploaderPhoto($_FILES['photo3']);
	}

	// Inscription en base de données

	$insert = $bd->prepare('INSERT INTO Photo(TitreProjet, DateProjet, NomPhotoUne, NomPhotoDeux, NomPhotoTrois, InfoAppareil, InfoRetouche) VALUES(:description, :dateprojet, :nomphotoune,  :nomphotodeux,  :nomphototrois, :infoapp, :inforet)');

	$insert->execute(array(
		"description" => $_POST['nameProject'],
		"dateprojet" => $_POST['dateProject'],
		"nomphotoune" => $photoUne,
		"nomphotodeux" => $photoDeux,
		"nomphototrois" => $photoTrois,
		"infoapp" => $_POST['appareil'],
		"inforet" => $_POST['retouche']
	));

	// Redirection vers liste des projets
	header('location: photo-list.php');
?>