import astro from 'eslint-plugin-astro'
import vue from 'eslint-plugin-vue'
import prettier from 'eslint-config-prettier'

export default [
  prettier,
  ...astro.configs['flat/recommended'],
  ...vue.configs['flat/recommended'],
  {
    rules: {
      'vue/html-self-closing': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/multi-word-component-names': 'off',
    },
  },
]
