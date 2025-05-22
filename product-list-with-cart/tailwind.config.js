/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'red-hat': ['"Red Hat Text"', 'sans-serif']
      },
      colors: {
        'pri-red': "hsl(14, 86%, 42%)",
        'pri-green': "hsl(159, 69%, 38%)"
      }
    },
  },
  plugins: [],
}