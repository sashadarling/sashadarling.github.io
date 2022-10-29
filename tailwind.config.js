/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Josefin: ['Josefin Sans', 'sans-serif'],
        Fanwood: ['Fanwood Text', 'serif'],
        Shrikhand: ['Shrikhand']
      }
    },
  },
  plugins: [],
}
