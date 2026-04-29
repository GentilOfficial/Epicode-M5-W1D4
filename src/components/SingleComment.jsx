import { ListGroup } from "react-bootstrap"

const SingleComment = ({ comment }) => {
  return <ListGroup.Item key={comment._id}>{comment.comment}</ListGroup.Item>
}

export default SingleComment
