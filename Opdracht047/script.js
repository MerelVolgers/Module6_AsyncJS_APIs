const list = document.getElementById("list");


// COUNTRIES
// maak een lijst van alle landen, gesorteerd op naam van het land

const listOfCountries = randomPersonData.map (person => person.region);
listOfCountries.sort();

// console.log(listOfCountries);

const makeListOfCountries = () => {
    listOfCountries.forEach(country => {
        const li = document.createElement("li");
        const liContent = document.createTextNode (`${country}`);
        li.appendChild(liContent);
        list.appendChild(li);
    })
}

const countryButton = document.getElementById("countryButton");

countryButton.addEventListener("click", () => {
    list.innerHTML = " ";
    makeListOfCountries();
});


// OPDRACHT 3

// opdracht3Button.addEventListener("click", () =>{ 
//     list.innerHTML = " ";
//     makeListOfOpdracht3();
// });

// // OPDRACHT 4

// opdracht4Button.addEventListener("click", () =>{ 
//     list.innerHTML = " ";
//     makeListOfOpdracht4();
// });