/* Practice Lab Test #2, Task 2  (version 1)*/
/* EECS1012 - York University  */

/* write your code here */

window.onload = function() {

  $('0').observe('click', zero);
  $('1').observe('click', one);
  $('2').observe('click', two);
  $('3').observe('click', three);

}


function zero() {

  var entry = $('entry');
  var content = entry.innerHTML;
  entry.innerHTML = content + '0';
}

function one() {
  var entry = $('entry');
  var content = entry.innerHTML;
  entry.innerHTML = content + '1';
}

function two() {
  var entry = $('entry');
  var content = entry.innerHTML;
  entry.innerHTML = content + '2';
}

function three() {
  var entry = $('entry');
  var content = entry.innerHTML;
  entry.innerHTML = content + '3';
}