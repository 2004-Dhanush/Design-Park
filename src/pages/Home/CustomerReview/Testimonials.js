import { useState, useEffect } from "react";
import "./Testimonials.css";

const reviews = [
  { name: "Naveen Kumar", review: "Got my advertising poster—visually stunning, well-balanced with clear info, professionally designed, creative, and exceeded my expectations!", rating: 5 },
  { name: "Gokula kannan", review: "Absolutely loved the poster—clean design, vibrant colors, perfectly showcased my tailoring services, and truly captured my brand essence!", rating: 5 },
  { name: "Venkatesh", review: "Received my business card—sleek design, premium feel, clear layout, and perfectly reflects the professionalism of my business!", rating: 5 },
  { name: "Senthilnathan", review: "Received the IEEE conference brochure at Surya Engineering College—professionally designed, well-structured, visually appealing, and effectively highlights all key event details!", rating: 5 },
  { name: "Usha", review: "The admission poster for Surya Engineering College is visually appealing, highly informative, and expertly crafted to engage and attract future students.", rating: 5 },
  { name: "MohanRaj", review: "Received the logo for my finance app—modern, minimal, and smartly designed to reflect trust, clarity, and professionalism in every detail!", rating: 5 }
];



const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="review-slider-container">
      <h1>Customer review</h1>
      <div className="review-slides mt-4">
        {reviews.map((review, index) => (
          <div key={index} className={`review-slide ${index === currentIndex ? "active" : ""}`}>
            <p className="review-text">"<i>{review.review}</i>"</p>
            <p className="review-author">- {review.name}</p>
            <div className="review-stars">{'⭐'.repeat(review.rating)}</div>
          </div>
        ))}
      </div>
      <div className="review-dots-container">
        {reviews.map((_, index) => (
          <span
            key={index}
            className={`review-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
