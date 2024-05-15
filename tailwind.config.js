/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}',
  './components/**/*.{html,js}',],
  theme: {
    extend: {
      gridTemplateColumns:{
        autoFit:'repeat(auto-fit,minmax(300px,1fr))'
      },
    },
  },
  plugins: [],
}

