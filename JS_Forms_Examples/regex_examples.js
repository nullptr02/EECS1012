/* Regular Expressio Example */
window.onload = function() {
  $("b1").observe("click", myFunction1);
  $("b2").observe("click", myFunction2);
  $("b3").observe("click", myFunction3);
  $("b4").observe("click", myFunction4);
  $("b5").observe("click", myFunction5);
  $("b6").observe("click", myFunction6);
}

function myFunction1() {
  var re = /[A-Z]+/i;
  var testString = $("input1").value;

  if (re.test(testString) == true)
  {
    $("result1").innerHTML = "Result: TRUE";
  }
  else {
    $("result1").innerHTML = "Result: FALSE";
  }
}


function myFunction2() {
  var re = /[0-9]+/;
  var testString = $("input2").value;

  if (re.test(testString) == true)
  {
    $("result2").innerHTML = "Result: TRUE";
  }
  else {
    $("result2").innerHTML = "Result: FALSE";
  }
}


function myFunction3() {
  var re = /^[0-9][A-Z]+/i;
  var testString = $("input3").value;

  if (re.test(testString) == true)
  {
    $("result3").innerHTML = "Result: TRUE";
  }
  else {
    $("result3").innerHTML = "Result: FALSE";
  }
}

function myFunction4() {
  var re = /^S[A-Z]*T$/i;
  var testString = $("input4").value;

  if (re.test(testString) == true)
  {
    $("result4").innerHTML = "Result: TRUE";
  }
  else {
    $("result4").innerHTML = "Result: FALSE";
  }
}

function myFunction5() {
  var re = /^[A-Z][0-9][A-Z][0-9][A-Z][0-9]$/;
  var testString = $("input5").value;

  if (re.test(testString) == true)
  {
    $("result5").innerHTML = "Result: TRUE";
  }
  else {
    $("result5").innerHTML = "Result: FALSE";
  }
}

function myFunction6() {
  var reString = $("regexInput").value;
  var re = new RegExp(reString); /* converts a string to a regular expression. */
                                 /* this string shouldn't have the / / */
  var testString = $("input6").value;

  if (re.test(testString) == true)
  {
    $("result6").innerHTML = "Result: TRUE";
  }
  else {
    $("result6").innerHTML = "Result: FALSE";
  }
}
