const API_KEY = "0c9ecb33f217fd9a06eb1e0e10fd7f42";


// get movies by genre: 

const getMovieGenres = async () => {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
    try{
        const res = await fetch (apiUrl, { method: "GET"});
        const data = await res.json();
        return data;

    } catch (error) {
        console.log(error)
    }
}



// get Movies by ID: my favorite movie: 



const getMovieIds = async movieId => {
    const apiURL = `https://api.themoviedb.org/3/find/${movieId}?external_source=imdb_id&api_key=${API_KEY}`;
    try{
        const res = await fetch (apiURL, { method: "GET"});
        const data = await res.json();
        return data;

    } catch (error) {
        console.log(error)
    }
}



// get top rated movies

const getTopRatedMovies = async () => {
    const apiURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
    try {
        const res = await fetch (apiURL, { method: 'GET'});
        const data = await res.json();
        return data;
    
    } catch (error) {
        console.log(error)
    }
}

