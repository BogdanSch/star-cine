import React from "react";

import Slider from "react-slick";
import Image from "../Image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/assets/images/carousel/Cinema-seats.jpg",
  "/assets/images/carousel/People-Watching-in-Cinema.jpg",
  "/assets/images/carousel/Popcorn.jpg",
  "/assets/images/carousel/Projector.jpg",
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
};

export default function Carousel() {
  return (
    <div className="w-full mx-auto">
      <div className="mt-20 px-4">
        <Slider {...sliderSettings}>
          {images.map((image, index) => {
            return (
              <div className="h-[160px]" key={`carousel-${index}`}>
                <Image
                  className="w-full "
                  src={image}
                  alt={`image ${index}`}
                  animate={true}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
