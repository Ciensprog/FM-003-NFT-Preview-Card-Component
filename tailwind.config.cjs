const { fontFamily } = require('tailwindcss/defaultTheme')

const colors = {
  cyan: '#00FFF8',
  'dark-blue': {
    400: '#2E405A',
    700: '#15263F',
    900: '#0D192C',
  },
  'soft-blue': '#8BACD9',
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: colors,
      borderColor: colors,
      colors,
      fontFamily: {
        outfit: ['Outfit', ...fontFamily.serif],
      },
      minHeight: {
        screen: '100vh',
      },
    },
  },
  plugins: [],
}
