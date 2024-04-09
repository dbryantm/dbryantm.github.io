import astro from "eslint-plugin-astro"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import prettier from "eslint-config-prettier"

export default [
  {
    plugins: {
      react: react,
    },
    rules: {
      ...react.configs["jsx-runtime"].rules,
    },
  },
  {
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: reactHooks.configs.recommended.rules,
  },
  prettier,
  ...astro.configs["flat/recommended"],
]
