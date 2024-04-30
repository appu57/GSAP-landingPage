TweenMax.from(".left-container",2,{  //moves container left-conatiner from width 0 to mentioned width in css
    width:"0",
    ease:Expo.easeInOut
});

TweenMax.from(".right-container",2,{  //moves container right-conatiner from width 0 
    delay:0.5,
    opacity:"0",
})

TweenMax.from(".fourth-container",2,{  //moves container right-conatiner from width 0 
   delay:1,
   x:-20,  //comes from left of x-axis
   opacity:"0",
   ease:Expo.easeInOut
})

TweenMax.from(".second-container",2,{  //moves container right-conatiner from width 0 
    delay:1,
    opacity:"0",
    y:-20,       //moves up from -20px since -20px in y axis is below
    ease:Expo.easeInOut
 })

 //TweenMax is basically the styles we want the container to have when page reloads before the container takes the style written in style.css and tweenMax styles are converted style.css styles


//GSAP also works the same using from indicates from .js css to style .css and using to indicates style.css to .js css
// gsap.from(".left-container",{
//     width:"0",
//     delay:0.5,
// })

// gsap.from(".right-container",{
//     opacity:"0",
//     delay:1
// })

// gsap.fromTo(".fourth-container",{
//     y:-20,
//     opacity:"0"
// },
// {
//     y:0,
//     opacity:"1",
//     delay:1
// })