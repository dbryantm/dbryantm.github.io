import { ref, onBeforeMount, type Ref } from "vue"

export function useTheme() {
  const theme = ref<"dark" | "light">("light")

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)")

  if (prefersDark.matches) {
    theme.value = "dark"
  }

  const setTheme = (value: "dark" | "light") => {
    theme.value = value
    document.getElementsByTagName("html")[0].classList.toggle("dark")
  }

  return { theme: theme.value, setTheme }
}
