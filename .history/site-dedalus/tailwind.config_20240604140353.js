module.exports = {
    content: [
      "./src/**/*.{html,ts}", // Include all HTML and TypeScript files in the src directory
    ],
    safelist: [], // Optionally add specific classes to always be generated even if not used
    theme: {
      extend: {}, // Customize Tailwind CSS theme options here
    },
    plugins: [], // Add any additional Tailwind CSS plugins here
  };
  