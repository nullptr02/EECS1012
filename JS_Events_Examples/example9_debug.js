/* Global variables */
var oldX = null; /* keeps track of last mouse position */
var oldY = null;
var moving = false; /* is the card moving or not? */

window.onload = function() {
  $("card").observe("mousedown", cardMouseDown);
  $("card").observe("mousemove", cardMouseMove);
  $("card").observe("mouseup", cardMouseUp);
  $("card").style.left = 0;   /* sets the position of the card */
  $("card").style.top = 0;    /* this is part of its CSS */
                              /* the position is "abolute" with respect to its *
                              /* container div */
};
// Called when the user presses down the mouse button.
// Moves the clicked square to the top and starts moving it.
function cardMouseDown(event) {
  moving = true;
  this.style.backgroundColor = "lightgrey";
  $("card").style.left = (event.pointerX() - 125) + "px";
  $("card").style.top = (event.pointerY() - 70)  + "px";
}

// Called when the user lifts the mouse button.  Stops dragging.
function cardMouseUp(event) {
  moving = false;
  this.style.backgroundColor = "white";
}

// Called when the user moves the mouse.  Drags a square if
// the mouse button is being held down.
function cardMouseMove(event) {
  if (moving)
  {
    this.style.background = "lightgrey";
    var x = (event.pointerX() - 125);
    var y = (event.pointerY() - 70);

    $("card").style.left = x + "px";
    $("card").style.top = y  + "px";

    /* Some debugging code to help you understand */
    $("hi").innerHTML = " Info ";
    $("hi").innerHTML+= "<br> eventPointer=(" + event.pointerX() + "," + event.pointerY() + ")";
    $("hi").innerHTML+= "<br> x, y = (" + x + "," + y + ")";
    $("hi").innerHTML+= "<br> Card left and top = " + $("card").style.left + " " + $("card").style.top;


  }
}
