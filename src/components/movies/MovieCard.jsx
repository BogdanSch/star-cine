import React from "react";

import Image from "../Image.jsx";
import { getMovieSchedule } from "../../utils/searchMovies";

export default function MovieCard({ movie }) {
  return (
    <div
      className="rounded-lg bg-card-background w-80 transition-all duration-[600ms] hover:scale-95 hover:drop-shadow-accent"
      id={`movie-${movie.imdbID}`}
    >
      <Image
        className="w-full"
        src={
          movie.Poster !== `N/A`
            ? movie.Poster
            : `https://via.placeholder.com/400`
        }
        alt={`Movie Title: ${movie.Title}`}
        animate={false}
      />
      <div className="mt-6 px-5 pb-6 text-center">
        <h3 className="mb-7 text-2xl font-semibold">{movie.Title}</h3>
        <p>
          <span className="font-bold">Коротко про сюжет:</span> {movie.Plot}
        </p>
        <p className="mt-4">
          <span className="font-bold">Рік випуску:</span> {movie.Year}
        </p>
        <p>
          <span className="font-bold">Коли: </span>
          {getMovieSchedule()}
        </p>
      </div>
    </div>
  );
}
