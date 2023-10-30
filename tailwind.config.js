/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#003554",
        secondary: "#00A6FB",
        dark: "#051923",
        lightwhite: "#F3F3F3",
        "primary-0.9" : "rgba(0,53,84,0.9)"
      },
    },
  },
  plugins: [],
};
