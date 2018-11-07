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
  /* get the address element */
  var addressDiv = document.getElementById("address");
  /* using the address object (not document object), get all paragraphs */
  var addrParas = addressDiv.getElementsByTagName("p");
  for (var i = 0; i < addrParas.length; i++) {
  	addrParas[i].style.backgroundColor = "yellow";
  }
}
