import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax/svg';

// https://astro.build/config
export default defineConfig({
  site: 'https://flpvvvv.com',
  trailingSlash: 'always',
  compressHTML: true,
  integrations: [
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [[rehypeMathjax, {
        tex: {
          tags: 'none',
        },
        svg: {
          fontCache: 'local',
        },
      }]],
    }),
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
