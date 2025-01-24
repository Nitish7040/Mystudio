// console.log("hello console");

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true 
});

function page4animation(){
    var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-img")

  elemC.addEventListener("mouseenter",()=>{
      fixed.style.display = "block"
  } )

  elemC.addEventListener("mouseleave",()=>{
    fixed.style.display = "none"
} )

var elems = document.querySelectorAll(".elem")
// console.log(elems);
elems.forEach((e)=>{
    // console.log(e);
    e.addEventListener("mouseenter" , ()=>{
        var img= e.getAttribute("data-image")
        // console.log(img);
        fixed.style.backgroundImage = `url(${img})`
        
    })
    
})

}
// swipper script code

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}

function loaderanimation(){

var loader = document.querySelector("#loader") 
    setTimeout(function(){
     // console.log("hello");
      loader.style.top = "-100%"  
            
         },4500)
}

swiperAnimation()
page4animation()
loaderanimation()