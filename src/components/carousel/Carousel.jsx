import React from "react";

import Image from "../Image";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const images = [
  "/assets/images/carousel/Cinema-seats.jpg",
  "/assets/images/carousel/People-Watching-in-Cinema.jpg",
  "/assets/images/carousel/Popcorn.jpg",
  "/assets/images/carousel/Projector.jpg",
  "/assets/images/carousel/Cinema-experience-spectators.jpg",
];

const responsive = {
  0: {
    items: 1,
  },
  600: {
    items: 2,
  },
  1000: {
    items: 3,
  },
};

export default function Carousel() {
  return (
    <OwlCarousel
      className="owl-theme mt-8"
      items={4}
      loop={true}
      nav={true}
      margin={8}
      responsive={responsive}
      autoplay={true}
      autoplayTimeout={2000}
      autoplayHoverPause={true}
    >
      {images.map((image, index) => {
        return (
          <div key={`carousel-${index}`}>
            <Image
              className="w-full h-[280px] object-cover"
              src={image}
              alt={`image ${index}`}
              animate={false}
            />
          </div>
        );
      })}
    </OwlCarousel>
  );
}
