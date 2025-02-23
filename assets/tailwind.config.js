/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./assets/**/*.{vue,js,ts,jsx,tsx}",
      "./vendor/morgenbord/core-bundle/templates/**/*.{html,html.twig}",
    ],
    theme: {
      extend: {},
    },
    plugins: [
      // require("daisyui")
    ],
  }