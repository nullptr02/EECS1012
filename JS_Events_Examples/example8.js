window.onload = function() {
  $("mybutton").onclick = submitCheck;
};

function submitCheck() {
  if ($("query").value == "") {
    alert("Please enter text for pressing submit!");
  }
  else {
    $("myForm").submit();
  }
}
