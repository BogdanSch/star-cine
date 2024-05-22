import React from "react";
import logo from "../assets/images/icons/Logo.svg";

export default function Logo() {
  return (
    <div className="flex flex-row gap-x-2 items-center">
      <Image className="w-10 h-10" src={logo} alt="Start Cine Logo" />
      <a className="font-medium text-2xl text-white" href="/">
        StarCine
      </a>
    </div>
  );
}
