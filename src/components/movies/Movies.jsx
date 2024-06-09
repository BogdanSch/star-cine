import React from "react";
import { useState } from "react";

import Section from "../Section";
import MovieCard from "./MovieCard";
import Search from "./Search";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  return (
    <Section className="movies mt-40 text-white" id="movies">
      <h2 className="text-center text-4xl font-bold mb-8">Наші фільми</h2>
      <Search setMovies={setMovies} />
      <div className="flex flex-row gap-x-6 gap-y-4 flex-wrap justify-center">
        {movies?.length > 0 ? (
          movies.map((movie) => <MovieCard movie={movie} />)
        ) : (
          <div className="text-lg font-semibold">
            <h2>Вибаємося, таких фільмів в нас ще немає на показі...</h2>
          </div>
        )}
      </div>
    </Section>
  );
}
