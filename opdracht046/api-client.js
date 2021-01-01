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

// get top rated movies in year 1988:

const getTopRatedMoviesInYearX = async () => {
    const apiURL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=2000&primary_release_year=1990`;
    try {
        const res = await fetch (apiURL, {method: "GET"});
        const data = await res.json();
        return data;
    } catch (eror){
        console.log(error)
    }
}

// get top rated Action movies:

const getTopRatedActionMovies = async () => {
    const apiURL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=2000&with_genres=28`;
    try {
        const res = await fetch (apiURL, {method: "GET"});
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

// get list of movies in year 1975:

const getListOfMovies = async () => {
    const apiURL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=vote_average.desc&primary_release_year=1975&vote_count.gte=500`;
    try {
        const res = await fetch (apiURL, {method: "GET"});
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}