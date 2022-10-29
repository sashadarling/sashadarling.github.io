/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#f9f9f9',
      'black': '#36383f',
      'gray': '#85888c',
      'pink': 'rgb(221, 102, 209)',
      'light-pink': 'rgb(222, 165, 216)',
      'light-green': 'rgb(158, 255, 158)',
      'light-green-transparent': 'rgba(158, 255, 158, 0.7)',
      'dark-green-transparent': 'rgba(19, 30, 19, 0.7)'
    },
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
        serif: ['Fanwood Text', ...defaultTheme.fontFamily.serif],
        script: ['Shrikhand', ...defaultTheme.fontFamily.script]
      }
    },
  },
  plugins: [],
}
