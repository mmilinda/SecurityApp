import React, { useState } from "react";
import { CheckCircle, Download, ShieldCheck, Search } from "lucide-react";

const Certifications = () => {
  const [numero, setNumero] = useState("");
  const numeroOfficiel = "SEC-2026-001";

  const verifierNumero = () => {
    if (numero === numeroOfficiel) {
      alert("✅ Numéro d’agrément valide et conforme.");
    } else {
      alert("❌ Numéro invalide. Veuillez vérifier.");
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="cert-hero text-white d-flex align-items-center text-center">
        <div className="container">
          <h1 className="fw-bold display-5">Agréments & Certifications</h1>
          <p className="lead mt-3">
            Transparence, conformité et légalité sont au cœur de nos engagements.
          </p>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">

            <div className="col-md-6 mb-4">
              <div className="card shadow border-0 p-4 cert-card">
                <ShieldCheck size={50} className="text-primary mb-3" />
                <h5 className="fw-bold">Autorisation Ministérielle</h5>
                <p className="text-muted">
                  Délivrée par le Ministère de l’Intérieur.
                </p>
                <p><strong>Numéro :</strong> SEC-2026-001</p>

                <a
                  href="/documents/CahierDC.pdf"
                  download
                  className="btn btn-outline-primary mt-2"
                >
                  <Download size={16} className="me-2" />
                  Télécharger le document
                </a>

                <span className="badge bg-success mt-3">
                  <CheckCircle size={16} className="me-1" />
                  Conforme
                </span>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card shadow border-0 p-4 cert-card">
                <h5 className="fw-bold">Registre de Commerce</h5>
                <p className="text-muted">
                  Inscription officielle au registre national des entreprises.
                </p>
                <span className="badge bg-success">
                  <CheckCircle size={16} className="me-1" />
                  Conforme
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* VÉRIFICATION */}
      <section className="py-5">
        <div className="container text-center">
          <h3 className="fw-bold mb-4">Vérifier un numéro d’agrément</h3>

          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Entrer le numéro d’agrément"
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                />
                <button
                  className="btn btn-primary"
                  onClick={verifierNumero}
                >
                  <Search size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-5 bg-light">
        <div className="container">
          <h3 className="fw-bold text-center mb-5">Historique de conformité</h3>

          <ul className="timeline">
            <li>
              <span>2015</span>
              <p>Création officielle de l’entreprise.</p>
            </li>
            <li>
              <span>2018</span>
              <p>Obtention de l’autorisation ministérielle.</p>
            </li>
            <li>
              <span>2022</span>
              <p>Renouvellement et extension des agréments.</p>
            </li>
            <li>
              <span>2026</span>
              <p>Mise à jour et certification complète.</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Certifications;