import React from "react";
import { useState, useEffect } from "react";
// import process from "dotenv";
// require("dotenv").config();

import searchIcon from "../assets/images/icons/search.svg";

const MOVIE_OMDB_API_KEY = import.meta.env.MOVIE_OMDB_API_KEY;

export default function Search(props) {
  const [searchTerm, setSearchTerm] = useState("Star Wars");

  const searchMovies = async (movieTitle) => {
    const response = await fetch(`${MOVIE_OMDB_API_KEY}&s=${movieTitle}`);
    const data = await response.json();
    props.setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies(searchTerm);
  }, []);

  return (
    <div className="search">
      <input
        placeholder="Search for movies?"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <img
        className="searchButton"
        src={searchIcon}
        alt="Search Icon"
        onClick={() => searchMovies(searchTerm)}
      />
    </div>
  );
}
