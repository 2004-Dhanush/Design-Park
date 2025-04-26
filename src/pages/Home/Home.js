import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import Slideshow from './HomeSlideShow/SlideShow';
import Testimonials from './CustomerReview/Testimonials'
import ImageSlider from './ImageSwiper/ImageSwiper';
import ImageSlider2 from './ImageSwiper/ImageSwiper2';
import Navbar from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Home.css';

import AboutusImg from '../../assets/Images/Home/lo.png'

import birthdayImg from "../../assets/Images/Home/Services/poster.png";
import occasionsImg from "../../assets/Images/Home/Services/logo.png";
import anniversaryImg from "../../assets/Images/Home/Services/businesscard.png";
import homeDecorsImg from "../../assets/Images/Home/Services/uix.png";
import photoBookImg from "../../assets/Images/Home/Services/ads.png";
import offersImg from "../../assets/Images/Home/Services/freelance.png";

import Offer1 from "../../assets/Images/Home/graph.png"
import Offer2 from "../../assets/Images/Home/figmaa.png"
import Offer3 from "../../assets/Images/Home/figma.png"

import FreeDelivery from "../../assets/Images/Home/Services/free.png"
import Services from "../../assets/Images/Home/Services/service.png"
import Customized from "../../assets/Images/Home/Services/customize.webp"
import Satification from "../../assets/Images/Home/Services/gaurante.png"
import Customer from "../../assets/Images/Home/Services/customer.png"
import LongLasting from "../../assets/Images/Home/Services/typo.png"
import banner from "../../assets/Images/Home/banner.png"
import banner2 from "../../assets/Images/Home/banner2.png"


const services = [
  { img: birthdayImg, text: 'Poster' },
  { img: occasionsImg, text: 'Logo' },
  { img: anniversaryImg, text: 'Business Card' },
  { img: homeDecorsImg, text: 'UI/UX' },
  { img: photoBookImg, text: 'Advertisement' },
  { img: offersImg, text: 'Freelancing' },
];
const images = [
  AboutusImg,
  birthdayImg, occasionsImg, anniversaryImg, homeDecorsImg, photoBookImg, offersImg,
  Offer1, Offer2, Offer3, FreeDelivery, Services, Customized, Satification, Customer, LongLasting,
  banner, banner2
]

