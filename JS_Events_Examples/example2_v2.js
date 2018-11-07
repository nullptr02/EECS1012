window.onload = function() {
  var buttons = document.getElementsByTagName("input");
  for(var i=0; i < buttons.length; i++)
    buttons[i].onclick = processDucks;
}

function processDucks() {
	alert(this.value + " is checked!");
}
