/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Tokens dérivés du logo Activ' Sport Rivesaltes (jaune / vert / violet)
        // Ajustez ces rampes une fois le logo réel analysé précisément.
        brand: {
          yellow: {
            50: '#FFFDF2',
            100: '#FEF7C3',
            200: '#FEEC5C',
            300: '#FBD923',
            400: '#F5B700',
            500: '#E0A300',
            600: '#B87F00',
            700: '#8A5E00',
            800: '#5C3F00',
            900: '#3D2900',
          },
          green: {
            50: '#F1FAF1',
            100: '#E0F5E0',
            200: '#C2E9C2',
            300: '#94D494',
            400: '#62BA62',
            500: '#3FA34D',
            600: '#2E8A3C',
            700: '#266E31',
            800: '#20572A',
            900: '#1A4622',
          },
          purple: {
            50: '#F6F2FC',
            100: '#EDE3F7',
            200: '#D9C4EE',
            300: '#C09CE0',
            400: '#A372D2',
            500: '#8A52C4',
            600: '#7B4FBF',
            700: '#653C9E',
            800: '#52317C',
            900: '#3E2559',
          },
        },
      },
      fontFamily: {
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0, 0, 0, 0.06)',
        card: '0 10px 40px rgba(0, 0, 0, 0.08)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'fade-in': 'fade-in 0.5s ease-out both',
      },
    },
  },
  plugins: [],
};
