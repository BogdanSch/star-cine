import React from "react";

import { useSelector } from "react-redux";

import Section from "../Section";
import MovieCard from "./MovieCard";
import Search from "./Search";

export default function Movies() {
  const movies = useSelector((state) => state.movies.value);

  return (
    <Section className="movies mt-40 text-white" id="movies">
      <h2 className="text-center text-4xl font-bold mb-8">Наші фільми</h2>
      <Search />
      <div className="flex flex-row gap-x-6 gap-y-4 flex-wrap justify-center">
        {movies?.length > 0 ? (
          movies.map((movie) => <MovieCard movie={movie} key={movie.imdbID} />)
        ) : (
          <div className="text-lg text-center font-semibold">
            <h2>Вибачємося, але таких фільмів на показі в нас ще немає...</h2>
          </div>
        )}
      </div>
    </Section>
  );
}
