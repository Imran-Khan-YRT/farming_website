// src/components/Carousel.tsx
import React, { useState } from "react";
import "./carouselStyles.css";

interface CarouselProps {
  items: string[]; // Assuming an array of image URLs for simplicity
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            <img src={item} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="carousel-dots">
        {items.map((_, index) => (
          <span key={index} className={`dot ${index === currentIndex ? "active" : ""}`} onClick={() => handleDotClick(index)} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
