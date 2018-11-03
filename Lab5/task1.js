/* Task 1 - write your code here */

window.onload = pageLoad;

function pageLoad() {
  var button1 = document.getElementById('button1');
  button1.onclick = functionOne;
  var button2 = document.getElementById('button2');
  button2.onclick = functionTwo;
  var button3 = document.getElementById('button3');
  button3.onclick = functionThree;
  var button4 = document.getElementById('button4');
  button4.onclick = functionFour;
  var button5 = document.getElementById('button5');
  button5.onclick = functionFive;

}


function functionOne() {

  document.getElementById('light').src = 'light_1.jpg';
  document.getElementById('button1').innerHTML = 'ON';
  document.getElementById('button1').style.backgroundColor = '#ff6699';
  document.getElementById('button2').innerHTML = 'OFF';
  document.getElementById('button2').style.backgroundColor = '#ffffff';
  document.getElementById('button3').innerHTML = 'OFF';
  document.getElementById('button3').style.backgroundColor = '#ffffff';
  document.getElementById('button4').innerHTML = 'OFF';
  document.getElementById('button4').style.backgroundColor = '#ffffff';
  document.getElementById('button5').innerHTML = 'OFF';
  document.getElementById('button5').style.backgroundColor = '#ffffff';

}

function functionTwo() {

  document.getElementById('light').src = 'light_2.jpg';
  document.getElementById('button1').innerHTML = 'OFF';
  document.getElementById('button1').style.backgroundColor = '#ffffff';
  document.getElementById('button2').innerHTML = 'ON';
  document.getElementById('button2').style.backgroundColor = '#ff6699';
  document.getElementById('button3').innerHTML = 'OFF';
  document.getElementById('button3').style.backgroundColor = '#ffffff';
  document.getElementById('button4').innerHTML = 'OFF';
  document.getElementById('button4').style.backgroundColor = '#ffffff';
  document.getElementById('button5').innerHTML = 'OFF';
  document.getElementById('button5').style.backgroundColor = '#ffffff';

}

function functionThree() {

  document.getElementById('light').src = 'light_3.jpg';
  document.getElementById('button1').innerHTML = 'OFF';
  document.getElementById('button1').style.backgroundColor = '#ffffff';
  document.getElementById('button2').innerHTML = 'OFF';
  document.getElementById('button2').style.backgroundColor = '#ffffff';
  document.getElementById('button3').innerHTML = 'ON';
  document.getElementById('button3').style.backgroundColor = '#ff6699';
  document.getElementById('button4').innerHTML = 'OFF';
  document.getElementById('button4').style.backgroundColor = '#ffffff';
  document.getElementById('button5').innerHTML = 'OFF';
  document.getElementById('button5').style.backgroundColor = '#ffffff';

}

function functionFour() {

  document.getElementById('light').src = 'light_4.jpg';
  document.getElementById('button1').innerHTML = 'OFF';
  document.getElementById('button1').style.backgroundColor = '#ffffff';
  document.getElementById('button2').innerHTML = 'OFF';
  document.getElementById('button2').style.backgroundColor = '#ffffff';
  document.getElementById('button3').innerHTML = 'OFF';
  document.getElementById('button3').style.backgroundColor = '#ffffff';
  document.getElementById('button4').innerHTML = 'ON';
  document.getElementById('button4').style.backgroundColor = '#ff6699';
  document.getElementById('button5').innerHTML = 'OFF';
  document.getElementById('button5').style.backgroundColor = '#ffffff';

}

function functionFive() {

  document.getElementById('light').src = 'light_5.jpg';
  document.getElementById('button1').innerHTML = 'OFF';
  document.getElementById('button1').style.backgroundColor = '#ffffff';
  document.getElementById('button2').innerHTML = 'OFF';
  document.getElementById('button2').style.backgroundColor = '#ffffff';
  document.getElementById('button3').innerHTML = 'OFF';
  document.getElementById('button3').style.backgroundColor = '#ffffff';
  document.getElementById('button4').innerHTML = 'OFF';
  document.getElementById('button4').style.backgroundColor = '#ffffff';
  document.getElementById('button5').innerHTML = 'ON';
  document.getElementById('button5').style.backgroundColor = '#ff6699';

}