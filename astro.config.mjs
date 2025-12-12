import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://nicolascuadram.github.io',
  base: 'blog-nospillbowl',

  vite: {
    plugins: [tailwindcss()]
  }
});
