
// async MovieGenres ()

const movieGenres = async () => {
    const data = await getMovieGenres();
    const movieGenresList = document.getElementById("movieGenresList");

    data.genres.forEach(movieGenre => {
        const li = document.createElement ("li");
        const liContent = document.createTextNode(`Genre: ${movieGenre.name}, id: ${movieGenre.id}`)
        li.appendChild(liContent);
        movieGenresList.append(li);
    });

};
movieGenres();


// async function get my favorite movie:


const movieIds = async () => {
    const data = await getMovieIds("tt1375666");
    const movieIdsList = document.getElementById("movieIdsList");

    const movie = data.movie_results[0];
    const li = document.createElement ("li");
    const liContent = document.createTextNode ( `Title: ${movie.title}, Average vote: ${movie.vote_average}, Release date: ${movie.release_date}`);
    li.appendChild(liContent);
    movieIdsList.appendChild(li);
}
movieIds();


// async function getTopRatedMovies()

const topRatedMoviesAllTimes = async () => {
    const data = await getTopRatedMovies();
    const topRatedMoviesList = document.getElementById("topRatedMovies");

    const topTen = data.results.splice(0, 10);

    topTen.forEach(movie => {
        const li = document.createElement("li");
        const liContent = document.createTextNode ( `movie: ${movie.title}, rating: ${movie.vote_average}`);
        li.appendChild(liContent);
        topRatedMoviesList.appendChild(li);
    })

}
topRatedMoviesAllTimes();

// top rated movies in year 1990:

const topRatedMoviesInYearX = async year => {
    const data = await getTopRatedMoviesInYearX(year);
    const topRatedMovieInYearX = document.getElementById ("topRatedMoviesYearX");
    topRatedMovieInYearX.innerHTML ="";
    const topTen = data.results.splice (0, 10);

    topTen.forEach(movie => {
        const li = document.createElement("li");
        const liContent = document.createTextNode ( `movie: ${movie.title}, rating: ${movie.vote_average}`);
        li.appendChild(liContent);
        topRatedMovieInYearX.appendChild(li);
    })
}

topRatedMoviesInYearX();


// async function getTopRatedActionMovies:


const topRatedActionMovies = async () => {
    const data = await getTopRatedActionMovies();
    const topRatedActionMovies = document.getElementById ("topRatedActionMovies");
    // topRatedActionMovies.innerHTML ="";
    const topTen = data.results.splice (0, 10);

    topTen.forEach(movie=> {
        const li = document.createElement("li");
        const liContent = document.createTextNode (`Movie: ${movie.title}, rating: ${movie.vote_average}`)
        li.appendChild(liContent);
        topRatedActionMovies.appendChild(li);
    })
}

topRatedActionMovies();

// get list of movies from 1975

const listOfMovies = async year => {
    const data = await getListOfMovies(year);
    const listOfMovies = document.getElementById ("listOfMovies");
    const topTwenty = data.results.splice (0, 10);

    topTwenty.forEach (movie => {
        const li = document.createElement("li");
        const liContent = document.createTextNode (`Movie: ${movie.title}, rating: ${movie.vote_average}`);
        li.appendChild(liContent);
        listOfMovies.appendChild(li);
    })
}
listOfMovies();