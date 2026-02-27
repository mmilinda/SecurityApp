import React from "react";

const About = () => {
  return (
    <>
      {/* QUI SOMMES-NOUS */}
      <section className="py-5 bg-white" id="about">
        <div className="container">
          <div className="row align-items-center flex-md-row-reverse">

            {/* IMAGE */}
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <img
                src="equipe.jpg"
                alt="Equipe de sécurité"
                className="img-fluid rounded shadow-lg about-img"
              />
            </div>

            {/* TEXTE */}
            <div className="col-md-6">
              <h6 className="text-primary fw-bold">NOTRE ENTREPRISE</h6>
              <h2 className="fw-bold mb-4">Qui sommes-nous ?</h2>

              <p className="text-muted">
                Nous sommes une entreprise spécialisée dans la sécurité privée.
                Nous offrons des solutions de protection adaptées aux entreprises,
                institutions et particuliers.
              </p>

              <p className="text-muted">
                Grâce à une équipe d’agents qualifiés et expérimentés,
                nous garantissons un service fiable, professionnel et disponible 24h/24.
              </p>

              <div className="mt-4">
                <button className="btn btn-primary px-4 me-3">
                  A propos
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;