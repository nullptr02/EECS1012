
/* This example is using the Prototype library */
/* We must link the prototype library first in the HTML page */
/* See the dom_example6.html page */

/* This uses the $("") function from the Prototype library */
/* $("") is the same as document.getElementById("num1") */
/* The following code is the Prototype version of the adder from last lecture */
function compute() {

   $("answer").innerHTML = parseInt( $("num1").value ) + parseInt( $("num2").value );

   /* Single line of code is equivallent to the following:
     var answer = $("answer");
     var num1 = parseInt( $("num1").value );
     var num2 = parseInt( $("num2").value );
     answer.innerHTML = num1 +  num2;
    */

}
