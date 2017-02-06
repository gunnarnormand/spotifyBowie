console.log("scrollTo.js");

MorphSVGPlugin.convertToPath("#third");
MorphSVGPlugin.convertToPath("#start");

MorphSVGPlugin.convertToPath("#scroll-icon-top");
MorphSVGPlugin.convertToPath("#scroll-icon-middle");
MorphSVGPlugin.convertToPath("#scroll-icon-bottom");

// findShapeIndex("#start", "#end");

// findShapeIndex("#scroll-icon-top", "#scroll-icon-middle");

$(document).ready(function(){



	// window.onscroll = function (e) {
	// 	TweenMax.to(".bottom-nav", .2, {y: 0, ease: Circ.easeOut});
	// }


	// var userHasScrolled = false;
	
	// window.onscroll = function (e) {
	// 	userHasScrolled = true;
	// }

	// while(userHasScrolled) {
		
		
	// 	TweenMax.to(".bottom-nav", .2, {y: 0, ease: Circ.easeOut});


	// 	userHasScrolled = false;
	// }







	setTimeout(function(){
  		$('.loader-overlay').addClass('loaded');	
	}, 4000);

	var loadingTimeline = new TimelineMax();

	loadingTimeline
					.to("#first", .2, {morphSVG:"#second", shapeIndex:16, ease: Circ.easeOut},  "+=1")
				   	.to("#first", .2, {morphSVG:"#third", shapeIndex:-20, ease: Circ.easeOut}, "+=1")
				   	.to("#first", .2, {morphSVG:"#first", shapeIndex:-2, ease: Circ.easeOut}, "+=1");


	var scrollingTimeline = new TimelineMax({repeat: -1});

	scrollingTimeline
					.to("#scroll-icon-top", .5, {morphSVG:"#scroll-icon-bottom", shapeIndex:0, ease: Back.easeOut.config(1.7)},  "+=1")
				   	.to("#scroll-icon-top", .5, {morphSVG:"#scroll-icon-top", shapeIndex:0, ease: Back.easeOut.config(1.7)}, "+=1");			   				   	


	$('.logo-2').on('click', function() {

		TweenMax.to("#start-2", 1, {morphSVG:{shape:"#end-2", shapeIndex:28}, ease: Elastic.easeOut.config(1, 0.3)});
		TweenMax.to("#start-2", 1, {fill: '#fff', ease: Circ.easeOut});
	});
	
	$('#backtop').on('click', function() {
		$.scrollTo( $('#top'), 1800);
	});
	
});


