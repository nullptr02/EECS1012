/* write your code here */

window.onload = pageLoad;

function pageLoad() {
  var green = document.getElementById('green');
  green.onclick = greenFunction;

  var blue = document.getElementById('blue');
  blue.onclick = blueFunction;

  var mono = document.getElementById('mono');
  mono.onclick = monoFunction;

  var sansSerif = document.getElementById('sansSerif');
  sansSerif.onclick = sansSerifFunction;

  var serif = document.getElementById('serif');
  serif.onclick = serifFunction;

  var sizeBig = document.getElementById('sizeBig');
  sizeBig.onclick = sizeBigFunction;

  var sizeSmall = document.getElementById('sizeSmall');
  sizeSmall.onclick = sizeSmallFunction;

}

function greenFunction() {
  document.getElementById('paragraph').style.color = 'green';
}

function blueFunction() {
  document.getElementById('paragraph').style.color = 'blue';
}

function monoFunction() {
  document.getElementById('paragraph').style.fontFamily = 'monospace';
}

function sansSerifFunction() {
  document.getElementById('paragraph').style.fontFamily = 'sans-serif';
}

function serifFunction() {
  document.getElementById('paragraph').style.fontFamily = 'serif';
}

var x = 12;

function sizeBigFunction() {
  var p = document.getElementById('paragraph');
  var size = x + "pt";
  x++;
  p.style.fontSize = size;
}

function sizeSmallFunction() {
  var p = document.getElementById('paragraph');
  var size = x + "pt";
  x--;
  p.style.fontSize = size;
}