import React from "react";

import Logo from "../Logo";
import ContactsList from "../contacts/ContactsList";

export default function Footer() {
  return (
    <footer className="footer bg-section-bg mt-40 py-9">
      <div className="container text-white">
        <div className="flex flex-row gap-x-10 gap-y-6 mb-4 flex-wrap">
          <div className="flex-1">
            <Logo />
            <p className="text-white font-normal text-base mt-2">
              Where Movies Meet Moonlight.
            </p>
          </div>
          <div>
            <h5 className="text-2xl font-semibold leading-tight">
              Де нас знайти
            </h5>
            <ContactsList />
          </div>
          <nav>
            <h5 className="text-2xl font-semibold leading-tight">Посилання</h5>
            <ul className="list-none transition-all ">
              <li>
                <a
                  href="/"
                  className="transition-all duration-500 ease-linear hover:underline hover:text-gray-300"
                >
                  Головна
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="transition-all duration-500 ease-linear hover:underline hover:text-gray-300"
                >
                  Про кінотеатр
                </a>
              </li>
              <li>
                <a
                  href="#movies"
                  className="transition-all duration-500 ease-linear hover:underline hover:text-gray-300"
                >
                  Фільми
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="transition-all duration-500 ease-linear hover:underline hover:text-gray-300"
                >
                  Галерея
                </a>
              </li>
              <li>
                <a
                  href="#contacts"
                  className="transition-all duration-500 ease-linear hover:underline hover:text-gray-300"
                >
                  Контакти
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <hr />
        <div className="flex flex-col justify-center gap-y-5 mt-4">
          <ul className="flex flex-row justify-center gap-x-5 gap-y-4 flex-wrap">
            <li className="transition-all duration-500 hover:translate-y-[-4px]">
              <a href="https://www.instagram.com/bohsvity_777/">
                <svg className="w-10 h-10">
                  <use xlinkHref="#instagramIcon"></use>
                </svg>
              </a>
            </li>
            <li className="transition-all duration-500 hover:translate-y-[-4px]">
              <a href="https://www.facebook.com/profile.php?id=100027446175865">
                <svg className="w-10 h-10">
                  <use xlinkHref="#facebookIcon"></use>
                </svg>
              </a>
            </li>
            <li className="transition-all duration-500 hover:translate-y-[-4px]">
              <a href="https://t.me/+voC6fujFeLE4ZDQy">
                <svg className="w-10 h-10">
                  <use xlinkHref="#telegramIcon"></use>
                </svg>
              </a>
            </li>
            <li className="transition-all duration-500 hover:translate-y-[-4px]">
              <a href="https://youtube.com/@ro-creator?si=0uQflSIg5MkF0Q1c">
                <svg className="w-10 h-10">
                  <use xlinkHref="#youtubeIcon"></use>
                </svg>
              </a>
            </li>
            <li className="transition-all duration-500 hover:translate-y-[-4px]">
              <a href="https://github.com/BogdanSch">
                <svg className="w-10 h-10">
                  <use xlinkHref="#githubIcon"></use>
                </svg>
              </a>
            </li>
            <li className="transition-all duration-500 hover:translate-y-[-4px]">
              <a href="https://www.figma.com/@bogsvity">
                <svg className="w-10 h-10">
                  <use xlinkHref="#figmaIcon"></use>
                </svg>
              </a>
            </li>
          </ul>
          <p className="text-center">
            @Copyright. All rights reserved by StarCine.
          </p>
        </div>
      </div>
    </footer>
  );
}
