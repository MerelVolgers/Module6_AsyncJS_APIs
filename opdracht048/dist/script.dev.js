"use strict";

var button = document.getElementById("button");
var putFirstName = document.getElementById("firstName");
var putSecondName = document.getElementById("secondName");
var resultaat = document.getElementById("resultaat");
var percentage = document.getElementById("percentage");
putFirstName.addEventListener('keyup', function (event) {
  fname = event.target.value;
});
putSecondName.addEventListener('keyup', function (event) {
  sname = event.target.value;
});
button.addEventListener("click", function () {
  var data = getLoveCalculator();
  resultaat.innerHTML = "";
  percentage.innerHTML = "";

  if (putFirstName.value == "" || putSecondName.value == "") {
    alert("It takes two to tango! Put in two names to calculate your compatibility");
  } else {
    getLoveCalculator().then(function (data) {
      var berekendPercentage = document.createTextNode("Percentage: ".concat(data.percentage, " % "));
      var berekendAdvies = document.createTextNode("Advice: ".concat(data.result));
      percentage.append(berekendPercentage);
      resultaat.append(berekendAdvies);
    });
  }
});