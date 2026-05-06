import { Col, Container, Row } from "react-bootstrap"
import books from "../data/books/history.json"
import EmptyState from "./EmptyState"
import SingleBook from "./SingleBook"

const AllTheBooks = ({ filter }) => {
  const filteredBooks = books
    .filter(({ title }) => title.toLowerCase().includes(filter))
    .slice(0, 20)

  return (
    <Container className="my-4">
      <Row className="g-3">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <Col key={book.asin} sm={6} md={4} lg={3}>
              <SingleBook book={book} />
            </Col>
          ))
        ) : (
          <Col>
            <EmptyState message="No books" />
          </Col>
        )}
      </Row>
    </Container>
  )
}

export default AllTheBooks
