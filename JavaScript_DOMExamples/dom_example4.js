window.onload = function() {
  var button = document.getElementsByTagName("button");
  /* button is an array, but it only has one element since there is only one
     button */
  /* here I'm setting the first [0] (and only) button to have its onclick
     event set to "deleteListItem function */
  button[0].onclick = deleteListItem;
}

function deleteListItem()
{
  var mylist = document.getElementById("mylist"); /* get the list element */
  var pars = mylist.getElementsByTagName("li");   /* in the list element, get all li elements */
  /* pars will be an array of all li elements */

  /* if pars (array) length is greater than 0 */
  if (pars.length > 0)
  {
    mylist.removeChild(pars[0]); /* remove from the list, the first li element in the array */
    /* the command above will remove the element from the HTML page */
  }
}
