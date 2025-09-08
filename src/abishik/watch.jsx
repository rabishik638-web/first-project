import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const watchProducts = [
  {
    id: 1,
    name: "Fossil Chronograph",
    img: "https://i.pinimg.com/736x/4e/d7/08/4ed7089c8edd2f027dfef20d43690d64.jpg",
    price: 8999,
    discount: 0.2,
  },
  {
    id: 2,
    name: "Titan Men's Watch",
    img: "https://i.pinimg.com/736x/7d/94/a2/7d94a27efa8db6b5a4029b68810fa069.jpg",
    price: 6999,
    discount: 0.15,
  },
  {
    id: 3,
    name: "Casio G-Shock",
    img: "https://i.pinimg.com/1200x/60/7b/e8/607be801f9750c660e1d182193af8268.jpg",
    price: 10500,
    discount: 0.25,
  },
  {
    id: 4,
    name: "Timex Analog",
    img: "https://i.pinimg.com/736x/44/29/d0/4429d0cc41cf441006da4a7b11e8ded4.jpg",
    price: 4999,
    discount: 0.1,
  },
  {
    id: 5,
    name: "Daniel Wellington",
    img: "https://i.pinimg.com/736x/f3/56/22/f356227f5380c2013118d42a159087f3.jpg",
    price: 11500,
    discount: 0.18,
  },
  {
    id: 6,
    name: "Noise Smart Watch",
    img: "https://i.pinimg.com/736x/0c/05/9a/0c059aa153c7d785de6a2b47fc234b8b.jpg",
    price: 3499,
    discount: 0.3,
  },
];

export default function Watchs({ cart = [], setCart }) {
  const handleBuy = (item) => {
    const isAlreadyInCart = cart.find((i) => i.id === item.id);
    if (isAlreadyInCart) {
      alert(`${item.name} is already in your cart`);
      return;
    }
    const discountedPrice = Math.floor(item.price * (1 - item.discount));
    setCart([...cart, { ...item, discountedPrice }]);
    alert(`${item.name} added to cart`);
  };

  return (
    <Container style={{ padding: "40px 20px" }}>
      <h2 className="text-center mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
        Trending Watches
      </h2>

      <Row xs={1} sm={2} md={3} lg={3} className="g-4">
        {watchProducts.map((item) => {
          const discountedPrice = Math.floor(item.price * (1 - item.discount));
          return (
            <Col key={item.id}>
              <Card className="shadow-sm border-0 h-100" style={{ borderRadius: "20px" }}>
                <Card.Img
                  variant="top"
                  src={item.img}
                  alt={item.name}
                  style={{
                    height: "280px",
                    objectFit: "contain",
                    borderRadius: "20px 20px 0 0",
                    backgroundColor: "#fff",
                    padding: "15px",
                  }}
                />
                <Card.Body className="text-center">
                  <Card.Title style={{ fontWeight: "bold" }}>{item.name}</Card.Title>
                  <Card.Text>
                    <span style={{ color: "green", fontWeight: "bold" }}>
                      {Math.round(item.discount * 100)}% OFF
                    </span>
                    <br />
                    <del>₹{item.price.toLocaleString()}</del>{" "}
                    <span style={{ fontWeight: "bold" }}>
                      ₹{discountedPrice.toLocaleString()}
                    </span>
                  </Card.Text>
                  <Button variant="success" onClick={() => handleBuy(item)}>
                    Buy Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
