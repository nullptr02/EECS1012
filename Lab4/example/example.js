/* example.js */

/* create a random function. Since we will need to call random
several times, maybe easier to make a random number function.
In this case, we pass it num.  The function will return a
random number between 0 and (num-1).  See notes for why */
function getRandom(num)
{
  return Math.floor(Math.random()*num 
}

/* This function generates a name and changes the innerHTML of the
   paragraph */
function generateName()
{
  /* Feel free to add more names */
  var firstPart = ["Abdel", "Sam", "Mic", "Zhe", "Ali", "Raju", "Clar", "Fra", "Bil"];
  var secondPart = ["lah", "ri", "rial", "ek", "jura", "erst", "", "bert", "lee", ""];
  var surName = ["Hasman", "Zhang", "Kamel", "Ahn", "Vu", "Alter", "Kim", "Clark", "Sun", "Trump"];
  var p = document.getElementById("mydata");
  var len = 0; // we use this to get the size of the arrays
  var i = 0;   // an index variable - very common to use i, j, k
  var name = ""; // our name we want to generate - set it to empty string

  /* Get the first part of the name */
  // get the number of element (length) of firstPart array
  len = firstPart.length;
  i = getRandom(len);
  name = firstPart[i]; // name now equals one of the elements in array firstPart

  /* Get the second part of the name */
  len = secondPart.length;
  i = getRandom(len);
  name = name + secondPart[i]; // name now equals one of the elements in array firstPart

  /* Get the surname */
  len = surName.length;
  i = getRandom(len);
  name = name + " " + surName[i]; // name is name + a space + surface surnName

  /* if the surName[i] is equal to "Trump" */
  if (surName[i]=="Trump")
  {
    /* add the word president before the name */
    p.innerHTML = "President " + name;
  }
  else {
    /* else, just use the name */
    p.innerHTML = name;
  }
}
