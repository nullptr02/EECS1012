window.onload = function() {
  var button = document.getElementsByTagName("button");
  /* button is an array, but it only has one element since there is only one
     button */
  /* here I'm setting the first [0] (and only) button to have its onclick
     event set to "changeBackground" function */
  button[0].onclick = changeBackground;
}

function changeBackground()
{
  /* allParas is an array of all DOM elements that are tag <p> */
  var allParas = document.getElementsByTagName("p");

  /* loop through the array and set the CSS backgroundColor to yellow */
  for (var i = 0; i < allParas.length; i++) {
	   allParas[i].style.backgroundColor = "yellow";
   }
}
