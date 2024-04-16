import { defineConfig } from "astro/config"
import vue from "@astrojs/vue"
import tailwind from "@astrojs/tailwind"
import mdx from "@astrojs/mdx"
import viteEslint from "vite-plugin-eslint"

// https://astro.build/config
export default defineConfig({
  site: "https://dbryantm.github.io",
  base: "/portfolio",
  integrations: [vue(), tailwind(), mdx()],
  server: {
    port: 8000,
  },
  vite: {
    plugins: [viteEslint()],
  },
})
