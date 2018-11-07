/*  JavaScript Examples, EECS 1012 Fall 2018
   (CC) Michael S. Brown
	 Note that multiple line comments can this
	 type of comment */

/* Set the onload event handler to the function named pageLoad.
   Why don't we use pageLoad().  If we have the (), it will actually
   call the function in the statement.  Instead, the statement is just
  setting the name of the function, so when the event does occur, it will
   then call the function with that name.  */
window.onload = pageLoad;

/* When the page is done loading . . and all the elements created, this function is called.
   This function sets the onclick event to the function with name myFunction.  Again, no (). */
function pageLoad() {
 var b  = document.getElementById("myButton");
 b.onclick = myFunction;
}

/* Changes the style. */
function myFunction() {
	var p = document.getElementById("myP");
	p.style.backgroundColor = "blue";  /* modify background color */
	p.style.fontFamily = "monospace";  /* change font family */
	p.style.color = "red";						 /* change text color */
	p.style.fontSize = "200%";				 /* change fontSize */
}
