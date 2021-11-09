const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Lato", ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
