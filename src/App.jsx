import { ThemeProvider } from "./context/ThemeContext"
import HomePage from "./pages/HomePage"

const App = () => {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  )
}

export default App
