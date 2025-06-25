import React, { useEffect, useState } from "react";
import desktopImg from "./new.png";
import mobileImg from "../UI/images/pmob.png"; // Replace with your mobile version image

const HeroSection = () => {
  const [bgImage, setBgImage] = useState(desktopImg);

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth <= 768) {
        setBgImage(mobileImg);
      } else {
        setBgImage(desktopImg);
      }
    };

    updateImage(); // Set on initial load
    window.addEventListener("resize", updateImage);

    return () => window.removeEventListener("resize", updateImage);
  }, []);

  return (
    <div style={{ position: "relative", textAlign: "center", color: "white", margin: "0px" }}>
      {/* Background Image */}
      <img
        src={bgImage}
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
          // background: "rgba(0, 0, 0, 0.2)",
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
        {/* Add any text content if needed */}
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
