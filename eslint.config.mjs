import astro from "eslint-plugin-astro"
import vue from "eslint-plugin-vue"
import prettier from "eslint-config-prettier"

export default [
  ...astro.configs["flat/recommended"],
  ...vue.configs["flat/recommended"],
  prettier,
]
