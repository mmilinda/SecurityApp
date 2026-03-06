import React from "react";
import { Navbar, Container, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavbarDashboard = () => {
  const navigate = useNavigate();

  // On récupère l'utilisateur connecté dans le localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/"); // retourne à la page d'accueil
  };

  if (!user) return null; // si pas connecté, ne rien afficher

  return (
    <Navbar bg="dark" variant="dark" fixed="top" className="shadow">
      <Container className="justify-content-end">
        <div className="d-flex align-items-center gap-3">
          <Image
            src={user.photo || "https://via.placeholder.com/40"}
            roundedCircle
            width={40}
            height={40}
          />
          <span className="text-white fw-bold">{user.name || user.email}</span>
          <Button variant="outline-light" onClick={handleLogout}>
            Déconnexion
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarDashboard;