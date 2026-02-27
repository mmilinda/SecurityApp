import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";

const servicesData = [
  {
    title: "Sécurité événementielle",
    img: "Sen.jpg",
    summary: "Assurez la sécurité de vos événements privés ou publics.",
    details:
      "Nos agents qualifiés prennent en charge la surveillance complète de vos événements, y compris la gestion des entrées, la prévention des incidents et la coordination avec les autorités locales.",
  },
  {
    title: "Surveillance privée",
    img: "Bob.jpg",
    summary: "Protection 24/7 de vos locaux et biens.",
    details:
      "Nos équipes assurent une surveillance constante de vos sites, avec patrouilles régulières, systèmes de contrôle d'accès et rapports détaillés pour garantir votre tranquillité d'esprit.",
  },
  {
    title: "Protection rapprochée",
    img: "Ena.jpg",
    summary: "Sécurité individuelle pour VIP et cadres.",
    details:
      "Nos agents de protection rapprochée sont formés pour assurer la sécurité personnelle de vos collaborateurs et clients, avec discrétion, efficacité et réactivité en toutes circonstances.",
  },
  {
    title: "Consulting en sécurité",
    img: "Diana.jpg",
    summary: "Audit et conseils pour optimiser votre sécurité.",
    details:
      "Nous réalisons des audits complets de vos infrastructures et proposons des solutions sur mesure pour améliorer la sécurité globale, réduire les risques et garantir la conformité réglementaire.",
  },
    {
    title: "Surveillance privée",
    img: "Bob.jpg",
    summary: "Protection 24/7 de vos locaux et biens.",
    details:
      "Nos équipes assurent une surveillance constante de vos sites, avec patrouilles régulières, systèmes de contrôle d'accès et rapports détaillés pour garantir votre tranquillité d'esprit.",
  },
  {
    title: "Protection rapprochée",
    img: "Ena.jpg",
    summary: "Sécurité individuelle pour VIP et cadres.",
    details:
      "Nos agents de protection rapprochée sont formés pour assurer la sécurité personnelle de vos collaborateurs et clients, avec discrétion, efficacité et réactivité en toutes circonstances.",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleClose = () => setSelectedService(null);

  return (
    <>
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Nos Services</h2>
          <div className="row">
            {servicesData.map((service, idx) => (
              <div key={idx} className="col-md-6 col-lg-4 mb-4">
                <Card
                  className="h-100 shadow service-card"
                  onClick={() => setSelectedService(service)}
                  style={{ cursor: "pointer" }}
                >
                  <Card.Img variant="top" src={service.img} />
                  <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.summary}</Card.Text>
                    <Button variant="primary">En savoir plus</Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL DÉTAILS */}
      {selectedService && (
        <Modal show={true} onHide={handleClose} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{selectedService.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedService.img}
              alt={selectedService.title}
              className="img-fluid mb-3"
            />
            <p>{selectedService.details}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default Services;