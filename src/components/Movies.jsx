import React from "react";

import Section from "./Section";
import MovieCard from "./MovieCard";

export default function Movies(props) {
  return (
    <Section className="movies mt-40 text-white" id="movies">
      <h2 className="text-center text-4xl font-bold mb-8">Наш розклад</h2>
      <div className="flex flex-row gap-x-6 gap-y-4 flex-wrap justify-center">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </Section>
  );
}
