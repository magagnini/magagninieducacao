/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          50: '#fff0f1',
          100: '#ffe1e3',
          200: '#ffc7cb',
          300: '#ffa0a7',
          400: '#ff6974',
          500: '#fb3746',
          600: '#e51929',
          700: '#c10d1b',
          800: '#9b111e', // principal
          900: '#841520',
          950: '#48060e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
