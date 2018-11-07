window.onload = function() {
  $("target").observe("mousemove", showCoords);
};

function showCoords(event) {
  $("target").innerHTML =
      "offset: (" + event.offsetX + ", " + event.offsetY + ")\n"
    + "screen : (" + event.screenX + ", " + event.screenY + ")\n"
    + "pointer : (" + event.pointerX() + ", " + event.pointerY() + ")";
}
