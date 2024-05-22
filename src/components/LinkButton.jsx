import React from "react";

export default function LinkButton(props) {
  return (
    <a
      className="bg-blue-500 text-white text-2xl font-medium rounded px-3 py-1"
      href={props.linkTo}
    >
      {props.text}
    </a>
  );
}
