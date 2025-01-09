/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        custom: "761px",
        wide: "1448px"
      }
    }
  },
  plugins: []
};

