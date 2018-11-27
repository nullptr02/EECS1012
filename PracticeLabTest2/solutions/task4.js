/* Declare some global variables */
/* In this case, I'm putting all the names of the images in an array */
/* I'm declaring an index for img1 and one for img2 (i and j) */
/* I'll also have two timers, so need to keep track of their IDs */
var images=["01.png", "02.png", "03.png", "04.png", "05.png", "06.png", "07.png", "08.png"];
var i = 0;
var j= 0;
var timer1 = null;
var timer2 = null;

/* When the window loads, set the bar to observe mouseover and mouseout */
/* I set the images, but it isn't necessary */
window.onload = function()
{
  $("bar").observe("mouseover", startSpin);
  $("bar").observe("mouseout", stopSpin);
  $("img1").src = images[i];
  $("img2").src = images[j];
}

/* When the mouse moves over */
/* Set two timers */
/* Set the innerHTML of the result to "Spin" */
/* Set the text of the bar */
/* Change the color of the bar */
function startSpin()
{
    timer1 = setInterval(changeImage1, 120 );
    timer2 = setInterval(changeImage2, 100 );
    $("result").innerHTML="Spin";
    $("bar").innerHTML="Move off to stop";
    $("bar").style.backgroundColor = "grey";
}

/* When the mouse exits */
/* clear the timers - this stops the images from moving */
/* if the two indexes are the same, then the images are the same */
/* then "you win", otherwise "you lose" */
function stopSpin()
{
  clearInterval(timer1);
  clearInterval(timer2);
  if (i == j)
    $("result").innerHTML="You Win!";
  else
    $("result").innerHTML="You Lose!";

  /* set the bar text back and color back */
  $("bar").innerHTML="Move on to spin";
  $("bar").style.backgroundColor = "white";
}

/* Change the first image */
function changeImage1()
{
  i++;  /* add 1 to i */
  if (i > 7) i=0;  /* if greater than 7, set back to 0 - this keeps the range between 0-8 */
  $("img1").src = images[i];  /* change to the next the image */
}

/* Chnage the second image */
function changeImage2()
{
  j++; /* add 1 to j */
  if (j > 7) j=0; /* if greater than 7, set back to 0 - this keeps the range between 0-8 */
  $("img2").src = images[j]; /* change to the next image */
}
