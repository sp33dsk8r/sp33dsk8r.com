import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://sp33dsk8r.github.io',
  base: process.env.GITHUB_ACTIONS ? '/sp33dsk8r.com' : '/',
  integrations: [tailwind()],
});