function Home() {

  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setLoadedImages(prev => prev + 1);
      };
    });
  }, []);

  useEffect(() => {
    if (loadedImages === images.length) {
      setLoading(false);
    }
  }, [loadedImages]);



  return (
    <>
      {loading ? (
        <div className="loading-screen">
          <Spinner animation="border" variant="primary" />
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <Navbar />
          <Slideshow />
          <Container className="pt-1 mb-4">
            <h1 className="text-center mt-4 mb-4">Services</h1>
            <Row className="g-3 justify-content-center">
              {services.map((service, index) => (
                <Col key={index} xs={6} md={2} className="d-flex justify-content-center">
                  <Card className=" shadow-lg text-center p-2" style={{ width: '18rem' }}>
                    <Card.Img
                      src={service.img}
                      alt={service.text}
                      className="mx-auto d-block pt-1 pb-0"
                      style={{ width: '62%', height: 'auto' }}
                    />
                    <Card.Body>
                      <Card.Text className="pt-0 mt-0">{service.text}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
          <div className='home-porfolio pt-2 pb-4' id='portfolio1'>
            <h2 className='text-light text-center pt-4'>POSTER THAT WE MADE</h2>
            <p className='text-light text-center'>All Type of Poster We </p>
            <ImageSlider />
          </div>
          <div className='home-aboutus pb-5 pt-5' id='about'>
            <Container className='text-center'>
              <h1 className='pt-2'>About us</h1>
              <div className='home-aboutus-content mt-3'>
                <div className='aboutus_img ps-1' ><img src={AboutusImg} style={{ width: '80%', height: '95%' }} className='shadow' /></div>
                <div className='home-aboutus-p'> <p style={{ fontSize: '18px', fontWeight: '400', lineHeight: '1.9', textAlign: 'justify' }}><strong>Design-Park</strong> is an innovative online platform specializing in creative design solutions including poster creation, UI/UX design, mobile screen design, and freelance design services. Built with the vision of delivering high-quality, user-centered design experiences from India, Design-Park serves as a one-stop marketplace for all your visual design needs.Whether you're searching for stunning pre-made poster templates, want to personalize a mobile app interface, need expert UI/UX design for your digital product, or are looking to hire skilled freelance designers, Design-Park has it all. From enhancing your brand presence through custom visuals to collaborating on modern app designs, our platform empowers individuals and businesses to bring their creative visions to life with professional finesse.</p></div>
              </div>
            </Container>
          </div>
          <div className='offer' id='offer'>
            <Container className="offers-section">
              <h1 className="text-center mb-4">Freelancing</h1>
              <Row className="g-4 pt-4">
                <Col xs={12} sm={6} md={4} className="offer-col">
                  <div className="offer-card">
                    <img src={Offer1} alt="Offer" className="offer-image" />
                    <div className="offer-overlay">
                      <p>Graphic Design</p>
                    </div>
                  </div>
                </Col>

                <Col xs={12} sm={6} md={4} className="offer-col">
                  <div className="offer-card">
                    <img src={Offer2} alt="Offer" className="offer-image" />
                    <div className="offer-overlay">
                      <p>Operating Figma Tool</p>
                    </div>
                  </div>
                </Col>

                <Col xs={12} sm={6} md={4} className="offer-col">
                  <div className="offer-card">
                    <img src={Offer3} alt="Offer" className="offer-image" />
                    <div className="offer-overlay">
                      <p>UI/UX</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className='home-porfolio pt-2 pb-4' id='portfolio2'>
            <h2 className='text-light text-center pt-4'>Do More With Your Brand Identity</h2>
            <p className='text-light text-center'>Bring your Logo with Us</p>
            <ImageSlider2 />
          </div>
          <div id='reviews'>
            <Testimonials />
          </div>
          <div id='guarantes' className='home-aboutus'>
            <Container className="guarantee-section">
              <h2 className='text-center'>We guarantee you’ll love it!</h2>
              <h5 className="subtitle text-center">Quality you can trust!</h5>

              <Row className="justify-content-center align-items-center mt-5">
                {/* Left Side */}
                <Col xs={12} md={5} className='ps-4 pe-4'>
                  <div className="guarantee-item pt-1 pb-1">
                    <img src={FreeDelivery} alt="Professionalism" />
                    <div>
                      <h4>Professionalism </h4>
                      <h7>Consistency in Quality & Respectful Communication.</h7>
                    </div>
                  </div>
                  <div className="guarantee-item pt-1 pb-1">
                    <img src={LongLasting} alt="typography" />
                    <div>
                      <h4>Typography</h4>
                      <h7>clarity, trust, and a memorable brand experience through every word that audience reads.</h7>
                    </div>
                  </div>
                  <div className="guarantee-item pt-1 pb-1">
                    <img src={Customer} alt="Best customer service" />
                    <div>
                      <h4>User centered Approach</h4>
                      <h7>Focus on the End-User First and Emotional Connection.</h7>
                    </div>
                  </div>
                </Col>

                {/* Right Side */}
                <Col xs={12} md={5} className=' ps-4 pe-4'>
                  <div className="guarantee-item pt-1 pb-1">
                    <img src={Services} alt="Quick service" />
                    <div>
                      <h4>Timely Delivery</h4>
                      <h7>Milestones and phases are clearly defined and met.</h7>
                    </div>
                  </div>
                  <div className="guarantee-item pt-1 pb-1">
                    <img src={Customized} alt="Creative Expertise" />
                    <div>
                      <h4>Creative Expertise</h4>
                      <h7>trust their design instincts, creativity, and ability to translate ideas into visuals.</h7>
                    </div>
                  </div>
                  <div className="guarantee-item pt-1 pb-1">
                    <img src={Satification} alt="100% Satisfaction" />
                    <div>
                      <h4>100% Satisfaction</h4>
                      <h7>We strive for 100% customer satisfaction.</h7>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>

          </div>
          <Container className='pt-4 pb-4'>
            <img src={banner} className='home-banner-img' />
            <img src={banner2} className='home-banner-img-2' />
          </Container>
          <div id='content' className='p-2'>
            <Container className="mt-4 text-secondary">
              <Row>
                <Col>
                  <p style={{ fontSize: '28px', fontWeight: '500' ,marginBottom:'20px'}} className='text-center'>
                    Bringing your creative vision to life — just a click away at Design Park
                  </p>
                  <p>
                    At Design-Park, we transform your ideas into stunning visuals — whether it's posters, branding, or custom digital designs that leave a lasting impression.
                  </p>
                  <p>
                    From day one, our mission has been to deliver top-quality, meaningful design solutions that bring your vision to life — right from the comfort of your space.
                  </p>
                  <p>
                    Every project is handled by experienced designers who ensure your brand or message stands out with creativity, precision, and originality. We’ve helped clients across India turn their concepts into captivating designs.
                  </p>

                </Col>
              </Row>

              <Row className="mt-3">
                <Col>
                  <p style={{ fontSize: '24px', fontWeight: '400' }}>
                    What makes Design Park the perfect choice for your creative needs
                  </p>
                  <ul>
                    <li>Easy online access to professional design services.</li>
                    <li>Affordable pricing without compromising on quality.</li>
                    <li>Quick delivery of digital assets across India.</li>
                    <li>Responsive and reliable client support throughout your project.</li>
                  </ul>
                  <p>
                    At Design Park, we’re committed to delivering top-notch design solutions with a wide range of creative services — all at the best value, making high-impact design more accessible than ever.
                  </p>

                </Col>
              </Row>

              <Row className="mt-3">
                <Col>
                  <p style={{ fontSize: '24px', fontWeight: '400' }}>
                    How does Design Park deliver unique designs at such reasonable prices?
                  </p>
                  <p>
                    At Design Park, we believe great design should be accessible to everyone — that’s why we offer premium services at highly competitive rates. No more overpaying freelance designers or agencies when you can get high-quality work right here.
                    <br />
                    By streamlining the design process and utilizing efficient tools, we handle multiple projects seamlessly, keeping costs low without compromising quality.
                    <br />
                    Every design is crafted with passion and purpose, ensuring you get customized, standout results that truly reflect your vision — all at a price that fits your budget.
                  </p>

                </Col>
              </Row>

              <Row className="mt-3">
                <Col>
                  <p style={{ fontSize: '24px', fontWeight: '400' }}>
                    Customer Service
                  </p>
                  <p className="mb-3">
                    Our clients are our most valuable asset. At Design Park, we’re dedicated to offering one of the best customer service experiences in the industry.
                    <br />
                    Whether you’re reaching out by phone or email, you’ll get a prompt response. No matter where you are in India, we’re always available to assist and answer any questions you have.
                  </p>

                </Col>
              </Row>
            </Container>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default Home;
