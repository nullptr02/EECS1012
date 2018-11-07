/*  JavaScript Examples, EECS 1012 Fall 2018
   (CC) Michael S. Brown
	 Note that multiple line comments can this
	 type of comment */

/* declare a function named myFunction() */
var firstTime=true;

function myFunction() {
	var b = document.getElementById("myButton");

	if (firstTime)
	{
		b.innerHTML = "Click Again to Really Refresh";
		firstTime = false;
	} else
	{
		/* calls location refresh method */
		/* this will refresh the page */
		location.reload();
		firstTime = true;
	}
}
