import React from "react";

export default function Logo() {
  return (
    <div className="flex flex-row gap-x-2 items-center">
      <svg className="w-10 h-10">
        <use xlinkHref="#logoIcon"></use>
      </svg>
      <a className="font-bold text-2xl text-white" href="/">
        StarCine
      </a>
    </div>
  );
}
