/*  JavaScript Examples, EECS 1012 Fall 2018
   (CC) Michael S. Brown
	 Note that multiple line comments can this
	 type of comment */

/* declare a function named myFunction() */
window.onload = function() {
 var b  = document.getElementById("myButton");
 b.onclick = myFunction;
}

function myFunction() {
	var p = document.getElementById("myP");
	p.style.backgroundColor = "blue";  /* modify background color */
	p.style.fontFamily = "monospace";  /* change font family */
	p.style.color = "red";						 /* change text color */
	p.style.fontSize = "200%";				 /* change fontSize */
}
