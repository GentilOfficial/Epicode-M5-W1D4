import { Col, Container, Row } from "react-bootstrap"
import books from "../data/books/history.json"
import MyBookCard from "./MyBookCard"

const AllTheBooks = () => {
  return (
    <Container className="my-4">
      <Row className="g-3">
        {books.map((book) => (
          <Col key={book.asin} sm={6} md={4} lg={3}>
            <MyBookCard
              img={book.img}
              title={book.title}
              category={book.category}
              price={book.price}
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default AllTheBooks
