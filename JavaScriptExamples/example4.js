/*  JavaScript Examples, EECS 1012 Fall 2018
   (CC) Michael S. Brown
	 Note that multiple line comments can this
	 type of comment */

/* this function takes a parameter "num" */
/* it computes the 0+1+..+num  */
/* This shows example of for loops and string concatenation */
function myFunction(num)
{
	var sum = 0;  /* set sum to 0 */
	var outputString = "Adding 0";   /* set our string to Add 0 */
	var p = document.getElementById("mydata"); /* get the paragraph element */

	for(var i=1; i <= num; i++) /* start with i=1, loop unti i is equal to num */
	{
		sum = sum + i; /* add i to sum. store result back in sum */
		outputString = outputString + "+" + i; /* this is a string.  */
		/* each time we loop, the we add to the outputString */
		/* first loop "Adding 0" + "+" + "1" (i is converted to a string)
		  second loop "Adding 0+1" + "+" + "2"
			third loop "Adding 0+1+2" + "+" + "3"... */
	}
	/* we finally change paragraph innerHTML to the following */
	p.innerHTML = outputString + "= " + sum;
}
