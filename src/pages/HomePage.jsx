import { useContext, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import AllTheBooks from "../components/AllTheBooks"
import CommentArea from "../components/CommentArea"
import MyFooter from "../components/MyFooter"
import MyNav from "../components/MyNav"
import Welcome from "../components/Welcome"
import { ThemeContext } from "../context/ThemeContext"

const HomePage = () => {
  const { theme } = useContext(ThemeContext)
  const [filter, setFilter] = useState("")
  const [selected, setSelected] = useState(null)

  return (
    <div
      className={theme === "dark" && "bg-dark text-light"}
      data-bs-theme={theme}
    >
      <MyNav setFilter={setFilter} />
      <Welcome />
      <Container>
        <Row>
          <Col xs={6} className="pt-3">
            <AllTheBooks
              filter={filter}
              selected={selected}
              setSelected={setSelected}
            />
          </Col>
          <Col xs={6}>
            <div className="position-sticky top-0 pt-3">
              <CommentArea selected={selected} />
            </div>
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </div>
  )
}

export default HomePage
