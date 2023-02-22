/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        robotoRegular: ['Roboto Regular'],
        robotoMedium: ['Roboto Medium'],
        robotoBold: ['Roboto Bold'],
        robotoBlack: ['Roboto Black'],
      },
      colors: {
        bgOrange: '#F8765E',
        lightBlue: '#9BDBE7',
        lightOrange: '#FDE8E1',
        darkBlueLight: '#5B6C94',
        darkBlue: '#5B6C94',
        grey: '#CDCDCD',
      },
    },
  },
  plugins: [],
}
