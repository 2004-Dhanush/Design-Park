import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-light pt-5 pb-4 mt-5 position-relative">
      <Container>
        <Row className="gy-5 text-center text-md-start">
          <Col md={3}>
            <Link to="/" onClick={scrollToTop} className="fw-bold mb-3 text-gradient d-inline-block">
              Design-Park
            </Link>
            <p className="small">
              Crafting stunning visuals with the perfect blend of technology and creativity.
            </p>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-4">
              <a
                href="https://www.instagram.com/creativedesignpark/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-5"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/917502218281"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-5"
              >
                <FaWhatsapp />
              </a>
              <a href="mailto:designparkinfo@gmail.com" className="text-light fs-5">
                <FaEnvelope />
              </a>
            </div>
          </Col>

          <Col md={3}>
            <h5 className="text-uppercase mb-3 text-warning">Contact</h5>
            <p className="small mb-2 d-flex align-items-start">
              <FaMapMarkerAlt className="me-2 mt-1" />
              Kalai Annai Nagar, Sevagoundanur, Bhavani, Erode dt.
            </p>
            <p className="small mb-2 d-flex align-items-center">
              <FaPhone className="me-2" style={{ transform: "rotate(90deg)" }} /> 7502218281
            </p>
            <p className="small mb-0 d-flex align-items-center">
              <FaEnvelope className="me-2" /> designparkinfo@gmail.com
            </p>
          </Col>

          <Col md={3}>
            <h5 className="text-uppercase mb-3 text-warning">Quick Links</h5>
            <ListGroup variant="flush">
              {[
                { label: "Poster", path: "/poster" },
                { label: "Portfolio", path: "/portfolio" },
                { label: "About Us", path: "/aboutus" },
                { label: "Contact Us", path: "/contactus" },
              ].map(({ label, path }) => (
                <ListGroup.Item key={label} className="bg-transparent border-0 px-0 py-1">
                  <Link to={path} onClick={scrollToTop} className="text-light small text-decoration-none">
                    {label}
                  </Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          <Col md={3}>
            <h5 className="text-uppercase mb-3 text-warning">Other Pages</h5>
            <ListGroup variant="flush">
              {[
                { label: "Terms & Conditions", link: "/terms-and-conditions" },
                { label: "Privacy Policy", link: "/privacy-policy" }
              ].map(({ label, link }) => (
                <ListGroup.Item key={link} className="bg-transparent border-0 px-0 py-1">
                  <Link to={link} onClick={scrollToTop} className="text-light small text-decoration-none">
                    {label}
                  </Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>

        <div className="text-center border-top border-secondary mt-5 pt-3 small">
          <p className="mb-1">&copy; 2025 Design-Park. All rights reserved.</p>
          <p className="mb-0">Creativity Meets Innovation</p>
        </div>
      </Container>

      {/* WhatsApp Floating Button */}
      <div
        className="position-fixed bottom-0 end-0 m-4 p-2 rounded-circle shadow-lg whatsapp-button"
        style={{ cursor: "pointer", zIndex: 999 }}
        onClick={() => window.open('https://wa.me/917502218281', '_blank')}
      >
        <FaWhatsapp className="whatsapp-icon" />
      </div>

      <style jsx>{`
        .text-gradient {
          background: linear-gradient(135deg, #00bfff, #00ff7f);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .whatsapp-button {
          background-color: #25D366;
          transition: background-color 0.3s ease;
        }

        .whatsapp-icon {
          color: white;
          font-size: 1.5rem;
          transition: color 0.3s ease;
        }

        .whatsapp-button:hover {
          background-color: #128C7E;
        }

        .whatsapp-button:hover .whatsapp-icon {
          color: white;
        }

        .whatsapp-button {
          animation: scaleUp 0.3s ease-in-out;
        }

        @keyframes scaleUp {
          from {
            transform: scale(0.8);
          }
          to {
            transform: scale(1);
          }
        }

        @media (max-width: 576px) {
          footer h4, footer h5 {
            font-size: 1.1rem;
          }

          footer p, footer a {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
