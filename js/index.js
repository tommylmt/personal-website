$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
		onLeave: function(index, nextIndex, direction){

		}
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});

$(function(){
 	// ONLY ON THE INDEX
	  var infinite = new TimelineMax({repeat:-1});

	  infinite.to(".principalh1", {
	    duration: 1,
	    ease: "back.out(1.7)",
	    opacity: 1
	  }, "+=1");

	  infinite.to(".principalh1", {
	    delay : 1,
	    duration: .5,
	    opacity: 0
	  });
	  
	  infinite.to(".photograph", {
	    delay: 1,
	    duration: 1, 
	    opacity: 1
	  });

	  infinite.to(".photograph", {
	    delay : 1,
	    duration: .5,
	    opacity: 0
	  });
	  
	  infinite.to(".musician", {
	    delay: 1,
	    duration: 1, 
	    opacity: 1
	  });

	  infinite.to(".musician", {
	    delay : 1,
	    duration: .5,
	    opacity: 0
	  });
	  
	  infinite.to(".designer", {
	    delay: 1,
	    duration: 1, 
	    opacity: 1
	  });
	  infinite.to(".designer", {
	    delay : 1,
	    duration: .5,
	    opacity: 0
	  });
});