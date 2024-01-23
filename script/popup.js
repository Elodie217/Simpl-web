let bouton = document.querySelector(".clickpopup");
let bouton2 = document.querySelector(".gsff");
let bouton3 = document.querySelector(".boutongetstarted");
let boutonfermer = document.querySelector(".logofermeture");

let popup = document.querySelector(".popup");
let flou = document.querySelector(".flou");

bouton.addEventListener("click", popupaffichage);
bouton2.addEventListener("click", popupaffichage);
bouton3.addEventListener("click", popupaffichage);
boutonfermer.addEventListener("click", popupfermer);

function popupaffichage() {
  popup.classList.remove("visibility");
  flou.classList.remove("visibility");
}
function popupfermer() {
  popup.classList.add("visibility");
  flou.classList.add("visibility");
}
