<?php 
// Gestionnaire général
class Gestionnaire{

	private $_bd;

	public function __construct(){
		$this->_bd = new PDO('mysql:host=localhost;dbname=nouveaublog', 'root', 'root');
	}

	// Upload d'un fichier dans le dossier img/projet/photos
	// Retourne une chaine de caractère pour bdd
	public function uploaderPhoto($file){
		$extension_photo = strtolower(  substr(  strrchr($file['name'], '.')  ,1)  );

		$id_photo = md5(uniqid(rand(), true));

		$nomPhoto = "img/projet/photos/{$id_photo}.{$extension_photo}";

		$aPlacerDansDossier = "../img/projet/photos/{$id_photo}.{$extension_photo}";

		$resultatphoto = move_uploaded_file($file['tmp_name'], $aPlacerDansDossier);

		return $nomPhoto;
	}

	// Upload d'un fichier dans le dossier img/projet/web
	// Retourne une chaine de caractère pour bdd
	public function uploaderWeb($file){
		$extension_photo = strtolower(  substr(  strrchr($file['name'], '.')  ,1)  );

		$id_photo = md5(uniqid(rand(), true));

		$nomPhoto = "img/projet/web/{$id_photo}.{$extension_photo}";

		$aPlacerDansDossier = "../img/projet/web/{$id_photo}.{$extension_photo}";

		$resultatphoto = move_uploaded_file($file['tmp_name'], $aPlacerDansDossier);

		return $nomPhoto;
	}

	// Upload d'un fichier dans le dossier img/film/
	// Retourne une chaine de caractère pour bdd
	public function uploaderFilm($file){
		$extension_photo = strtolower(  substr(  strrchr($file['name'], '.')  ,1)  );

		$id_photo = md5(uniqid(rand(), true));

		$nomPhoto = "img/film/{$id_photo}.{$extension_photo}";

		$aPlacerDansDossier = "../img/film/{$id_photo}.{$extension_photo}";

		$resultatphoto = move_uploaded_file($file['tmp_name'], $aPlacerDansDossier);

		return $nomPhoto;
	}

	// Upload d'un fichier dans le dossier img/Serie/
	// Retourne une chaine de caractère pour bdd
	public function uploaderSerie($file){
		$extension_photo = strtolower(  substr(  strrchr($file['name'], '.')  ,1)  );

		$id_photo = md5(uniqid(rand(), true));

		$nomPhoto = "img/serie/{$id_photo}.{$extension_photo}";

		$aPlacerDansDossier = "../img/serie/{$id_photo}.{$extension_photo}";

		$resultatphoto = move_uploaded_file($file['tmp_name'], $aPlacerDansDossier);

		return $nomPhoto;
	}	

	// Supprimer un projet photo de la base de données
	public function supprimerPhoto($id){
		$query = "DELETE FROM Photo WHERE IdProjetPhoto = ?";

		$deleteElement = $this->_bd->prepare($query);
		$deleteElement->execute([$id]);
	}

	// Supprimer un projet Web de la base de données
	public function supprimerWeb($id){
		$query = "DELETE FROM Webdev WHERE IdProjet = ?";

		$deleteElement = $this->_bd->prepare($query);
		$deleteElement->execute([$id]);
	}

	// Supprimer un projet Web de la base de données
	public function supprimerFormation($id){
		$query = "DELETE FROM Formation WHERE IdFormation = ?";

		$deleteElement = $this->_bd->prepare($query);
		$deleteElement->execute([$id]);
	}

	// Modifier un film donné
	public function modifierFilm($info, $photo){
		$query = "UPDATE Film SET NomArtiste = ?, NomFichier = ? WHERE IdFilm = ?";
		
		$img = $this->uploaderFilm($photo);

		$updateElement = $this->_bd->prepare($query);
		$updateElement->execute([$info['nomArtiste'], $img, $info['id']]);
	}

	// Modifier une série donnée
	public function modifierSerie($info, $photo){
		$query = "UPDATE Serie SET NomArtiste = ?, NomFichier = ? WHERE IdSerie = ?";
		
		$img = $this->uploaderSerie($photo);

		$updateElement = $this->_bd->prepare($query);
		$updateElement->execute([$info['nomArtiste'], $img, $info['id']]);		
	}

	// Transforme un input Checkbox en un Boolean
	public function isDiplomeToBoolean($diplome){
		if($diplome == "on"){
			return 1;
		} else {
			return 0;
		}
	}
}
	
?>