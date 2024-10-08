/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslateblue: "#003660",
        darkslategray: {
          100: "#454545",
          200: "#333",
          300: "#2d2d2d",
          400: "rgba(45, 45, 45, 0.1)",
          DEFAULT: "#38383d",
        },
        black: {
          DEFAULT: "#000",
          1: "#0b0a04",
        },
        darkblue: "#3a0ca3",
        palevioletred: "#d05270",
        "dark-blue": {
          DEFAULT: "#15283d",
          100: "#2c2e47",
        },
        slategray: "#475c70",
        "dark-blue-10": "rgba(21, 40, 61, 0.1)",
        gray: {
          DEFAULT: "rgba(21, 40, 61, 0.7)",
          100: "#939393",
          200: "#828282",
          300: "#0d0c0c",
          400: "rgba(0, 0, 0, 0.65)",
          500: "rgba(0, 0, 0, 0)",
          "100": "#0d0c0c",
          "200": "#0c0b0b",
          "300": "rgba(21, 40, 61, 0.7)",
          "400": "rgba(21, 40, 61, 0.6)",
          "500": "rgba(21, 40, 61, 0.8)",
          "600": "rgba(21, 40, 61, 0.5)",
        },
        "main-background": "#f3f5fc",
        primary: "#050509",
        "border-1": "#eaeeff",
        "gray-1": "#9f9f9f",
        text: "#828284",
        "variant-background": "#003061",
        secondary: "#58585b",
        lavender: "#d0dbff",
        tan: "#bdb499",
        "light-blue-background": "#eef4f8",
        ghostwhite: "#f8f8ff",
        gainsboro: {
          100: "#dee2e6",
          200: "#e0e0e0",
          300: "#d3dde7",
          DEFAULT: "#dedee6",
        },
        steelblue: "rgba(56, 141, 208, 0.28)",
        mediumslateblue: "#3763f4",
        green: "#388dd0",
        deepskyblue: "#52a6eb",
        royalblue: "#527dff",
        "grey-light-2": "#f8f8f8",
        "dark-yellow": "#362e00",
        "grey-3": "#dedede",
        "text-default-default": "#1e1e1e",
        "text-default-secondary": "#757575",
        "background-brand-default": "#2c2c2c",
        "text-brand-on-brand": "#f5f5f5",
        "border-neutral-secondary": "#767676",
        "background-neutral-tertiary": "#e3e3e3",
        "text-utilities-text-on-overlay": "#0c0c0d",
        "green-light": "#f0f8ed",
      },
      spacing: {
        "spacing-xs": "8px",
        "spacing-s": "24px",
        "space-1600": "64px",
        "space-600": "24px",
        "space-200": "8px",
        "space-400": "16px",
        "space-300": "12px",
        "space-2001": "8px",
      },
      fontFamily: {
        inter: "Inter",
        montserrat: "Montserrat",
        "body-body-2": "Inter",
        "heading-heading-5": "Merriweather",
        "body-3": "'DM Sans'",
        "work-sans": "'Work Sans'",
        "dm-sans": "'DM Sans'",
        "small-text": "Inter",
        ledger: ["Ledger"],
        button: "Manrope",
        "form-field": "'DM Sans'",
        "header-1": "'Work Sans'",
        "m3-title-medium": "Roboto",
      },
      borderRadius: {
        "3xs": "10px",
        "80xl": "99px",
        "8xs": "5px",
        "81xl": "100px",
        xl: "20px",
        "69xl": "88px",
        "13xl": "32px",
        "8xl": "27px",
        "21xl": "40px",
        mid: "17px",
        "17xl": "36px",
        "radius-200": "8px",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      "5xl": "24px",
      lgi: "19px",
      sm: "14px",
      xs: "12px",
      inherit: "inherit",
      "10xl": "29px",
      "17xl": "36px",
      "23xl": "42px",
      "3xl": "22px",
      "6xl": "25px",
      "15xl": "34px",
      "11xl": "30px",
      mid: "17px",
      xl: "20px",
      "29xl": "48px",
      "19xl": "38px",
      "37xl": "56px",
      "45xl": "64px",
      "32xl": "51px",
      "25xl": "44px",
      "7xl": "26px",
      "16xl": "35px",
      "base-8": "15.8px",
      "13xl": "32px",
      "9xl": "28px",
      "53xl": "72px",
      "39xl": "58px",
      "24xl": "43px",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};