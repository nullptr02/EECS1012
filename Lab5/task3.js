/* Task3: write your code here */



window.onload = pageLoad;

function pageLoad() {
  var button = document.getElementById('myButton');
  button.onclick = myFunction;
}



function myFunction() {
  var p = document.getElementById('myButton');

  if (p.innerHTML == 'Click to highlight') {
    p.innerHTML = 'Click to unhighlight';
    for (var i = 0; i < document.getElementsByTagName('P').length; i++) {

      if (i % 2 == 0) {
        document.getElementsByTagName('P')[i].style.backgroundColor = "yellow";
      } else {
        document.getElementsByTagName('P')[i].style.backgroundColor = "red";
      }
    }

  } else {
    p.innerHTML = 'Click to highlight';
    for (var i = 0; i < document.getElementsByTagName('P').length; i++) {
      document.getElementsByTagName('P')[i].style.backgroundColor = "";
    }

  }
}