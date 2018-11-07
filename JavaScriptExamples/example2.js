/*  JavaScript Examples, EECS 1012 Fall 2018
   (CC) Michael S. Brown
	 Note that multiple line comments can this
	 type of comment */

/* Following example tests the following concepts */
/* Variables, Math random, if statement */
function myFunction()
{
	var num = Math.random(); /* generate a random number between 0-1 */
	var p = document.getElementById("mydata");

	if (num < 0.5) /* if number is less than 0.5 */
	{
		p.innerHTML = num + " is less than 0.5 "; /* set paragraph's innerHTML to this */
	}
	else /* if not less than 0.5 - do this code */
	{
		p.innerHTML = num + " is equal to or large than 0.5";
	}
}
