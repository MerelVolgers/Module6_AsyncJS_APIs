

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
    console.log(data);
    resultaat.innerHTML="";

    if (putFirstName.value == "" || putSecondName.value == "") {
        alert ("It takes two to tango! Put in two names to calculate your compatibility");
    } else {
        getLoveCalculator().then (data => {
            const berekendPercentage = document.createTextNode(`Percentage: ${data.percentage} % `);
            const berekendAdvies = document.createTextNode(`Advies: ${data.result}`);
            resultaat.append(berekendPercentage);
            resultaat.append(berekendAdvies);
        })
    }
})




