/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  jit: true,
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Syne",
          "Nunito",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      animation: {
        // Bounces 5 times 1s equals 5 seconds
        "bounce-short": "bounce 3s ease-in-out 2",
      },
    },
  },
  variants: {
    extend: {},
  },

  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("daisyui"),
  ],

  daisyui: {
    themes: [
		"cupcake",
		{
        dark: {
          primary: "#E9AF98",
          secondary: "#405CA0",
          accent: "#AD6E9E",
          neutral: "#40404A",
          "base-100": "#2A303C",
          "base-200": "#242933",
          info: "#3A73D4",
          success: "#72E9C1",
          warning: "#F6D73C",
          error: "#E83B55",
          "primary-content": "#4d1600",
          "success-content": "#102742",
          "error-content": "#000000",
        },
      },
      "forest",
      "coffee",
      "dracula",
      "luxury",
      "retro",
      "cyberpunk",
      "synthwave",
      "winter",
      "acid",
      {
        memnix: {
          primary: "#E9AF98",
          secondary: "#405CA0",
          accent: "#AD6E9E",
          neutral: "#40404A",
          "base-200": "#f1f1f1",
          "base-100": "#FCFCFC",
          info: "#3A73D4",
          success: "#72E9C1",
          warning: "#F6D73C",
          error: "#E83B55",
          "primary-content": "#4d1600",
          "success-content": "#102742",
          "error-content": "#000000",
        },
      },
    ],
  },
};
