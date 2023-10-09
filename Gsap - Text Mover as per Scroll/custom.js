// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select the element to animate
    const box = document.querySelector('.box .first-h2');
    const box2 = document.querySelector('.box .sec-h2');

    // Create a GSAP timeline
    const textLeft = gsap.timeline({
        scrollTrigger: {
            scrub: true, // Smoothly animates in relation to scroll position
            duration: 5,
          
        }
    });
    const textRight = gsap.timeline({
        scrollTrigger: {
            scrub: true, // Smoothly animates in relation to scroll position
            duration: 5,

        }
    });

    // Add animations to the timeline
    textLeft.to(box, { x: '100vw', margin: '20px',fontSize:70,color:"#0093ff" });
    textRight.to(box2, { x: '-100vw', margin: '20px',fontSize:70 ,color:"#0093ff"});
});
