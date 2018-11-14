/* Lab 6 - Task 2  */

window.onload = function() {
  $("number").observe("keyup", courseNumber);
  $("userid").observe("keyup", userID);

  $("clear").observe("click", clearForm);
  $("code").observe("keyup", courseCode);
  $("submitButton").observe("click", submitButton);
}

function clearForm() {
  $("number").nextElementSibling.innerHTML = " ";
  $("code").nextElementSibling.innerHTML = " ";
  $("userid").nextElementSibling.innerHTML = " ";
}

function submitButton() {

  var x = $("number").nextElementSibling.innerHTML == "INCORRECT";
  var y = $("code").nextElementSibling.innerHTML == "INCORRECT";
  var z = $("userid").nextElementSibling.innerHTML == "INCORRECT";

  if (x || y || z) {
    alert("One of your fields has an error");
  } else {
    $("myForm").submit();
  }
}

function courseCode() {
  var regex = ["ESSE", "EECS", "HIST", "BIO", "CHEM", "MATH"];
  $("code").value = $("code").value.toUpperCase();
  if (regex.include($("code").value)) {
    $("code").nextElementSibling.innerHTML = "CORRECT";
  } else {
    $("code").nextElementSibling.innerHTML = "INCORRECT";
  }
}

function userID() {
  var regex = /^[A-Z][A-Za-z0-9]+$/i;
  var x = $("userid");
  if (regex.test(x.value)) {
    x.nextElementSibling.innerHTML = "CORRECT";
  } else {
    x.nextElementSibling.innerHTML = "INCORRECT";
  }
}

function courseNumber() {
  var regex = /^[0-9][0-9][0-9][0-9]$/;
  var x = $("number");
  if (regex.test(x.value)) {
    x.nextElementSibling.innerHTML = "CORRECT";
  } else {
    x.nextElementSibling.innerHTML = "INCORRECT";
  }
}