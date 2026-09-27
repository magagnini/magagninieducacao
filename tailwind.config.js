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
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        '3d-wine': '0 10px 25px -5px rgba(155, 17, 30, 0.4), 0 8px 10px -6px rgba(155, 17, 30, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.35)',
        '3d-wine-hover': '0 15px 30px -5px rgba(155, 17, 30, 0.6), 0 10px 12px -6px rgba(155, 17, 30, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.45)',
        '3d-dark': '0 10px 25px -5px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.15)',
      }
    },
  },
  plugins: [],
}
