const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");

//  Rolling dice functionality
btnRoll.addEventListener("click", function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // 2. Display dice
  diceEl.src = `images/dice-${dice}.png`;
});
