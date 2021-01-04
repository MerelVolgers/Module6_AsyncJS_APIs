// Subopdracht: ouwe creditcards - 4 punten
// De creditcard van sommige mensen gaat verlopen, we gaan ze bellen om ze te waarschuwen.

// Maak een lijst van mensen:

// laat per persoon de volgende data zien
// voornaam, achternaam
// telefoonnummer
// creditcardnummer
// verloopdatum

let now = new Date();
console.log(now);

const isAdult = randomPersonData.filter (person => person.age >= 18);
const listOfCreditCards = isAdult.filter (person => person.credit_card);
const sortedListOfCreditCards = listOfCreditCards.sort((a,b) => (a.credit_card.expiration > b.credit_card.expiration) ? 1 : -1)

// const expirationYear = parseInt(person.credit_card.expiration.split("/") [1]);

// console.log(expirationYear);

const makeListOfCards = () => {
    listOfCreditCards.forEach(person => {
        const li = document.createElement ("li");
        const liContent = document.createTextNode (`Name:${person.name},Surname: ${person.surname}, Phone: ${person.phone}, CC number:${person.credit_card.number}, CC Expiration date: ${person.credit_card.expiration}`);
        li.appendChild(liContent);
        list.appendChild(li);
    });
}

const cardButton = document.getElementById("cardButton");

cardButton.addEventListener("click", () => {
    list.innerHTML = " ";
    makeListOfCards();
});
