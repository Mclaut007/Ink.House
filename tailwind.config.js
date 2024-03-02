/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "selector",
  theme: {
    screens: {
      xl: { max: "71.25rem" }, // 1140px
      lg: { max: "62rem" }, // 992px
      md: { max: "48rem" }, // 768px
      sm: { max: "36rem" }, // 576px
      xs: { max: "30rem" }, // 480px
    },
    container: {
      padding: "0.9375rem", // 15px
      center: true,
    },
    extend: {
      // colors: {
      //   blue1: "#1a2578",
      //   red1: "#bf0830;",
      //   gray1: "#484c63",
      // },
    },
  },
  plugins: [],
};
