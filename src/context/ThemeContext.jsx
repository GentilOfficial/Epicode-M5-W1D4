import { createContext, useState } from "react"

export const ThemeContext = createContext()

const getFromLocalStorage = () => {
  return localStorage.getItem("theme") || "light"
}

const setLocalStorage = (newTheme) => {
  localStorage.setItem("theme", newTheme)
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getFromLocalStorage())

  const setNewTheme = (newTheme) => {
    const normalizedTheme =
      newTheme === "dark" || newTheme === "light" ? newTheme : "light"
    setTheme(normalizedTheme)
    setLocalStorage(normalizedTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setNewTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
