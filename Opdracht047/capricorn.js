// STEENBOKVROUWEN
// maak een lijst van mensen: laat voor en achternam en foto zien, sorteer op voornaam, elke persoon moet een vrouw zijn, ouder dan 30 en steenbok (22dec t/m 19jan)

const isWoman = randomPersonData.filter (person => person.gender === "female");
const isWomanAndOver30 = isWoman.filter (person => person.age > 30);
const isWomanAndOver30AndSorted = isWomanAndOver30.sort ((a,b) => (a.name > b.name) ? 1 : -1);

// const isCapricorn = (person => person.sign === "capricorn");


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

const getBirthday = randomPersonData.map (person => (person.birthday.dmy));
console.log(getBirthday)

const birthday = () => {
   const month = getBirthday.map (person => parseInt (person.birthday.dmy.split ("/")));
}
console.log(birthday);


// const month = randomPersonData.map (person => parseInt(person.birthday.dmy.split ("/")[1]));
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




const makeListOfCapricornWomen = () => {
    isWomanAndOver30AndSorted.forEach (person => {
        const li = document.createElement("li");
        const liContent = document.createTextNode (`Name: ${person.name}, Surname: ${person.surname}, Gender: ${person.gender}, Age: ${person.age}, Zodiac day:  ${person.birthday.dmy.split("/")[0]} month:${person.birthday.dmy.split("/")[1]}`);
        li.appendChild(liContent);
        list.appendChild(li);
    })
};

const capricornButton = document.getElementById("capricornButton")

capricornButton.addEventListener("click", () =>{ 
    list.innerHTML = " ";
    makeListOfCapricornWomen();
});
