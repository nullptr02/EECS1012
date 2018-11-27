/* Practice Lab Test #2, Task 2  (version 1)*/
/* EECS1012 - York University  */
/* Michael S Brown (CC) */

/* In this example, I'm going to access all buttons using the getElementsByTagName */
window.onload = function() {
  var buttons = document.getElementsByTagName("button"); /* this returns an array of all buttons */
  for(var i=0; i < buttons.length; i++) /* loop through the array and set each button to the same */
    buttons[i].onclick = pressed; /* function pressed */
}

/* Pressed function */
function pressed()
{
  /* if the button pressed innerHTML is not "Delete" then it is a number button */
  if (this.innerHTML != "Delete")
  {
    /* Set the innerHTML of the entry to itself concantenated with this button's HTML */
    $("entry").innerHTML = $("entry").innerHTML + this.innerHTML;
  }
  else {
    /* Otherwise, the delete button was pressed*/
    /* retrieve the text in the entry text field */
    var s = $("entry").innerHTML;
    /* if it isn't empty */
    if (s != "")
    {
      /* This deletes one character -- see PDF */
      $("entry").innerHTML = s.slice(0,-1);
    }
  }
}
