// init controller
var controller = new ScrollMagic.Controller();

//tween

var tl = new TimelineMax();
tl.from(".timeline-badge", 1, {x:-100, opacity:0});

var animtext = new TimelineMax();

var tween1 = TweenMax.from(".timeline-panel-container", 1, {x:800, opacity:0});
var tween2 = TweenMax.from(".timeline-panel-container-inverted", 1, {x:-800, opacity:0});
animtext.add(tween1);
animtext.add(tween2);


// create a scene
const scene = new ScrollMagic.Scene({
		duration: "80%",	// the scene should last for a scroll distance of 100px
		triggerElement: ".first-badge",
		triggerHook: "onEnter"
	})
	// .setPin(".sticky-effect"); // pins the element for the the scene's duration
	.setTween(tl)
	.addTo(controller); // assign the scene to the controller

const scene2 = new ScrollMagic.Scene({
	duration: "80%",
	triggerElement: ".first-badge",
	triggerHook: "onEnter"
    })

	.setTween(animtext)
	.addTo(controller);
