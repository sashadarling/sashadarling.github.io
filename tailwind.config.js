/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
