import React from "react";

export default function Label({ className, htmlFor, message }) {
  return (
    <label className={`text-sm ${className}`} htmlFor={htmlFor}>
      {message}
    </label>
  );
}
