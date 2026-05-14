import { useEffect, useState } from "react"
import { Col, Image, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import CommentArea from "../components/CommentArea/CommentArea"
import EmptyState from "../components/EmptyState/EmptyState"
import PageLayout from "../components/PageLayout/PageLayout"
import books from "../data/books/history.json"

const BookDetails = () => {
  const { asin } = useParams()
  const [book, setBook] = useState(null)

  useEffect(() => {
    const filteredBooks = books.filter((book) => book.asin === asin)
    if (filteredBooks[0]) {
      setBook(filteredBooks[0])
    }
  }, [])

  return (
    <>
      <PageLayout>
        <Row className="my-4">
          {book ? (
            <>
              <Col sm={12} md={6} lg={4}>
                <div className="pt-4">
                  <Image src={book.img} fluid thumbnail />
                </div>
              </Col>
              <Col>
                <div className="position-sticky top-0 pt-4">
                  <div className="my-4 my-md-0">
                    <h1>{book.title}</h1>
                    <p className="display-4 fw-bold">{book.price}€</p>
                  </div>
                  <CommentArea selected={asin} />
                </div>
              </Col>
            </>
          ) : (
            <Col>
              <EmptyState
                message={`There are no books with this asin code: ${asin}`}
              />
            </Col>
          )}
        </Row>
      </PageLayout>
    </>
  )
}

export default BookDetails
