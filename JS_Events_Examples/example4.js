window.onload = function() {
  $("region").observe("mouseover", enterRegion);
  $("region").observe("mouseout", exitRegion);
}

function enterRegion () {

  $("region").innerHTML = "Mouse";

}

function exitRegion () {
  $("region").innerHTML = " Mouse exited! ";
}
