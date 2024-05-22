import React from "react";

import Logo from "../Logo";
import LinkButton from "../LinkButton";

export default function Header() {
  return (
    <header className="header py-6">
      <div className="container">
        <nav className="flex flex-row justify-between items-center flex-wrap">
          <Logo />
          <ul className="flex flex-row justify-center gap-8 flex-wrap text-white">
            <li>
              <a href="/" className="p-0 m-0">
                Головна
              </a>
            </li>
            <li>
              <a href="#about" className="p-0 m-0">
                Про кінотеатр
              </a>
            </li>
            <li>
              <a href="#schedule" className="p-0 m-0">
                Розклад
              </a>
            </li>
            <li>
              <a href="#gallery" className="p-0 m-0">
                Галерея
              </a>
            </li>
            <li>
              <a href="#contacts" className="bg-blue-500 px-4 py-3 text-white">
                Контакти
              </a>
            </li>
          </ul>
        </nav>
        <div className="hero py-40" id="hero">
          <div className="text-white flex flex-col gap-y-8 items-start w-3/6">
            <h1 className="text-6xl font-bold">
              Кінотеатр просто неба: Star Cine
            </h1>
            <p className="text-2xl font-thin">
              Ласкаво просимо до нашого кінотеатру під відкритим небом! Пориньте
              в магію кіносеансів просто неба під зоряним небом.
            </p>
            <LinkButton text="Зареєструватися" linkTo="#contacts" />
          </div>
        </div>
      </div>
    </header>
  );
}
