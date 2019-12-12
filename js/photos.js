$(function(){

	var introCulture = new TimelineMax();

	introCulture.from('.photo-title-holder h1', {
		duration: .7,
		ease: "back",
		y: -500,
		opacity: 0
	});

	introCulture.from('.photo-title-holder h2', {
		duration: .4,
		x: -200,
		opacity: 0
	});
});

$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
		navigation: true,
		onLeave: function(index, nextIndex, direction){

		}
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});