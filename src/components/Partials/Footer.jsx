import React from "react";
import Logo from "../Logo";

export default function Footer() {
  return (
    <footer className="footer bg-footer-bg mt-40 py-8">
      <div className="container text-white">
        <div className="flex flex-row gap-x-10 mb-4">
          <div className="flex-1">
            <Logo />
            <p className="text-white font-normal text-base mt-2">
              Where Movies Meet Moonlight.
            </p>
          </div>
          <div className="">
            <h5 className="text-2xl font-semibold leading-tight">
              Де нас знайти
            </h5>
            <ul className="list-none">
              <li>Сумська, 47</li>
              <li>6001</li>
              <li>Хaрків</li>
              <li>Україна</li>
              <li>bogsvity@gmail.com</li>
              <li>+380 123 456 789</li>
            </ul>
          </div>
          <nav className="">
            <h5 className="text-2xl font-semibold leading-tight">Посилання</h5>
            <ul className="list-none">
              <li>
                <a href="/">Головна</a>
              </li>
              <li>
                <a href="#about">Про кінотеатр</a>
              </li>
              <li>
                <a href="#schedule">Розклад</a>
              </li>
              <li>
                <a href="#gallery">Галерея</a>
              </li>
              <li>
                <a href="#contacts">Контакти</a>
              </li>
            </ul>
          </nav>
        </div>
        <hr />
        <div className="flex flex-column justify-center gap-y-5 mt-4">
          <ul>
            <li>
              <a href="https://www.instagram.com/bohsvity_777/">
                <svg className="w-10 h-10">
                  <use xlinkHref="#instagramIcon"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100027446175865">
                <svg className="w-10 h-10">
                  <use xlinkHref="#facebookIcon"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://t.me/+voC6fujFeLE4ZDQy">
                <svg className="w-10 h-10">
                  <use xlinkHref="#telegramIcon"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://youtube.com/@ro-creator?si=0uQflSIg5MkF0Q1c">
                <svg className="w-10 h-10">
                  <use xlinkHref="#youtubeIcon"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://github.com/BogdanSch">
                <svg className="w-10 h-10">
                  <use xlinkHref="#githubIcon"></use>
                </svg>
              </a>
            </li>
            <li>
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
