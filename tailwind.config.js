/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "card-grow": "artisanDetailsGrow 0.5s ease-in-out",
        "card-shrink": "artisanDetailsShrink 0.5s ease-in-out",
      },
      colors: {
        primary: "#003554",
        secondary: "#00A6FB",
        dark: "#051923",
        lightwhite: "#F3F3F3",
        "primary-0.9": "rgba(0,53,84,0.9)",
        tertiary: "#CAF1F6"
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
      },
    },
  },
  plugins: [],
};
