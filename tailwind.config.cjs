/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            ul :{
              overflowWrap : "break-word",
              padding :"0px"

            },
            h1: {
              width: "90vw",
              color: "white",
            },
            h2: {
              width: "90vw",
              color: "white",
            },
            h3: {
              width: "90vw",
              color: "white",
            },
            p: {
              width: "90vw",
              textAlign: "justify",
              color: "white",
              overflowWrap : "break-word"
            },
            a: {
              width: "90vw",
              textAlign: "justify",
              color: "white",
            },
            li: {
              width: "90vw",
              textAlign: "justify",
              color: "white",
            },
            img: {
              margin: "auto",
              maxHeight: "50vh",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
