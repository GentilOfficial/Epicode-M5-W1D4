import { Button } from "react-bootstrap"

const DeleteComment = ({ commentId, setIsDeleted }) => {
  const deleteComment = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWQ1M2RkNWJhMGYxMjAwMTUyZTc3NjciLCJpYXQiOjE3Nzc2NTIzOTksImV4cCI6MTc3ODg2MTk5OX0.VAvCSbX2XPKujMfpdQBaHsVnFJm-O-9buKlCfbgcclc",
          },
        },
      )
      if (response.ok) {
        setIsDeleted(true)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Button variant="danger" size="sm" onClick={deleteComment}>
      Delete
    </Button>
  )
}

export default DeleteComment
