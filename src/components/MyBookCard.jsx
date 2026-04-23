import { Card } from "react-bootstrap"

const MyBookCard = ({ img, title, category, price }) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{category}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Text className="h3 text-end">{price}€</Card.Text>
      </Card.Footer>
    </Card>
  )
}

export default MyBookCard
