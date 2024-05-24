import React from "react";

export default function Input(props) {
  return (
    <input
      className={`transition-all duration-[1s] bg-transparent border rounded-md border-accent px-2 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${props.className}`}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      id={props.id}
    />
  );
}
