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
          50: '#f5f7ff',
          100: '#ebf0ff',
          200: '#d6e0ff',
          300: '#b3c5ff',
          400: '#8ca3ff',
          500: '#667eea',
          600: '#5568d3',
          700: '#4451b8',
          800: '#363d94',
          900: '#2d3270',
        },
        secondary: {
          500: '#764ba2',
          600: '#5f3c82',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
