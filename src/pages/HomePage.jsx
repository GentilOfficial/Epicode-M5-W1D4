import { useContext, useState } from "react"
import AllTheBooks from "../components/AllTheBooks"
import MyFooter from "../components/MyFooter"
import MyNav from "../components/MyNav"
import Welcome from "../components/Welcome"
import { ThemeContext } from "../context/ThemeContext"

const HomePage = () => {
  const { theme } = useContext(ThemeContext)
  const [filter, setFilter] = useState("")

  return (
    <div
      className={theme === "dark" && "bg-dark text-light"}
      data-bs-theme={theme}
    >
      <MyNav setFilter={setFilter} />
      <Welcome />
      <AllTheBooks filter={filter} />
      <MyFooter />
    </div>
  )
}

export default HomePage
