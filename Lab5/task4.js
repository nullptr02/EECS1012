/* Task 4 code here */

window.onload = pageLoad;

function pageLoad() {
  var addButton = document.getElementById('add');
  addButton.onclick = addFunction;

  var deleteButton = document.getElementById('delete');
  deleteButton.onclick = deleteFunction;


}



function addFunction() {

  var text = document.getElementById('input');
  var div = document.createElement('div');
  var paragraph = document.createElement('p');
  paragraph.innerHTML = text.value;
  div.appendChild(paragraph);
  document.getElementById('output').appendChild(div);
}

function deleteFunction() {

  var out = document.getElementById('output');
  children = out.children;
  out.removeChild(children[children.length - 1]);

  if (children.length <= 0) {
    alert("No paragraph to delete");
  }


}