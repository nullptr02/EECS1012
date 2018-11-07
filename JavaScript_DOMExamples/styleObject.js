/*  JavaScript Examples, EECS 1012 Fall 2018
   (CC) Michael S. Brown
	 Note that multiple line comments can this
	 type of comment */

/* declare a function named myFunction() */
function myFunction() {
	var p = document.getElementById("myP");
	p.style.backgroundColor = "blue";  /* modify background color */
	p.style.fontFamily = "monospace";  /* change font family */
	p.style.color = "red";						 /* change text color */
	p.style.fontSize = "200%";				 /* change fontSize */
}

function myFunction2() {
	var p = document.getElementById("myP2");
	var pStyle = p.style; /* pStyle now is the style object for paragraph p */
	pStyle.backgroundColor = "black";  /* modify background color */
	pStyle.fontFamily = "sans-serif";  /* change font family */
	pStyle.color = "white";						 /* change text color */
	pStyle.fontSize = "3.0em";				 /* change fontSize */
}
