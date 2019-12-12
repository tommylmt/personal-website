$(function(){

	var introCulture = new TimelineMax();

	introCulture.from('.webdev-title-holder h1', {
		duration: .7,
		ease: "back",
		y: -500,
		opacity: 0
	});

	introCulture.from('.webdev-title-holder h2', {
		duration: .4,
		x: -200,
		opacity: 0
	});
});

$(document).ready(function() {
	$('#fullpage').fullpage({
		autoScrolling:true,
		scrollHorizontally: true,
		navigation: true,
		onLeave: function(index, nextIndex, direction){
			if(index.isFirst){
				$('.open-menu').addClass('white-menu');
				$('.logo-principal-all a img').attr('src', 'img/logo-white.svg');						
			}

			if(!$('.section').eq(nextIndex.index).find('.project-wrapper').hasClass('night-one')){

				$('.open-menu').removeClass('white-menu');
				$('.logo-principal-all a img').attr('src', 'img/logo.svg');

			} else if($('.section').eq(nextIndex.index).find('.project-wrapper').hasClass('night-one')){$

				$('.open-menu').addClass('white-menu');
				$('.logo-principal-all a img').attr('src', 'img/logo-white.svg');

			}

			if(index.index >= 0){
				var timelineWebdev = new TimelineMax();

				timelineWebdev.from($('.section').eq(nextIndex.index).find('.img-container'), {
					duration: 1,
					ease: 'back',
					y: 1000
				});
				timelineWebdev.from($('.section').eq(nextIndex.index).find('.left-project'), {
					duration: .3,
					opacity: 0
				});
			}
		}
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});