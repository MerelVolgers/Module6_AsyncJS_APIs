
// API_KEY = "6d6cd94d90msh6f30ecbf3ea95e4p18d12djsn7f5f499c19d9";
let fname="merel";
let sname="peter";

const getLoveCalculator = async (fname, sname) => {
    const apiURL = `https://love-calculator.p.rapidapi.com/getPercentage?fname=${fname}&sname=${sname}`;
    try {
        const response = await fetch (apiURL, {
            method: "GET",
            headers: {
                "X-RapidApi-Key": "6d6cd94d90msh6f30ecbf3ea95e4p18d12djsn7f5f499c19d9",
	            "X-RapidApi-Host": "love-calculator.p.rapidapi.com"
            },
            redirect: "follow"
        })
        .then(response => response.text())
        .then(result => console.log(result))
        // const data = await response.json();
        // return data;

    } catch {(error => console.log(error));
    }
}

