let API_KEY = "0c9ecb33f217fd9a06eb1e0e10fd7f42";

async function getData() {
    const apiUrl = "https://api.themoviedb.org/3/movie/550?api_key=0c9ecb33f217fd9a06eb1e0e10fd7f42"
    try{
        const res = await fetch (apiUrl, { method: "GET"});
        const data = await res.json();
        // console.log("the data:", data);
        return data;
    } catch (err) {
        console.log(err)
    }
}

