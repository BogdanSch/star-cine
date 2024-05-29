import React from "react";
import { useEffect } from "react";

import Logo from "../Logo";

export default function Header() {
  useEffect(() => {
    const header = document.querySelector(".header");

    function handleScroll() {
      if (window.scrollY > 0) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }

    if (header) {
      handleScroll();
      window.addEventListener("scroll", handleScroll);
    } else {
      console.error("Header element not found");
    }
  }, []);
  return (
    <header className="header py-4">
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
              <a
                href="#contacts"
                className="bg-blue-500 px-4 py-3 text-white accent"
              >
                Контакти
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
