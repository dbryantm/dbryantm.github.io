export default {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-tailwindcss',
    'stylelint-config-html/astro',
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
  },
}
