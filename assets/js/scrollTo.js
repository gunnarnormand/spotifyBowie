console.log("scrollTo.js");


MorphSVGPlugin.convertToPath("#start");

// findShapeIndex("#start", "#end");

$(document).ready(function(){


	$('#top').on('click', function() {

		TweenMax.to("#start", 1, {morphSVG:{shape:"#end", shapeIndex:28}, ease: Elastic.easeOut.config(1, 0.3)});
		TweenMax.to("#end", 1, {opacity: 0, ease:Bounce.easeOut});


	});
	
	$('#backtop').on('click', function() {
		$.scrollTo( $('#top'), 900);
	});
	
});


