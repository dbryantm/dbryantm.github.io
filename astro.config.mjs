import { defineConfig } from "astro/config"
import vue from "@astrojs/vue"
import tailwind from "@astrojs/tailwind"

import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
  site: "https://dbryantm.github.io",
  base: "/portfolio",
  integrations: [react(), tailwind()],
})
