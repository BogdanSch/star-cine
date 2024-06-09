import React from "react";

export default function Carousel() {
  const images = [
    "./assets/images/carousel/Cinema-seats.jpg",
    "./assets/images/carousel/People-Watching-in-Cinema.jpg",
    "./assets/images/carousel/Popcorn.jpg",
    "./assets/images/carousel/Projector.jpg",
  ];

  return (
    <div className="w-3/4 mx-auto">
      <div className="mt-20">
        {images.map((image) => {
          return (
            <div>
              <img src={image} alt="image" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
