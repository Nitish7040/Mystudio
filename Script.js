// console.log("hello console");

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true 
});

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
