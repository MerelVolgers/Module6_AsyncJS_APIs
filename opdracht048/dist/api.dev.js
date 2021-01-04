"use strict";

// API_KEY = "6d6cd94d90msh6f30ecbf3ea95e4p18d12djsn7f5f499c19d9";
var getLoveCalculator = function getLoveCalculator(firstName, secondName) {
  var apiURL, response;
  return regeneratorRuntime.async(function getLoveCalculator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          apiURL = "https://love-calculator.p.rapidapi.com/getPercentage?fname=".concat(firstName, "&sname=").concat(secondName);
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch(apiURL, {
            method: "GET",
            headers: {
              "X-RapidApi-Key": "6d6cd94d90msh6f30ecbf3ea95e4p18d12djsn7f5f499c19d9",
              "X-RapidApi-Host": "love-calculator.p.rapidapi.com"
            }
          }).then(function (response) {
            return response.text();
          }).then(function (result) {
            return console.log(result);
          }));

        case 4:
          response = _context.sent;
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);

          (function (error) {
            return console.log(error);
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${firstName}&sname=${secondName}`, {
//     method: 'GET',
//     headers: {"X-RapidApi-Key": "6d6cd94d90msh6f30ecbf3ea95e4p18d12djsn7f5f499c19d9",
//     "X-RapidApi-Host": "love-calculator.p.rapidapi.com"
//     },
//     redirect: 'follow'
// })
// .then(response => response.text())
// .then(result => console.log(result))
// .catch(error => console.log('error', error));