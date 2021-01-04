
// API_KEY = "6d6cd94d90msh6f30ecbf3ea95e4p18d12djsn7f5f499c19d9";


const getLoveCalculator = async (firstName, secondName) => {
    try {
        const apiURL = `https://love-calculator.p.rapidapi.com/getPercentage?fname=${firstName}&sname=${secondName}`
        const response = await fetch(apiURL, {
            method: "GET",
            headers: {
                "X-RapidApi-Key": "6d6cd94d90msh6f30ecbf3ea95e4p18d12djsn7f5f499c19d9",
	            "X-RapidApi-Host": "love-calculator.p.rapidapi.com"
            },
        })
        .then(response => response.text())
        .then(result => console.log(result))
        // const data = await res.json();
        // return data;

    } catch {(error => console.log(error));
    }
}



// fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${firstName}&sname=${secondName}`, {
//     method: 'GET',
//     headers: {"X-RapidApi-Key": "6d6cd94d90msh6f30ecbf3ea95e4p18d12djsn7f5f499c19d9",
//     "X-RapidApi-Host": "love-calculator.p.rapidapi.com"
//     },
//     redirect: 'follow'
// })
// .then(response => response.text())
// .then(result => console.log(result))
// .catch(error => console.log('error', error));


