import { configureStore } from "@reduxjs/toolkit";

import searchTermReducer from "../features/searchTerm/searchTermSlice";
import moviesReducer from "../features/movies/moviesSlice";

export default configureStore({
  reducer: { searchTerm: searchTermReducer, movies: moviesReducer },
});
