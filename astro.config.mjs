import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import viteEslint from 'vite-plugin-eslint'

// https://astro.build/config
export default defineConfig({
  site: 'https://dbryantm.github.io',
  base: '/portfolio',
  integrations: [react(), tailwind(), mdx()],
  server: {
    port: 8000,
  },
  vite: {
    plugins: [
      {
        ...viteEslint(),
        apply: 'serve',
      },
    ],
  },
})
