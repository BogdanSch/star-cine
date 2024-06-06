import React from "react";

import Image from "./Image.jsx";

export default function MovieCard(props) {
  return (
    <div
      className="rounded-lg bg-card-background w-80 transition-all duration-[600ms] hover:scale-95"
      key={`movie-${props.key}`}
    >
      <Image
        className="w-full"
        src={
          movie.Poster !== `N/A`
            ? movie.Poster
            : `https://via.placeholder.com/400`
        }
        alt={`Movie: ${movie.Title}`}
        animate={false}
      />
      <div className="mt-6 px-5 pb-6 text-center">
        <h3 className="mb-7 text-3xl font-semibold">{movie.Title}</h3>
        <p>
          Коли: Субота Опис: Фільм суботи - це космічна пригода, яка не має собі
          рівних. Приєднуйтесь до групи несподіваних героїв, які рятують всесвіт
          із гумором, музикою та багатою душею.
        </p>
        <span>{movie.Type}</span>
      </div>
    </div>
  );
}
