import React, { useState, useEffect } from "react";
import "./SlideShow.css";

import desktopImg1 from "../../../assets/Images/Home/freel.png";
import desktopImg2 from "../../../assets/Images/Home/uix.png";
import desktopImg3 from "../../../assets/Images/Home/market.png";
import desktopImg4 from "../../../assets/Images/Home/paris.png";
import desktopImg5 from "../../../assets/Images/Home/44.png";

import mobileImg1 from "../../../assets/Images/Home/mob1.png";
import mobileImg2 from "../../../assets/Images/Home/mob3.png";
import mobileImg3 from "../../../assets/Images/Home/mob2.png";
import mobileImg4 from "../../../assets/Images/Home/mob4.png";

const Slideshow = () => {
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const updateImages = () => {
      if (window.innerWidth <= 1024) {
        setImages([mobileImg1, mobileImg4, mobileImg3, mobileImg2]);
      } else {
        setImages([desktopImg3, desktopImg5, desktopImg4, desktopImg1, desktopImg2]);
      }
    };

    updateImages();

    window.addEventListener("resize", updateImages);
    return () => window.removeEventListener("resize", updateImages);

  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <>
      <div className="home-slideshow">
        {images.map((img, i) => (
          <div
            key={i}
            className={`slide ${i === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Slideshow;
