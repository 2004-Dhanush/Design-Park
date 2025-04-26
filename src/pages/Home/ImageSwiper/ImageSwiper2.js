import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./ImageSwiper.css";

import dphoto from "../../../assets/Images/Home/ImageSlider/bank.png";
import ledphoto from "../../../assets/Images/Home/ImageSlider/o.png";
import wallcalender from "../../../assets/Images/Home/ImageSlider/profitx.png";
import photobook from "../../../assets/Images/Home/ImageSlider/opens.png";
import photolamination from "../../../assets/Images/Home/ImageSlider/NEX.png";
import photoenlargement from "../../../assets/Images/Home/ImageSlider/Exelon.png";


import { Container } from "react-bootstrap";

const images = [
    { src: dphoto, text: "Truist (Finance App)" },
    { src: ledphoto, text: "OLA (Recreation)" },
    { src: wallcalender, text: "ProftX (Finance app)" },
    { src: photobook, text: "Once (E-commerece)" },
    { src: photolamination, text: "NEXLAB (lab system)" },
    { src: photoenlargement, text: "Exelon (Electric Shop)" },

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
                        768: { slidesPerView: 3 },
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
