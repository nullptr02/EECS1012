/* Lab 6 - Task 4 - Use prototype library. Also, look at the DOM lecture
   to remember how to remove elements  */
/* Provided is simple code to create a box. Modify to create 100 boxes
   at random locations (between 0 and 400) in the container div.

   When a box is clicked, you should delete it from the div.
   When the div has no more children, pop up an alert that says
   "Last one!".

   Also, if the user clicks on the button in the HTML file,  generate
   100 more random oxes. */
window.onload = function() {
  createBoxes();
  $('myButton').observe('click', createBoxes);
}

/* You are given a simple function that creates a single box at a fixed
   location and with one two color options (red, green). Modify this code
   to create 100 boxes with random locations from randing from top (0 to 400)
   and left (0 to 400). Also, have at least 5 different colors.

  When a mouse is moved over a box, have it delete itself from the container
  div.
*/
function createBoxes() {
  var colors = ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#ffffff', '#000000'];
  for (var i = 0; i < 100; i++) {
    var newP = document.createElement("p");
    var top = Math.floor(Math.random() * 400) + "px";
    var left = Math.floor(Math.random() * 400) + "px";
    newP.style.top = top;
    newP.style.left = left;
    newP.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    /* hint - you can add how to handle the mouse over event before appending
       this element */
    newP.observe('mousemove', deleteBoxes);
    $("container").appendChild(newP);
  }
}

function deleteBoxes(event) {
  if ($('container').childNodes.length == 1) {
    alert('Last one');
    $('container').removeChild(this);
    //$('container').stopObserving();
  } else {
    $('container').removeChild(this);
  }
}