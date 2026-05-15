import { useEffect, useState } from "react"
import AddComment from "../AddComment/AddComment"
import CommentsList from "../CommentsList/CommentsList"
import ErrorState from "../ErrorState/ErrorState"
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner"

const CommentArea = ({ selected }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [comments, setComments] = useState([])
  const [error, setError] = useState("")

  const getComments = async () => {
    setIsLoading(true)
    setError("")
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/books/${selected}/comments`,
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
    if (selected) {
      getComments()
    } else {
      setComments([])
      setError("")
    }
  }, [selected])

  return (
    <div className={selected && "bg-body-tertiary p-4 rounded border"}>
      {isLoading ? (
        <LoadingSpinner />
      ) : error !== "" ? (
        <ErrorState error={error} />
      ) : (
        <div data-testid="comments-area">
          {selected && (
            <AddComment
              asin={selected}
              setIsLoading={setIsLoading}
              setSectionError={setError}
            />
          )}
          <CommentsList comments={comments} />
        </div>
      )}
    </div>
  )
}

export default CommentArea
