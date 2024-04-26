export default {
  '**/*.{astro,js,jsx,md,ts,tsx}': [
    'bun run format',
    'bun run lint',
    'bun run test',
  ],
}
