import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from "framer-motion";
import Lottie from "lottie-react";
 // 👈 Place your Lottie file in src

import Home from "./abishik/home";
import About from "./abishik/about";
import Contact from "./abishik/contact";
import Boys from './abishik/Boysshose';
import Girls from "./abishik/girls";
import Shoes from "./abishik/shoes";
import Watchs from './abishik/watch';
import { LoginPopup } from './abishik/Login';
import AddedProducts from './abishik/AddedProducts';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import OfferPage from './abishik/OfferPage';

function App() {
  const [welcome, setWelcome] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [cart, setCart] = useState([]); // 🛒 Cart State

  useEffect(() => {
    const timer = setTimeout(() => setWelcome(false), 2000);
    return () => clearTimeout(timer);
  }, []);

if (welcome) {
  return (
    <div style={{
      height: '100vh',
      background: 'radial-gradient(circle at center, #f8f8f8 0%, #ddd 100%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      overflow: 'hidden',
      fontFamily: 'Poppins, sans-serif'
    }}>
      <div className="glow-text">WELCOME</div>
      <div className="subtext">to the Fashion Experience</div>

      <style>{`
        .glow-text {
          font-size: 60px;
          font-weight: 800;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 5px;
          background: linear-gradient(45deg, tomato, gold, #ff4ecd);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: glowMove 3s ease infinite, zoomIn 2s ease forwards;
        }

        .subtext {
          margin-top: 10px;
          font-size: 18px;
          color: #555;
          animation: fadeIn 2.5s ease forwards;
        }

        @keyframes glowMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes zoomIn {
          0% { transform: scale(0.6); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

  return (
    <Router>
      <Navbar expand="lg" bg="light" variant="light" className="shadow-sm py-3">
        <Container fluid className="px-4">
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "34px",
              fontWeight: "700",
              color: "#222",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              marginBottom: 0
            }}
          >
            ABISHEK
          </motion.h3>

          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav className="align-items-center gap-4">
              <Link to="/home" className="nav-link fw-semibold">Home</Link>
              <Link to="/about" className="nav-link fw-semibold">About</Link>
              <Link to="/contact" className="nav-link fw-semibold">Profile</Link>
              <Link to="/AddedProducts" className="nav-link fw-semibold">
                <i className="bi bi-cart4 fs-5"></i>
              </Link>

              <button
                onClick={() => setShowLogin(true)}
                style={{
                  backgroundColor: "white",
                  color: "#49557e",
                  border: "1px solid tomato",
                  borderRadius: "50px",
                  padding: "8px 20px",
                  fontWeight: "600",
                  fontSize: "15px",
                  letterSpacing: "0.5px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "tomato";
                  e.target.style.color = "white";
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "white";
                  e.target.style.color = "#49557e";
                  e.target.style.transform = "scale(1)";
                }}
              >
                Login
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/abi/boys" element={<Boys cart={cart} setCart={setCart} />} />
        <Route path="/girls" element={<Girls cart={cart} setCart={setCart} />} />
        <Route path="/shoes" element={<Shoes cart={cart} setCart={setCart} />} />
        <Route path="/watch" element={<Watchs cart={cart} setCart={setCart} />} />
        <Route path="/AddedProducts" element={<AddedProducts cart={cart} />} />
        <Route path="/offer" element={<OfferPage />} />
      </Routes>

      {/* Login Popup */}
      <LoginPopup show={showLogin} handleClose={() => setShowLogin(false)} />
    </Router>
  );
}

export default App;
