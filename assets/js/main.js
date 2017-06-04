console.log("main.js");

$(document).ready(function(){

		function changeText(newtext) {
		  $(".start-scrolling").text(newtext)
		}

		MorphSVGPlugin.convertToPath("#start");
		// findShapeIndex("#start", "#end");
	
		var controller = new ScrollMagic.Controller();

		var panel1Timeline = new TimelineMax()
			.from(".panel-content-one h2", 1, {opacity: 0, ease: Power0.easeNone})
			.from(".panel-content-one h2", 1, {x: 250, ease: Power0.easeNone}, "-=1")
			.from(".panel-content-one p.left", 1.5, {x: 250, ease: Power0.easeNone}, "-=1")
			.from(".panel-content-one p.left", 1.5, {opacity: 0, ease: Power0.easeNone}, "-=1")

			.from(".panel-content-one h6", .75, {y: '-100%', ease: Power0.easeNone}, "-=.25")
			.from(".panel-content-one h1", .75, {y: '-100%', ease: Power0.easeNone}, "-=.25")
			.from(".panel-content-one p.right", .75, {y: '-100%', ease: Power0.easeNone}, "-=.25");

			var panel5Timeline = new TimelineMax()
				.staggerFrom("footer h1", 1, {y: window.innerHeight, ease: Back.easeOut.config(1.7)})
				.staggerFrom("footer .p1", 1, {y: window.innerHeight, ease: Back.easeOut.config(1.7)}, "-=1")
				.staggerFrom("footer form.f1", 1, {y: window.innerHeight, ease: Back.easeOut.config(1.7)}, "-=1")
				.staggerFrom("footer form.f2", 1, {y: window.innerHeight, ease: Back.easeOut.config(1.7)}, "-=1")
				.staggerFrom("footer .p2", 1, {y: window.innerHeight, ease: Back.easeOut.config(1.7)}, "-=1");
	
		var masterTimeline = new TimelineMax()
			
			// call scroll change innerHTML
			.call(changeText, ["keep scrolling"])
		 	
		 	// main logo tween
		 	.to("#start", 4, {morphSVG:{shape:"#end", shapeIndex:16}, ease: Elastic.easeOut.config(1, 0.3)}, "frame1")
		 	.to("#start", 4, {fill: '#fff', ease: Circ.easeOut}, "frame1")
		 	.to("#start", 4, {opacity: 0, ease: Circ.easeOut}, "frame1+=3")
			
			// first panels tweens
			.fromTo("#panel--one", 10, {x: 2000}, {x: -3000, ease: Power0.easeNone}, "frame1")
			.fromTo("#panel--one-second", 5, {x: -3000}, {x: 3000, ease: CustomEase.create("custom", "M0,0,C0,0,0.509,0.293,0.524,0.298,0.776,0.383,0.586,0.52,0.875,0.612,0.891,0.617,0.904,0.623,0.915,0.634,0.928,0.648,0.936,0.664,0.945,0.683,0.955,0.707,0.96,0.725,0.965,0.751,0.981,0.846,1,1,1,1")}, "frame1+=0.9")
			.fromTo("#panel--one-third", 10, {x: 2000}, {x: -3000, ease: Power0.easeNone}, "frame1")
			

			// add nested panelTimeline
			.add(panel1Timeline, "frame1+=2")

			// second panel tween
			.fromTo("#panel--two", 10, {x: window.innerWidth}, {x: -3000, ease: Power0.easeNone}, "frame2")
			.to("#start1", 8, {morphSVG:{shape:"#end1", shapeIndex:16}, ease: Circ.easeOut}, "frame2-=5.5")
			
			// add nested panelTimeline

			.fromTo("#panel--three", 10, {x:  window.innerWidth}, {x: -3000, ease: Power0.easeNone})
			
			// add nested panelTimeline

			
			.fromTo("#panel--four", 10, {x: window.innerWidth}, {x: -3000, ease: Power0.easeNone})

			// add nested panelTimeline


			.fromTo("#panel--five", 5, {y: window.innerHeight}, {y: '100vh', ease: Power0.easeNone}, "-=2.5")

			// add nested panelTimeline
			.add(panel5Timeline)

			// call scroll change innerHTML
			.call(changeText, ["go back"]);


		// create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: "#main-wrap",
				triggerHook: "onLeave",
				duration: "1000%"
			})
			.setPin("#main-wrap")
			.setTween(masterTimeline)
			// .addIndicators()
			.addTo(controller);
});



