/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        fraunces: ['"Fraunces"', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          900: '#0E0F12',
          800: '#15171C',
          700: '#1E2128',
          600: '#2A2D36',
          500: '#4A4E5A',
          400: '#7A7F8C',
          300: '#A9ADB8',
          200: '#D4D7DE',
          100: '#EAECF0',
          50: '#F4F5F7',
        },
        snow: '#FAFAF7',
        paper: '#F2EFEA',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(14,15,18,.04), 0 8px 24px rgba(14,15,18,.06)',
        lift: '0 1px 2px rgba(14,15,18,.05), 0 18px 50px rgba(14,15,18,.10)',
        pop: '0 2px 4px rgba(14,15,18,.06), 0 32px 80px rgba(14,15,18,.18)',
        'inner-soft': 'inset 0 0 0 1px rgba(14,15,18,.06)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
};
