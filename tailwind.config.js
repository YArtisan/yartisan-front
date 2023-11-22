/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "card-grow": "growHeight 0.5s ease-in-out",
        "card-shrink": "lowerHeight 0.5s ease-in-out",
      },
      colors: {
        primary: "#CAF1F6",
        secondary: "#00A2C7",
        accent: "#7DCEDC",
        card: "#F2FAFB",
        "primary-0.9": "rgba(0,53,84,0.9)",
      },
    },
  },
  plugins: [],
};
