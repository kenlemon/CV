

var tl = new TimelineMax({onUpdate:updatePercentage});
var tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();

// tl.from('#span', 1, { width: 0}, "=-.5");
tl.from('#timeline-panel-container', 1, {x:-200, opacity: 0,ease: Power4.easeInOut}, "=-1");
tl.from('#timeline-badge', 1, {x:200, opacity: 0,ease: Power4.easeInOut}, "=-.7");

tl2.from("#box", 1, {opacity:0, scale: 0});
tl2.to("#box", 0.5, {
	left:"20%",
	scale:1.3,
	borderColor: 'white',
	borderWidth:12,
	boxShadow: '1px 1px 0px 0px rgba(0,0,0,.09)'
});

// const scene = new ScrollMagic.Scene({
// 	triggerElement: ".sticky",
// 	triggerHook: "onLeave",
// 	duration: "100%"
// })

//   .setPin(".sticky")
//   .setTween(tl)
//   .addTo(controller);


//   .setTween(tl2)
//   .addTo(controller);

//  function updatePercentage() {
//  	tl.progress();
//  	console.log(tl.progress());

//  }