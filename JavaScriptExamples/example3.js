/*  JavaScript Examples, EECS 1012 Fall 2018
   (CC) Michael S. Brown
	 Note that multiple line comments can this
	 type of comment */

/* declare a function named myRandom that returns */
/* a number between 0 and 3 -- see notes why.
  This function will be called by our other function myFunction() */
function myRandom()
{
		/* get a random number - multiple by 4, take the floor of the number */
		var num = Math.floor( Math.random() * 4 );
		return num;
}

/* my function is called from the HTML */
function myFunction() {
	/* create an array with greetings */
	var greetings = ["Hello", "Yo", "Hi", "Welcome"];
	/* variable selectOne is set to whatever function myRandom() returns */
	/* see definition of myRandom above */
	var selectOne = myRandom();
	/* get the p element using the document object */
	var p = document.getElementById("mydata");
	/* set the HTML of the paragraph element */
	/* we access the array greetings with a random number 0 to 3 */
	/* greetings is an array.  selectOne is a variable - we assigned it
	   it a number between 0-3 */
	p.innerHTML = greetings[ selectOne ];
}
