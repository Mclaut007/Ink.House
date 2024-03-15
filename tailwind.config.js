// Поместим этот файл и в финальную папку с файлами сайта, чтобы не потерялся.

/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "selector",
  theme: {
    screens: {
      1200: { max: "75rem" }, // 1200px
      xl: { max: "71.24875rem" }, // 1139.98
      lg: { max: "61.99875rem" }, // 991.98px
      lgmd: { max: "58rem" }, // 928px
      md: { max: "47.99875rem" }, // 767.98px
      mdsm: { max: "42rem" }, // 672px
      sm: { max: "35.99875rem" }, // 575.98px
      xs: { max: "29.99875rem" }, // 479.98px
      // xsmin: { max: "24rem" }, // 384px
    },
    container: {
      padding: "0.9375rem", // 15px
      center: true,
    },
    extend: {
      colors: {
        black1: "#2C2D35",
        "green-dark": "#598D66",
        "green-light": "#E1EDE6",
        gray1: "#86928B",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("hover", "@media(hover:hover) and (pointer:fine){&:hover}");
    }),
  ],
};
