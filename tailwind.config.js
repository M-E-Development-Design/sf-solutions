/** @type {import('tailwindcss').Config} */
const theme = require('./tailwind.js').theme;
module.exports = {
  content: ["./pages/**/*.{html,js}"],
  mode: 'jit',
  theme: theme,
  plugins: [],
}
