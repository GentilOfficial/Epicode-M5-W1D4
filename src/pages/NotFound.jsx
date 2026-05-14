import { Alert, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import PageLayout from "../components/PageLayout/PageLayout"

const NotFound = () => {
  return (
    <PageLayout>
      <Row>
        <Col className="d-flex flex-column align-items-center justify-content-center gap-2 p-5">
          <Alert variant="danger" className="w-100 text-center">
            <Alert.Heading>Page not found!</Alert.Heading>
            <p>ERROR - 404</p>
            <hr />
            <Link to="/" className="btn btn-sm btn-danger">
              Back Home
            </Link>
          </Alert>
        </Col>
      </Row>
    </PageLayout>
  )
}

export default NotFound
