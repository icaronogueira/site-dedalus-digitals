/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {

    colors: {
      'first-color':'#331e36',
      'second-color':'#41337a',
      'third-color':'#6ea4bf',
      'fourth-color':'#c2efeb',
      'fifth-color':'#ecfee8',
      'white':'#ffffff',
      'black':'#000000', 
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

