import { configureStore } from "@reduxjs/toolkit";

import searchTermReducer from "../features/searchTerm/searchTermSlice";
import moviesReducer from "../features/movies/moviesSlice";
import showModalsReducer from "../features/showModals/showModalsSlice";
import formErrorsReducer from "../features/formErrors/formErrorsSlice";

export default configureStore({
  reducer: {
    searchTerm: searchTermReducer,
    movies: moviesReducer,
    showModals: showModalsReducer,
    formErrors: formErrorsReducer,
  },
});
