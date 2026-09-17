// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yashaswiwrites.pages.dev',
  integrations: [mdx(), sitemap()],
});
