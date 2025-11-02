/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gothic: ['Aktura Regular', 'serif'],
        vintage: ['Midway Retro', 'cursive']
      }
    },
    fontFamily: {
      sans: ['Geist', 'sans-serif'],
      mono: ['Google Sans Code', 'monospace']
    }
  },
  plugins: [require('tailwindcss-motion')],
}
