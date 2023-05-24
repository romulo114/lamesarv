const colors = require("tailwindcss/colors");

module.exports = {
  // purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      dropShadow: {
        sm: "0 1px 1px rgba(0,0,0,0.05)",
        md: "0 4px 3px rgba(0, 0, 0, 0.25)",
        lg: "0 10px 8px rgba(0, 0, 0, 0.20)",
        xl: "0 20px 13px rgba(0, 0, 0, 0.95)",
        "2xl": "0 25px 25px rgba(0, 0, 0, 0.15)",
        "3xl": "0 35px 35px rgba(0, 0, 0, 1.00)",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      gray: "#666",
      indigo: {
        50: "#f2f4f7",
        100: "#e6e9ef",
        200: "#bfc9d6",
        300: "#99a8bd",
        400: "#4d668c",
        500: "#00255a",
        600: "#002151",
        700: "#001c44",
        800: "#001636",
        900: "#00122c",
      },
      red: {
        50: "#fbf2f3",
        100: "#f7e6e6",
        200: "#ebc0c2",
        300: "#de9b9d",
        400: "#c64f53",
        500: "#ad0409",
        600: "#9c0408",
        700: "#820307",
        800: "#680205",
        900: "#550204",
      },
      gray: {
        100: "#F8F8F8",
        200: "#E0E0E0",
        300: "#C8C8C8",
        400: "#888888",
        500: "#707070",
        600: "#505050",
        700: "#383838",
        800: "#282828",
        900: "#101010",
      },
    },
  },
  variants: {
    extend: {
      scrollSnapType: ["responsive"],
      scrollBehavior: ["motion-safe", "motion-reduce", "responsive"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwindcss-scroll-snap"),
    require("tailwind-scroll-behavior")(), // no options to configure
  ],
};
