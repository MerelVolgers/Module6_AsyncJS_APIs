
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
    const liContent = document.createTextNode ( `${movie.title}`);
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

// top rated movies in year X:

// const topRatedMoviesInYearX = async year => {
//     const data = await getTopRatedMovies();
//     const topRatedMovieInYearX = document.getElementById ("topRatedMoviesYearX");

//     const topTen = data.results.splice (0, 10);

//     topTen.forEach(movie => {
//         const li = document.createElement("li");
//         const liContent = document.createTextNode ( `movie: ${movie.title}, rating: ${movie.vote_average}`);
//         li.appendChild(liContent);
//         topRatedMovieInYearX.appendChild(li);
//     })
// }

// topRatedMoviesInYearX();


// async function getTopRatedActionMovies()
