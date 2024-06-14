/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow:{
        neon: "0 0 5px theme('colors.green.50'), 0 0 20px theme('colors.green.950')"
      },
    },
  },
  plugins: [],
}

