/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {

    colors: {
      'first-color':'#efcb68',
      'second-color':'#1f487e',
      'third-color':'#e1efe6',
      'fourth-color':'#aeb7b3',
      'fifth-color':'#393424',
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

