
$(function(){
 	// CULTURE PART

 	$.ajax({
 		type: "GET",
 		url: "https://api.deezer.com/user/1567995002/charts/albums?output=jsonp",
 		dataType: "jsonp",
 		type: "application/json",
 		success: function(data){
 			// console.log(data);
 			for(i = 0; i < 5; i++){
 				if(data.data[i].cover_big !== null){
 					$('.music-container').append('<div class="a-music is-animated"><img src="' + data.data[i].cover_big + '"><div class="music-infos"><h5>By ' + data.data[i].artist.name + '</h5></div></div>');			
 				} else {
 					$('.music-container').append('<div class="a-music is-animated"><h2>Pochette non trouvée</h2></p><h5>' + data.data[i].artist.name + '</h5></div>');	
 				}

 			}
 		},
 		error: function(){
 			console.log("Erreur lors de la recuperation des resultats");
 		}
 	});

	// A RESOUDRE : ANIMER DES BLOBS DE FACON RANDOM AU SURVOL

	$('.blob').on('mouseover', function(){
		gsap.to($(this), {
			duration: .6,
			ease: "back",
			css: {
				scale: .85
			}
		});
	});

	$('.blob').on('mouseleave', function(){
		gsap.to($(this), {
			duration: .6,
			ease: "back",
			css: {
				scale: 1
			}
		});
	});

	var introCulture = new TimelineMax();

	introCulture.from('.culture-title-holder h1', {
		duration: .7,
		ease: "back",
		y: -500,
		opacity: 0
	});

	introCulture.from('.culture-title-holder h2', {
		duration: .4,
		x: -200,
		opacity: 0
	});
});

var $isAnimatedFilms = $('.right-movie .is-animated'),
	$isAnimatedMusic = $('.music-container .is-animated'),
	$isAnimatedShows = $('.right-shows .is-animated');

$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
		navigation: true,
		onLeave: function(index, nextIndex, direction){
			if(index.index === -1){
				$('.open-menu').addClass("white-menu");
			}
			if(index.index == 0){
				$('.open-menu').removeClass("white-menu");
				
				$isAnimatedFilms.eq(0).addClass('animated fadeInDown');
				$isAnimatedFilms.eq(1).addClass('animated fadeInDown');
				$isAnimatedFilms.eq(2).addClass('animated fadeInDown');

				$isAnimatedFilms.eq(3).addClass('animated fadeInUp');
				$isAnimatedFilms.eq(4).addClass('animated fadeInUp');

				$isAnimatedFilms.eq(0).css('animation-delay', '.2s');
				$isAnimatedFilms.eq(1).css('animation-delay', '.4s');
				$isAnimatedFilms.eq(2).css('animation-delay', '.6s');
				$isAnimatedFilms.eq(3).css('animation-delay', '.2s');
				$isAnimatedFilms.eq(4).css('animation-delay', '.4s');
			}
			if(index.index == 1){
				$('.open-menu').addClass("white-menu");

				$isAnimatedMusic.eq(0).addClass('animated fadeInDown');
				$isAnimatedMusic.eq(1).addClass('animated fadeInDown');
				$isAnimatedMusic.eq(2).addClass('animated fadeInDown');

				$isAnimatedMusic.eq(3).addClass('animated fadeInUp');
				$isAnimatedMusic.eq(4).addClass('animated fadeInUp');

				$isAnimatedMusic.eq(0).css('animation-delay', '.2s');
				$isAnimatedMusic.eq(1).css('animation-delay', '.4s');
				$isAnimatedMusic.eq(2).css('animation-delay', '.6s');
				$isAnimatedMusic.eq(3).css('animation-delay', '.2s');
				$isAnimatedMusic.eq(4).css('animation-delay', '.4s');
			} if(index.index == 2){
				$('.open-menu').removeClass("white-menu");

				$isAnimatedShows.eq(0).addClass('animated fadeInDown');
				$isAnimatedShows.eq(1).addClass('animated fadeInDown');
				$isAnimatedShows.eq(2).addClass('animated fadeInDown');

				$isAnimatedShows.eq(3).addClass('animated fadeInUp');
				$isAnimatedShows.eq(4).addClass('animated fadeInUp');

				$isAnimatedShows.eq(0).css('animation-delay', '.2s');
				$isAnimatedShows.eq(1).css('animation-delay', '.4s');
				$isAnimatedShows.eq(2).css('animation-delay', '.6s');
				$isAnimatedShows.eq(3).css('animation-delay', '.2s');
				$isAnimatedShows.eq(4).css('animation-delay', '.4s');
			}
		}
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});