import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const shoeProducts = [
  {
    id: 1,
    name: "Nike Air Max 270",
    img: "https://m.media-amazon.com/images/I/61jerbFqXIL._SY695_.jpg",
    price: 15000,
    discount: 0.25,
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    img: "https://m.media-amazon.com/images/I/61gZ0sR4tzL._SY695_.jpg",
    price: 14000,
    discount: 0.20,
  },
  {
    id: 3,
    name: "Puma RS-X",
    img: "https://m.media-amazon.com/images/I/61+f0qntv1L._SY695_.jpg",
    price: 11000,
    discount: 0.15,
  },
  {
    id: 4,
    name: "Reebok Classic",
    img: "https://m.media-amazon.com/images/I/61-OvXxBHZL._SY695_.jpg",
    price: 9000,
    discount: 0.30,
  },
  {
    id: 5,
    name: "New Balance 327",
    img: "https://m.media-amazon.com/images/I/61+u7BBiaxL._SY695_.jpg",
    price: 10000,
    discount: 0.22,
  },
  {
    id: 6,
    name: "Asics Gel-Kayano",
    img: "https://m.media-amazon.com/images/I/61RnWt+0dIL._SY695_.jpg",
    price: 12000,
    discount: 0.18,
  },
  {
    id: 7,
    name: "Asics Gel-Kayano",
    img: "https://m.media-amazon.com/images/I/61bBhmiNYgL._SY695_.jpg",
    price: 12000,
    discount: 0.18,
  },
  {
    id: 8,
    name: "Asics Gel-Kayano",
    img: "https://m.media-amazon.com/images/I/61Da3-DCPML._SY695_.jpg",
    price: 12000,
    discount: 0.18,
  },
  {
    id: 9,
    name: "Asics Gel-Kayano",
    img: "https://m.media-amazon.com/images/I/61xExvYem6L._SY695_.jpg",
    price: 12000,
    discount: 0.18,
  },
];

export default function Shoes({ cart = [], setCart }) {
  const handleBuy = (product) => {
    const isAlreadyInCart = cart.find((item) => item.id === product.id);
    if (isAlreadyInCart) {
      alert(`${product.name} is already in your cart`);
      return;
    }

    const discountedPrice = Math.floor(product.price * (1 - product.discount));
    setCart([...cart, { ...product, discountedPrice }]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <Container style={{ padding: "40px 20px" }}>
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        Featured Shoes
      </h2>

      <Row xs={1} sm={2} md={3} lg={3} className="g-4">
        {shoeProducts.map((product) => {
          const discountedPrice = Math.floor(product.price * (1 - product.discount));
          return (
            <Col key={product.id}>
              <Card className="shadow-sm border-0 h-100" style={{ borderRadius: "20px" }}>
                <Card.Img
                  variant="top"
                  src={product.img}
                  alt={product.name}
                  style={{
                    height: "280px",
                    objectFit: "contain",
                    borderRadius: "20px 20px 0 0",
                    backgroundColor: "#fff",
                    padding: "15px",
                  }}
                />
                <Card.Body className="text-center">
                  <Card.Title style={{ fontWeight: "bold" }}>{product.name}</Card.Title>
                  <Card.Text>
                    <span style={{ color: "green", fontWeight: "bold" }}>
                      {Math.round(product.discount * 100)}% OFF
                    </span>
                    <br />
                    <del>₹{product.price.toLocaleString()}</del>{" "}
                    <span style={{ fontWeight: "bold" }}>
                      ₹{discountedPrice.toLocaleString()}
                    </span>
                  </Card.Text>
                  <Button
                    variant="success"
                    onClick={() => handleBuy(product)}
                  >
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
