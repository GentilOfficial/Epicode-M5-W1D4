import { Alert, Col, Row } from "react-bootstrap"

const Welcome = () => {
  return (
    <>
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
    </>
  )
}

export default Welcome
