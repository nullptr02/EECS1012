/* Lab 7 - Task 1 */
window.onload = function() {
  $("b1").observe("click", myFunction1);
  $("b2").observe("click", myFunction2);
  $("b3").observe("click", myFunction3);
  $("b4").observe("click", myFunction4);
  $("b5").observe("click", myFunction5);
}

function myFunction1() {
  /* Put in the correct regular expression below */
  var re = /^[0-9\ ]+$/;
  var testString = $("input1").value;

  if (re.test(testString) == true) {
    $("result1").innerHTML = "Result: TRUE";
  } else {
    $("result1").innerHTML = "Result: FALSE";
  }
}


function myFunction2() {
  /* Put in the correct regular expression below */
  var re = /^[0-9]+[A-Z]+$/i;
  var testString = $("input2").value;

  if (re.test(testString) == true) {
    $("result2").innerHTML = "Result: TRUE";
  } else {
    $("result2").innerHTML = "Result: FALSE";
  }
}


function myFunction3() {
  /* Put in the correct regular expression below */
  var re = /^[S][0-9][0-9][0-9][0-9][A-Z]$/;
  var testString = $("input3").value;

  if (re.test(testString) == true) {
    $("result3").innerHTML = "Result: TRUE";
  } else {
    $("result3").innerHTML = "Result: FALSE";
  }
}

function myFunction4() {
  /* Put in the correct regular expression below */
  var re = /[A-Z][A-Z][A-Z][0-9][0-9][0-9]/;
  var testString = $("input4").value;

  if (re.test(testString) == true) {
    $("result4").innerHTML = "Result: TRUE";
  } else {
    $("result4").innerHTML = "Result: FALSE";
  }
}

function myFunction5() {
  /* Put in the correct regular expression below */
  var re = /^[0-9]+\.[0-9]+$/;
  var testString = $("input5").value;

  if (re.test(testString) == true) {
    $("result5").innerHTML = "Result: TRUE";
  } else {
    $("result5").innerHTML = "Result: FALSE";
  }
}