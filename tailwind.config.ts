import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          c900: "#027B68",
          c800: "#0B8471",
          c700: "#178977",
          c600: "#2C9383",
          c500: "#3A9D8D",
          c400: "#54A397",
          c300: "#67ABA0",
          c200: "#88B9B2",
          c100: "#A8C9C4",
          c50: "#D1E7E7",
        },
        grey: {
          c900: "#454545",
          c800: "#585858",
          c700: "#646464",
          c600: "#767676",
          c500: "#898989",
          c400: "#979797",
          c300: "#ACACAC",
          c200: "#C6C6C6",
          c100: "#E2DFDF",
          c50: "#F0F0F0",
          c10: "#FBFAFA",
        },
      },
    },
  },
  plugins: [],
};
export default config;
