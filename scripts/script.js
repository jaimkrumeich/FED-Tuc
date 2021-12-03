// JavaScript Document


var toonallesButton = document.querySelector("section:nth-of-type(4) article:nth-of-type(8)>button");

var receptErbij1 = document.querySelector("section:nth-of-type(4) article:nth-of-type(7)").style.display = "none";

var leftArrow = document.querySelector("section:nth-of-type(2)>article>img:nth-of-type(1)");
var rightArrow = document.querySelector("section:nth-of-type(2)>article>img:nth-of-type(3)");

var slideTapenade = document.querySelector("section:nth-of-type(2)>article:nth-of-type(1)");
var slideTwee = document.querySelector("section:nth-of-type(2)>article:nth-of-type(2)").style.display = "none";

var shareButton = document.querySelector("section:nth-of-type(4)>article:nth-child(1)");
var mediaIconen = document.querySelector("section:nth-of-type(4)>article>img:nth-of-type(2)").style.display= "none";


toonallesButton.addEventListener("click", receptErbij);

function receptErbij(){

receptErbij1 = document.querySelector("section:nth-of-type(4) article:nth-of-type(7)").style.display = "block";
}



// rightArrow.addEventListener("click", volgendeSlide);


// function volgendeSlide(){
// slideTapenade.style.display = "none";
// slideTwee = document.querySelector("section:nth-of-type(2)>article:nth-of-type(2)").style.display="block";
// }


/* share items */

shareButton.addEventListener("click", mediaErbij);

function mediaErbij(){
    mediaIconen = document.querySelector("section:nth-of-type(4)>article>img:nth-of-type(2)").style.display= "block";
}

// var deButton = document.querySelector("h2");

// function doeFormNeerEnOp(){
// 	let hetFormulier = document.querySelector("form");
// 	hetFormulier.classList.toggle("toonForm");
// }

// deButton.addEventListener("click", doeFormNeerEnOp);
    