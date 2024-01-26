let clickCount = 0;
let isMoving = true;

console.log(isMoving);
console.log(clickCount);

function moveButton() {
  console.log("Je suis dans la function moveButton");
  let button = document.querySelector(".logofermeture");
  let popup = document.querySelector(".popup");

  console.log(button);
  console.log(clickCount);

  if (isMoving && clickCount <= 5) {
    console.log("je suis à TRUE");
    let positions = [
      { top: 0, left: -1850 },
      { top: 1550, left: -1850 },
      { top: 1550, left: 0 },
      { top: 0, left: 0 },
    ];

    let nouvellePosition = positions[clickCount];
    console.log(nouvellePosition.left);
    console.log(nouvellePosition.top);
    button.style.transform = `translate(${nouvellePosition.left}%, ${nouvellePosition.top}%)`;

    clickCount++;

    if (clickCount === 4) {
      isMoving = true;
      popupfermer();
      clickCount = 0;
    }
  }
}
