import React, { useState, useEffect } from "react";
import { Carousel, Button, Modal, Form } from "react-bootstrap";

const slides = [
  {
    img: "Sen.jpg",
    title: "Votre sécurité, notre priorité",
    subtitle: "Des solutions fiables et professionnelles pour vos besoins de sécurité",
  },
  {
    img: "San.jpg",
    title: "Protection 24/7",
    subtitle: "Une équipe d'agents qualifiés toujours prête à intervenir",
  },
  {
    img: "Ena.jpg",
    title: "Conformité et légalité",
    subtitle: "Nous respectons toutes les réglementations en vigueur",
  },
];

const HeroParallax = () => {
  const [showModal, setShowModal] = useState(false);
  const [fade, setFade] = useState(true);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  // Animation texte
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => setFade(true), 500); // relance fade
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Carousel fade interval={5000} className="hero-carousel">
        {slides.map((slide, idx) => (
          <Carousel.Item key={idx}>
            <div
              className="hero-slide d-flex justify-content-center align-items-center"
              style={{
                height: "90vh",
                background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.img}) center/cover no-repeat`,
                backgroundAttachment: "fixed",
                textAlign: "center",
                color: "white",
                transition: "background 1s ease-in-out",
                flexDirection: "column",
              }}
            >
              <div className={fade ? "fade-in-up" : "fade-out-down"}>
                <h1 className="display-4 fw-bold">{slide.title}</h1>
                <p className="lead mt-3">{slide.subtitle}</p>
                <Button variant="primary" size="lg" onClick={handleShow}>
                  Demander un devis
                </Button>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* MODAL FORMULAIRE */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Demande de devis</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="nom">
              <Form.Label>Nom complet</Form.Label>
              <Form.Control type="text" placeholder="Votre nom" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Votre email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="service">
              <Form.Label>Service demandé</Form.Label>
              <Form.Select>
                <option>Sécurité événementielle</option>
                <option>Surveillance privée</option>
                <option>Protection rapprochée</option>
                <option>Autre</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Votre demande" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Envoyer
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default HeroParallax;