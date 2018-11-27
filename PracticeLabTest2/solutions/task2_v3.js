/* Practice Lab Test #2, Task 2 vesion 3 */
/* EECS1012 - York University  */
/* Michael S Brown (CC) */

/* In this example, I'm going to access all buttons using the getElementsByTagName */
window.onload = function() {
  var b0 = document.getElementById("0");
  b0.onclick = pressed0;
  var b1 = document.getElementById("1");
  b1.onclick = pressed1;
  var b2 = document.getElementById("2");
  b2.onclick = pressed2;
  var b3 = document.getElementById("3");
  b3.onclick = pressed3;
  var b4 = document.getElementById("4");
  b4.onclick = pressed4;
  var b5 = document.getElementById("5");
  b5.onclick = pressed5;
  var b6 = document.getElementById("6");
  b6.onclick = pressed6;
  var b7 = document.getElementById("7");
  b7.onclick = pressed7;
  var b8 = document.getElementById("8");
  b8.onclick = pressed8;
  var b9 = document.getElementById("9");
  b9.onclick = pressed9;
  var del = document.getElementById("delete");
  del.onclick = deletePressed;
}


function pressed0()
{
  var entry = document.getElementById("entry");
  var content = entry.innerHTML;
  entry.innerHTML = content + "0";
}

function pressed1()
{
  var entry = document.getElementById("entry");
  var content = entry.innerHTML;
  entry.innerHTML = content + "1";
}

function pressed2()
{
  var entry = document.getElementById("entry");
  var content = entry.innerHTML;
  entry.innerHTML = content + "2";
}

function pressed3()
{
  var entry = document.getElementById("entry");
  var content = entry.innerHTML;
  entry.innerHTML = content + "3";
}

function pressed4()
{
  var entry = document.getElementById("entry");
  var content = entry.innerHTML;
  entry.innerHTML = content + "4";
}

function pressed5()
{
  var entry = document.getElementById("entry");
  var content = entry.innerHTML;
  entry.innerHTML = content + "5";
}

function pressed6()
{
  var entry = document.getElementById("entry");
  var content = entry.innerHTML;
  entry.innerHTML = content + "6";
}

function pressed7()
{
  var entry = document.getElementById("entry");
  var content = entry.innerHTML;
  entry.innerHTML = content + "7";
}

function pressed8()
{
  var entry = document.getElementById("entry");
  var content = entry.innerHTML;
  entry.innerHTML = content + "8";
}

function pressed9()
{
  var entry = document.getElementById("entry");
  var content = entry.innerHTML;
  entry.innerHTML = content + "9";
}

function deletePressed()
{
  var entry = document.getElementById("entry");
  var content = entry.innerHTML;
  if (content != "")
    entry.innerHTML = content.slice(0,-1);
}
