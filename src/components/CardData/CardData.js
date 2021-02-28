import React from "react";
import { Card, Image, Button } from "semantic-ui-react";

//stateless, sole responsibility is to output some JSX
function CardData({ title, price, category, description, image }) {
  return (
    <Card>
      <Image src={image} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>Price: {price}</Card.Meta>
        <Card.Meta>{category}</Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button inverse color="red">
          Add To Cart
        </Button>
      </Card.Content>
    </Card>
  );
}

export default CardData;
