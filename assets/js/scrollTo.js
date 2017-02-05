console.log("scrollTo.js");

MorphSVGPlugin.convertToPath("#third");
MorphSVGPlugin.convertToPath("#start");

// findShapeIndex("#start", "#end");

$(document).ready(function(){

	setTimeout(function(){
  		$('.loader-overlay').addClass('loaded');	
	}, 4000);

	var loadingTimeline = new TimelineMax();

	loadingTimeline
					.to("#first", .2, {morphSVG:"#second", shapeIndex:16, ease: Circ.easeOut},  "+=1")
				   	.to("#first", .2, {morphSVG:"#third", shapeIndex:-20, ease: Circ.easeOut}, "+=1")
				   	.to("#first", .2, {morphSVG:"#first", shapeIndex:-2, ease: Circ.easeOut}, "+=1");


	$('#top').on('click', function() {

		TweenMax.to("#start", 1, {morphSVG:{shape:"#end", shapeIndex:28}, ease: Elastic.easeOut.config(1, 0.3)});
		TweenMax.to("#end", 1, {opacity: 0, ease:Bounce.easeOut});

	});
	
	$('#backtop').on('click', function() {
		$.scrollTo( $('#top'), 900);
	});
	
});


