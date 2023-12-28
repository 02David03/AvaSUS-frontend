/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
    colors: {
      'red': '#D2202C',
      'gray-dark': '#707070',
      'gray': '#F5F5F7',
      'gray-light': '#d3dce6',
      'white': '#FFFFFF',
      'f-black': '#2F2E41',
      'f-black-light': '#000000',
      'black': '#323237',
      'black-light': '#424146'
    },
  },
  plugins: [],
}

