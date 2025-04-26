import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavbarWithCarousel = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const opacity = Math.min(scrollY / 250, 1);
  const glassStyle = {
    backdropFilter: "blur(12px)",
    backgroundColor: `rgba(255, 255, 255, ${opacity > 0.2 ? 0.6 : 0.15})`,
    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
    borderRadius: "16px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    color: opacity > 0.6 ? "#111" : "#fff",
  };

  return (
    <div style={{ position: "relative", width: "100%", fontFamily: "Poppins, sans-serif" }}>
      <style>
        {`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          a {
            text-decoration: none;
            color: inherit;
            transition: all 0.3s ease;
            position: relative;
          }
          a::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -4px;
            width: 0%;
            height: 2px;
            background: #38bdf8;
            transition: width 0.3s ease;
          }
          a:hover::after {
            width: 100%;
          }
          a:hover {
            color: #38bdf8;
          }
          ul { list-style: none; }
        `}
      </style>

      {/* Desktop Navbar */}
      {!isMobile && (
        <nav
          style={{
            ...glassStyle,
            position: "fixed",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "92%",
            padding: "16px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 1000,
            transition: "all 0.4s ease",
          }}
        >
          <h2 style={{ fontWeight: "600", fontSize: "24px", letterSpacing: "1.5px" }}>
            <span style={{ color: "#38bdf8" }}>Design</span>-Park
          </h2>
          <ul style={{ display: "flex", gap: "32px", fontSize: "14px", fontWeight: "500" }}>
            <li><a href="/">HOME</a></li>
            <li><a href="/products">POSTER</a></li>
            <li><a href="/aboutus">ABOUT US</a></li>
            <li><a href="/contactus">CONTACT US</a></li>
          </ul>
        </nav>
      )}

      {/* Mobile Navbar */}
      {isMobile && (
        <nav
          style={{
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex: 1000,
            padding: "16px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "rgba(0, 0, 0, 0.85)",
            backdropFilter: "blur(6px)",
          }}
        >
          <h3 style={{ color: "#fff", fontWeight: "500" }}>
            <span style={{ color: "#38bdf8" }}>Design</span>-Park
          </h3>
          <FaBars size={24} color="white" onClick={() => setMobileMenuOpen(true)} style={{ cursor: "pointer" }} />
        </nav>
      )}

      {/* Mobile Menu Overlay */}
      {isMobile && mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.95)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1100,
          }}
        >
          <FaTimes
            size={26}
            color="white"
            style={{ position: "absolute", top: "20px", right: "20px", cursor: "pointer" }}
            onClick={() => setMobileMenuOpen(false)}
          />
          {["HOME", "POSTER", "ABOUT US", "CONTACT US"].map((text, idx) => (
            <a
              key={idx}
              href={`/${text.toLowerCase().replace(" ", "")}`}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: "white",
                fontSize: "22px",
                padding: "10px 0",
                fontWeight: "500",
                letterSpacing: "1px",
              }}
            >
              {text}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavbarWithCarousel;
