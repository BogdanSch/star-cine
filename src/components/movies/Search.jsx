import React from "react";
import { useState, useEffect } from "react";

import searchIcon from "../../assets/images/icons/search.svg";
import { searchMovies } from "../../utils/searchMovies";

// const VITE_MOVIE_OMDB_API_KEY = import.meta.env.VITE_MOVIE_OMDB_API_KEY;

export default function Search(props) {
  const [searchTerm, setSearchTerm] = useState("Star Wars");

  // const searchMovies = async (movieTitle) => {
  //   console.log(`${VITE_MOVIE_OMDB_API_KEY}&s=${movieTitle}`);
  //   const response = await fetch(`${VITE_MOVIE_OMDB_API_KEY}&s=${movieTitle}`);
  //   const data = await response.json();
  //   props.setMovies(data.Search);
  // };

  useEffect(() => {
    searchMovies(searchTerm, props.setMovies);
  }, []);

  return (
    <div className="flex flex-row justify-center items-center px-5 py-4 sm:w-[50%] w-[100%] rounded-[1.5rem] border-2 border-white-transparent bg-dark mx-auto mb-10">
      <input
        className="flex-1 border-none font-semibold pr-6 outline-none bg-dark text-grey font-raleway"
        placeholder="Search for movies?"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        onKeyDown={(event) => {
          if (event.key.toLocaleLowerCase() === "enter")
            setSearchTerm(event.target.value);
        }}
      />
      <img
        className="w-[31px] h-[31px] cursor-pointer"
        src={searchIcon}
        alt="Search Icon"
        onClick={() => searchMovies(searchTerm, props.setMovies)}
      />
    </div>
  );
}
