import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import dotenv from 'dotenv';
dotenv.config();
export default defineConfig({
  output: "server",
  integrations: [
    tailwind(),
    react(),
  ],
});


