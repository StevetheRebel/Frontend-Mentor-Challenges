/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        priLightGreen: "hsl(148,38%,91%)",
        priMediumGreen: "hsl(169,82%,27%)",
        priRed: "hsl(0, 66%, 54%)",
        neutralWhite: "hsl(0, 0%, 100%)",
        neutralMediumGrey: "hsl(186, 15%, 59%)",
        neutralDarkerGrey: "hsl(187, 24%, 22%)",
      },
      fontFamily: {
        sans: ["Karla", "sans-serif"],
      },
      screens: {
        xs: { max: "350px" },
      },
    },
  },
  plugins: [],
};
