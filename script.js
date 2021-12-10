// JavaScript Document
/* nav button */
var deButton = document.querySelector("nav button");

/* article erbij - var button & article */
var toonallesButton = document.querySelector("section:nth-of-type(4) article:nth-of-type(8)>button");
var receptErbij1 = document.querySelector("section:nth-of-type(4) article:nth-of-type(7)")

/* sharing icon */
var shareButton = document.querySelectorAll('section:nth-of-type(4) article img:nth-of-type(1)');

/* slider arrows */
var leftArrow = document.querySelector("section:nth-of-type(2)>article>img:nth-of-type(1)");
var rightArrow = document.querySelector("section:nth-of-type(2)>article>img:nth-of-type(4)");

/* images slider */
var imageTapenade = document.querySelector("section:nth-of-type(2)>article>img:nth-of-type(2)");
var imagetweeOnzichtbaar = document.querySelector("section:nth-of-type(2)>article>img:nth-of-type(3)");
var imagetweeZichtbaar = document.querySelector("section:nth-of-type(2)>article>img:nth-of-type(3).zichtbaar");



/* article erbij doormiddel van click */
toonallesButton.addEventListener("click", receptErbij);

function receptErbij(){

receptErbij1.classList.toggle("receptErbij");
}



/* share icon + Facebook icon - Bron> Robert Spier*/
shareButton.forEach(function(shareButton) {
	/* voeg voor iedere button een event listener toe */
shareButton.addEventListener('click', function(e) {
		e.target.parentNode.querySelector('section:nth-of-type(4) article img:nth-of-type(2)').classList.toggle('facebookIcon');
	})
})



/* Navigatie toggle hamburger menu*/
deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav = event.target.parentNode;
  deNav.classList.toggle("toonMenu");
}





// var leftArrow = document.querySelector("section:nth-of-type(2)>article>img:nth-of-type(1)");
// var rightArrow = document.querySelector("section:nth-of-type(2)>article>img>nth-of-type(2)");

// var slideTapenade = document.querySelector("section:nth-of-type(2)>article:nth-of-type(1)");
// var slideTwee = document.querySelector("section:nth-of-type(2)>article:nth-of-type(2)");

// rightArrow.addEventListener("click", volgendeSlide);

// function volgendeSlide(){
//     // slideTapenade.classList.toggle ("eersteSlideWeg");
// // slideTwee.classList.toggle("tweedeSlideZichtbaar");
// // slideTapenade = event.target.parentNode;
// slideTapenade.classList.toggle("eersteSlideWeg");
// slideTwee.classList.toggle("tweedeSlideZichtbaar");
// }




rightArrow.addEventListener("click", slider);
function slider(){
 imageTapenade.classList.add('zichtbaar');
  // imageTapenade.src ="images/slide2.png";
 
}



    