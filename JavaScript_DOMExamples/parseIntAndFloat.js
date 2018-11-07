/*  JavaScript Examples, EECS 1012 Fall 2018
   (CC) Michael S. Brown
	 Note that multiple line comments can this
	 type of comment */

/* declare a function named myFunction() */

function myFunction() {
	/* causes the browser to show an alert box */
	var p = document.getElementById("myP");

	var numString = "10";
	var number = 10;
	var floatString = "20.5";
	var floatNumber = 10.1;
	var result1 = null;
	var result2 = null;

	/* The line of code below will result in "1010" since numString
	   is a string and JS will consider the + to mean string concatenate */
	result1 = numString + number;
	/* The line of code below will result in 20, because parseInt() will
	   convert the string into an integer */
	result2 = parseInt(numString) + number;
	p.innerHTML = "Integer results <br>";
	p.innerHTML += "Result 1 = " + result1 + "   Result 2 = " + result2;
	p.innerHTML += "<br>";
	/* note use of += . . this means p.innerHTML = p.innerHTML + ... */

	/* The line of code below will result in "20.510.1" since numString
	   is a string and JS will consider the + to mean string concatenate */
	result1 = floatString + floatNumber;
	/* The line of code below will result in 30.6 because parseInt() will
	   convert the string into an integer */
	result2 = parseInt(floatString) + floatNumber;

	p.innerHTML += "Floating point results <br>";
	p.innerHTML += "Result 1 = " + result1 + "   Result 2 = " + result2;
}
