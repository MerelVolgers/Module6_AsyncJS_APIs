

const button = document.getElementById("button");
const putFirstName = document.getElementById("firstName");
const putSecondName = document.getElementById("secondName");
const resultaat = document.getElementById("resultaat");
const percentage = document.getElementById("percentage");


putFirstName.addEventListener('keyup', (event) => {
    fname = event.target.value
});
    
putSecondName.addEventListener('keyup', (event) => {
    sname = event.target.value
});


button.addEventListener("click", () =>{
    const data = getLoveCalculator();
    resultaat.innerHTML="";
    percentage.innerHTML="";

    if (putFirstName.value == "" || putSecondName.value == "") {
        alert ("It takes two to tango! Put in two names to calculate your compatibility");
    } else {
        getLoveCalculator().then (data => {
            const berekendPercentage = document.createTextNode(`Percentage: ${data.percentage} % `);
            const berekendAdvies = document.createTextNode(`Advice: ${data.result}`);
            percentage.append(berekendPercentage);
            resultaat.append(berekendAdvies);
        })
    }
})




