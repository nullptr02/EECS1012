/* Lab 6 - Task 3.  This is related to DOM (not Events), but you can
   still use the prototype library */
window.onload = function() {
  createDay();
  createMonth();
  createYear();
};

var dayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function createDay() {
  var select = $('days');
  for (var i = 0; i < dayArr.length; i++) {
    var addOption = document.createElement('option');
    addOption.innerHTML = dayArr[i];
    select.appendChild(addOption);
  }
}

function createMonth() {
  var select = $('months');
  for (var i = 0; i < monthArr.length; i++) {
    var addOption = document.createElement('option');
    addOption.innerHTML = monthArr[i];
    select.appendChild(addOption);
  }
}

function createYear() {
  var select = $('years');
  for (var i = 0; i < 49; i++) {
    var addOption = document.createElement('option');
    addOption.text = 1970 + i;
    select.appendChild(addOption);
  }
}