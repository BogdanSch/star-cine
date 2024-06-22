import React from "react";

import Logo from "../Logo";
import ContactsList from "../contacts/ContactsList";
import Image from "../Image";

import instagramIcon from "../../assets/images/icons/instagram.svg";
import facebookIcon from "../../assets/images/icons/facebook.svg";
import telegramIcon from "../../assets/images/icons/telegram.svg";
import youtubeIcon from "../../assets/images/icons/youtube.svg";
import githubIcon from "../../assets/images/icons/github.svg";
import figmaIcon from "../../assets/images/icons/figma.svg";

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
            <li className="transition-all duration-500 hover:translate-y-[-4px] hover:drop-shadow-accent">
              <a href="https://www.instagram.com/bohsvity_777/" target="_blank">
                <Image
                  className="w-10 h-10"
                  src={instagramIcon}
                  alt="Instagram Logo Icon Footer Link"
                />
              </a>
            </li>
            <li className="transition-all duration-500 hover:translate-y-[-4px] hover:drop-shadow-accent">
              <a
                href="https://www.facebook.com/profile.php?id=100027446175865"
                target="_blank"
              >
                <Image
                  className="w-10 h-10"
                  src={facebookIcon}
                  alt="Facebook Logo Icon Footer Link"
                />
              </a>
            </li>
            <li className="transition-all duration-500 hover:translate-y-[-4px] hover:drop-shadow-accent">
              <a href="https://t.me/+voC6fujFeLE4ZDQy" target="_blank">
                <Image
                  className="w-10 h-10"
                  src={telegramIcon}
                  alt="Telegram Logo Icon Footer Link"
                />
              </a>
            </li>
            <li className="transition-all duration-500 hover:translate-y-[-4px] hover:drop-shadow-accent">
              <a
                href="https://youtube.com/@ro-creator?si=0uQflSIg5MkF0Q1c"
                target="_blank"
              >
                <Image
                  className="w-10 h-10"
                  src={youtubeIcon}
                  alt="YouTube Logo Icon Footer Link"
                />
              </a>
            </li>
            <li className="transition-all duration-500 hover:translate-y-[-4px] hover:drop-shadow-accent">
              <a href="https://github.com/BogdanSch" target="_blank">
                <Image
                  className="w-10 h-10"
                  src={githubIcon}
                  alt="Github Logo Icon Footer Link"
                />
              </a>
            </li>
            <li className="transition-all duration-500 hover:translate-y-[-4px] hover:drop-shadow-accent">
              <a href="https://www.figma.com/@bogsvity" target="_blank">
                <Image
                  className="w-10 h-10"
                  src={figmaIcon}
                  alt="Figma Logo Icon Footer Link"
                />
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
