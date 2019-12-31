var $isAnimatedIconsFirst = $('.first-wrapper .is-animated');
var $isAnimatedIconsSecond = $('.second-wrapper .is-animated');
var $isAnimatedIconsThird = $('.third-wrapper .is-animated');
var $isAnimatedIconsFourth = $('.fourth-wrapper .is-animated');

var $isAnimatedTimeline = $('.right-timeline .is-animated');

$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		navigation: true,
		scrollHorizontally: true,
		onLeave: function(index, nextIndex, direction) {
			if(index.index == 0){
				$isAnimatedTimeline.addClass('animated fadeInRight'); 
				$isAnimatedTimeline.eq(0).css('animation-delay', '.2s');

				$('.open-menu').addClass("white-menu");
				$('.logo-principal-all img').attr('src', 'img/logo-white.svg');
			
				if(direction === "up"){
					$('.logo-principal-all img').attr('src', 'img/logo-white.svg');
				}
			} 
			if(index.index !== 0){
				$('.open-menu').removeClass('white-menu');
				$('.logo-principal-all img').attr('src', 'img/logo.svg');

				if(direction === "up"){
					$('.logo-principal-all img').attr('src', 'img/logo-white.svg');
				}
			}
			if(index.index == 1){
			    $isAnimatedIconsFirst.addClass('animated fadeInDown'); 
			    $isAnimatedIconsSecond.addClass('animated fadeInDown');
			    $isAnimatedIconsThird.addClass('animated fadeInDown');
			    $isAnimatedIconsFourth.addClass('animated fadeInDown');

			    $isAnimatedIconsFirst.eq(0).css('animation-delay', '.2s');
			    $isAnimatedIconsFirst.eq(1).css('animation-delay', '.3s');
			    $isAnimatedIconsFirst.eq(2).css('animation-delay', '.4s');
			    $isAnimatedIconsFirst.eq(3).css('animation-delay', '.5s');
			    $isAnimatedIconsFirst.eq(4).css('animation-delay', '.6s');
			    $isAnimatedIconsFirst.eq(5).css('animation-delay', '.7s');
			    $isAnimatedIconsFirst.eq(6).css('animation-delay', '.8s');	
			    $isAnimatedIconsFirst.eq(7).css('animation-delay', '.9s');	

			   	$isAnimatedIconsSecond.eq(0).css('animation-delay', '.2s');

			   	$isAnimatedIconsThird.eq(0).css('animation-delay', '.2s');
			   	$isAnimatedIconsThird.eq(1).css('animation-delay', '.3s');
			   	$isAnimatedIconsThird.eq(2).css('animation-delay', '.4s');
			   	$isAnimatedIconsThird.eq(3).css('animation-delay', '.5s');
			   	$isAnimatedIconsThird.eq(4).css('animation-delay', '.6s');

			   	$isAnimatedIconsFourth.eq(0).css('animation-delay', '.2s');
			   	$isAnimatedIconsFourth.eq(1).css('animation-delay', '.3s');
			   	$isAnimatedIconsFourth.eq(2).css('animation-delay', '.4s');
			   	$isAnimatedIconsFourth.eq(3).css('animation-delay', '.5s');

				if(direction === "up"){
					$('.logo-principal-all img').attr('src', 'img/logo-white.svg');
				}
			}
		}
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});

$(function(){
 	// ONLY THE ABOUT PART

 	var intro = new TimelineMax();
 	
 	intro.from('.right-about img', {
 		duration: 1,
 		x: 1000
 	});
 	intro.from('.content-about', {
 		duration: .5,
 		x: -1000
 	});
 	intro.from('.left-about .title-about', {
 		duration: .5,
 		opacity: 0,
 		y: 200
 	});

 	$('.mouse').on('mouseover', function(){
 		var timeline = new TimelineMax();
 		timeline.set('.right-about img', {
 			attr:{
 				src: "img/toulouse-min.png"
 			}
 		});
 		timeline.from('.right-about img', {
 			duration: .5,
 			ease: "back",
 			y: -1000
 		});
 	});
 	$('.mouse').on('mouseleave', function(){
 		var timeline = new TimelineMax();
 		timeline.set('.right-about img', {
 			attr:{
 				src: "img/toma-min.png"
 			}
 		});
 		timeline.from('.right-about img', {
 			duration: .5,
 			ease: "back",
 			y: 1000
 		});
 	});


 	//  Le dernier est passé comme ouvert
	$('.a-dot-holder').last().addClass('is-open');

	$('.a-dot-holder').mouseover(function(){
	    // Si il n'a pas la classe is-open
	    // Alors on enleve a is-open sa classe
	    if(!$(this).hasClass('is-open')){
	    	$('.is-open').removeClass('is-open');
	    	$(this).addClass('is-open');
	    }
	});
});