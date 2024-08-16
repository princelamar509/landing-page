import React, { useState } from 'react';
import './WorksSection.css';

const WorksSection = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const slides = [
        {
            src: "https://images.squarespace-cdn.com/content/v1/542032d5e4b0968055ce5118/1590821174418-EN1TWKVGTXP9AAVN7NDI/image-asset.jpeg" ,
            alt: "Work 1",
            caption: "inspirations inspirations inspirations ..."
        },
        {
            src: "https://media.licdn.com/dms/image/D4D22AQGQ-Z-iCSR_-Q/feedshare-shrink_800/0/1709897934662?e=2147483647&v=beta&t=Qv8KcXVXgVgbghtv5nXlI4_7u6b5c4Uj_TTZv5q1RKs",
            alt: "Work 2",
            caption: " something something something something"
        },
        {
            src: "https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/evsrm8g3g6evg2gktgeb/image1",
            alt: "Work 3",
            caption: "great work great work great work"
        }
    ];

    const currentSlide = (index) => {
        setSlideIndex(index);
    };

    return (
        <section className="works" id="works">
            <h2>Our Works</h2>
            <div className="slideshow-container">
                {slides.map((slide, index) => (
                    <div
                        className={`slides ${index === slideIndex ? 'active' : ''}`}
                        key={index}
                    >
                        <img src={slide.src} alt={slide.alt} />
                        <div className="text">{slide.caption}</div>
                    </div>
                ))}
            </div>
            <div className="dot-container">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === slideIndex ? 'active' : ''}`}
                        onClick={() => currentSlide(index)}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default WorksSection;
