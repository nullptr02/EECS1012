/* Lab 6, Task 2.  Use the prototype library */
window.onload = function() {
  $('submitButton').onclick = submitForm;
  $('input1').observe('keydown', deleteDefault);
  $('input2').observe('keydown', deleteDefault);
  $('input3').observe('keydown', deleteDefault);
};

function deleteDefault() {
  this.stopObserving();
  this.value = '';
}

function submitForm() {

  var x = $('input1').value;
  var y = $('input2').value;
  var z = $('input3').value;

  if (x == '' || y == '' || z == '') {
    $('ErrorMessage').innerHTML = 'One of your fields has an error';
    setTimeout(function() {
      $('ErrorMessage').innerHTML = '';
    }, 2000);
  } else {
    $('myForm').submit();
  }
}