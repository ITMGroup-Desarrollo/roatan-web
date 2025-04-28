import { defineConfig } from 'astro/config';
import i18n from '@astro/i18n';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    i18n(),
    tailwind(),
  ],
});
