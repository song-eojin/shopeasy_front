import React, { useState } from 'react';
import '../../styles/Home.css';

const slides = [
  { imgSrc: "images/ads/1_20240816_Harley01.jpg", title: "Sample Title 1", text: "Sample Text 1" },
  { imgSrc: "images/ads/2_20240816_Trendy01.jpg", title: "Sample Title 2", text: "Sample Text 2" }
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (direction) => {
    console.log('Button clicked:', direction);
    setCurrentSlide((prevSlide) => (prevSlide + direction + slides.length) % slides.length);
  };

  return (
    <div className="ad-container">
      {/*광고위치-1*/}
      <div className="ad-content">
        <div className="ad-content-image">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`ad-slide ${index === currentSlide ? 'visible' : 'hidden'}`}
          >
            <img src={slide.imgSrc} alt={slide.title} />
            <div className="ad-caption">
              <h3>{slide.title}</h3>
              <p>{slide.text}</p>
            </div>
          </div>
        ))}
        </div>

        {/*광고 네비게이션 버튼*/}
        <button
          className="ad-control ad-control-prev"
          onClick={() => handleSlideChange(-1)}
          aria-label="Previous Slide"
        >
          ‹
        </button>
        <button
          className="ad-control ad-control-next"
          onClick={() => handleSlideChange(1)}
          aria-label="Next Slide"
        >
          ›
        </button>
      </div>
    </div>

  );
}

export default Home;
