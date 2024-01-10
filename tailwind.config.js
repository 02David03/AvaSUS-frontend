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
      },
      borderWidth: {
        '3': '3px'
      }
    },
    colors: {
      'red': '#D2202C',
      'red-500': '#de3a45',
      'red-400': '#db535d',
      'red-300': '#e0757c',
      'red-200': '#e09298',
      'red-100': '#edc0c3',
      'gray-dark': '#707070',
      'gray': '#d3dce6',
      'gray-light': '#F5F5F7',
      'white-dark': '#FAFAFA',
      'white': '#FFFFFF',
      'f-black': '#000000',
      'f-black-light': '#2F2E41',
      'black': '#323237',
      'black-light': '#424146'
    },
  },
  plugins: [],
}

