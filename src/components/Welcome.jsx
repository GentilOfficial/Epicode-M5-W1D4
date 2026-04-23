import { Alert, Col, Container, Row } from "react-bootstrap"

const Welcome = () => {
  return (
    <Container className="my-4">
      <Row>
        <Col>
          <h1>EPIBOOKS</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Alert variant="info">
            An incredible book illustration from EPIBOOKS!
          </Alert>
        </Col>
      </Row>
    </Container>
  )
}

export default Welcome
