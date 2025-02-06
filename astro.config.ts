// @ts-check
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import typesafeRoutes from "astro-typesafe-routes";

// https://astro.build/config
export default defineConfig({
  adapter: vercel({
    skewProtection: true,
  }),
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    typesafeRoutes(),
  ],
});
