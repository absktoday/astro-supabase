import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-supabase-6jn.pages.dev",
  output: "server",
  adapter: cloudflare(),
  integrations: [tailwind(), solidJs()]
});