import React, { useState, useEffect, useRef } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Alice Dupont",
    role: "Client satisfait",
    message: "Service impeccable, je me sens en sécurité partout !",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Jean Martin",
    role: "Client régulier",
    message: "L'équipe est très professionnelle et réactive.",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sophie Bernard",
    role: "Client fidèle",
    message: "Excellente expérience, je recommande vivement.",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Marc Leroy",
    role: "Client fidèle",
    message: "Très satisfait, je recommande SecurityApp à tous.",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const trackRef = useRef(null);

  // 🔹 Détecter la taille de l'écran
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth >= 1024) setSlidesToShow(2);
      else setSlidesToShow(1);
    };
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  // 🔹 Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  });

  const handlePrev = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - slidesToShow : prev - 1
    );
  };

  const handleNext = () => {
    setCurrent((prev) =>
      prev + slidesToShow >= testimonials.length ? 0 : prev + 1
    );
  };

  return (
    <section className="carousel">
      <h2>Témoignages</h2>
      <div className="carousel-container">
        <button className="nav-btn left" onClick={handlePrev}>
          &#10094;
        </button>

        <div className="carousel-track-wrapper">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${(100 / slidesToShow) * current}%)`,
              width: `${(100 / slidesToShow) * testimonials.length}%`,
            }}
            ref={trackRef}
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="carousel-slide"
                style={{ width: `${100 / testimonials.length}%` }}
              >
                <img src={t.photo} alt={t.name} className="testimonial-photo" />
                <p className="message">"{t.message}"</p>
                <p className="name">{t.name}</p>
                <p className="role">{t.role}</p>
              </div>
            ))}
          </div>
        </div>

        <button className="nav-btn right" onClick={handleNext}>
          &#10095;
        </button>
      </div>

      <div className="dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${
              index >= current && index < current + slidesToShow ? "active" : ""
            }`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}