import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import rehypePrettyCode from 'rehype-pretty-code';

import sitemap from '@astrojs/sitemap';

const prettyCodeOptions = {
  theme: 'one-dark-pro',
  keepBackground: false,
};

export default defineConfig({
  site: 'https://jugjoinville.github.io/',
  integrations: [tailwind(), mdx(), sitemap()],
  markdown: {
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: true
    }
  }
});