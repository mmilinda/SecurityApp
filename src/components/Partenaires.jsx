import React from "react";
// import "./Partenaires.css";

const Partenaires = () => {
  const logos = [
    "samC.png",
    "GMD.png",
    "Patisen.png",
    "ORCA.jpg",
    "Sococim.jpg",
    "SPME.jpg",
  ];

  return (
    <section className="partenaires-section">
      <h2 className="partenaires-title">Ils nous font confiance</h2>

      <div className="slider">
        <div className="slide-track">
          {logos.concat(logos).map((logo, index) => (
            <div className="logo-container" key={index}>
              <img src={logo} alt="Partenaire" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partenaires;