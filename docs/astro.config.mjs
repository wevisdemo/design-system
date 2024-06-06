import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx(), tailwind()],
  site: `https://wevisdemo.github.io`,
  base: process.env.PUBLIC_ASTRO_BASE ?? '/',
});
