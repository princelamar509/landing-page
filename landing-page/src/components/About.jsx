import React, { useEffect, useState, useRef } from 'react';
import './About.css';

function About() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [images, setImages] = useState([
    "https://www.martinlabbe.com/wp-content/uploads/2013/09/ray_and_maria_stata_center.jpg",
    "https://www.inquiriesjournal.com/imgs/1200x1200/crop/article-images/uid-2397-1413000981/46588d.jpg",
    "https://www.arch2o.com/wp-content/uploads/2020/12/Arch2O-sarcostyle-hayri-atak-architectural-design-studio-5-640x800.jpg"
  ]);

  const slideshowContainer = useRef(null);

  useEffect(() => {
    const slides = slideshowContainer.current.getElementsByClassName('mySlides');
    const dots = slideshowContainer.current.getElementsByClassName('demo');
    const captionText = document.getElementById('caption');

    if (slideIndex > slides.length) setSlideIndex(1);
    if (slideIndex < 1) setSlideIndex(slides.length);

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slides[slideIndex - 1]) {
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
      captionText.innerHTML = dots[slideIndex - 1].alt;
    }
  }, [slideIndex, images]); // Make sure to include images as a dependency

  const plusSlides = (n) => {
    setSlideIndex(slideIndex + n);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  return (
    <section id="about" className="about">
      <div className="text-container">
        <h2 className="fas fa-building">Madeus Architecture</h2>
        <h3>Our Story</h3>
        <p className="text">
          We are a leading architecture firm with years of experience in designing
          iconic structures. Our team is dedicated to creating innovative solutions
          that meet the needs of our clients. At our firm, we are committed to delivering
          exceptional results for our clients. We take pride in our work and are proud
          of our ability to exceed expectations. Check our projects and contact us.
        </p><br />
        <p className="text">
          We are a leading architecture firm with years of experience in designing
          iconic structures. Our team is dedicated to creating innovative solutions
          that meet the needs of our clients. At our firm, we are committed to delivering
          exceptional results for our clients. We take pride in our work and are proud
          of our ability to exceed expectations. Check our projects and contact us.
        </p>
      </div>

      <div className="slideshow-container" ref={slideshowContainer}>
        {images.map((src, index) => (
          <div className="mySlides fade" key={index} style={{ display: index + 1 === slideIndex ? 'block' : 'none' }}>
            <div className="numbertext">{index + 1} / {images.length}</div>
            <img src={src} alt={`Slide ${index + 1}`} style={{ width: "100%" }} />
          </div>
        ))}

        <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
        <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>

        <div className="caption-container">
          <p id="caption"></p>
        </div>

        <div className="row">
          {images.map((src, index) => (
            <div className="column" key={index}>
              <img
                className={`demo cursor ${slideIndex === index + 1 ? 'active' : ''}`}
                src={src}
                onClick={() => currentSlide(index + 1)}
                alt={`slide ${index + 1}`}
                style={{ width: "100%" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;

