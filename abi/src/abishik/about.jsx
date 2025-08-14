
import React from 'react';
import {  Row, Col,} from 'react-bootstrap';

function About() {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
     
      <section style={{
        background: 'linear-gradient(to right, #ff8a00, #e52e71)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '48px', marginBottom: '10px' }}>Welcome to Trends</h1>
        <p style={{ fontSize: '20px' }}>Where fashion meets convenience</p>
      </section>

      
      <section style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Who We Are</h2>
        <p style={{ fontSize: '18px', lineHeight: '1.8' }}>
          At <strong>Trends</strong>, we’re more than just an online store. We’re a lifestyle brand
          built around quality, affordability, and cutting-edge trends. Whether you're shopping for fashion,
          electronics, or home essentials — we've got you covered.
        </p>
      </section>

     
      <section style={{ backgroundColor: '#f9f9f9', padding: '40px 20px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
          <div style={{ flex: '1 1 300px', maxWidth: '400px' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>Our Mission</h3>
            <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
              To deliver the latest trends with unbeatable value and make eCommerce accessible for everyone.
            </p>
          </div>
          <div style={{ flex: '1 1 300px', maxWidth: '400px' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>Our Vision</h3>
            <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
              To become a trusted global destination for lifestyle shopping, empowering customers every step of the way.
            </p>
          </div>
        </div>
      </section>

     
      <section style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Why Choose Us?</h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '30px'
        }}>
          <div style={{ width: '200px' }}>
            <h3 style={{ color: '#e52e71', fontSize: '28px' }}>1M+</h3>
            <p>Happy Customers</p>
          </div>
          <div style={{ width: '200px' }}>
            <h3 style={{ color: '#e52e71', fontSize: '28px' }}>500+</h3>
            <p>Brands Available</p>
          </div>
          <div style={{ width: '200px' }}>
            <h3 style={{ color: '#e52e71', fontSize: '28px' }}>24/7</h3>
            <p>Customer Support</p>
          </div>
        </div>
      </section>
      <section style={{
  padding: '50px 20px',
  backgroundColor: '#fff',
  textAlign: 'center',
  fontFamily: 'Poppins, sans-serif'
}}>
  <h2 style={{ marginBottom: '30px', fontWeight: '600' }}>Why Shop with Us?</h2>
  <Row className="justify-content-center" style={{ gap: '30px' }}>
    <Col md={3} style={{ maxWidth: '300px' }}>
      <img src="https://cdn-icons-png.flaticon.com/512/753/753318.png" alt="Discounts" style={{ width: '70px', marginBottom: '15px' }} />
      <h5>Exclusive Discounts</h5>
      <p>Enjoy seasonal sales and member-only offers.</p>
    </Col>
    <Col md={3} style={{ maxWidth: '300px' }}>
      <img src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png" alt="Cashback" style={{ width: '70px', marginBottom: '15px' }} />
      <h5>Instant Cashback</h5>
      <p>Get up to 20% cashback on select payment methods.</p>
    </Col>
    <Col md={3} style={{ maxWidth: '300px' }}>
      <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="Rewards" style={{ width: '70px', marginBottom: '15px' }} />
      <h5>Reward Points</h5>
      <p>Earn points every time you shop & redeem for gifts.</p>
    </Col>
  </Row>
</section>


      <section style={{
        background: '#333',
        color: 'white',
        textAlign: 'center',
        padding: '40px 20px',
        marginTop: '40px'
      }}>
        <h2>Got Questions?</h2>
        <p>Email us at <strong>support@trendcart.com</strong> or call 1800-123-456</p>
      </section>
    </div>
  );
}

export default About;
