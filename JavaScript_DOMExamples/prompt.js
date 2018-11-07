/*  JavaScript Examples, EECS 1012 Fall 2018
   (CC) Michael S. Brown
	 Note that multiple line comments can this
	 type of comment */

/* declare a function named myFunction() */

function confirmPopup() {
	/* causes the browser to show an alert box */
	var p = document.getElementById("firstP");
	var result = null;

	result = confirm("Text for your confirm popup");
	p.innerHTML = "Result from confirm box = " + result;
}

function promptPopup() {
	/* causes the browser to show an alert box */
	var p = document.getElementById("secondP");
	var result = null;

	result = prompt("Text for your prompt popup");
	p.innerHTML = "Result from confirm box = " + result;
}
