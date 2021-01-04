// STEENBOKVROUWEN
// maak een lijst van mensen: laat voor en achternam en foto zien, sorteer op voornaam, elke persoon moet een vrouw zijn, ouder dan 30 en steenbok (22dec t/m 19jan)

const isWoman = randomPersonData.filter (person => person.gender === "female");
const isWomanAndOver30 = isWoman.filter (person => person.age > 30);
const isWomanAndOver30AndSorted = isWomanAndOver30.sort ((a,b) => (a.name > b.name) ? 1 : -1);


const day = parseInt (person => person.birthday.dmy.split ("/") [0]);


// const getZodiac = person => {
//     const day = randomPersonData.parseInt (person.birthday.dmy.split ("/") [0]);
//     const month = randomPersonData.parseInt (person.birthday.dmy.split("/") [1]);
//     person.sign = getSign(month, day);
//     return person;
// };

// console.log(day);

// const getSign = (month, day) => {
//     if (month === 1 && day <= 20) return "capricorn";
//     if (month === 12 && day >= 22) return "capricorn";
// };

// const isCapricorn = (person => person.sign === "capricorn");

// console.log();




// const isCapricornandfiltered = isWomanAndOver30AndSorted.filter(isCapricorn);
// console.log();




const makeListOfCapricornWomen = () => {
    isWomanAndOver30AndSorted.forEach (person => {
        const li = document.createElement("li");
        const liContent = document.createTextNode (`Name: ${person.name}, Surname: ${person.surname}, Gender: ${person.gender}, Age: ${person.age}, Zodiac: `);
        li.appendChild(liContent);
        list.appendChild(li);
    })
};

const capricornButton = document.getElementById("capricornButton")

capricornButton.addEventListener("click", () =>{ 
    list.innerHTML = " ";
    makeListOfCapricornWomen();
});




