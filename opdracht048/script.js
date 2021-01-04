// let firstName = "merel";
// let secondName = "piet";

const button = document.getElementById("button");
const putFirstName = document.getElementById("firstName");
const putSecondName = document.getElementById("secondName");
const resultaat = document.getElementById("resultaat");


const input = () => {
    putFirstName.addEventListener('keyup', (event) => {
        firstName = event.target.value
    });
    
    putSecondName.addEventListener('keyup', (event) => {
        secondName = event.target.value
    });
}


button.addEventListener("click", () =>{
    const data = getLoveCalculator();
    resultaat.innerHTML="";

    if (firstName.value !== "" && secondName.value !== "") {
    getLoveCalculator().then (data => {
            const berekendPercentage = document.createTextNode(`Percentage: ${data}`);
            // const berekendAdvies = document.createElement(`Advies: ${data}`);
            resultaat.append(berekendPercentage);
            // resultaat.append(berekendAdvies);
        })
    } else {
        alert ("You need to enter two names!");
    }
})


