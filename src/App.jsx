import React from "react";

import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";

import Section from "./components/Section";
import ContactsList from "./components/contacts/ContactsList";
import Logo from "./components/Logo";
import LinkButton from "./components/LinkButton";

// import Carousel from "./components/carousel/Carousel";
import ImagesGallery from "./components/ImagesGallery";
import Movies from "./components/movies/Movies";
import ContactForm from "./components/contacts/ContactForm";

import galleryImage1 from "./assets/images/Open-Air-Cinema.jpg";
import galleryImage2 from "./assets/images/Open-air-cinema-people.jpg";
import galleryImage3 from "./assets/images/Spectators-With-Popcorn.jpg";
import galleryImage4 from "./assets/images/Spectators-focused-watching.jpg";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Section className="hero py-40" id="hero">
          <div className="text-white flex flex-col gap-y-8 items-start w-3/6">
            <h1 className="text-6xl font-bold">
              Кінотеатр просто неба: "Star Cine"
            </h1>
            <p className="text-2xl font-thin">
              Ласкаво просимо до нашого кінотеатру під відкритим небом! Пориньте
              в магію кіносеансів просто неба під зоряним небом.
            </p>
            <LinkButton text="Зареєструватися" linkTo="#contacts" />
          </div>
        </Section>
        <Section className="about mt-40" id="about">
          <div className="text-white text-center">
            <h2 className="text-4xl font-bold mb-8">Про кінотеатр</h2>
            <p className="text-2xl font-normal">
              Ласкаво просимо до нашого кінотеатру під відкритим небом! Пориньте
              в магію кіносеансів просто неба під зоряним небом.
            </p>
          </div>
          {/* <Carousel /> */}
        </Section>
        <Movies />
        <Section className="gallery mt-40 text-white" id="gallery">
          <div className="text-white text-center">
            <h2 className="text-4xl font-bold mb-8">Галерея</h2>
            <p className="text-2xl font-normal">
              Ласкаво просимо до нашого кінотеатру під відкритим небом! Пориньте
              в магію кіносеансів просто неба під зоряним небом.
            </p>
          </div>
          <ImagesGallery
            images={[
              galleryImage1,
              galleryImage2,
              galleryImage3,
              galleryImage4,
            ]}
          />
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
          <div className="flex flex-row justify-around items-center mt-12">
            <div className="flex flex-col gap-y-4">
              <h5 className="text-2xl font-semibold leading-tight">Контакти</h5>
              <Logo />
              <ContactsList />
              {/*  */}
            </div>
            <div className="flex flex-col rounded-lg bg-transparent px-11 py-16 border-4 border-accent ">
              <h5 className="text-2xl font-semibold leading-tight">
                Реєстрація
              </h5>
              <ContactForm />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

export default App;
