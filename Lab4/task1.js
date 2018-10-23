/* Task1.js - Add your Java Script Code Here */


function myFunction() {
  var p = document.getElementById("mydata");

  var randomNumber = Math.random();
  var condition = 0.5;

  console.log(randomNumber);

  if (randomNumber > condition) {

    p.innerHTML = "YES";

  } else {
    p.innerHTML = "NO";

  }

  // set p.innerHTML equal to YES or NO

}