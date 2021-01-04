"use strict";

// let firstName = "merel";
// let secondName = "piet";
var button = document.getElementById("button");
var putFirstName = document.getElementById("firstName");
var putSecondName = document.getElementById("secondName");
var resultaat = document.getElementById("resultaat");

var input = function input() {
  putFirstName.addEventListener('keyup', function (event) {
    firstName = event.target.value;
  });
  putSecondName.addEventListener('keyup', function (event) {
    secondName = event.target.value;
  });
};

button.addEventListener("click", function () {
  var data = getLoveCalculator();
  resultaat.innerHTML = "";

  if (firstName.value !== "" && secondName.value !== "") {
    getLoveCalculator().then(function (data) {
      var berekendPercentage = document.createTextNode("Percentage: ".concat(data)); // const berekendAdvies = document.createElement(`Advies: ${data}`);

      resultaat.append(berekendPercentage); // resultaat.append(berekendAdvies);
    });
  } else {
    alert("You need to enter two names!");
  }
});