import React from "react";

import Logo from "../Logo";
import LinkButton from "../LinkButton";

export default function Header() {
  return (
    <header className="header fixed w-full top-0 left-0 py-4">
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
      </div>
    </header>
  );
}
