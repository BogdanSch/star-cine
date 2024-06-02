import React from "react";

export default function ContactsList() {
  return (
    <ul className="list-none">
      <li>Сумська, 47</li>
      <li>6001</li>
      <li>Хaрків</li>
      <li>Україна</li>
      <li>
        <a
          href="mailto:bogsvity@gmail.com"
          className="transition-all duration-500 ease-linear hover:underline hover:text-accent"
        >
          bogsvity@gmail.com
        </a>
      </li>
      <li>
        <a
          href="tel:+380123456789"
          className="transition-all duration-500 ease-linear hover:underline hover:text-accent"
        >
          +380 123 456 789
        </a>
      </li>
    </ul>
  );
}
