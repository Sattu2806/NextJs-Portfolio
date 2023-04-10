/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        Inter: "Inter, sans-serif",
        Roboto_mono: "Roboto Mono , monospace",
        Dm_Sans: "'DM Sans , sans-serif",
      },
      colors: {
        green: "#48bf53",
        white: "#ffffff",
        black: "#000000",
        gray: "#888888",
        gray2: "#242B2E",
        gray3: "#1E1F21",
        darkgray: "#1A1C20",
        light_gray: "#ececec",
        red: "#DD0031",
        blue: "#1560BD",
        react: "#61DBFB",
        background: "#303336",
    },
      backgroundImage: (theme) => ({
        "gradient-primary": `linear-gradient(to right, ${theme(
          "colors.green"
        )}, ${theme("colors.black")})`,
        "gradient-primary-2":
          "linear-gradient(140.3deg, rgba(44, 47, 50, 0.99) 15.21%, rgba(28, 29, 30, 0.94) 29.99%, rgba(40, 41, 41, 0.8) 46.43%, rgba(16, 16, 16, 0.71) 64.3%, rgba(25, 25, 26, 0.3) 86.01%)",
      })},
    lineHeight: {
      "extra-loose": "2.5",
      12: "3.3rem",
      1: "1.5rem",
    },
    gridTemplateColumns: {
      2: "1.2fr 1fr",
      1: "1fr 1fr",
      0: "1fr",
    },
    borderRadius: {
      50: "50%",
      xl: "3px",
      "2xl": "13px",
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.263rem",
      "3xl": "1.553rem",
      "3.5xl": "1.853rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "6xl": "4rem",
    },
    boxShadow: {
      xl: "0px 4px 40px 1px rgb(76 33 33 / 50%)",
      "2xl": "0px 4px 40px 1px rgb(51 68 53 / 30%)",
      "3xl": "0px 4px 40px 1px rgb(63 83 126)",
      "4xl": "2px 4px 40px 1px rgb(0 0 0 / 49%)",
      "5xl": "0px 20px 10px 0px rgb(0 0 0 / 30%)",
      "6xl": "0px 20px 10px 0px rgb(0 0 0 / 489%)",
    },
    scale: {
      "-100": "-1",
    },
  },
  plugins: [],
};
