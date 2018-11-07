/* Michael S. Brown, EECS1012 - York University (CC)
 FormsInput.js */
 window.onload = function() {
   $("FirstName").observe("keyup", enforceLettersOnly);
   $("LastName").observe("keyup", enforceLettersOnly);
   $("Address").observe("keyup", enforceNumberLettersSpace);
  $("provinceList").observe("click", enforceNotEmpty);
   $("provinceList").observe("keyup", enforceNotEmpty);
   $("PostalCode").observe("keyup", enforcePostalCode);
   $("City").observe("keyup", enforceLettersOnly);
   $("cardType").observe("keyup", enforceCardType);
   $("cc1").observe("keyup", enforceCCNumber);
   $("cc2").observe("keyup", enforceCCNumber);
   $("cc3").observe("keyup", enforceCCNumber);
   $("cc4").observe("keyup", enforceCCNumber);
   $("submit").observe("click", submitForm);

   /* Add provice codes */
   var provinceCodes = ["", "AB", "BC", "MB", "NB", "NL", "NS", "NT", "NU", "ON", "PE", "QC", "SK", "YT"];
   var option;
   for(var i=0; i < provinceCodes.length; i++)
   {
     option = new Option(provinceCodes[i]);
     $("provinceList").appendChild(option);
   }
}

function markSuccessful(element) {
    $(element).removeClassName("unsuccessful");
    $(element).addClassName("successful");
    $(element).nextElementSibling.innerHTML = "&#10004;";
}
function markUnsuccessful(element) {
       $(element).addClassName("unsuccessful");
       $(element).removeClassName("successful");
       $(element).nextElementSibling.innerHTML = "&#10060;";
}

function enforceNotEmpty()
{
  if (this.value != "") {
      markSuccessful(this);
    } else {
      markUnsuccessful(this);
   }
}

 function enforeCCNumber()
 {
   var reg = new RegExp(/^[0-9][0-9][0-9][0-9]$/);
   if (reg.test($(this).value) == true) {
     markSuccessful(this);
   } else {
     markUnsuccessful(this);
   }
 }

 function enforcePostalCode()
 {
     var reg = new RegExp(/^[A-Z][0-9][A-Z][0-9][A-Z][0-9]$/i);
     if (reg.test($(this).value) == true) {
         markSuccessful(this);
       } else {
         markUnsuccessful(this);
       }
 }

function enforceCCNumber()
{
  var reg = new RegExp(/^[0-9][0-9][0-9][0-9]$/);

  if (reg.test($(this).value) == true) {
    markSuccessful(this);
  } else {
    markUnsuccessful(this);
  }
}

function enforceCardType()
{
  var codes=["VISA", "MASTERCARD", "AMEX", "DISCOVER"];
  var cardType = $("cardType").value;
  cardType = cardType.toUpperCase();
  if (codes.includes(cardType)) {
      markSuccessful(this);
    } else {
      markUnsuccessful(this);
    }
}

 function enforceLettersOnly()
 {
   var reg = new RegExp(/^[a-zA-Z]+$/);

   if (reg.test($(this).value) == true) {
     markSuccessful(this);
   } else {
     markUnsuccessful(this);
   }
 }


 function enforceNumberLettersSpace()
 {
   var reg = new RegExp(/^[a-zA-Z0-9\ ]+$/);

   if (reg.test($(this).value) == true) {
     markSuccessful(this);
   } else {
     markUnsuccessful(this);
   }
 }

function submitForm()
{
  var spans = document.getElementsByClassName("message");
  var valid = true;

  for(var i=0; i < spans.length; i++)
  {
    if (spans[i].innerHTML != String.fromCharCode(10004))
    {
      valid = false;
    }
  }
  if (valid)
  {
    $("submit").style.border = "5px blue solid";
  }
  else {
    $("formError").innerHTML = "Make sure all fields are completed correctly."
    setTimeout(clearErrorMsg, 1500);
  }
}

function clearErrorMsg()
{
  $("formError").innerHTML = "&nbsp;";
}
