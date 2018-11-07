/* Unobtrusive JS code */
window.onload = function ()
{
  var myButton = document.getElementById("button");
  myButton.onclick = walk;
}

/* this visits all the children of an element */
function walk()
{
  /* get the divElement */
  var divElement = document.getElementById("mydiv");
  var childElements = divElement.children;  /* .children property is an array */
                                            /* if you had no children, this would be an null array */

  alert("mydiv element has " + childElements.length + " children");
  for(var i=0; i < childElements.length; i++)
  {
    alert(childElements[i].innerHTML); /* creates an alert with the innerHTML from each child */
  }
}
