import React from "react";

export default function LinkButton(props) {
  return (
    <a
      className="transition-all duration-[.8s] bg-blue-500 text-white text-2xl font-medium rounded px-3 py-1 hover:bg-purple-dark hover:rounded-xl hover:translate-y-[-2px]"
      href={props.linkTo}
    >
      {props.text}
    </a>
  );
}
