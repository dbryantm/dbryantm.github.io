export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-tailwindcss',
    'stylelint-config-standard-vue',
    'stylelint-config-html/astro',
    'stylelint-config-html/vue',
  ],
  overrides: [
    {
      files: ['*.html', '**/*.html'],
      customSyntax: 'postcss-html',
    },
  ],
}
