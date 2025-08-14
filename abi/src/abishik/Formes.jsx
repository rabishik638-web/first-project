import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  ListGroup,
} from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import CountdownTimer from "./CountdownTimer"; // adjust path if needed
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  // Cart state to store selected products
  const [cart, setCart] = useState([]);

  // Sample trending items with name and price
  const trendingItems = [
    {
      id: 1,
      img:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80",
      name: "Beige Dress",
      price: 2999,
    },
    {
      id: 2,
      img:
        "https://images.unsplash.com/photo-1508214751195-1e04a8844d71?auto=format&fit=crop&w=600&q=80",
      name: "Classic T-Shirt",
      price: 1299,
    },
    {
      id: 3,
      img:
        "https://images.unsplash.com/photo-1519741491159-657e21f440d8?auto=format&fit=crop&w=600&q=80",
      name: "Black Heels",
      price: 3499,
    },
  ];

  // Handler to add product to cart if not already added
  const handleAddToCart = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      alert(`"${product.name}" is already in the cart!`);
      return;
    }
    setCart((prev) => [...prev, product]);
  };

  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", backgroundColor: "#fff", color: "#222" }}>
      <Container>
        <center>
          <Carousel data-bs-theme="dark" style={{ height: "20%", width: "90%", alignItems: "center" }}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1280&q=80"
                alt="First slide"
                style={{ height: "400px", objectFit: "cover" }}
              />
              <Carousel.Caption>
                <h5>Elegant Fashion</h5>
                <p>Discover the latest trends and styles.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1280&q=80"
                alt="Second slide"
                style={{ height: "400px", objectFit: "cover" }}
              />
              <Carousel.Caption>
                <h5>Timeless Watches</h5>
                <p>Classic and modern timepieces for every style.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1280&q=80"
                alt="Third slide"
                style={{ height: "400px", objectFit: "cover" }}
              />
              <Carousel.Caption>
                <h5>Stylish Shoes</h5>
                <p>Step out in style with our latest shoe collection.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </center>

        <br />
        <br />
        <br />

        {/* Category Cards */}
        <Row className="text-center mb-4">
          <Col>
            <Card className="border-0 shadow-sm rounded-3">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1520975910869-1b4a224170e3?auto=format&fit=crop&w=600&q=80"
                className="rounded-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="fw-semibold">
                  <Link to="/abi/boys" className="nav-link">
                    Boys
                  </Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="border-0 shadow-sm rounded-3">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=600&q=80"
                className="rounded-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="fw-semibold">
                  <Link to="/girls" className="nav-link">
                    Girls
                  </Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="border-0 shadow-sm rounded-3">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80"
                className="rounded-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="fw-semibold">
                  <Link to="/shoes" className="nav-link">
                    Shoes
                  </Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="border-0 shadow-sm rounded-3">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1505843792214-2ca9c8159ac7?auto=format&fit=crop&w=600&q=80"
                className="rounded-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="fw-semibold">
                  <Link to="/watch" className="nav-link">
                    Watch
                  </Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Trending Items Section */}
        <Row className="my-5 g-4 align-items-stretch">
          <Col md={6}>
            <h4 className="fw-bold mb-4">Trending Items</h4>
            <Row className="g-3">
              {trendingItems.map((item) => (
                <Col md={4} key={item.id}>
                  <Card
                    className="border-0 shadow-sm rounded-3 h-100"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleAddToCart(item)}
                  >
                    <Card.Img
                      variant="top"
                      src={item.img}
                      className="rounded-top"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <Card.Body className="text-center">
                      <Card.Title className="fw-semibold mb-1">{item.name}</Card.Title>
                      <Card.Text className="text-muted small">
                        ₹{item.price.toLocaleString()}
                      </Card.Text>
                      <Button
                        variant="primary"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToCart(item);
                        }}
                      >
                        Buy Now
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>

          <Col md={6} className="d-flex align-items-stretch">
            <Card className="border-0 shadow-sm rounded-4 overflow-hidden w-100">
              <Row className="g-0 h-100">
                <Col md={6} className="d-flex flex-column justify-content-center p-4 bg-light">
                  <div>
                    <h4 className="fw-bold mb-2">Big Offer Zone</h4>
                    <p className="text-muted mb-3">
                      Save up to <strong>50%</strong> off on select styles
                    </p>
                    <Button variant="dark" className="rounded-pill px-4">
                      Shop Now
                    </Button>
                  </div>
                </Col>
                <Col md={6}>
                  <img
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"
                    alt="Offer"
                    className="img-fluid h-100 w-100"
                    style={{ objectFit: "cover" }}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        {/* Added Products (Cart) Section */}
        <Container className="my-5">
          <h4>Added Products</h4>
          {cart.length === 0 ? (
            <p>No products added yet.</p>
          ) : (
            <ListGroup>
              {cart.map((product) => (
                <ListGroup.Item
                  key={product.id}
                  className="d-flex justify-content-between align-items-center"
                >
                  <div>{product.name}</div>
                  <div>₹{product.price.toLocaleString()}</div>
                </ListGroup.Item>
              ))}
              <ListGroup.Item className="d-flex justify-content-between fw-bold">
                <div>Total:</div>
                <div>₹{cart.reduce((a, c) => a + c.price, 0).toLocaleString()}</div>
              </ListGroup.Item>
            </ListGroup>
          )}
        </Container>

        {/* Reviews and Animated Highlights */}
        {/* ... Keep your existing Reviews and Animated Highlights sections here ... */}

        {/* Countdown Timer */}
        <CountdownTimer />

        {/* Newsletter Signup */}
        <Row className="my-5">
          <Col md={8}>
            <h5 className="fw-bold mb-3">Newsletter Signup</h5>
            <Form className="d-flex">
              <Form.Control type="email" placeholder="Enter your email" className="me-2 rounded-3" />
              <Button variant="dark" className="rounded-3 px-4">
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>

        {/* Blog Articles */}
        {/* ... Keep your existing Blog Articles section here ... */}

      </Container>

      {/* Footer */}
      {/* ... Keep your existing footer here ... */}
    </div>
  );
}

export default Home;
