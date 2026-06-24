/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './docs/**/*.md'],
  theme: {
    extend: {
      colors: {
        speedBlack: '#2d2d2d',
        speedYellow: '#ffd700',
        speedBlue: '#002868',
        speedRed: '#bf0a30',
      }
    }
  },
  plugins: [typography],
}