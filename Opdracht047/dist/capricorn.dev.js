"use strict";

// STEENBOKVROUWEN
// maak een lijst van mensen: laat voor en achternam en foto zien, sorteer op voornaam, elke persoon moet een vrouw zijn, ouder dan 30 en steenbok (22dec t/m 19jan)
var isWoman = randomPersonData.filter(function (person) {
  return person.gender === "female";
});
var isWomanAndOver30 = isWoman.filter(function (person) {
  return person.age > 30;
});
var isWomanAndOver30AndSorted = isWomanAndOver30.sort(function (a, b) {
  return a.name > b.name ? 1 : -1;
}); // const isCapricorn = (person => person.sign === "capricorn");
// const getSign = (month,day) => {
//     if (month === 1 && day <= 20) return "capricorn";
//     if (month === 12 && day >= 22) return "capricorn";
// }
// const getBirthday = (person) =>{
//     const month = randomPersonData.map (person => (person.birthday.dmy.split ("/")[1]));
//     const day = randomPersonData.map (person => (person.birthday.dmy.split ("/")[0]));
//     person.sign = getSign(month, day);
//     return person;
// };
// getBirthday();
// console.log(getBirthday)

var getBirthday = randomPersonData.map(function (person) {
  return person.birthday.dmy;
});
console.log(getBirthday);

var birthday = function birthday() {
  var month = getBirthday.map(function (person) {
    return parseInt(person.birthday.dmy.split("/"));
  });
};

console.log(birthday); // const month = randomPersonData.map (person => parseInt(person.birthday.dmy.split ("/")[1]));
// console.log(month);
// const day = randomPersonData.map (person => parseInt(person.birthday.dmy.split ("/")[0]));
// const month = randomPersonData.map (person => parseInt (person.birthday.dmy.split ("/")[1]));
// const capricornAndSorted = isWomanAndOver30AndSorted.filter(isCapricorn);
// const getZodiac = person => {
//     const day = randomPersonData.parseInt (person.birthday.dmy.split ("/") [0]);
//     const month = randomPersonData.parseInt (person.birthday.dmy.split("/") [1]);
//     person.sign = getSign(month, day);
//     return person;
// };
// const isCapricornandfiltered = isWomanAndOver30AndSorted.filter(isCapricorn);
// console.log();

var makeListOfCapricornWomen = function makeListOfCapricornWomen() {
  isWomanAndOver30AndSorted.forEach(function (person) {
    var li = document.createElement("li");
    var liContent = document.createTextNode("Name: ".concat(person.name, ", Surname: ").concat(person.surname, ", Gender: ").concat(person.gender, ", Age: ").concat(person.age, ", Zodiac day:  ").concat(person.birthday.dmy.split("/")[0], " month:").concat(person.birthday.dmy.split("/")[1]));
    li.appendChild(liContent);
    list.appendChild(li);
  });
};

var capricornButton = document.getElementById("capricornButton");
capricornButton.addEventListener("click", function () {
  list.innerHTML = " ";
  makeListOfCapricornWomen();
});