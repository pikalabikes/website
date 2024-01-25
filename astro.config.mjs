import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

const dev = import.meta.env.MODE === 'development';

// https://astro.build/config
export default defineConfig({
  site: 'https://pikalabikes.github.io',
  base: dev ? '/website' : '',
  integrations: [mdx()]
});
