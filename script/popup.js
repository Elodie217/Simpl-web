//Pop - Up Inscription //
let bouton = document.querySelector(".clickpopup");
let bouton2 = document.querySelector(".gsff");
let bouton3 = document.querySelector(".boutongetstarted");
let boutonfermer = document.querySelector(".logofermeture");

let popup = document.querySelector(".popup");
let flou = document.querySelector(".flou");

bouton.addEventListener("click", popupaffichage);
bouton2.addEventListener("click", popupaffichage);
bouton3.addEventListener("click", popupaffichage);
// boutonfermer.addEventListener("click", popupfermer);

function popupaffichage() {
  popup.classList.remove("visibility");
  flou.classList.remove("visibility");
}
function popupfermer() {
  popup.classList.add("visibility");
  flou.classList.add("visibility");
}

// Pop - up Main //

// Je définis mes valeurs pour mes 3 articles à cliquer pour zoom
let article1 = document.querySelector(".affichage1");
let article2 = document.querySelector(".affichage2");
let article3 = document.querySelector(".affichage3");

//Je définis mes valeurs pour mes 3 articles qui apparaissent zoomer
let articleFlottant1 = document.querySelector(".articleMain1");
let articleFlottant2 = document.querySelector(".articleMain2");
let articleFlottant3 = document.querySelector(".articleMain3");

//Pour mon premier paragraphe
article1.addEventListener("click", articleAffichage1);
articleFlottant1.addEventListener("click", articleFermeture1);

// Pour mon second paragraphe
article2.addEventListener("click", articleAffichage2);
articleFlottant2.addEventListener("click", articleFermeture2);

// Pour mon troisieme paragraphe
article3.addEventListener("click", articleAffichage3);
articleFlottant3.addEventListener("click", articleFermeture3);

function articleAffichage1() {
  articleFlottant1.classList.remove("visibility");
  flou.classList.remove("visibility");
}
function articleAffichage2() {
  articleFlottant2.classList.remove("visibility");
  flou.classList.remove("visibility");
}
function articleAffichage3() {
  articleFlottant3.classList.remove("visibility");
  flou.classList.remove("visibility");
}

function articleFermeture1() {
  articleFlottant1.classList.add("visibility");
  flou.classList.add("visibility");
}
function articleFermeture2() {
  articleFlottant2.classList.add("visibility");
  flou.classList.add("visibility");
}
function articleFermeture3() {
  articleFlottant3.classList.add("visibility");
  flou.classList.add("visibility");
}
