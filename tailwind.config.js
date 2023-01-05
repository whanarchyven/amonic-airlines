/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "blue":"#196AA6",
        "orange":"#F79420",
      },
      fontFamily:{
        "verdana":["Verdana"],
        "texgyr":["TeXGyreAdventor"],
      }
    },
  },
  plugins: [],
}