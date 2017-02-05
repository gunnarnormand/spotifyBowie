console.log("main.js");

$(document).ready(function(){

		MorphSVGPlugin.convertToPath("#start");
		// findShapeIndex("#start", "#end");
	
		var controller = new ScrollMagic.Controller();
	
		var wipeAnimation = new TimelineMax()
		 	.to("#start", 4, {morphSVG:{shape:"#end", shapeIndex:16}, ease: Elastic.easeOut.config(1, 0.3)}, "frame1")
		 	.to("#start", 4, {fill: '#fff', ease: Circ.easeOut}, "frame1")
		 	.to("#start", 4, {opacity: 0, ease: Circ.easeOut}, "frame1+=3")
			
			.fromTo("#panel--one", 10, {x: 2000}, {x: -3000, ease: Power0.easeNone}, "frame1")
			.fromTo("#panel--one-second", 5, {x: -3000}, {x: 3000, ease: CustomEase.create("custom", "M0,0,C0,0,0.509,0.293,0.524,0.298,0.776,0.383,0.586,0.52,0.875,0.612,0.891,0.617,0.904,0.623,0.915,0.634,0.928,0.648,0.936,0.664,0.945,0.683,0.955,0.707,0.96,0.725,0.965,0.751,0.981,0.846,1,1,1,1")}, "frame1+=0.9")
			.fromTo("#panel--one-third", 10, {x: 2000}, {x: -3000, ease: Power0.easeNone}, "frame1")
			
			// animate to second panel
			// .to("#slide-wrap", .25, {z: -150, ease: Power0.easeNone})		// move back in 3D space
			// .to("#slide-wrap", .25, {z: 0, ease: Power0.easeNone})				// move back to origin in 3D space
			
			.fromTo("#panel--two", 10, {x: window.innerWidth}, {x: -3000, ease: Power0.easeNone}, "frame2")
			.to("#start1", 8, {morphSVG:{shape:"#end1", shapeIndex:16}, ease: Circ.easeOut}, "frame2-=5.5")
			
			// animate to third panel
			// .to("#slide-wrap", .25, {z: -150, ease: Power0.easeNone})
			// .to("#slide-wrap", .25, {z: 0, ease: Power0.easeNone})
			
			.fromTo("#panel--three", 10, {x:  window.innerWidth}, {x: -3000, ease: Power0.easeNone})
			
			// animate to fourth panel
			// .to("#slide-wrap", .25, {z: -150, ease: Power0.easeNone})
			// .to("#slide-wrap", .25, {z: 0, ease: Power0.easeNone})
			
			.fromTo("#panel--four", 10, {x: window.innerWidth}, {x: -3000, ease: Power0.easeNone});

		









		// create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: "#main-wrap",
				triggerHook: "onLeave",
				duration: "1000%"
			})
			.setPin("#main-wrap")
			.setTween(wipeAnimation)
			.addIndicators()
			.addTo(controller);
});




