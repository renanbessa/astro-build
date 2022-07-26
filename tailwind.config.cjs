/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      // center: true,
    },
    extend: {
      colors: {
        'mine-shaft': '#373737',
      },
    },
  },
  plugins: [],
}
