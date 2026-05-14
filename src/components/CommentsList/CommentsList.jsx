import { ListGroup } from "react-bootstrap"
import EmptyState from "../EmptyState/EmptyState"
import SingleComment from "../SingleComment/SingleComment"

const CommentsList = ({ comments }) => {
  return (
    <>
      {comments.length > 0 ? (
        <ListGroup>
          {comments.map((comment) => (
            <SingleComment key={comment._id} comment={comment} />
          ))}
        </ListGroup>
      ) : (
        <EmptyState message="No comments" />
      )}
    </>
  )
}

export default CommentsList
