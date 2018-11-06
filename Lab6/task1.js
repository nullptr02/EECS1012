/* Lab 6 - Task 1 */
var imgArr = ['face1.png', 'face2.png', 'face3.png', 'face4.png'];
var index = Math.floor(Math.random() * imgArr.length);

window.onload = function() {
  $('myImg').src = imgArr[index];
  $('myImg').observe('mouseover', changeImg);
};

//Function that changes image on page load
function changeImg() {
  var newImg = Math.floor(Math.random() * imgArr.length);
  while (newImg == index) {
    newImg = Math.floor(Math.random() * imgArr.length);
  }
  console.log(newImg);
  $('myImg').src = imgArr[newImg];
  index = newImg;
}