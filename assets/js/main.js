console.log("main.js");

$(document).ready(function(){

		function changeText(newtext) {
		  $(".start-scrolling").text(newtext)
		}

		MorphSVGPlugin.convertToPath("#start");
		// findShapeIndex("#start", "#end");
	
		var controller = new ScrollMagic.Controller();

		var panel1Timeline = new TimelineMax()
			.to(".nav-1-img", .5, {className:"+=nav-img-active"})
			.from(".panel-content-one h2", 1, {opacity: 0, ease: Power0.easeNone})
			.from(".panel-content-one h2", 1, {x: 250, ease: Power0.easeNone}, "-=1")
			.from(".panel-content-one p.left", 1.5, {x: 250, ease: Power0.easeNone}, "-=1")
			.from(".panel-content-one p.left", 1.5, {opacity: 0, ease: Power0.easeNone}, "-=1")

			.from(".panel-content-one h6", .75, {y: '-100%', ease: Power0.easeNone}, "-=.25")
			.from(".panel-content-one h1", .75, {y: '-100%', ease: Power0.easeNone}, "-=.25")
			.from(".panel-content-one p.right", .75, {y: '-100%', ease: Power0.easeNone}, "-=.25");

			var panel5Timeline = new TimelineMax()
				.from("footer .logo2", 1, {rotation: 360, ease: Power0.easeNone});
	
		var masterTimeline = new TimelineMax()
			
			// call scroll change innerHTML
			.call(changeText, ["keep scrolling"])
		 	
		 	// main logo tween
		 	.to("#start", 4, {morphSVG:{shape:"#end", shapeIndex:16}, ease: Elastic.easeOut.config(1, 0.3)}, "frame1")
		 	.to("#start", 4, {fill: '#fff', ease: Circ.easeOut}, "frame1")
		 	.to("#start", 2, {opacity: 0, ease: Circ.easeOut}, "frame1+=2")
			
			// first panels tweens
			.fromTo("#panel--one", 10, {x: 2000, force3D:true}, {x: -3000, force3D:true, ease: Power0.easeNone}, "frame1")
			.fromTo("#panel--one-second", 5, {x: -3000, force3D:true}, {x: 3000, force3D:true, ease: Power0.easeNone}, "frame1+=0.9")
			.fromTo("#panel--one-third", 10, {x: 2000, force3D:true}, {x: -3000, force3D:true, ease: Power0.easeNone}, "frame1")
			

			// add nested panelTimeline
			.add(panel1Timeline, "frame1+=2")

			// second panel tween
			.fromTo("#panel--two", 10, {x: window.innerWidth, force3D:true}, {x: -3000, force3D:true, ease: Power0.easeNone}, "frame2")
			.to("#start1", 8, {morphSVG:{shape:"#end1", shapeIndex:16}, ease: Circ.easeOut}, "frame2-=5.5")
			
			// add nested panelTimeline

			.fromTo("#panel--three", 10, {x:  window.innerWidth, force3D:true}, {x: -3000, force3D:true, ease: Power0.easeNone})
			
			// add nested panelTimeline

			
			.fromTo("#panel--four", 10, {x: window.innerWidth, force3D:true}, {x: -3000, force3D:true, ease: Power0.easeNone})

			// add nested panelTimeline


			.fromTo("#panel--five", 5, {y: window.innerHeight, force3D:true}, {y: '100vh', force3D:true, ease: Power0.easeNone}, "-=2.5")

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



