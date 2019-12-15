// CLOSING AN ALERT BANNER
$('.fa-times').on('click', function(){
	$(this).parent('.banner').hide(100);
});

// ONLY ON PHONE : HAMBURGER MENU

$('.hamburger-menu').click(function(){
	$('.left-admin').css({
		'margin-left': '0',
		'transition': 'all .3s'
	});
});
$('.left-admin .close').click(function(){
	$(this).parent('.left-admin').css({
		'margin-left': '-90vw',
		'transition': 'all .3s'
	});
});

// Add Element to PHOTO
var nbPhoto = 1;

$('.add-photo').click(function(){
	if(nbPhoto < 3){
		nbPhoto++;
		$('.is-photo-project').append('<div class="child-elegant is-center photo-upload' + nbPhoto + '"><div class="illustration-photo"><i class="fas fa-camera"></i><input type="file" name="photo' + nbPhoto + '" placeholder="Uploader photo"></div></div>');
	} else {
		alert("Il peut n'y avoir que maximum 3 photos par projet");
	}
});