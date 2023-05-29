/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
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
            },
            li: {
              width: "90vw",
              textAlign: "justify",
              color: "white",
            },
            img: {
              margin: "auto",
              width: "50%",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
