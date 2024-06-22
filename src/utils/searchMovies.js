const VITE_MOVIE_OMDB_API_KEY = import.meta.env.VITE_MOVIE_OMDB_API_KEY;

const fetchMovieDetails = async (imdbID) => {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${VITE_MOVIE_OMDB_API_KEY}&i=${imdbID}&plot=short`
  );
  const data = await response.json();
  return data;
};

// const searchMovies = async (movieTitle, setMovies) => {
//   const response = await fetch(`${VITE_MOVIE_OMDB_API_KEY}&s=${movieTitle}`);
//   const data = await response.json();
//   setMovies(data);
// if (data.Search) {
//   const detailedMovies = await Promise.all(
//     data.Search.map((movie) => fetchMovieDetails(movie.imdbID))
//   );
//   setMovies(detailedMovies);
// }
// };

const searchMovies = async (movieTitle, setMovies) => {
  console.log(`${VITE_MOVIE_OMDB_API_KEY}&s=${movieTitle}&plot`);
  const response = await fetch(`${VITE_MOVIE_OMDB_API_KEY}&s=${movieTitle}`);
  const data = await response.json();
  setMovies(data.Search);
};

const getRandomFutureDate = () => {
  const today = new Date();
  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + Math.floor(Math.random() * 30) + 1);
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
  };
  return futureDate.toLocaleDateString("uk-UA", options);
};

const getMovieSchedule = () => {
  return getRandomFutureDate();
};

export { searchMovies, getMovieSchedule };
