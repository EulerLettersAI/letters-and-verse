import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://eulerlettersai.github.io',
  base: '/letters-and-verse',
  output: 'static',
  trailingSlash: 'always',
});
