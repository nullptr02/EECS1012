/* Task5.js - Add your Java Script Code Here */
function myFunction() {

  var d = new Date();
  var day = d.getDate();
  var dayOfWeek = d.getDay();
  var month = d.getMonth();
  var year = d.getFullYear();

  var days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
  var mth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  date.innerHTML = "Today is the " + day + " \(" + days[dayOfWeek] + "\) " + mth[month] + " " + year;

}