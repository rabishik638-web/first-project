import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const LoginPopup = ({ show, handleClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      console.log("Signing up:", formData);
    } else {
      console.log("Logging in:", formData);
    }
    // handle auth logic here
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button
            onClick={handleClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              color: '#888',
            }}
          >
            &times;
          </button>
        </div>

        <h4 className="text-center mb-4" style={{ color: '#49557e' }}>
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </h4>

        <Form onSubmit={handleSubmit}>
          {isSignUp && (
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          )}

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button
            type="submit"
            style={{
              width: '100%',
              borderRadius: '30px',
              backgroundColor: '#49557e',
              border: 'none',
              padding: '10px',
              fontWeight: 'bold',
            }}
          >
            {isSignUp ? 'Create Account' : 'Login'}
          </Button>
        </Form>

        <div className="text-center mt-3">
          <small>
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <span
              onClick={() => setIsSignUp(!isSignUp)}
              style={{ color: 'tomato', cursor: 'pointer', fontWeight: 'bold' }}
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </span>
          </small>
        </div>
      </Modal.Body>
    </Modal>
  );
};
