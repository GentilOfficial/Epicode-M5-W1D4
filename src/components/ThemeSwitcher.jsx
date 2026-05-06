import { Moon, Sun } from "lucide-react"
import { useContext } from "react"
import { Button } from "react-bootstrap"
import { ThemeContext } from "../context/ThemeContext"

const ThemeSwitcher = () => {
  const { theme, setNewTheme } = useContext(ThemeContext)

  const switchTheme = () => {
    setNewTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <Button size="sm" onClick={switchTheme} variant="secondary">
      {theme === "light" ? <Moon /> : <Sun />}
    </Button>
  )
}

export default ThemeSwitcher
