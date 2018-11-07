/*  JavaScript Examples, EECS 1012 Fall 2018
   (CC) Michael S. Brown
	 Note that multiple line comments can this
	 type of comment */

/* This function gets the current day of the week using a Date object.
   If the day is equal to (2) that means it is Tuesday.
	 We also declare an array with the days names */
function myFunction()
{
	var p = document.getElementById("mydata"); /* get paragraph */
	/* create an array of names */
	var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	var myDate = new Date(); /* gets a new Date object */
	var day = myDate.getDay(); /* gets the day from the Date object */
	// recall day is 0=sunday, monday=1, so on
	if (day == 2)
	{
		p.innerHTML = "Today is Tuesday!";
	}
	else {
		p.innerHTML = "Today is NOT Tuesday!";
	}
	/* notice the trick here?  The += conacentates the string
	   "<br> Today is" + array of names with an index based on the day */
	/* Note that the <br> is HTML.  So the innerHTML will interpret this as a break */
	p.innerHTML += "<br> Today is " + dayNames[day];
}
