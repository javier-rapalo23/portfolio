/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', '"Times New Roman"', 'serif'],
        sans: ['Manrope', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        // Carbón cálido — nunca negro puro.
        surface: {
          inset: '#08080A',
          base: '#0B0B0C',
          raised: '#131315',
          high: '#1B1B1E',
          hover: '#222226',
        },
        // Tinta cálida — el blanco puro es demasiado duro sobre carbón.
        ink: {
          DEFAULT: '#F1EDE7',
          strong: '#FFFCF8',
          muted: '#9C968D',
          faint: '#6E6862',
          ghost: '#4A453F',
        },
        // Un único acento, desaturado (H14 S55 L51).
        accent: {
          DEFAULT: '#C85A3C',
          soft: '#DE8266',
          deep: '#8E3A24',
          wash: 'rgba(200, 90, 60, 0.10)',
        },
      },
      borderColor: {
        DEFAULT: 'rgba(241, 237, 231, 0.08)',
        faint: 'rgba(241, 237, 231, 0.045)',
        soft: 'rgba(241, 237, 231, 0.08)',
        strong: 'rgba(241, 237, 231, 0.18)',
        accent: 'rgba(200, 90, 60, 0.35)',
      },
      borderRadius: {
        inner: '8px',
        card: '16px',
        panel: '26px',
      },
      // Sombras tintadas con el marrón del fondo, no negro plano.
      boxShadow: {
        soft: '0 1px 2px rgba(10, 7, 5, 0.5), 0 10px 28px -14px rgba(10, 7, 5, 0.8)',
        lift: '0 2px 6px rgba(10, 7, 5, 0.6), 0 28px 56px -28px rgba(10, 7, 5, 1)',
        ring: 'inset 0 1px 0 0 rgba(241, 237, 231, 0.06)',
      },
      zIndex: {
        nav: '40',
        sheet: '50',
        skip: '80',
        grain: '90',
      },
      maxWidth: {
        prose: '62ch',
        shell: '1240px',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
