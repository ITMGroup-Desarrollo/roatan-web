import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import dotenv from 'dotenv';
import netlify from "@astrojs/netlify";
dotenv.config();
export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [
    tailwind(),
    react(),
  ],
});


