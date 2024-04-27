import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  site: 'https://dbryantm.github.io',
  integrations: [react(), tailwind(), mdx()],
  server: {
    port: 8000,
  },
})
