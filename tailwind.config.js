/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}', './public/index.html',
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      height: {
        '760px': '760px',
      }
    },
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

