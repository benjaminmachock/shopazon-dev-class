import React, { useEffect, useState } from "react";
import { Container, Card } from "semantic-ui-react";
import CardData from "../../components/CardData/CardData";

//hooks
//in this component we are going to make an api call to fake store, and render cards with the data
//functional component
function Home() {
  //useState
  const [products, setProducts] = useState([]);

  //useEffect
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=25")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  });

  //can i display the data that i got back to the screen
  //{} where we can write JS expressions

  //map the advanced array in JS ES6

  //anything in return is JSX land
  return (
    <>
      <h1>Shopazon</h1>
      <Container>
        <Card.Group itemsPerRow={3}>
          {products.map((product) => (
            <CardData
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              price={product.price}
            />
          ))}
        </Card.Group>
      </Container>
    </>
  );
}

export default Home;
