/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}','./srceens/**/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'off-white': {
          DEFAULT: '#E3E3E3',
        },
        dark: {
          DEFAULT: '#1C1C1E',
        },
        'soft-dark': {
          DEFAULT: '#2A2A2F',
        },
      },
    },
  },
  plugins: [],
}

