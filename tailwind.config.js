/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },

    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        "card-background": "#343434",
        white: "#F9FBFF",
        "white-transparent": "rgba(249, 251, 255, .7)",
        grey: "#a1a1a1",
        accent: "#007FF3",
        purple: "#7600D3",
        "purple-dark": "#4d0087",
        black: "#00040D",
        dark: "#1f2123",
        "section-bg": "#181818",
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
