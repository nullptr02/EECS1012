var i=1;

/* a fun example for you! */
window.onload = function()
{
  var img = document.getElementById("food");
  img.onclick = changeImage;
};

function changeImage() {
	var images = ["dosa.jpg", "falafel.jpg", "pide.jpg", "malaxiangguo.jpg"]; /* array of image names*/
	$("food").src = images[i]; /* change the source of the image to a new image */
	i++; /* increment the variable . . since it is "global" it means next time the function is called it will remember this variables value */
	if (i > 3) /* if i is greater than 3, we need to set it back to 0.  Why, our array is only ranged 0 to 3. */
	{
		i = 0;
	}
}
