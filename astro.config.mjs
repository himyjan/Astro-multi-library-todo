import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";
import solidJs from "@astrojs/solid-js";
import lit from "@astrojs/lit";

import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import prefetch from "@astrojs/prefetch";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), svelte(), vue(), solidJs(), lit(), tailwind(), partytown(), prefetch(), image()]
});