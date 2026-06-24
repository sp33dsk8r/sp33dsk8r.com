/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        speedBlack: '#2d2d2d',
        speedYellow: '#ffd700',
        speedBlue: '#002868',
        speedRed: '#bf0a30',
      }
    }
  }
}