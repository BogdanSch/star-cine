import React from "react";

export default function Image(props) {
  return <img className={props.className} src={props.src} alt={props.alt} />;
}
