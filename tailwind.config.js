/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        handwritten: ['cursive'],
        indie: ['"Indie Flower"', 'cursive'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
