/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgGradColor1: "#2C3137",
        bgGradColor2: "#17191D",
        textColors: "#666666",
      },
      boxShadow: {
        custumShadow1: "4px 4px 12px 0px #0000004D",
        custumShadow2: "-4px -4px 12px 0px #7A869733",
      },
    },
    fontFamily: {
      Bitsumishi: ["Bitsumishi", "sans-serif"],
    },
  },
  plugins: [],
};
