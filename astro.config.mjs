import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';

const isGH = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: 'https://webexpresschile.github.io',
  base: isGH ? '/fadez' : '/',
  integrations: [
    tailwind(),
    sanity({
      projectId: 'o9ds1vqj',
      dataset: 'production',
      useCdn: true,
      apiVersion: '2026-05-12',
    }),
  ],
  output: 'static',
});
