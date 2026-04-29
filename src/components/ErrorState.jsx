import { Alert } from "react-bootstrap"

const ErrorState = ({ error }) => {
  return <Alert variant="danger">{error}</Alert>
}

export default ErrorState
