/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Condensed"],
        barlow: ["Barlow"],
        quattrocento: ["Quattrocento"],
        satisfy: ["Satisfy"],
      },
      colors: {
        yellow: "#FDC913",
        "light-gray": "#5F5F5F",
        "dark-gray": "#292929",
        red: "#CE2829",
        beige: "#FAF7F2",
      },
      backgroundImage: {
        "home-banner": "url('../Assets/mile1-assets/home-banner.png')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("daisyui"),
  ],
  daisyui: {
    themes: false,
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
    rtl: true,
  },
};
