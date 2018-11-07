var Count = 99;

window.onload = function() {

  $("counter").observe("mouseover", countDown);
  $("counter").observe("mouseout", countDown);
}


function countDown ()
{
    Count = Count - 1;
    this.innerHTML = Count + " Falafels!";
}
