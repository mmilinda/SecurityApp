import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const HeaderPremium = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "contact"];
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 100;
          const bottom = top + section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`navbar-custom ${scrolled ? "navbar-scrolled" : ""}`}
    >
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">
          SecurityPro
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link
              href="#home"
              className={active === "home" ? "active-link" : ""}
            >
              Accueil
            </Nav.Link>

            <Nav.Link
              href="#about"
              className={active === "about" ? "active-link" : ""}
            >
              À propos
            </Nav.Link>

            <Nav.Link
              href="Certifications"
              className={active === "certification" ? "active-link" : ""}
            >
              Certification
            </Nav.Link>

            <Nav.Link
              href="#contact"
              className={active === "contact" ? "active-link" : ""}
            >
              Contact
            </Nav.Link>

            <Button
              variant="primary"
              className="ms-lg-3 mt-3 mt-lg-0"
              href="#contact"
            >
              Demander un devis
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderPremium;