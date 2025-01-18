/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gothic: ['Cloister Blacklight', 'serif']
      }
    },
    fontFamily: {
      sans: ['Geist', 'sans-serif']
    }
  },
  plugins: [require('tailwindcss-motion')],
}
