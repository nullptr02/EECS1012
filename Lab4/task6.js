/* Task6.js - Add your Java Script Code Here */


var i = 20;

function myFunction() {
  countDown.innerHTML = i--;
  console.log(i);
  if (i <= 0) {
    countDown.innerHTML = "BOOM";
  }
}