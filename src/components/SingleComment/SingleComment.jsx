import { useState } from "react"
import { ListGroup } from "react-bootstrap"
import DeleteComment from "../DeleteComment/DeleteComment"

const SingleComment = ({ comment }) => {
  const [isDeleted, setIsDeleted] = useState(false)
  return isDeleted ? null : (
    <ListGroup.Item
      key={comment._id}
      className="d-flex align-items-center justify-content-between gap-3"
      data-testid="single-comment"
    >
      <span className="text-truncate">
        {comment.comment} ({comment.rate})
      </span>
      <DeleteComment commentId={comment._id} setIsDeleted={setIsDeleted} />
    </ListGroup.Item>
  )
}

export default SingleComment
