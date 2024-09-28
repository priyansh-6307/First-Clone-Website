const scroll = new LocomotiveScroll({
    el: document.querySelector('#uppermain'),
    smooth: true
});







function pehlaanimation(){
    let t1=gsap.timeline();
    t1.from("#nav",{
        opacity:0,
        duration:0.7,
        y:'10',
        ease: "power1.inOut"
    })
    .to(".productanimation .element",{
        duration:0.7,
        y:0,
        stagger:.2,
      ease: "power1.inOut"
    })
    .from(".herokafooter",{
        y:-10,
        opacity:0,
        duration:.7,
        ease: "power1.inOut"

    })
}

function mousecirclefollower(){
    window.addEventListener("mousemove", function(e){
        document.querySelector(".mousecircle").style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
}
mousecirclefollower();
pehlaanimation()


document.querySelectorAll(".elem").forEach(function (elem){
    elem.addEventListener("mouseover",(e)=>{
       let diff= e.clientY-elem.getBoundingClientRect().top
       console.log(diff)
       gsap.to(elem.querySelector("img"),{
        opacity:1,
          ease: "power3.inOut",
          top:diff,
          left:e.clientX,
          rotate:5,
          borderRadius:10
          
       })
    })
})

document.querySelectorAll(".elem").forEach(function (elem){
    elem.addEventListener("mouseout",(e)=>{

       gsap.to(elem.querySelector("img"),{
        opacity:0,
          ease: "power3.inOut",
         
          
       })
    })
})

const slider = document.querySelector('.image-slider');

// Clone the images to create a seamless loop
const images = slider.querySelectorAll('img');
images.forEach((img) => {
  let clone = img.cloneNode(true); // Clone each image
  slider.appendChild(clone); // Append the cloned image to the slider
});

// GSAP animation for infinite scroll
gsap.to(".image-slider", {
  x: `-=${slider.offsetWidth / 2}`, // Move by half the total width (since we cloned images)
  repeat: -10, // Infinite repeat
  duration: 20, // Speed of the animation
  ease: "linear", // Keep the speed linear
  modifiers: {
    x: (x) => `${parseFloat(x) % (slider.offsetWidth / 2)}px`, // Reset the animation after half the width
  }
});