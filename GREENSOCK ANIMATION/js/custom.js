// =========== GREENSOCK ANIMATION START =============
// gsap.to(".box", {
//   rotation: 360,
//   x: '100vw',
//   xPercent: -100,
//   // special properties
//   duration: 2, // how long the animation lasts
//   repeat: 2, // the number of repeats - this will play 3 times
//   yoyo: true, // this will alternate back and forth on each repeat. Like a yoyo
// });

document.querySelectorAll('.box').forEach(function (box) {
    box.addEventListener('click', function () {
        gsap.to('.box', {
            duration: 0.5,
            opacity: 0,
            y: -100,
            stagger: 0.1,
            ease: 'back.in'
        });
    });
});

gsap.to('.purple', {
    rotation: 360,
    duration: 2,
    ease: 'bounce.out'
});

//  SCROLL EVENT START =============

// gsap.to(".scroll-parent ", {
//   rotation: 360,
//   duration: 8,
//   scrollTrigger: {
//     trigger: '',
//     scrub: 1,
//     markers: true,
//   }
// });
  
// TEXT ANIMATION START=======================
const tl = gsap.timeline({ repeat: -1 }),
    split = new SplitText('.quote', { type: 'chars, words' }),
    chars = split.chars;

tl.set(chars, { color: 'random([#6fb936, #f38630, #989898, pink])' }, 2);

tl.from(chars, {
    opacity: 0,
    duration: 0.1,
    stagger: 0.1
});

tl.to(chars, {
    duration: 0.5,
    opacity: 0,
    stagger: 0.05,
    ease: 'power4.inOut'
});

/*
See https://www.greensock.com/splittext/ for details. 
This demo uses SplitText which is a membership benefit of Club GreenSock, https://www.greensock.com/club/
*/
// gsap.registerPlugin(SplitText);

// var tl = gsap.timeline(),
//   mySplitText = new SplitText("#quote", { type: "words,chars" }),
//   chars = mySplitText.chars; //an array of all the divs that wrap each character

// gsap.set("#quote", { perspective: 400 });

// console.log(chars);

// tl.from(chars, {
//   duration: 0.8,
//   opacity: 0,
//   scale: 0,
//   y: 80,
//   rotationX: 180,
//   transformOrigin: "0% 50% -50",
//   ease: "back",
//   stagger: 0.01
// });

// document.getElementById("animate").onclick = function () {
//   tl.restart();
// };
