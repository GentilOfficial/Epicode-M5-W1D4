import { useContext, useState } from "react"
import { Col, Row } from "react-bootstrap"
import AllTheBooks from "../components/AllTheBooks"
import CommentArea from "../components/CommentArea"
import PageLayout from "../components/PageLayout"
import Welcome from "../components/Welcome"
import { ThemeContext } from "../context/ThemeContext"

const HomePage = () => {
  const { theme } = useContext(ThemeContext)
  const [filter, setFilter] = useState("")
  const [selected, setSelected] = useState(null)

  return (
    <PageLayout setFilter={setFilter}>
      <Welcome />
      <Row>
        <Col xs={4} sm={6} md={7} lg={8} className="pt-3">
          <AllTheBooks
            filter={filter}
            selected={selected}
            setSelected={setSelected}
          />
        </Col>
        <Col xs={8} sm={6} md={5} lg={4}>
          <div className="position-sticky top-0 pt-3">
            <CommentArea selected={selected} />
          </div>
        </Col>
      </Row>
    </PageLayout>
  )
}

export default HomePage
