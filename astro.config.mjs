import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isGH = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: 'https://webexpresschile.github.io',
  base: isGH ? '/fadez' : '/',
  integrations: [tailwind()],
  output: 'static',
});
