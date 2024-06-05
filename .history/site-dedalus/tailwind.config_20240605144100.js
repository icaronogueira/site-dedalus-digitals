/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {

      fontFamily: {
        raleway: ['"Libre Baskerville"', ...defaultTheme.fontFamily.sans],
        exo: ['"Libre Baskerville"', ...defaultTheme.fontFamily.sans]
      }

    },
  },
  plugins: [],
}

