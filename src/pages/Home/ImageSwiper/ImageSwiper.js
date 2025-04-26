import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./ImageSwiper.css";

import photoprint from "../../../assets/Images/Home/ImageSlider/admin.png";
import photomug from "../../../assets/Images/Home/ImageSlider/shoe.png";
import woodenengraving from "../../../assets/Images/Home/ImageSlider/hotel.png";
import collage from "../../../assets/Images/Home/ImageSlider/function.png"
import canvas from "../../../assets/Images/Home/ImageSlider/b-card.png"
import photoframe from "../../../assets/Images/Home/ImageSlider/open.png"

import { Container } from "react-bootstrap";

const images = [
    { src: photoprint, text: "Admission Poster" },
    { src: photomug, text: "Adversitement Poster" },
    { src: woodenengraving, text: "Promotion Poster" },
    { src: collage, text: "Decorative Poster" },
    { src: canvas, text: "Business Card" },
    { src: photoframe, text: "Opening Ceremony" },
];

const ImageSlider = () => {
    return (
        <Container>
            <div className="image-slider-container">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        900: { slidesPerView: 3 },
                    }}
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img src={img.src} alt={`Slide ${index}`} className="slider-image" />
                            <div className="image-text">{img.text}</div> {/* Text appears on hover */}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Container>
    );
};

export default ImageSlider;
