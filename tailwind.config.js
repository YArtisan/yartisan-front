/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00A6FB",
        secondary: "#003554",
        dark: "#051923",
        white: "#F3F3F3",
      },
    },
  },
  plugins: [],
};
