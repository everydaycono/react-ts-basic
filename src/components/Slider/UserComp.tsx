import React from 'react'
import { Badge, Card } from 'react-bootstrap'

interface IUserComp {
  image: string;
  name: string;
  title: string;
  quote: string;
}

const UserComp = ({ image, name, title, quote }: IUserComp) => {
  return (
    <Card style={{ width: '18rem' }} className="m-auto" >
      <Card.Img variant="top" src={image} style={{ height: "200px", objectFit: "cover" }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>{title}</Card.Subtitle>
        <Card.Text>{quote.length > 100 ? `${quote.substring(0, 100)}...` : quote}</Card.Text>
        <Badge bg="warning">Awesmoe {title}</Badge>
      </Card.Body>
    </Card>
  )
}

export default UserComp