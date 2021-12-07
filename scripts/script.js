// JavaScript Document


var toonallesButton = document.querySelector("section:nth-of-type(4) article:nth-of-type(8)>button");

var receptErbij1 = document.querySelector("section:nth-of-type(4) article:nth-of-type(7)")


toonallesButton.addEventListener("click", receptErbij);

function receptErbij(){

receptErbij1.classList.toggle("receptErbij");
}





var leftArrow = document.querySelector("section:nth-of-type(2)>article>img:nth-of-type(1)");
var rightArrow = document.querySelector("section:nth-of-type(2)>article>img:nth-of-type(3)");

var slideTapenade = document.querySelector("section:nth-of-type(2)>article:nth-of-type(1)");
var slideTwee = document.querySelector("section:nth-of-type(2)>article:nth-of-type(2)");

rightArrow.addEventListener("click", volgendeSlide);

function volgendeSlide(){

slideTwee.classList.toggle ("tweedeSlideZichtbaar");
}





/* share items */
var shareButton = document.querySelector("section:nth-of-type(4)>article>img:nth-of-type(1)");
var mediaIconenOntzichtbaar = document.querySelector("section:nth-of-type(4)>article>img:nth-last-child(2n)");

shareButton.addEventListener("click", mediaiconenErbij);

function mediaiconenErbij(){
   mediaIconenOntzichtbaar.classList.toggle("facebookIcon");
}

var deButton = document.querySelector("nav button");

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav = event.target.parentNode;
  deNav.classList.toggle("toonMenu");
}
    