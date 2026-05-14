import { useContext } from "react"
import { Container } from "react-bootstrap"
import { ThemeContext } from "../../context/ThemeContext"
import MyFooter from "../MyFooter/MyFooter"
import MyNav from "../MyNav/MyNav"

const PageLayout = ({ children, setFilter }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div
      className={`d-flex flex-column full-screen ${theme === "dark" ? "bg-dark text-light" : "bg-white text-dark"}`}
      data-bs-theme={theme}
    >
      <MyNav setFilter={setFilter} />
      <Container className="flex-fill my-3">{children}</Container>
      <MyFooter />
    </div>
  )
}

export default PageLayout
