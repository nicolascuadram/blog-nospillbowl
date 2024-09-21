import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://Nicolas-Cuadra.github.io',
  base: 'blog-nospillbowl',
  integrations: [tailwind()]
});
