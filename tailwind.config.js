/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#675BC8',
        primaryLight: '#9990DA',
        primaryBold: '#19143D',
        secondary: '#0A453A',
        myGray: '#696984',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        acme: ['Acme', 'sans-serif'],
      },
      boxShadow: {
        myCustomShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light'],
  },
};
