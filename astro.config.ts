import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import node from "@astrojs/node";
// import react from "@astrojs/react";
import auth from "auth-astro";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: import.meta.env.VERCEL ? vercel() : node({
    mode: "standalone"
  }),
  integrations: [
    auth(),
    tailwind()
  ]
});
