import React from "react";

export default function Image(props) {
  return (
    <img
      className={`${props.className} ${props.animate ? "transition-all duration-500 hover:scale-75" : ""}`}
      src={props.src}
      alt={props.alt}
    />
  );
}
