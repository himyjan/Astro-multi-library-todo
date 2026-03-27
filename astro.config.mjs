import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";
import solid from "@astrojs/solid-js";
import partytown from "@astrojs/partytown";
import prefetch from "@astrojs/prefetch";
import preact from "@astrojs/preact";

import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact({ include: ['**/preact/*'] }),
    solid({ include: ['**/solid/*'] }),
    react(({ include: ['**/react/*'] })),
    svelte(),
    vue(),
    partytown(),
    prefetch()
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  output: "server",
  adapter: vercel()
});