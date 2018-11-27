/* EECS1012 - Practice Lab Test #2 */
window.onload = function() {
  inputBG();
  $('cardId').observe('keyup', cardID);
  $('countryCode').observe('keyup', countryCde);
  $('amount').observe('keyup', claimAmt);
  $('submitButton').observe('click', submit);

}


function submit() {
  var x = $('cardId').style.backgroundColor == 'lightblue';
  var y = $('countryCode').style.backgroundColor == 'lightblue';
  var z = $('amount').style.backgroundColor == 'lightblue';

  var a = $('submitButton');
  if (x && y && z) {

    a.style.backgroundColor = 'lightblue';

  } else {
    a.style.backgroundColor = 'mistyrose';

  }


}

function inputBG() {
  $('cardId').style.backgroundColor = 'mistyrose';
  $('countryCode').style.backgroundColor = 'mistyrose';
  $('amount').style.backgroundColor = 'mistyrose';
}


function cardID() {
  var x = $('cardId');
  var re = /^[AC][0-9][0-9][0-9][0-9][A-Z]$/;
  if (re.test(x.value) == true) {
    x.style.backgroundColor = 'lightblue';
  } else {
    x.style.backgroundColor = 'mistyrose';
  }
}


function countryCde() {
  var re = ['CAN', 'MEX', 'USA', 'EUR', 'OTHER'];
  var x = $('countryCode');
  x.value = x.value.toUpperCase();
  if (re.include(x.value)) {
    x.style.backgroundColor = 'lightblue';
  } else {
    x.style.backgroundColor = 'mistyrose';
  }
}

function claimAmt() {
  var x = $('amount');
  var re = /^\$[0-9]+[\.]?[0-9]*$/;
  if (re.test(x.value)) {
    x.style.backgroundColor = 'lightblue';
  } else {
    x.style.backgroundColor = 'mistyrose';
  }
}