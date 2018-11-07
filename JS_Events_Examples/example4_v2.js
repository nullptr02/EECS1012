window.onload = function() {
  $("region").observe("mouseover", mouseEvent );
  $("region").observe("mouseout", mouseEvent );
}

function mouseEvent (event) {
  if (event.type == "mouseover")   {
    this.innerHTML = " Mouse entered! ";
  }
  else {
	 this.innerHTML = "Mouse exited! ";
  }
}
