import React from "react";

import Image from "../Image.jsx";
import CardImage from "../../assets/images/Spectators-With-Popcorn.jpg";

export default function MovieCard(props) {
  return (
    <div className="rounded-lg bg-card-background w-80" key={props.key}>
      <Image className="w-full" src={CardImage} alt="Preview" />
      <div className="mt-6 px-5 pb-6 text-center">
        <h3 className="mb-7 text-3xl font-semibold">Вартові Галактики</h3>
        <p>
          Коли: Субота Опис: Фільм суботи - це космічна пригода, яка не має собі
          рівних. Приєднуйтесь до групи несподіваних героїв, які рятують всесвіт
          із гумором, музикою та багатою душею.
        </p>
      </div>
    </div>
  );
}
