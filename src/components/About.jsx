// import React from "react";

// const About = () => {
//   return (
//     <>
//       {/* QUI SOMMES-NOUS */}
//       <section className="py-5 bg-white" id="about">
//         <div className="container">
//           <div className="row align-items-center flex-md-row-reverse">

//             {/* IMAGE */}
//             <div className="col-md-6 text-center mb-4 mb-md-0">
//               <img
//                 src="equipe.jpg"
//                 alt="Equipe de sécurité"
//                 className="img-fluid rounded shadow-lg about-img"
//               />
//             </div>

//             {/* TEXTE */}
//             <div className="col-md-6">
//               <h6 className="text-primary fw-bold">NOTRE ENTREPRISE</h6>
//               <h2 className="fw-bold mb-4">Qui sommes-nous ?</h2>

//               <p className="text-muted">
//                 Nous sommes une entreprise spécialisée dans la sécurité privée.
//                 Nous offrons des solutions de protection adaptées aux entreprises,
//                 institutions et particuliers.
//               </p>

//               <p className="text-muted">
//                 Grâce à une équipe d’agents qualifiés et expérimentés,
//                 nous garantissons un service fiable, professionnel et disponible 24h/24.
//               </p>

//               <div className="mt-4">
//                 <button className="btn btn-primary px-4 me-3">
//                   A propos
//                 </button>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default About;

import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import "./AboutSection.css";

const AboutSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="about-section py-5">
      <Container>
        <Row className="align-items-center">
          
          {/* Texte */}
          <Col md={6}>
            <h2 className="fw-bold mb-3 section-title">
              Qui sommes-nous ?
            </h2>

            <p className="lead">
              SecurityPro est une entreprise spécialisée dans la sécurité privée,
              la surveillance et la protection des biens et des personnes.
            </p>

            <div className={`extra-content ${showMore ? "show" : ""}`}>
              <p>
                Fondée avec l’objectif d’offrir des services fiables et professionnels,
                notre entreprise met à disposition des agents qualifiés, formés et certifiés.
                Nous intervenons 24h/24 et 7j/7 pour assurer votre tranquillité.
              </p>

              <p>
                Notre expertise couvre la sécurité événementielle, le gardiennage,
                la patrouille mobile et la protection rapprochée. Nous utilisons des
                technologies modernes pour garantir un service optimal.
              </p>
            </div>

            <Button
              className="premium-btn mt-3"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Réduire" : "Lire plus"}
            </Button>
          </Col>

          {/* Image */}
          <Col md={6}>
            <img
              src="equipe.jpg"
              alt="Agent de sécurité"
              className="img-fluid rounded shadow-lg about-img"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;