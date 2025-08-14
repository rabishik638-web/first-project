import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  const targetTime = new Date().getTime() + 2 * 60 * 60 * 1000; // 2 hours from now

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ hours, minutes, seconds });
      } else {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Row className="my-5 text-center">
      <Col md={12}>
        <h5 className="fw-bold mb-4">Offer Close</h5>
        <Row className="justify-content-center gap-3">
          <Col md={2}><h1>{String(timeLeft.hours).padStart(2, '0')}<div className="fs-6">Hour</div></h1></Col>
          <Col md={2}><h1>{String(timeLeft.minutes).padStart(2, '0')}<div className="fs-6">Minute</div></h1></Col>
          <Col md={2}><h1>{String(timeLeft.seconds).padStart(2, '0')}<div className="fs-6">Second</div></h1></Col>
        </Row>
      </Col>
    </Row>
  );
}

export default CountdownTimer;
