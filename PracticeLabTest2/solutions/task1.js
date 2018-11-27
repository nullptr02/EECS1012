/* Practice Lab Test #2
Task 1
Michael S. Brown, EECS1012 - York University (CC)
*/

/* onload function */
window.onload = function() {

   /* setup all keys */
   $("cardId").observe("keyup", enforceID);
   $("countryCode").observe("keyup", enforceCode);
   $("amount").observe("keyup", enforceAmount);
   $("submitButton").observe("click", submitForm);

   /* set the background to some color */
   clearBackground();
}

function clearBackground()
{
  $("cardId").style.backgroundColor = "mistyrose";
  $("countryCode").style.backgroundColor = "mistyrose";
  $("amount").style.backgroundColor = "mistyrose";
}

/* cardID event on keyup */
function enforceID()
{
  /* REGEX
     - First allow either A or C [AC]
      -Next four numbers [0-9][0-9][0-9][0-9]
      -Last any letter [A-Z]
      Use first and last anchors ^ and $.
      - Allow upper or lower case letters */
  var reg = /^[AC][0-9][0-9][0-9][0-9][A-Z]$/i;
  if (reg.test($(this).value) == true) {
      $(this).style.backgroundColor = "lightblue";
    } else {
      $(this).style.backgroundColor = "mistyrose";
     }
}

/* countryCode event on keyup */
function enforceCode()
{
  /* create an array with the allowed values */
  var codes=["CAN", "MEX", "USA", "EUR", "OTHER"];

  /* get the code typed into the input field */
  var code = this.value;
  code = code.toUpperCase(); /* make it uppercase */
  /* check to see if this is included in the array */
  /* if it is, change the backgroun to lightblue */
  if (codes.includes(code))
  {
      $(this).style.backgroundColor = "lightblue";
  }
  else { /* if false, change to mistyrose (error) */
      $(this).style.backgroundColor = "mistyrose";
  }
}

/* amount event on keyup */
 function enforceAmount()
 {
   /* start with a $ (\$)
      followed by 1 or more number [0-9]+
      followed by 0 or 1 [.]
      followed by 0 or more numbers
      (it is ok to allow $0.000000)
    */
   var reg = /^\$[0-9]+[\.]?[0-9]*$/;

   if (reg.test($(this).value) == true) {
      $(this).style.backgroundColor = "lightblue";
   }
   else {
     $(this).style.backgroundColor = "mistyrose";
   }
 }

/* when button is pressed */
function submitForm()
{
  /* get all input elements . . this returns an array */
  var inputs = document.getElementsByTagName("input");

  /* set a valid variable */
  var valid = true;

  /* loop through all the inputs */
  for(var i=0; i < inputs.length; i++)
  {
    /* I added this console so you can see the values inside
       the array. Note that this only works because we have
       set the values in JS.  */
    console.log(inputs[i].style.backgroundColor);
    /* if an input's backgroundColor is not lightblue */
    if (inputs[i].style.backgroundColor != "lightblue")
    {
      valid = false; /* set the valid to false */
    }
  }

  /* if valid is true, it means all inputs were valid */
  if (valid == true)  {
    /* set button to lightblue */
    /* normally we do a submit here */
    $("submitButton").style.backgroundColor = "lightblue";
  }
  else {
    /* otherwise - set the background to mistyrose (error) */
    $("submitButton").style.backgroundColor = "mistyrose";
  }
}
