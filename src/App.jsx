import React from "react";

import Section from "./components/Section";
import MovieCard from "./components/Partials/MovieCard";

import Header from "./components/Partials/Header";
import Footer from "./components/Partials/Footer";
import Image from "./components/Image";

import galleryImage1 from "./assets/images/Open-Air-Cinema.jpg";
import galleryImage2 from "./assets/images/Open-air-cinema-people.jpg";
import galleryImage3 from "./assets/images/Spectators-With-Popcorn.jpg";
import galleryImage4 from "./assets/images/Spectators-focused-watching.jpg";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Section className="about mt-40" id="about">
          <div className="text-white text-center">
            <h2 className="text-4xl font-bold mb-8">Про кінотеатр</h2>
            <p className="text-2xl font-normal">
              Ласкаво просимо до нашого кінотеатру під відкритим небом! Пориньте
              в магію кіносеансів просто неба під зоряним небом.
            </p>
          </div>
        </Section>
        <Section className="schedule mt-40 text-white" id="schedule">
          <h2 className="text-center text-4xl font-bold mb-8">Наш розклад</h2>
          <div className="flex flex-row gap-x-6 gap-y-4 flex-wrap justify-center">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </Section>
        <Section className="gallery mt-40 text-white" id="gallery">
          <div className="text-white text-center">
            <h2 className="text-4xl font-bold mb-8">Галерея</h2>
            <p className="text-2xl font-normal">
              Ласкаво просимо до нашого кінотеатру під відкритим небом! Пориньте
              в магію кіносеансів просто неба під зоряним небом.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-4 gap-4">
            <div className="p-0 m-0">
              <Image src={galleryImage1} alt="Open Air Cinema Image" />
            </div>
            <div className="p-0 m-0">
              <Image src={galleryImage2} alt="Open Air Cinema Image" />
            </div>
            <div className="p-0 m-0">
              <Image src={galleryImage3} alt="Open Air Cinema Image" />
            </div>
            <div className="p-0 m-0">
              <Image src={galleryImage4} alt="Open Air Cinema Image" />
            </div>
          </div>
        </Section>
        <Section className="contacts mt-40 text-white" id="contacts">
          <div className="text-white text-center">
            <h2 className="text-4xl font-bold mb-8">
              Зареєструйтеся безкоштовно
            </h2>
            <p className="text-2xl font-normal">
              Забезпечте собі місце на цьому надзвичайному заході,
              зареєструвавшись безкоштовно. Забронюйте місце зараз і станьте
              учасником цієї ексклюзивної зустрічі.
            </p>
          </div>
          <div className="flex flex-row justify-around items-center">
            <div className="">
              <h5 className="text-2xl font-semibold leading-tight">Контакти</h5>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

export default App;
