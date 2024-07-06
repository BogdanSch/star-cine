import { configureStore } from "@reduxjs/toolkit";
import searchTermReducer from "../features/searchTerm/searchTermSlice";

export default configureStore({
  reducer: { searchTerm: searchTermReducer },
});
