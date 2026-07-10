/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eaf4ff',
          100: '#d4e9ff',
          200: '#a9d3ff',
          300: '#7ebdff',
          400: '#52a7ff',
          500: '#2997ff',
          600: '#0071e3',
          700: '#005bb5',
          800: '#004a94',
          900: '#003a75',
        },
        ink: {
          DEFAULT: '#f5f5f7',
          muted: '#86868b',
        },
        surface: {
          DEFAULT: '#000000',
          raised: '#1d1d1f',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #2997ff 0%, #0071e3 100%)',
      },
      keyframes: {
        'scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-160%)' },
        },
      },
      animation: {
        'scroll-carousel': 'scroll 20s linear infinite',
      },
    },
  },
  plugins: [],
}
