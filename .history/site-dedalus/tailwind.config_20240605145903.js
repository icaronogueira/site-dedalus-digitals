/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {

    colors: {
      'first-color':'#331e36',
      'second':'#41337a',
      'third':'#6ea4bf',
      'fourth':'#c2efeb',
      'fifth':'#ecfee8',
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

