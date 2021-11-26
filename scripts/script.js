// JavaScript Document

var button = document.querySelector("section:nth-of-type(4) article:nth-of-type(6)");
var icon = document.querySelector("section:nth-of-type(4) article:nth-of-type(6) img")
var toonallesButton = document.querySelector("section:nth-of-type(4) article:nth-of-type(6) button");

var receptErbij1 = document.querySelector("section:nth-of-type(4) article:nth-of-type(5)").style.display = "none";

var leftArrow = document.querySelector("section:nth-of-type(2)>article>img:nth-of-type(1)");
var rightArrow = document.querySelector("section:nth-of-type(2)>article>img:nth-of-type(3)");

var slideTapenade = document.querySelector("section:nth-of-type(2)>article:nth-of-type(1)");
var slideTwee = document.querySelector("section:nth-of-type(2)>article:nth-of-type(2)").style.display = "none";





toonallesButton.addEventListener("click", buttonVeranderd);


function buttonVeranderd(){

toonallesButton.classList.add("toonalles");
icon.classList.add("tonen")
receptErbij1 = document.querySelector("section:nth-of-type(4) article:nth-of-type(5)").style.display = "block"
}

// receptErbij1 = document.querySelector("section:nth-of-type(4) article:nth-of-type(5)").style.display = "block"
// button = document.querySelector("section:nth-of-type(4) article:nth-of-type(6)").style.display = "none";

rightArrow.addEventListener("click", volgendeSlide);


function volgendeSlide(){
slideTapenade.style.display = "none";
slideTwee = document.querySelector("section:nth-of-type(2)>article:nth-of-type(2)").style.display="block";
}

    