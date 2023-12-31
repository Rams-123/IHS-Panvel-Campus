/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["public/**/*.{html,js,css}"],
  theme: {
    screens: {
      xs: "350px",
      // => @media (min-width: 350px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      "brand-red": "#A91D54",
      "brand-gray": "#F3F3F3",
      "brand-light-gray": "#fbfbff",
      "brand-light-pink": "#fff1f1",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    },
    extend: {
      height: {
        13: "50px",
      },
      aspectRatio: {
        "16/9": "960 / 540",
        "4/3": "640 / 480",
      },
      fontSize: {
        "2xl+": ["28px", "34px"],
        "4xl+": ["36px", "40px"],
        "5xl+": ["54px", "1"],
      },
      textUnderlineOffset: {
        6: "6px",
      },
      fontFamily: {},
      backgroundImage: {
        "hero-banner-ihs": "url('assets/banner-img/ihs-hero-campus.webp')",
        card: "linear-gradient(to right, transparent 20%, #A91D54 20%)",
        card1: "linear-gradient(172deg,#a91d54 70% , white 30%)",
        "ihs-gradient1": "linear-gradient(90deg, rgba(0, 0, 0, 0.73) 18.22%, rgba(0, 0, 0, 0.00) 50%)",
        
      },
      backgroundColor: {
        "ihs-gradient": "rgba(0, 0, 0, 0.5)", 
        "modal-dark-fade": "rgba(0, 0, 0, 0.4)",
        // "none": "transparent",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },
  plugins: [],
};
