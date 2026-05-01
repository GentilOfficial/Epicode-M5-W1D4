import { useState } from "react"
import { ListGroup } from "react-bootstrap"
import DeleteComment from "./DeleteComment"

const SingleComment = ({ comment }) => {
  const [isDeleted, setIsDeleted] = useState(false)
  return isDeleted ? null : (
    <ListGroup.Item
      key={comment._id}
      className="d-flex align-items-center justify-content-between"
    >
      {comment.comment} ({comment.rate})
      <DeleteComment commentId={comment._id} setIsDeleted={setIsDeleted} />
    </ListGroup.Item>
  )
}

export default SingleComment
