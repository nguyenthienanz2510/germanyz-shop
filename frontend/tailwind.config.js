/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#cfb160',
        secondary: 'blue',
        'color-white': '#ffffff',
        'color-black': '#000000',
        'text-link': '#cfb160',
      },
    },
  },
  plugins: [],
}
