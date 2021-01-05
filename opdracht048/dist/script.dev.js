"use strict";

// let firstName = "";
// let secondName = "";
var button = document.getElementById("button");
var putFirstName = document.getElementById("firstName");
var putSecondName = document.getElementById("secondName");
var resultaat = document.getElementById("resultaat");
putFirstName.addEventListener('keyup', function (event) {
  fname = event.target.value;
});
putSecondName.addEventListener('keyup', function (event) {
  sname = event.target.value;
});
button.addEventListener("click", function () {
  var data = getLoveCalculator();
  resultaat.innerHTML = "";

  if (firstName.value == "" || secondName.value == "") {
    alert("It takes two to tango!");
  } else {
    getLoveCalculator().then(function (data) {
      var berekendPercentage = document.createTextNode("Percentage: ".concat(result_percentage, " "));
      var berekendAdvies = document.createTextNode("Advies: ".concat(data));
      resultaat.append(berekendPercentage);
      resultaat.append(berekendAdvies);
    });
  }
});