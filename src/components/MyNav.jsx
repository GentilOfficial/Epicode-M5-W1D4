import {
  Col,
  Container,
  Form,
  InputGroup,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap"
import ThemeSwitcher from "./ThemeSwitcher"

const MyNav = ({ setFilter }) => {
  const onFilterInput = (e) => {
    const input = e.target.value.toLowerCase()
    setFilter(input)
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">EPIBOOKS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
          <Row>
            <Col className="d-flex gap-2 align-items-center">
              <InputGroup>
                <InputGroup.Text>Search</InputGroup.Text>
                <Form.Control onInput={onFilterInput} />
              </InputGroup>
              <ThemeSwitcher />
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNav
