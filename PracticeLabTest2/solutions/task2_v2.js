/* Practice Lab Test #2, Task 2  Version 2*/
/* EECS1012 - York University  */
/* Michael S. Brown (CC) */

/* In this example, I'm going to access all buttons using the getElementsByTagName */
window.onload = function() {
  $("0").onclick = pressed0;
  $("1").onclick = pressed1;
  $("2").onclick = pressed2;
  $("3").onclick = pressed3;
  $("4").onclick = pressed4;
  $("5").onclick = pressed5;
  $("6").onclick = pressed6;
  $("7").onclick = pressed7;
  $("8").onclick = pressed8;
  $("9").onclick = pressed9;
  $("delete").onclick = deletePressed;
}

/* Pressed function */
function pressed0()
{
  $("entry").innerHTML = $("entry").innerHTML + "0";
}

/* Pressed function */
function pressed1()
{
  $("entry").innerHTML = $("entry").innerHTML + "1";
}
/* Pressed function */
function pressed2()
{
  $("entry").innerHTML = $("entry").innerHTML + "2";
}
/* Pressed function */
function pressed3()
{
  $("entry").innerHTML = $("entry").innerHTML + "3";
}
/* Pressed function */
function pressed4()
{
  $("entry").innerHTML = $("entry").innerHTML + "4";
}
/* Pressed function */
function pressed5()
{
  $("entry").innerHTML = $("entry").innerHTML + "5";
}
/* Pressed function */
function pressed6()
{
  $("entry").innerHTML = $("entry").innerHTML + "6";
}
/* Pressed function */
function pressed7()
{
  $("entry").innerHTML = $("entry").innerHTML + "7";
}
/* Pressed function */
function pressed8()
{
  $("entry").innerHTML = $("entry").innerHTML + "8";
}
/* Pressed function */
function pressed9()
{
  $("entry").innerHTML = $("entry").innerHTML + "9";
}

/* Pressed delete */
function deletePressed()
{
  var s=$("entry").innerHTML;
  if (s != "")
    $("entry").innerHTML = s.slice(0,-1); /* see PDF */
}
