import {
  Col,
  Container,
  Form,
  InputGroup,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher"

const MyNav = ({ setFilter }) => {
  const { pathname } = useLocation()

  const onFilterInput = (e) => {
    const input = e.target.value.toLowerCase()
    if (setFilter) {
      setFilter(input)
    }
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">EPIBOOKS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" active={pathname === "/"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" active={pathname === "/about"}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/browse" active={pathname === "/browse"}>
              Browse
            </Nav.Link>
          </Nav>
          <Row>
            <Col className="d-flex gap-2 align-items-center">
              {setFilter && (
                <InputGroup>
                  <InputGroup.Text>Search</InputGroup.Text>
                  <Form.Control
                    onInput={onFilterInput}
                    placeholder="Book title"
                  />
                </InputGroup>
              )}
              <ThemeSwitcher />
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNav
