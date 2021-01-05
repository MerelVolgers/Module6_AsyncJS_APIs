"use strict";

// API_KEY = "6d6cd94d90msh6f30ecbf3ea95e4p18d12djsn7f5f499c19d9";
var fname = "merel";
var sname = "peter";

var getLoveCalculator = function getLoveCalculator(fname, sname) {
  var apiURL, response;
  return regeneratorRuntime.async(function getLoveCalculator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          apiURL = "https://love-calculator.p.rapidapi.com/getPercentage?fname=".concat(fname, "&sname=").concat(sname);
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch(apiURL, {
            method: "GET",
            headers: {
              "X-RapidApi-Key": "6d6cd94d90msh6f30ecbf3ea95e4p18d12djsn7f5f499c19d9",
              "X-RapidApi-Host": "love-calculator.p.rapidapi.com"
            },
            redirect: "follow"
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
          _context.t0 = _context["catch"](1);

          (function (error) {
            return console.log(error);
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 7]]);
};