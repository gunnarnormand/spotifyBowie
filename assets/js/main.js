console.log("main.js");

$(document).ready(function(){

		MorphSVGPlugin.convertToPath("#start");
	
		var controller = new ScrollMagic.Controller();
	
		var wipeAnimation = new TimelineMax()
		 	// .to("#start", 1, {morphSVG:{shape:"#end", shapeIndex:28}, ease: Elastic.easeOut.config(1, 0.3)})
		 	
			

			.fromTo("#panel--one", 5, {x: 3000}, {x: 0, ease: Back.easeOut.config(1.7), delay: 7})
			.fromTo("#panel--one-second", 5, {x: "-100%"}, {x: "0%", ease: Back.easeOut.config(1.7), delay: -1})
			// animate to second panel
			.to("#slide-wrap", 2.5, {z: -150, ease: Back.easeOut.config(1.7), delay: 2.5})		// move back in 3D space
			.to("#slide-wrap", 2.5, {z: 0, ease: Back.easeOut.config(1.7)})				// move back to origin in 3D space
			.fromTo("#panel--two", 5, {x: 3000}, {x: 0, ease: Back.easeOut.config(1.7)})
			// animate to third panel
			.to("#slide-wrap", 2.5, {z: -150, ease: Back.easeOut.config(1.7)})
			.to("#slide-wrap", 2.5, {z: 0, ease: Back.easeOut.config(1.7)})
			.fromTo("#panel--three", 5, {x:  3000}, {x: 0, ease: Back.easeOut.config(1.7)})
			// animate to fourth panel
			.to("#slide-wrap", 2.5, {z: -150, ease: Back.easeOut.config(1.7)})
			.to("#slide-wrap", 2.5, {z: 0, ease: Back.easeOut.config(1.7)})
			.fromTo("#panel--four", 5, {x: 3000}, {x: 0, ease: Back.easeOut.config(1.7)});

		// create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: "#main-wrap",
				triggerHook: "onLeave",
				duration: "1000%"
			})
			.setPin("#main-wrap")
			.setTween(wipeAnimation)
			// .addIndicators()
			.addTo(controller);
});




