// let firstName = "";
// let secondName = "";

const button = document.getElementById("button");
const putFirstName = document.getElementById("firstName");
const putSecondName = document.getElementById("secondName");
const resultaat = document.getElementById("resultaat");


putFirstName.addEventListener('keyup', (event) => {
    fname = event.target.value
});
    
putSecondName.addEventListener('keyup', (event) => {
    sname = event.target.value
});


button.addEventListener("click", () =>{
    const data = getLoveCalculator();
    resultaat.innerHTML="";

    if (firstName.value == "" || secondName.value == "") {
        alert ("It takes two to tango!");
    } else {
        getLoveCalculator().then (data => {
            const berekendPercentage = document.createTextNode(`Percentage: ${result_percentage} `);
            const berekendAdvies = document.createTextNode(`Advies: ${data}`);
            resultaat.append(berekendPercentage);
            resultaat.append(berekendAdvies);
        })
    }
})


