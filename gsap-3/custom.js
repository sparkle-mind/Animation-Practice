// =========== Page-1 =================

gsap.to('#page1 h1', {
    transform: 'translateX(-180vw)',
    fontWeight: '100',
    color: 'orange',
    scrollTrigger: {
        trigger: '#page1',
        scroller: 'body',
        markers: true, // just for looking where scroller start/end in webpage
        start: 'top 0',
        end: 'top -200%',
        scrub: 2,
        pin: true
    }
});

gsap.to('#page1 .dot', {
    backgroundColor: 'orange',
    boxShadow: 'rgb(255, 255, 255) 0px 0px 35px',
    transform: 'scale(8)',
    scrollTrigger: {
        trigger: '#page1 dot',
        scroller: 'body',
        start: 'top 0',
        end: 'top -200%',
        scrub: 4,
        pin: true
    }
});

gsap.to('#page1 .cloud', {
    x: -100,
    transform: 'scale(1.5)',
    scrollTrigger: {
        trigger: '#page1 cloud',
        scroller: 'body',
        start: 'top 0',
        end: 'top -200%',
        scrub: 2,
        pin: true
    }
});
// =========== Page-2 =================
gsap.to('#page2 h2', {
    transform: 'scale(2)',
    filter: 'blur(2px)',
    opacity: 0,
    color: 'rgb(255, 196, 0)',
    scrollTrigger: {
        trigger: '#page2',
        scroller: 'body',
        start: 'top 0',
        end: 'top -100%',
        scrub: 2,
        pin: true
    }
});

// =========== Page-3 =================
gsap.from('#page3 .img-wrp', {
    transform: 'scale(2)',
    filter: 'blur(2px)',
    opacity: 0,
    scrollTrigger: {
        trigger: '#page3',
        scroller: 'body',
        start: 'top 0',
        end: 'top -100%',
        scrub: 2,
        pin: true
    }
});


// =========== Page-4 =================
gsap.from('.page-4-img-wrp .slide', {
    transform: 'translateY(200px)',
    opacity: 0.4,
    scrollTrigger: {
        trigger: '.page-4-img-wrp ',
        scroller: 'body',
        start: 'top 0',
        end: 'top -100%',
        scrub: 4,
        pin: true
    }
});
