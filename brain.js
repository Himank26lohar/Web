gsap.to("#nav",{  //gsap.to
    // backgroundColor: "#000",
    height: "100px",
    duration: 1,
    scrollTrigger:{ 
        trigger: "#nav",
        scroller:"body",
        // markers: true,
        start: "top -10%",
        end: "top -100%",
        scrub: 0.5
    }
    
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers: true,
        start:"top -30%",
        end:"top -80%",
        scrub: 1
    }
})

gsap.from("#what_i",{
    y:50,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#what",
        scroller:"body",
        // markers:true,
        start:"top 57%",
        end:"top 60%",
        scrub:3,
    }
})