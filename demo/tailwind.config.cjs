/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "astro-bg": "hsl(273, 37%, 93%)",
        "astro-bg-darker": "rgba(135, 45, 230, 0.1)",
      },
    },
  },
  plugins: [],
};
