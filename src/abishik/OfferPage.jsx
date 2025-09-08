import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
// import CountdownTimer from './CountdownTimer'; // Optional if needed

const offerProducts = [
  {
    id: 1,
    name: 'Luxury Handbag',
    image: 'https://i.pinimg.com/736x/51/92/b0/5192b0422e500ac17a3eef94694f3493.jpg',
    originalPrice: 7999,
    discountedPrice: 3999,
  },
  {
    id: 2,
    name: 'Designer Watch',
    image: 'https://i.pinimg.com/736x/42/06/94/4206944445e10638c483289ee1567f18.jpg',
    originalPrice: 9999,
    discountedPrice: 4999,
  },
  {
    id: 3,
    name: 'Trendy Sneakers',
    image: 'https://i.pinimg.com/736x/d6/34/47/d634473ceeb8a9da8c5a4d4f0816c3eb.jpg',
    originalPrice: 6999,
    discountedPrice: 3499,
  },
  {
    id: 4,
    name: 'Gold Necklace Set',
    image: 'https://i.pinimg.com/1200x/30/64/e4/3064e4526a7ced8466787c13a372ccdb.jpg',
    originalPrice: 14999,
    discountedPrice: 7499,
  },
];

function OfferPage() {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#fff', color: '#222' }}>
      <Container className="py-5">
        {/* Header Offer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <h1 className="fw-bold display-5">🔥 Flat 50% OFF!</h1>
          <p className="text-muted">Limited time only. Grab your favorites now before the offer ends!</p>
          {/* <CountdownTimer /> */}
        </motion.div>

        {/* Product Grid */}
        <Row className="g-4">
          {offerProducts.map((product, idx) => (
            <Col md={3} sm={6} key={product.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-sm rounded-4 h-100">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    style={{ height: '220px', objectFit: 'cover' }}
                    className="rounded-top"
                  />
                  <Card.Body className="text-center">
                    <Card.Title className="fw-semibold">{product.name}</Card.Title>
                    <Card.Text>
                      <span className="text-muted text-decoration-line-through me-2">
                        ₹{product.originalPrice}
                      </span>
                      <span className="fw-bold text-danger">₹{product.discountedPrice}</span>
                    </Card.Text>
                    <Button variant="dark" className="rounded-pill">Shop Now</Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default OfferPage;
