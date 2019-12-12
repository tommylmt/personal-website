$(function(){


	// ANIMATION ON THE LOGO AT THE BEGINNING
 	gsap.from('.logo-principal-all img', {
 		duration: .5,
 		x: 1000
 	});
	gsap.from('.backgroundh1', {
	  	duration: .7,
	  	x: 1000,
	  	ease: "power2.easeInOut",
	  	stagger: .2
	});
	gsap.from('.title-principal',{
		delay: 1.5,
	  	duration: .7,
	  	opacity: 0,
	  	y: -100
	});

	// MENU PART

	$('.wrapper .menu').hide();
 	$('.open-menu').click(function(){

 		$('.wrapper .menu').show();
 		$('.menu').animate({
 			left: 0,
 			opacity: '1'
 		}, 300);

 		$('.un').delay(400).animate({
 			opacity: '1'
 		}, 200);
 		$('.deux').delay(600).animate({
 			opacity: '1'
 		}, 200);
 		$('.trois').delay(800).animate({
			opacity: '1'
 		}, 200);
 		$('.quatre').delay(1000).animate({
 			opacity: '1'
 		}, 200);
 	});
 	$('.close').click(function(){
 		$('.quatre').animate({
 			opacity: '0'
 		}, 200);
 		$('.trois').delay(200).animate({
 			opacity: '0'
 		}, 200);
 		$('.deux').delay(400).animate({
 			opacity: '0'
 		}, 200);
 		$('.un').delay(600).animate({
			opacity: '0'
 		}, 200);

 		$('.menu').delay(800).animate({
 			// opacity: '0',
 			left: '100vw'
 		}, 300);
 		$('.menu').delay(1000).hide(0);
 	});

 	// Bug to fix :
 	// - tiret work doesn't work after close
 	// - disable other <li> when Work active
 	var open = false;

 	$('.submenu').click(function(){
 		open = !open;
 		if(open){
	 		$(this).children('.submenu-container').css({
	 			opacity: '1',
	 			height: '200px',
	 			// display: 'block',
	 			transition: 'all .3s'
	 		}, 500);
	 		$('.menu > ul > li').css({
	 			opacity: '.3'
	 		});
	 		$(this).css({
	 			opacity: '1'
	 		});
	 		$(this).children('.tiret').css({
	 			width: '80px'
	 		});
	 		$(this).children('.submenu-container').children('li').css('display','block');
 		} else{
	 		$('.menu > ul > li').css({
	 			opacity: '1'
	 		});
	 		$(this).children('.submenu-container').css({
	 			opacity: '0',
	 			height: '0',
	 			// display: 'none',
	 			transition: 'all .3s'
	 		});
	 		$(this).children('.tiret').css({
	 			width: '0'
	 		});
	 		$(this).children('.submenu-container').children('li').css('display','none');
 		}
 	});

 });