/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], //what abt tsx later?
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
