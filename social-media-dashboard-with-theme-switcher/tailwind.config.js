/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        limeGreen: "hsl(163, 72%, 41%)",
        brightRed: "hsl(356, 69%, 56%)",
        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        youtube: "hsl(348, 97%, 39%)",
        desaturatedBlueText: "hsl(228, 34%, 66%)",
        whiteText: "hsl(0, 0%, 100%)",
        darkGrayishBlueText: "hsl(228, 12%, 44%)",
        veryDarkBlueText: "hsl(230, 17%, 14%)",
        darkDesaturatedBlue: "hsl(228, 28%, 20%)",
        toggleLightGrayishBlue: "hsl(230, 22%, 74%)",
      },
      backgroundImage: {
        "toggle-gradient":
          "linear-gradient(90deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
      },
      backgroundColor: {
        veryPaleBlueTopBG: "hsl(225, 100%, 98%)",
        whiteBG: "hsl(0, 0%, 100%)",
        lightGrayishBlueBG: "hsl(227, 47%, 96%)",
        veryDarkBlueBG: "hsl(230, 17%, 14%)",
        veryDarkBlueTopBG: "hsl(232, 19%, 15%)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
