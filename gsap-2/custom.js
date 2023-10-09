// gsap.to('h1', {
//     x: 800,
//     duration: 2,
//     delay: 1
// });
// gsap.to('h2', {
//     x: 800,
//     duration: 2,
//     delay: 3
// });

// gsap.to('h3', {
//     x: 800,
//     duration: 2,
//     delay: 5
// });



// we can use "Timeline " instead of above ... -----------------------------------------------------------------
// timeline it means one element complete animation then second start (work like ordered)
 

var tl= gsap.timeline();
tl.to("h1",{
    x: 800,
    duration: 2,
    
})
tl.to("h2",{
    x: 800,
    duration: 2,
})
tl.to("h3",{
    x: 800,
    duration: 2,
})


// yoyo and infinite ----------------------------------------------------------
gsap.to(".infinite",{
    x:"20vw",
    delay:1,
    duration:1.5,
    yoyo:true,
    repeat:-1 // for infinite

})


