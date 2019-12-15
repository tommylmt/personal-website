<?php 
	session_start();

	// Affichage des erreurs
	// error_reporting(E_ALL);
	// ini_set("display_errors", 1);

	require_once('php/base.php');
	include('php/pdo.php');

	$id = $_GET['id'];
	$table = $_GET['db'];

	$main = new Gestionnaire();

	if($table == "Photo"){

		$main->supprimerPhoto($id);
		header('location: photo-list.php');

	}
	if($table == "Webdev"){

		$main->supprimerWeb($id);
		header('location: web-list.php');

	}
	if($table == "Formation"){

		$main->supprimerFormation($id);
		header('location: cv.php');
	}


	
?>