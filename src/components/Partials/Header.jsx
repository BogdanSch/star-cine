import React from "react";
import { useEffect, useRef } from "react";

import Logo from "../Logo";

export default function Header() {
  const headerRef = useRef(null);
  const headerBurgerRef = useRef(null);
  const headerMenuRef = useRef(null);

  function handleScroll(header) {
    if (window.scrollY > 0) {
      header.classList.add("header-sticky");
    } else {
      header.classList.remove("header-sticky");
    }
  }

  useEffect(() => {}, []);

  const handleBurgerClick = (event) => {
    event.preventDefault();
    const headerBurger = headerBurgerRef.current;
    const headerMenu = headerMenuRef.current;

    headerBurger.classList.toggle("active");
    headerMenu.classList.toggle("active");
    document.body.classList.toggle("lock");
  };

  useEffect(() => {
    const header = headerRef.current;
    const headerBurger = headerBurgerRef.current;

    if (header) {
      handleScroll(header);
      window.addEventListener("scroll", (event) => {
        handleScroll(header);
      });
    } else {
      console.error("Header element not found");
    }

    if (headerBurger) {
      headerBurger.addEventListener("click", handleBurgerClick);
    }

    return () => {
      window.removeEventListener("scroll", (event) => handleScroll(header));
      headerBurger.removeEventListener("click", handleBurgerClick);
    };
  }, []);

  return (
    <header
      className="header py-4 fixed top-0 left-0 w-full transition-all duration-[400ms] z-[100000]"
      ref={headerRef}
    >
      <div className="container">
        <nav className="flex flex-row justify-between items-center flex-wrap">
          <Logo />
          <div className="header__burger" ref={headerBurgerRef}>
            <span></span>
          </div>
          <ul
            className="flex flex-row justify-center items-center gap-8 flex-wrap text-white header__menu"
            ref={headerMenuRef}
          >
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
              <a href="#movies" className="p-0 m-0">
                Фільми
              </a>
            </li>
            <li>
              <a href="#gallery" className="p-0 m-0">
                Галерея
              </a>
            </li>
            <li>
              {/* <LinkButton linkTo="#contacts" text="Контакти" /> */}
              <a
                href="#contacts"
                className="transition-all duration-700 bg-blue-500 px-4 py-3 text-white accent hover:bg-purple-dark hover:translate-y-[-2px]"
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
