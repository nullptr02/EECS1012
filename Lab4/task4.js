/* Task4.js - Add your Java Script Code Here */
function myFunction() {
  var numOne = Math.floor(Math.random() * 6) + 1;
  var numTwo = Math.floor(Math.random() * 6) + 1;

  if (numOne == numTwo) {
    alert("DOUBLES!");
  } else {
    rollDice.innerHTML = "Dice rolls are " + "\"" + numOne + "\"" + " " + "\"" + numTwo + "\"";
  }
}