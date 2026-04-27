import { useState } from "react"
import { Card } from "react-bootstrap"

const MyBookCard = ({ book }) => {
  const { img, title, category, price } = book
  const [selected, setSelected] = useState(false)

  const toggleCardSelection = () => {
    setSelected(!selected)
  }

  return (
    <Card className={`h-100 ${selected && "border-2 border-danger"}`}>
      <Card.Img onClick={toggleCardSelection} variant="top" src={img} />
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
