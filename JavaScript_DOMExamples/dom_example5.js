window.onload = function() {  /* see dom_example3 and 4 for explanation */
  var button = document.getElementsByTagName("button");
  button[0].onclick = insertItem;
}

function insertItem()
{
  var todoList = document.getElementById("list"); /* get list element */
  var textToAdd = document.getElementById("textToAdd"); /* get text input element */

  if (textToAdd.value != "")	/* text value isn't empty */
  {
    var newLi = document.createElement("li");  /* create a new li element */
    newLi.innerHTML = textToAdd.value;	   /* set the innerHTML to the text input value */
    todoList.appendChild(newLi);	      /* add this to the DOM tree */
  				      /* append this newLi to the list object.  this adds it to the webpage! */
  }
}
