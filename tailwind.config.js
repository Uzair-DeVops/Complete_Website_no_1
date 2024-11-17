/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    extend: {
      letterSpacing:{
        widest : ".5em",
      }
    },
  },
  plugins: [],
}

