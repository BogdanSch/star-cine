/** @type {import('tailwindcss').Config} */

// const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      // ...defaultTheme.screens,
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        "card-background": "var(--color-card-background)",
        white: "var(--color-white)",
        "white-transparent": "var(--color-white-transparent)",
        grey: "var(--color-grey)",
        accent: "var(--color-accent)",
        purple: "var(--color-purple)",
        "purple-dark": "var(--color-purple-dark)",
        black: "var(--color-black)",
        dark: "var(--color-dark)",
        "section-bg": "var(--color-section-bg)",
      },
      backgroundImage: {
        "hero-pattern": "url('/img/hero-pattern.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      boxShadow: {
        search: "5px 5px 7px #1c1d1f, -5px -5px 7px #222527",
      },
    },
  },
  plugins: [],
};
