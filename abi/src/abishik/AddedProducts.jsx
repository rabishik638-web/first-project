import React from "react";
import { Card } from "react-bootstrap";

const AddedProducts = ({ cart = [] }) => {
  const total = cart.reduce((sum, item) => sum + item.discountedPrice, 0);

  return (
    <div style={{ marginTop: "50px" }}>
      <h3
        className="text-center mb-4 fw-bold"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        🛒 Cart Overview
      </h3>
      <Card
        className="shadow border-0"
        style={{ borderRadius: "20px", background: "#fff" }}
      >
        <Card.Body>
          {cart.length === 0 ? (
            <div className="text-center text-muted py-3">
              No items added to cart yet.
            </div>
          ) : (
            <>
              <ul className="list-group list-group-flush mb-3">
                {cart.map((item, idx) => (
                  <li
                    key={idx}
                    className="list-group-item d-flex justify-content-between align-items-center"
                    style={{ fontSize: "16px", fontFamily: "Poppins, sans-serif" }}
                  >
                    <span>{item.name}</span>
                    <span className="text-success fw-semibold">
                      ₹{item.discountedPrice.toLocaleString()}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="d-flex justify-content-between align-items-center px-2">
                <h5 className="mb-0 fw-bold">Total:</h5>
                <h5 className="mb-0 text-primary">₹{total.toLocaleString()}</h5>
              </div>
            </>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddedProducts;
