import React, { useState, useEffect, useRef } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";
import 'bootstrap/dist/css/bootstrap.css';
import HeroSection from "./HeroSection";
import PhotographyContainer from "./PhotographyContainer";

// Import 9 PNG images from src/images folder
import new1 from "../../images/new1.png";
import new2 from "../../images/new2.png";
import new7 from "../../images/new7.png";
import new3 from "../../images/new3.png";
import new4 from "../../images/new4.png";
import new5 from "../../images/new5.png";
import new6 from "../../images/new6.png";

import new8 from "../../images/new8.png";
import new9 from "../../images/new9.png";

const imageData = [
  { src: new1, title: "Adversiting Poster", venue: "Promotion and Sales", price: "@Design-Park" },
  { src: new2, title: "InfoGraphic Poster", venue: "Visual Storytelling", price: "@Design-Park" },
  { src: new7, title: "Inspirational Poster", venue: "Motivational Message", price: "@Design-Park" },
  { src: new3, title: "Corporate Poster", venue: "Business Promotion", price: "@Design-Park" },
  { src: new4, title: "Decorative Poster", venue: "Funtion and Invitation", price: "@Design-Park" },
  { src: new5, title: "Personal Poster", venue: "About you", price: "@Design-Park" },
  { src: new6, title: "Event Poster", venue: "Event Advertisement", price: "@Design-Park" },

  { src: new8, title: "Educational Poster", venue: "Education promotion", price: "@Design-Park" },
  { src: new9, title: "Meme Poster", venue: "Funny content", price: "@Design-Park" },
];

export default function Products() {
  const [imageSizes, setImageSizes] = useState([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    const sizes = imageRefs.current.map((img) => ({
      width: img?.naturalWidth || 0,
      height: img?.naturalHeight || 0,
    }));
    setImageSizes(sizes);
    console.log("Image Sizes:", sizes);
  }, []);

  return (
    <>
      <HeroSection />
      <MDBContainer fluid className="my-5">
        <MDBRow>
          {imageData.map((item, index) => (
            <MDBCol md="12" lg="4" className="mb-4" key={index}>
              <MDBCard className="shadow-sm">
                <MDBCardImage
                  ref={(el) => (imageRefs.current[index] = el)}
                  src={item.src}
                  position="top"
                  alt={item.title}
                  className="img-fluid rounded-top"
                />
                <MDBCardBody>
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0 text-dark">{item.title}</h5>
                    <h5 className="text-primary mb-0">{item.price}</h5>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <p className="text-muted mb-0">{item.venue}</p>
                    <div className="ms-auto text-warning">
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
      <PhotographyContainer />
    </>
  );
}
