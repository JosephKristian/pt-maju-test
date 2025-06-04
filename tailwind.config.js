/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      margin: {
        '-24px': '-24px',
        '-56px': '-56px',
      },
      width: {
        'calc-full-48': 'calc(100% + 48px)',
        'calc-full-112': 'calc(100% + 112px)',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

