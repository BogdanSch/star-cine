/** @type {import('tailwindcss').Config} */

// const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      dropShadow: {
        accent: "var(--drop-shadow-accent)",
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
        search: "var(--search-box-shadow)",
      },
    },
  },
  plugins: [],
};
