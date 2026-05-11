import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const MyBookCard = ({ book, selected, setSelected }) => {
  const { asin, img, title, category, price } = book

  const toggleCardSelection = () => {
    setSelected(asin === selected ? null : asin)
  }

  return (
    <Card className={`h-100 ${selected === asin && "border-2 border-danger"}`}>
      <Card.Img onClick={toggleCardSelection} variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{category}</Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex align-items-center justify-content-between flex-wrap gap-3">
        <Button variant="link" as={Link} to={`/book/${asin}`} className="p-0">
          details
        </Button>
        <Card.Text className="h3 text-end">{price}€</Card.Text>
      </Card.Footer>
    </Card>
  )
}

export default MyBookCard
