import tailwindcssMotion from "tailwindcss-motion";
import tailwindIntersect from 'tailwindcss-intersect';

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
  plugins: [tailwindcssMotion, tailwindIntersect],
}

