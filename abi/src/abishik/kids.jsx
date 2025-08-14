
import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const girlsDresses = [
 {
    id: 1,
    name: "Floral Summer Dress",
    img: "https://image.hm.com/assets/hm/86/96/8696b9e661bd541671bc64d11a7b4eec9fd7c623.jpg?imwidth=1260",
    price: 1200,
    discount: 0.20,
  },
  {
    id: 2,
    name: "Pink Party Dress",
    img: "https://image.hm.com/assets/hm/f0/0e/f00ee0ac02cc58f6844df885b1f6eaf9f8b4b443.jpg?imwidth=424",
    price: 1500,
    discount: 0.15,
  },
  {
    id: 3,
    name: "Denim Overall Dress",
    img: "https://image.hm.com/assets/hm/f9/de/f9de613680af6519267041a318c2de20f6ad2b34.jpg?imwidth=424",
    price: 1000,
    discount: 0.25,
  },
  {
    id: 4,
    name: "Casual Cotton Dress",
    img: "https://image.hm.com/assets/hm/a9/46/a9463f8a125d6bdf427902dd276a14242475c2fb.jpg?imwidth=424",
    price: 1100,
    discount: 0.10,
  },
  {
    id: 5,
    name: "Yellow Sundress",
    img: "https://image.hm.com/assets/hm/f8/a2/f8a26d9312fc10570d874456c5e6e6e7d00c8f90.jpg?imwidth=424",
    price: 1300,
    discount: 0.18,
  },
  {
    id: 6,
    name: "Tutu Skirt Dress",
    img: "https://image.hm.com/assets/hm/18/e7/18e769ad874ab3a5f8cf99711e02b32fe2b7979f.jpg?imwidth=424",
    price: 1700,
    discount: 0.22,
  },
];
export default function kids(){
   const [cart, setCart] = useState([]);

  const handleBuy = (dress) => {
    setCart((prevCart) => [...prevCart, dress]);
    alert(`Added "${dress.name}" to your cart!`);
  };

  return (
    <>
      <Container style={{ padding: "40px 20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px", fontFamily: "Poppins, sans-serif" }}>
          Trending Kids Dresses
        </h2>

        <Row xs={1} sm={2} md={3} lg={3} className="g-4">
          {girlsDresses.map(({ id, name, img, price, discount }) => {
            const discountedPrice = Math.floor(price * (1 - discount));
            return (
              <Col key={id}>
                <Card className="shadow-sm border-0 h-100" style={{ borderRadius: "20px" }}>
                  <Card.Img
                    variant="top"
                    src={img}
                    alt={name}
                    style={{ height: "280px", objectFit: "cover", borderRadius: "20px 20px 0 0" }}
                  />
                  <Card.Body className="text-center">
                    <Card.Title style={{ fontWeight: "bold" }}>{name}</Card.Title>
                    <Card.Text>
                      <span style={{ color: "green", fontWeight: "bold" }}>
                        {Math.round(discount * 100)}% OFF
                      </span>
                      <br />
                      <del>₹{price.toLocaleString()}</del>{" "}
                      <span style={{ fontWeight: "bold" }}>₹{discountedPrice.toLocaleString()}</span>
                    </Card.Text>
                    <Button variant="success" onClick={() => handleBuy({ id, name, discountedPrice })}>
                      Buy Now
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>

        {/* Cart Summary */}
        <div style={{ marginTop: "40px" }}>
          <h3>Your Cart ({cart.length} items)</h3>
          {cart.length === 0 && <p>No items bought yet.</p>}
          {cart.length > 0 && (
            <ul>
              {cart.map((item, idx) => (
                <li key={idx}>
                  {item.name} - ₹{item.discountedPrice.toLocaleString()}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </>
  );
}

