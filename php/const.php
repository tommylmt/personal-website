<?php 
	// Constante date de naissance
	$date_tommy = "1999-06-08";

	// Constante calcul de l'age
	$age_tommy = intval((time() - strtotime($date_tommy))/3600/24/365);

	// Constante Annee en cours
	$year = date("Y");
?>