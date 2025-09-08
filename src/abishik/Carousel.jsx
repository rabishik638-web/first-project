import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <>
      <Row className="justify-content-center aligen-items-center" >
        <Col lg={8}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.beyours.in/cdn/shop/files/black-classic-shirt.jpg?v=1744815740"style={{height:'400px'}}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.beyours.in/cdn/shop/files/black-classic-shirt.jpg?v=1744815740"style={{height:'400px'}}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.beyours.in/cdn/shop/files/black-classic-shirt.jpg?v=1744815740"style={{height:'400px'}}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </>
  );
}

export default UncontrolledExample;
