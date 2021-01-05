"use strict";

// API_KEY = "6d6cd94d90msh6f30ecbf3ea95e4p18d12djsn7f5f499c19d9";
var fname = "";
var sname = "";

var getLoveCalculator = function getLoveCalculator() {
  var apiURL, response, data;
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
          }));

        case 4:
          response = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          data = _context.sent;
          console.log(data);
          return _context.abrupt("return", data);

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](1);

          (function (error) {
            return console.log(error);
          });

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 12]]);
};