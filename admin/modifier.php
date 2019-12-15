<?php
	session_start();

	include('php/pdo.php');
	require_once('php/base.php');

	error_reporting(E_ALL);
	ini_set("display_errors", 1);

	$main = new Gestionnaire();

	if($_POST['type'] == "Film") {
		$main->modifierFilm($_POST, $_FILES['filmPhoto']);
		header('location: culture.php');
	}
	if($_POST['type'] == "Serie"){
		$main->modifierSerie($_POST, $_FILES['filmPhoto']);
		header('location: culture.php');
	}

?>