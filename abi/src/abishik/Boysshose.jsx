import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const boysShirts = [
  {
    id: 1,
    name: "Casual Checkered Shirt",
    img: "https://i.pinimg.com/736x/5b/68/07/5b6807a7294f75f54a49a404b5d468aa.jpg",
    price: 1100,
    discount: 0.2,
  },
  {
    id: 2,
    name: "Blue Denim Shirt",
    img: "https://i.pinimg.com/736x/dd/63/91/dd63911930b156876147873dc964c2f7.jpg",
    price: 1300,
    discount: 0.15,
  },
      {
    id: 3,
    name: "Blue Denim Shirt",
    img: "https://i.pinimg.com/1200x/f8/4f/6b/f84f6bba6f7b5cb8b0bc35e727fd161d.jpg",
    price: 1400,
    discount: 0.15,
  },  {
    id: 4,
    name: "Blue Denim Shirt",
    img: "https://i.pinimg.com/1200x/1e/e4/78/1ee4789bdc6810a6cce442ffaf50b3da.jpg",
    price: 1500,
    discount: 0.15,
  },  {
    id: 5,
    name: "Blue Denim Shirt",
    img: "https://i.pinimg.com/736x/49/97/32/499732569ac24756a375a24b32c22f1b.jpg",
    price: 1300,
    discount: 0.15,
  },  {
    id: 6,
    name: "Blue Denim Shirt",
    img: "https://i.pinimg.com/736x/24/b2/cd/24b2cd5722e7c610d376ac1f56731920.jpg",
    price: 1900,
    discount: 0.15,
  },  {
    id: 7,
    name: "Blue Denim Shirt",
    img: "https://i.pinimg.com/736x/e9/b7/88/e9b7883aaf33230c27eafdac6d6f4598.jpg",
    price: 2300,
    discount: 0.15,
  },  {
    id: 8,
    name: "Blue Denim Shirt",
    img: "https://i.pinimg.com/1200x/d3/b1/f5/d3b1f54a32caf760a46586be72e48c49.jpg",
    price: 1350,
    discount: 0.15,
  },  {
    id: 9,
    name: "Blue Denim Shirt",
    img: "https://i.pinimg.com/1200x/f7/45/d0/f745d0cc0d54b391356590957df1e0ee.jpg",
    price: 1100,
    discount: 0.15,
  },
  // add more shirts as needed
];

export default function Boysshose({ cart, setCart }) {
  const navigate = useNavigate();

  const handleBuy = (shirt) => {
    if (cart.find((item) => item.id === shirt.id)) {
      alert(`"${shirt.name}" is already in your cart!`);
      
      return;
    }

    const discountedPrice = Math.floor(shirt.price * (1 - shirt.discount));
    setCart([...cart, { ...shirt, discountedPrice }]);
    alert(`Added "${shirt.name}" to your cart!`);
   
  };

  return (
    <>
      <h2 style={{ textAlign: "center", marginBottom: "30px", fontFamily: "Poppins, sans-serif" }}>
        Trending Boys Shirts
      </h2>

      <Row xs={1} sm={2} md={3} lg={3} className="g-4">
        {boysShirts.map((shirt) => {
          const discountedPrice = Math.floor(shirt.price * (1 - shirt.discount));
          return (
            <Col key={shirt.id}>
              <Card className="shadow-sm border-0 h-100" style={{ borderRadius: "20px" }}>
                <Card.Img
                  variant="top"
                  src={shirt.img}
                  alt={shirt.name}
                  style={{ height: "280px", objectFit: "cover", borderRadius: "20px 20px 0 0" }}
                />
                <Card.Body className="text-center">
                  <Card.Title style={{ fontWeight: "bold" }}>{shirt.name}</Card.Title>
                  <Card.Text>
                    <span style={{ color: "green", fontWeight: "bold" }}>
                      {Math.round(shirt.discount * 100)}% OFF
                    </span>
                    <br />
                    <del>₹{shirt.price.toLocaleString()}</del>{" "}
                    <span style={{ fontWeight: "bold" }}>₹{discountedPrice.toLocaleString()}</span>
                  </Card.Text>
                  <Button variant="success" onClick={() => handleBuy(shirt)}>
                    Buy Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}
