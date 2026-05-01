import { useEffect, useState } from "react"
import AddComment from "./AddComment"
import CommentsList from "./CommentsList"
import ErrorState from "./ErrorState"
import LoadingSpinner from "./LoadingSpinner"

const CommentArea = ({ asin }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [comments, setComments] = useState([])
  const [error, setError] = useState("")

  const getComments = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/books/${asin}/comments`,
      )
      const data = await response.json()
      setComments(data)
    } catch (error) {
      console.error(error)
      setError("An error occured during comments fetch...")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getComments()
  }, [])

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : error !== "" ? (
        <ErrorState error={error} />
      ) : (
        <>
          <AddComment
            asin={asin}
            setIsLoading={setIsLoading}
            setSectionError={setError}
          />
          <CommentsList comments={comments} />
        </>
      )}
    </>
  )
}

export default CommentArea
