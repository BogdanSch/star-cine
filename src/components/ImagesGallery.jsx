import React from "react";

import Image from "./Image";

export default function ImagesGallery(props) {
  return (
    <div className="mt-10 grid grid-cols-4 gap-2">
      {props.images.map((image, index) => {
        return (
          <div className="p-0 m-0" key={`imagesGallery-${index}`}>
            <Image
              src={image}
              alt={`Open Air Cinema Gallery Image ${index}`}
              animate={true}
            />
          </div>
        );
      })}
    </div>
  );
}
