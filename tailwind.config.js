/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        'primary': '#e46d5d',
        'secondary': '#e4c0a7'
      }
    },
    fontFamily: {
      'hero-font': 'Sriracha'
    }
  },
  plugins: [],
}

