/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {

    colors: {
      'first':'#331e36',
      'second':'#41337a',
      'third':'#6ea',
      'fourth':'',
      'fifth':'',
    },

    extend: {

      fontFamily: {
        raleway: ['"Raleway"'],
        exo: ['"Exo 2"']
      }

    },
  },
  plugins: [],
}

