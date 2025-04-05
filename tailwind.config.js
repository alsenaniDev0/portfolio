/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'blue': '#916CE7',
        'gray': '#CCCCCC',
      },
      maxWidth: {
        'sm': '400px',
        'lg': '1235px',
      }
    },
  },
  plugins: [],
}

