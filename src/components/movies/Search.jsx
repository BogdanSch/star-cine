import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../../features/searchTerm/searchTermSlice";

import searchIcon from "../../assets/images/icons/search/SearchButton.svg";
import { searchMovies } from "../../utils/searchMovies";

export default function Search(props) {
  const searchTerm = useSelector((state) => state.searchTerm.value);
  const dispatch = useDispatch();

  useEffect(() => {
    searchMovies(searchTerm, props.setMovies);
  }, []);

  return (
    <div className="flex flex-row justify-center items-center px-5 py-4 w-[50%] sm:w-[100%] rounded-[1.5rem] border-2 border-white-transparent bg-dark mx-auto mb-10">
      <input
        className="flex-1 border-none font-semibold pr-6 outline-none bg-dark text-grey font-raleway"
        placeholder="Search for movies?"
        value={searchTerm}
        onChange={(event) => dispatch(setSearchTerm(event.target.value))}
        onKeyDown={(event) => {
          if (event.key === "Enter") searchMovies(searchTerm, props.setMovies);
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
