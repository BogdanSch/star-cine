const VITE_MOVIE_OMDB_API_KEY = import.meta.env.VITE_MOVIE_OMDB_API_KEY;

const fetchMovieDetails = async (imdbID) => {
  const response = await fetch(`${VITE_MOVIE_OMDB_API_KEY}&i=${imdbID}`);
  const data = await response.json();
  return data;
};

const addAdditionalDataToMovies = async (searchedMovies) => {
  const movieDetailsPromises = searchedMovies.map(async (movie) => {
    const movieDetails = await fetchMovieDetails(movie.imdbID);
    return {
      ...movie,
      Plot: movieDetails.Plot,
    };
  });

  const moviesWithDetails = await Promise.all(movieDetailsPromises);
  return moviesWithDetails;
};

const searchMovies = async (movieTitle, setMovies) => {
  try {
    const response = await fetch(`${VITE_MOVIE_OMDB_API_KEY}&s=${movieTitle}`);
    const data = await response.json();
    const searchedMovies = await addAdditionalDataToMovies(data.Search);
    setMovies(searchedMovies);
  } catch (error) {
    throw new Error("No such a movie was found, try again later!");
  }
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
