import { Col, Container, Row } from "react-bootstrap"

const MyFooter = () => {
  return (
    <Container as="footer" fluid className="bg-body-tertiary p-5">
      <Row>
        <Col className="text-center">
          &copy; EPIBOOKS {new Date().getFullYear()}
        </Col>
      </Row>
    </Container>
  )
}

export default MyFooter
