/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#e6f1ff',
          100: '#cce3ff',
          200: '#99c7ff',
          300: '#66aaff',
          400: '#338eff',
          500: '#0070f3',
          600: '#0059c2',
          700: '#004392',
          800: '#002c61',
          900: '#001631',
        },
        ink: {
          DEFAULT: '#ffffff',
          muted: '#a1a1aa',
        },
        surface: {
          DEFAULT: '#030303',
          raised: '#121212',
          hover: '#161616',
        },
      },
    },
  },
  plugins: [],
}
