import React from "react";
import p from "./image.png"; // Replace with a creative design image

const HeroSection = () => {
  return (
    <div style={{ position: "relative", textAlign: "center", color: "white", margin: "0px" }}>
      {/* Background Image */}
      <img
        src={p}
        alt="Design Park Background"
        style={{ width: "100%", height: "100vh", objectFit: "cover" }}
      />

      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.2)",
        }}
      ></div>

      {/* Text Content */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          width: "85%",
        }}
      >
        <h1 className="hero-title">We bring creativity to life.</h1>
        <br />
        <h4 className="hero-description">
          Every pixel tells a story. Dive into our world of designs where imagination meets experience.
          Explore visuals that inspire and ignite innovation.
        </h4>
      </div>

      {/* Styling */}
      <style>
        {`
          .hero-title {
            font-size: 3rem;
            font-weight: bold;
            color: #ffffff;
          }
          .hero-description {
            font-size: 1.3rem;
            line-height: 1.8;
            color: #f0f0f0;
          }

          @media (max-width: 768px) {
            .hero-title {
              font-size: 2.3rem;
            }
            .hero-description {
              font-size: 1.1rem;
            }
          }

          @media (max-width: 480px) {
            .hero-title {
              font-size: 1.8rem;
            }
            .hero-description {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default HeroSection;
