window.onload = function() {
  var buttons = document.getElementsByTagName("input");
  for(var i=0; i < buttons.length; i++)
    buttons[i].onclick = processDucks;
}

function processDucks() {
	if ($("huey").checked) {
		alert("Huey is checked!");
	} else if ($("dewey").checked) {
		alert("Dewey is checked!");
	} else {
		alert("Louie is checked!");
	}
}
