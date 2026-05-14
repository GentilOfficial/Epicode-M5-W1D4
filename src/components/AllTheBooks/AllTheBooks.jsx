import { Col, Row } from "react-bootstrap"
import books from "../../data/books/history.json"
import EmptyState from "../EmptyState/EmptyState"
import SingleBook from "../SingleBook/SingleBook"

const AllTheBooks = ({ filter, selected, setSelected }) => {
  const filteredBooks = books.filter(
    ({ title, asin }) =>
      title.toLowerCase().includes(filter) || asin === selected,
  )

  return (
    <Row className="g-3">
      {filteredBooks.length > 0 ? (
        filteredBooks.map((book) => (
          <Col key={book.asin} md={6} lg={4}>
            <SingleBook
              book={book}
              selected={selected}
              setSelected={setSelected}
            />
          </Col>
        ))
      ) : (
        <Col>
          <EmptyState message="No books" />
        </Col>
      )}
    </Row>
  )
}

export default AllTheBooks
