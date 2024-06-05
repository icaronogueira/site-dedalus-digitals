/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {

      fontFamily: {
        raleway: ['"Raleway"', ...defaultTheme.fontFamily.sans],
        exo: ['"Exo 2"', ...defaultTheme.fontFamily.sans]
      }

    },
  },
  plugins: [],
}

