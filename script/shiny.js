let checkboxValue = "on";
let checkbox = document.querySelector(".checkbox");
checkbox.addEventListener("click", checkValue);
let body = document.querySelector("body");
let couleurbouton1 = document.querySelector(".tryitfree");
let couleurbouton2 = document.querySelector(".gsff");
let couleurbouton3 = document.querySelector(".boutongetstarted");
let couleurbouton4 = document.querySelector(".boutonpopup");

let couleurfond = document.querySelector("header");

let couleurshadow1 = document.querySelector(".flex");
let couleurshadow2 = document.querySelector(".reverse");
let couleurshadow3 = document.querySelector(".flex3");
let couleurshadow4 = document.querySelector(".blocksurfooter");

let couleurborder1 = document.querySelector(".popup");
let couleurborder2 = document.querySelector(".icone");
let couleurborder3 = document.querySelector(".icone2");
let couleurborder4 = document.querySelector(".icone3");
let couleurborder5 = document.querySelector(".articleMain1");
let couleurborder6 = document.querySelector(".articleMain2");
let couleurborder7 = document.querySelector(".articleMain3");

let boutonformman1 = document.getElementById("man");
let boutonformman2 = document.getElementById("Woman");
let boutonformman3 = document.getElementById("Other");
let boutonformman4 = document.getElementById("noanswer");
let boutonformman5 = document.getElementById("friends");
let boutonformman6 = document.getElementById("work");
let boutonformman7 = document.getElementById("lonely");
let boutonformman8 = document.getElementById("passions");

let nyancat = document.querySelector(".nyan");
let nyancatpetit = document.querySelector(".nyanpetit");

function checkValue() {
  if (checkboxValue === "on") {
    body.classList.add("cursorstar");
    couleurbouton1.classList.add("star");
    couleurbouton2.classList.add("star");
    couleurbouton3.classList.add("star");
    couleurbouton4.classList.add("star");

    couleurbouton1.classList.add("shinyboutton");
    couleurbouton2.classList.add("shinyboutton");
    couleurbouton3.classList.add("shinyboutton");
    couleurbouton4.classList.add("shinyboutton");

    couleurfond.classList.add("shinybfond");

    couleurshadow1.classList.add("shinyshadow");
    couleurshadow2.classList.add("shinyshadow");
    couleurshadow3.classList.add("shinyshadow");
    couleurshadow4.classList.add("shinyshadow");

    couleurborder1.classList.add("shinyborder");
    couleurborder2.classList.add("shinyborder");
    couleurborder3.classList.add("shinyborder");
    couleurborder4.classList.add("shinyborder");
    couleurborder5.classList.add("shinyborder");
    couleurborder6.classList.add("shinyborder");
    couleurborder7.classList.add("shinyborder");

    boutonformman1.classList.add("shinyboutonform");
    boutonformman2.classList.add("shinyboutonform");
    boutonformman3.classList.add("shinyboutonform");
    boutonformman4.classList.add("shinyboutonform");
    boutonformman5.classList.add("shinyboutonform");
    boutonformman6.classList.add("shinyboutonform");
    boutonformman7.classList.add("shinyboutonform");
    boutonformman8.classList.add("shinyboutonform");

    nyancat.classList.add("nyanmouv");
    nyancatpetit.classList.add("nyanmouv2");

    checkboxValue = "off";
  } else {
    body.classList.remove("cursorstar");
    couleurbouton1.classList.remove("star");
    couleurbouton2.classList.remove("star");
    couleurbouton3.classList.remove("star");
    couleurbouton4.classList.remove("star");

    couleurbouton1.classList.remove("shinyboutton");
    couleurbouton2.classList.remove("shinyboutton");
    couleurbouton3.classList.remove("shinyboutton");
    couleurbouton4.classList.remove("shinyboutton");

    couleurfond.classList.remove("shinybfond");

    couleurshadow1.classList.remove("shinyshadow");
    couleurshadow2.classList.remove("shinyshadow");
    couleurshadow3.classList.remove("shinyshadow");
    couleurshadow4.classList.remove("shinyshadow");

    couleurborder1.classList.remove("shinyborder");
    couleurborder2.classList.remove("shinyborder");
    couleurborder3.classList.remove("shinyborder");
    couleurborder4.classList.remove("shinyborder");
    couleurborder5.classList.remove("shinyborder");
    couleurborder6.classList.remove("shinyborder");
    couleurborder7.classList.remove("shinyborder");

    boutonformman1.classList.remove("shinyboutonform");
    boutonformman2.classList.remove("shinyboutonform");
    boutonformman3.classList.remove("shinyboutonform");
    boutonformman4.classList.remove("shinyboutonform");
    boutonformman5.classList.remove("shinyboutonform");
    boutonformman6.classList.remove("shinyboutonform");
    boutonformman7.classList.remove("shinyboutonform");
    boutonformman8.classList.remove("shinyboutonform");

    nyancat.classList.remove("nyanmouv");
    nyancatpetit.classList.remove("nyanmouv2");

    checkboxValue = "on";
  }
}
