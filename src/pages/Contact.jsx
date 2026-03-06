import React from "react";

const Contact = () => {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="bg-dark text-white text-center py-5">
        <div className="container">
          <h1 className="fw-bold">Contactez-Nous</h1>
          <p className="lead">
            Notre équipe est disponible 24h/24 et 7j/7 pour répondre à vos besoins en sécurité.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5">

            {/* FORMULAIRE */}
            <div className="col-lg-6">
              <h3 className="mb-4">Envoyer un message</h3>

              <form>
                <div className="mb-3">
                  <label className="form-label">Nom complet</label>
                  <input type="text" className="form-control" placeholder="Votre nom" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="Votre email" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Téléphone</label>
                  <input type="text" className="form-control" placeholder="Votre numéro" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Votre message..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-warning w-100">
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* INFORMATIONS */}
            <div className="col-lg-6">
              <h3 className="mb-4">Nos Coordonnées</h3>

              <p><strong>📍 Adresse :</strong> Dakar, Sénégal</p>
              <p><strong>📞 Téléphone :</strong> +221 77 000 00 00</p>
              <p><strong>📧 Email :</strong> contact@securityapp.sn</p>
              <p><strong>🕒 Disponibilité :</strong> 24h/24 - 7j/7</p>

              {/* Réseaux sociaux */}
              <div className="mt-4">
                <h5>Suivez-nous :</h5>
                <a href="#" className="btn btn-outline-dark me-2">Facebook</a>
                <a href="#" className="btn btn-outline-dark me-2">Instagram</a>
                <a href="#" className="btn btn-outline-dark">LinkedIn</a>
              </div>

              {/* MAP */}
              <div className="mt-4">
                <iframe
                  title="map"
                  src="https://www.google.com/maps?q=Dakar,Sénégal&output=embed"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;