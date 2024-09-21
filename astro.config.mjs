import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://nicolasc-utal.github.io',
  base: 'blog-nospillbowl',
  integrations: [tailwind()]
});
