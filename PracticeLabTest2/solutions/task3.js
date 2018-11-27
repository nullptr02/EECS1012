/* Practice Lab Test #2, Task 3  */
/* EECS1012 - York University  */

/* On click, setup the clicks.  */
window.onload = function() {
  $("add").onclick = addItem;  /* you can also do $("add").observe("click", addItem); */
  $("delete").onclick = deleteLast;
  $("deleteItem").onclick = deleteItem;
  $("input").onclick = clearText;
}

/* If the input text field was clicked, we sets its value (content) to "" */
/* This clears the content */
function clearText()
{
  this.value = "";
}

/* If addItem is clicked */
function addItem()
{
  if ($("input").value != "")  /* make sure "input" text field is not empty */
  {
    var li = document.createElement("li"); /* create a "li" */
    li.innerHTML = $("input").value; /* change its innerHTML to the input's value */
    $("list").appendChild(li);  /* append this child to the list */
    /* alternative without prototype -
       var list = document.getElementById("list");
       list.appendChild(li);
       */
  }
}

/* Delete the last itme */
function deleteLast()
{
  var allLi = $("list").getElementsByTagName("li"); /* gets an array of all li from list */
  if (allLi.length > 0) /* if the array has items */
  {
    $("list").removeChild(allLi[allLi.length-1]); /* remove the last item */
    /* why?  because allLi.length-1 is the last item in the array */
  }
}

/* delete Item */
function deleteItem()
{
  /* get the text value of "item" */
  var itemText = $("item").value; /* this is a string */
  var index = parseInt(itemText); /* convert the string to an integer */
  var allLi = $("list").getElementsByTagName("li"); /* get all li items as an array */

  /* this checks to see if index is <= to number of li items */
  /* this could be broken if someone entered -1 */
  if (index <= allLi.length)
  {
    $("list").removeChild(allLi[index-1]);
  }
}
