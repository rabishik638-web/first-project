import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import CountdownTimer from './CountdownTimer'; // Adjust path as needed
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

function Home() {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#fff', color: '#222' }}>
      <Container>
        {/* Hero Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <br /><br /><br />
         <Carousel data-bs-theme="dark" style={{
  width: "90%",
  margin: "40px auto",
  borderRadius: "20px",
  overflow: "hidden",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)"
}}>
  {[
    {
      src: "https://i.pinimg.com/736x/77/5b/36/775b368b584dfe76d1e0e0158d5c85b4.jpg",
      caption: "Elegant Fashion",
      text: "Discover the latest trends and styles."
    },
    {
      src: "https://i.pinimg.com/736x/a5/76/0c/a5760c777dbbea1418ed6e599d8cd724.jpg",
      caption: "Timeless Watches",
      text: "Classic and modern timepieces for every style."
    },
    {
      src: "https://i.pinimg.com/736x/bc/1b/98/bc1b980b30b92cc0c8eb3cad35f0a1d2.jpg",
      caption: "Stylish Shoes",
      text: "Step out in style with our latest shoe collection."
    }
  ].map((slide, idx) => (
    <Carousel.Item key={idx}>
      <img
        className="d-block w-100"
        src={slide.src}
        alt={slide.caption}
        style={{
          height: "450px",
          objectFit: "cover",
          filter: "brightness(90%) contrast(1.05)",
          transition: "transform 0.5s ease"
        }}
      />
      <Carousel.Caption style={{
      
        padding: "20px",
        borderRadius: "10px",
        
      }}>
        <h1 style={{
          fontSize: "28px",
          fontWeight: "700",
          color: "#fff",
          textShadow: "2px 2px 4px rgba(0,0,0,0.6)"
        }}>{slide.caption}</h1>
        <p style={{
          fontSize: "16px",
          fontWeight: "400",
          color: "#ddd",
          textShadow: "1px 1px 3px rgba(0,0,0,0.5)"
        }}>{slide.text}</p>
      </Carousel.Caption>
    </Carousel.Item>
  ))}
</Carousel>

        </motion.div>

        <br /><br /><br /><br></br>

        {/* Category Cards */}
        <Row className="text-center mb-4">
          {[
            {
              img: "https://i.pinimg.com/736x/b1/5f/84/b15f84a288e09c16410babcc6dbb6d8f.jpg",
              title: "Boys",
              link: "/abi/boys"
            },
            {
              img: "https://i.pinimg.com/736x/a3/d8/b8/a3d8b89e88b7d247a06c0139310d291d.jpg",
              title: "Kids",
              link: "/girls"
            },
            {
              img: "https://i.pinimg.com/736x/b4/b0/ef/b4b0ef908e0d6fea4aec131de022e4d6.jpg",
              title: "Shoes",
              link: "/shoes"
            },
            {
              img: "https://i.pinimg.com/736x/5a/8d/dc/5a8ddc18932d41b1b60fa7e10ffa8e3b.jpg",
              title: "Watch",
              link: "/watch"
            }
          ].map((cat, idx) => (
            <Col key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-sm rounded-3">
                  <Card.Img
                    variant="top"
                    src={cat.img}
                    className="rounded-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title className="fw-semibold">
                      <Link to={cat.link} className="nav-link">{cat.title}</Link>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
        

        {/* Trending Items and Big Offer Zone */}
        <Row className="my-5 g-4 align-items-stretch">
          <Col md={6}>
            <h4 className="fw-bold mb-4">Trending Items</h4>
            <Row className="g-3">
              {[
                {
                  img: "https://i.pinimg.com/1200x/45/d6/b7/45d6b7a1ec198583b4eec0236d7017ce.jpg",
                  name: "Bege Dress",
                  price: "₹2,999"
                },
                {
                  img: "https://i.pinimg.com/1200x/89/1c/e9/891ce9673e11a3eb504ea20d0a65fd00.jpg",
                  name: "Shirt",
                  price: "₹1,299"
                },
                {
                  img: "https://i.pinimg.com/736x/35/b6/bf/35b6bfaccc4ae76214313e1bbee9472f.jpg",
                  name: "T-shirt",
                  price: "₹3,499"
                }
              ].map((item, idx) => (
                <Col md={4} key={idx}>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <Card className="border-0 shadow-sm rounded-3 h-100">
                      <Card.Img
                        variant="top"
                        src={item.img}
                        className="rounded-top"
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                      <Card.Body className="text-center">
                        <Card.Title className="fw-semibold mb-1">{item.name}</Card.Title>
                        <Card.Text className="text-muted small"></Card.Text>
                      </Card.Body>
                    </Card>
                  </motion.div>
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
                    <p className="text-muted mb-3">Save up to <strong>50%</strong> off on select styles</p>
                    <Link to="/offer" className="btn btn-dark rounded-pill px-4">Shop Now</Link>

                  </div>
                </Col>
                <Col md={6}>
                  <img
                    src="https://i.pinimg.com/1200x/57/83/b1/5783b1d0be174de4f483473974a55c5e.jpg"
                    alt="Offer"
                    className="img-fluid h-100 w-100"
                    style={{ objectFit: 'cover' }}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
<br />
        {/* Reviews and Animated Product Highlights */}
        <Row className="my-5">
          <Col md={6}>
            <h5 className="fw-bold">User Reviews</h5>
            <blockquote className="blockquote mt-3">
              <p>"The quality of the products is exceptional. I'm very satisfied with my purchase and will definitely come back!"</p>
              <footer className="blockquote-footer mt-2">Jane Doe ⭐⭐⭐⭐⭐</footer>
            </blockquote>
          </Col>
          <Col md={6}>
            <h5 className="fw-bold mb-3"> Product Highlights</h5>
            <Row className="g-3">
              {[
                "https://i.pinimg.com/1200x/7a/7f/e7/7a7fe77ffb9231659fa9718130f70b70.jpg",
                "https://i.pinimg.com/736x/27/b1/d2/27b1d243cb2b8ce73c4b2a7be983ba28.jpg",
                "https://i.pinimg.com/1200x/ad/b0/6b/adb06b0c9787a80062116be98147b4ef.jpg"
              ].map((img, idx) => (
                <Col md={4} key={idx}>
                  <motion.img
                    src={img}
                    alt="Product"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="img-fluid"
                    style={{ height: "230px", width: "100%", objectFit: "cover", borderRadius: "12px" }}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
<br />
        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-5"
        >
          <CountdownTimer />
        </motion.div>
<br />
        {/* Additional Category Cards */}
        <Row className="text-center mb-4">
          {[
            {
              img: "https://i.pinimg.com/1200x/d5/35/ab/d535abece762d29d5a4c3beb85b228b1.jpg",
              title: "Girls",
              link: "/abi/boys"
            },
            {
              img: "https://i.pinimg.com/736x/6c/ff/c1/6cffc185e85226fd8c5d48b4452699d4.jpg",
              title: "Kids",
              link: "/girls"
            },
            {
              img: "https://i.pinimg.com/736x/8b/31/f2/8b31f2d72ec214a52dfc66d2870e7daa.jpg",
              title: "Bags",
              link: "/shoes"
            },
            {
              img: "https://i.pinimg.com/1200x/c7/96/a5/c796a52aeac8b441a3be0ba2a3041a0a.jpg",
              title: "Watch",
              link: "/watch"
            }
          ].map((cat, idx) => (
            <Col key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-sm rounded-3">
                  <Card.Img
                    variant="top"
                    src={cat.img}
                    className="rounded-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title className="fw-semibold">
                      <Link to={cat.link} className="nav-link">{cat.title}</Link>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
<br />
        {/* Trending Items and Big Offer Zone (switched sides) */}
        <Row className="my-5 g-4 align-items-stretch">
          <Col md={6} className="d-flex align-items-stretch">
            <Card className="border-0 shadow-sm rounded-4 overflow-hidden w-100">
              <Row className="g-0 h-100">
                <Col md={6} className="d-flex flex-column justify-content-center p-4 bg-light">
                  <div>
                    <h4 className="fw-bold mb-2">Big Offer Zone</h4>
                    <p className="text-muted mb-3">Save up to <strong>50%</strong> off on select styles</p>
                    <Link to="/offer" className="btn btn-dark rounded-pill px-4">Shop Now</Link>

                  </div>
                </Col>
                <Col md={6}>
                  <img
                    src="https://i.pinimg.com/736x/fd/1d/ae/fd1daeaf4ade5fde6af22bc242f2e9e7.jpg"
                    alt="Offer"
                    className="img-fluid h-100 w-100"
                    style={{ objectFit: 'cover' }}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={6}>
            <h4 className="fw-bold mb-4">Trending Items</h4>
            <Row className="g-3">
              {[
                {
                  img: "https://i.pinimg.com/736x/07/c8/cd/07c8cd8f1aeea8a9ec19a43c55834568.jpg",
                  name: " Dress",
                  price: "₹2,999"
                },
                {
                  img: "https://i.pinimg.com/736x/2c/a0/e2/2ca0e2e0a52a57b4977150bfd686b292.jpg",
                  name: "Shirt",
                  price: "₹1,299"
                },
                {
                  img: "https://i.pinimg.com/736x/a0/27/2c/a0272caabc015e248a904077ccda9b9c.jpg",
                  name: "hirt",
                  price: "₹3,499"
                }
              ].map((item, idx) => (
                <Col md={4} key={idx}>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <Card className="border-0 shadow-sm rounded-3 h-100">
                      <Card.Img
                        variant="top"
                        src={item.img}
                        className="rounded-top"
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                      <Card.Body className="text-center">
                        <Card.Title className="fw-semibold mb-1">{item.name}</Card.Title>
                        <Card.Text className="text-muted small"></Card.Text>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <br />
        {/* Reviews and Animated Product Highlights */}
        <Row className="my-5">
          <Col md={6}>
            <h5 className="fw-bold">User Reviews</h5>
            <blockquote className="blockquote mt-3">
              <p>"The quality of the products is exceptional. I'm very satisfied with my purchase and will definitely come back!"</p>
              <footer className="blockquote-footer mt-2">Tmail ⭐⭐⭐⭐⭐</footer>
            </blockquote>
          </Col>
          <Col md={6}>
            <h5 className="fw-bold mb-3"> Product Highlights</h5>
            <Row className="g-3">
              {[
                "https://i.pinimg.com/736x/63/07/49/630749cbdbf5317cf420bc88eab7b8fb.jpg",
                "https://i.pinimg.com/736x/e0/2a/64/e02a64496b5ac558e7ff3eb498956c11.jpg",
                "https://i.pinimg.com/736x/b0/ba/7a/b0ba7a108fc9716c7854d930737e5d2f.jpg"
              ].map((img, idx) => (
                <Col md={4} key={idx}>
                  <motion.img
                    src={img}
                    alt="Product"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="img-fluid"
                    style={{ height: "230px", width: "100%", objectFit: "cover", borderRadius: "12px" }}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Blog Articles */}
        <Row className="my-5">
          <h5 className="fw-bold mb-4">Blog Articles</h5>
          {[
            {
              img: "https://i.pinimg.com/1200x/41/b1/9b/41b19bb646b86df1f43d4792fa659833.jpg",
              title: "Top Picks: Girls' Festive Wear",
              desc: "Explore vibrant, trendy, and elegant dresses perfect for birthdays, weddings, and festivals."
            },
            {
              img: "https://i.pinimg.com/736x/5d/99/23/5d9923c3259bbcbe0390c8293740e38f.jpg",
              title: "Smart Styles for Little Boys",
              desc: "From casual tees to classy shirts — a quick guide on styling boys for any occasion."
            },
            {
              img: "https://i.pinimg.com/1200x/fa/3c/37/fa3c37be255eebc4aecfb32f1fb11a31.jpg",
              title: "Trendy Watches for Kids & Teens",
              desc: "Find stylish and functional watches that add charm and confidence to every outfit."
            }
          ].map((blog, idx) => (
            <Col md={4} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Card className="shadow-sm border-0 rounded-3 mb-3">
                  <Card.Img src={blog.img} style={{ height: '200px', objectFit: 'cover' }} className="rounded-top" />
                  <Card.Body>
                    <Card.Title className="fw-semibold">{blog.title}</Card.Title>
                    <Card.Text className="text-muted">{blog.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

      </Container>

      {/* Footer */}
      <footer style={{ backgroundColor: '#f8f9fa', padding: '40px 0', marginTop: '60px' }}>
        <Container>
          <Row className="text-center text-md-start">
            <Col md={3}>
              <h5>About Us</h5>
              <p>We bring you the latest trends in luxury fashion. Crafted with elegance and style.</p>
            </Col>
            <Col md={3}>
              <h5>Customer Service</h5>
              <ul className="list-unstyled">
                <li><a href="#!" className="text-decoration-none text-dark">Help Center</a></li>
                <li><a href="#!" className="text-decoration-none text-dark">Returns</a></li>
                <li><a href="#!" className="text-decoration-none text-dark">Shipping Info</a></li>
                <li><a href="#!" className="text-decoration-none text-dark">Track Order</a></li>
              </ul>
            </Col>
            <Col md={3}>
              <h5>Shop</h5>
              <ul className="list-unstyled">
                <li><a href="#!" className="text-decoration-none text-dark">Jewelry</a></li>
                <li><a href="#!" className="text-decoration-none text-dark">Watches</a></li>
                <li><a href="#!" className="text-decoration-none text-dark">Shoes</a></li>
                <li><a href="#!" className="text-decoration-none text-dark">Bags</a></li>
              </ul>
            </Col>
            <Col md={3}>
              <h5>Follow Us</h5>
              <div className="d-flex gap-3 justify-content-center justify-content-md-start">
                <a href="#"><i className="bi bi-instagram fs-4 text-dark"></i></a>
                <a href="#"><i className="bi bi-facebook fs-4 text-dark"></i></a>
                <a href="#"><i className="bi bi-twitter fs-4 text-dark"></i></a>
              </div>
            </Col>
          </Row>
          <hr className="my-4" />
          <Row className="text-center">
            <Col>
              <small>&copy; {new Date().getFullYear()} LuxTrends. All Rights Reserved.</small>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Home;
