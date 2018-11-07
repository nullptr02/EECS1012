window.onload = function() {
  $("target").observe("keydown", keyPress);
};

function keyPress(event) {
  $("target").innerHTML = "";
/*  $("target").stopObserving("keydown"); */
}
