import React from "react";

export default function Button(props) {
  return (
    <button
      className="transition-all duration-[1s] bg-purple rounded-md px-4 py-2 hover:bg-purple-dark hover:rounded-xl hover:translate-y-[-2px]"
      type={props.type}
    >
      {props.text}
    </button>
  );
}
