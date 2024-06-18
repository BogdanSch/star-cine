const VITE_MOVIE_OMDB_API_KEY = import.meta.env.VITE_MOVIE_OMDB_API_KEY;

const searchMovies = async (movieTitle, setMovies) => {
  console.log(`${VITE_MOVIE_OMDB_API_KEY}&s=${movieTitle}`);
  const response = await fetch(`${VITE_MOVIE_OMDB_API_KEY}&s=${movieTitle}`);
  const data = await response.json();
  setMovies(data.Search);
};

const getMovieSchedule = (movie) => {
  return "Понеділок, 26 червня, о 20:00";
};

export { searchMovies, getMovieSchedule };
