
// API_KEY = "6d6cd94d90msh6f30ecbf3ea95e4p18d12djsn7f5f499c19d9";
let fname="";
let sname="";

const getLoveCalculator = async () => {
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
        const data = await response.json();
        console.log(data);
        return(data)

    } catch {(error => console.log(error));
    }
}

