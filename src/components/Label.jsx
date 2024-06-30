import React from "react";

export default function Label({ className, htmlFor, message }) {
  return (
    <label className={className} htmlFor={htmlFor}>
      {message}
    </label>
  );
}
