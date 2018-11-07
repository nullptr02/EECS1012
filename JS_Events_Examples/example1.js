window.onload = function()
{
  var box1 = document.getElementById("box1");
  var box2 = document.getElementById("box2");
  box1.onclick = changeText;
  box2.onclick = changeText;
}

function changeText()
{
  this.innerHTML = "Boyah!";
}
