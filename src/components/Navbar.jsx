// import React, { useState } from "react";
// import { Navbar, Nav, Container, Button, Modal, Form, Alert } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";

// const NavbarMain = () => {
//   const [showRdvModal, setShowRdvModal] = useState(false);
//   const [showLoginModal, setShowLoginModal] = useState(false);

//   // Login form
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("client");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Vérification si user connecté
//   const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

//   const navigate = useNavigate();

//   // Prise de rendez-vous
//   const handleRdvSubmit = (e) => {
//     e.preventDefault();
//     alert("Votre demande de rendez-vous a été envoyée !");
//     setShowRdvModal(false);
//   };

//   // Connexion sécurisée
//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         setError(data.message || "Email ou mot de passe incorrect");
//         setLoading(false);
//         return;
//       }

//       // Stockage user + token
//       const loggedUser = { email, role: data.role, token: data.token };
//       localStorage.setItem("user", JSON.stringify(loggedUser));
//       setUser(loggedUser);

//       setShowLoginModal(false);

//       // Redirection selon rôle
//       if (data.role === "admin") navigate("/dashboard/admin");
//       else navigate("/dashboard/client");

//     } catch (err) {
//       setError("Serveur inaccessible");
//     }

//     setLoading(false);
//   };

//   // Déconnexion
//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//     navigate("/");
//   };

//   return (
//     <>
//       <Navbar expand="lg" bg="dark" variant="dark" fixed="top" className="shadow">
//         <Container>
//           <Navbar.Brand as={Link} to="/">SecurityPro</Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbar-nav" />
//           <Navbar.Collapse id="navbar-nav">
//             <Nav className="ms-auto align-items-lg-center">
//               <Nav.Link as={Link} to="/">Accueil</Nav.Link>
//               <Nav.Link as={Link} to="/about">À propos</Nav.Link>
//               <Nav.Link as={Link} to="/services">Services</Nav.Link>
//               <Nav.Link as={Link} to="/certifications">Certifications</Nav.Link>
//               <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

//               <Button className="ms-3 mt-3 mt-lg-0" variant="primary" onClick={() => setShowRdvModal(true)}>
//                 Prise de rendez-vous
//               </Button>

//               {user ? (
//                 <>
//                   <span className="text-white ms-2 me-2">{user.role.toUpperCase()}</span>
//                   <Button variant="outline-light" onClick={handleLogout}>Déconnexion</Button>
//                 </>
//               ) : (
//                 <Button className="ms-2 mt-3 mt-lg-0" variant="outline-light" onClick={() => setShowLoginModal(true)}>
//                   Connexion
//                 </Button>
//               )}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       {/* Modal Prise de rendez-vous */}
//       <Modal show={showRdvModal} onHide={() => setShowRdvModal(false)} centered>
//         <Modal.Header closeButton><Modal.Title>Prise de rendez-vous</Modal.Title></Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleRdvSubmit}>
//             <Form.Group className="mb-3">
//               <Form.Label>Nom complet</Form.Label>
//               <Form.Control type="text" placeholder="Votre nom" required />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Email</Form.Label>
//               <Form.Control type="email" placeholder="Votre email" required />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Téléphone</Form.Label>
//               <Form.Control type="text" placeholder="Votre numéro" required />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Date et heure souhaitée</Form.Label>
//               <Form.Control type="datetime-local" required />
//             </Form.Group>
//             <Button variant="primary" type="submit" className="w-100">Envoyer</Button>
//           </Form>
//         </Modal.Body>
//       </Modal>

//       {/* Modal Connexion */}
//       <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)} centered>
//         <Modal.Header closeButton><Modal.Title>Connexion</Modal.Title></Modal.Header>
//         <Modal.Body>
//           {error && <Alert variant="danger">{error}</Alert>}
//           <Form onSubmit={handleLoginSubmit}>
//             <Form.Group className="mb-3">
//               <Form.Label>Email</Form.Label>
//               <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Mot de passe</Form.Label>
//               <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Rôle</Form.Label>
//               <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
//                 <option value="client">Client</option>
//                 <option value="admin">Admin</option>
//               </Form.Select>
//             </Form.Group>
//             <Button variant="primary" type="submit" className="w-100" disabled={loading}>
//               {loading ? "Connexion..." : "Se connecter"}
//             </Button>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// };

// export default NavbarMain;

// Navbar sans serveur
import React, { useState } from "react";
import { Navbar, Nav, Container, Button, Modal, Form, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

// Utilisateurs codés en dur
const usersDB = [
  { email: "admin@security.com", password: "admin123", role: "admin", name: "Admin", photo: "https://i.pravatar.cc/40?img=1" },
  { email: "client@security.com", password: "client123", role: "client", name: "Client", photo: "https://i.pravatar.cc/40?img=2" },
  { email: "agent@security.com", password: "agent123", role: "agent", name: "Agent Diallo", photo: "https://i.pravatar.cc/40?img=3" },
];

const NavbarMain = () => {
  const [showRdvModal, setShowRdvModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Login form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("client");
  const [error, setError] = useState("");

  // Utilisateur connecté
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

  const navigate = useNavigate();

  // Déconnexion
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  // Connexion locale
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Vérifie identifiants
    const foundUser = usersDB.find(u => u.email === email && u.password === password && u.role === role);

    if (!foundUser) {
      setError("Email, mot de passe ou rôle incorrect");
      return;
    }

    // Connexion réussie
    localStorage.setItem("user", JSON.stringify(foundUser));
    setUser(foundUser);
    setShowLoginModal(false);

    // Redirection selon rôle
    if (foundUser.role === "admin") navigate("/dashboard/admin");
    else if (foundUser.role === "agent") navigate("/dashboard/agent");
    else navigate("/dashboard/client");
  };

  // Prise de rendez-vous
  const handleRdvSubmit = (e) => {
    e.preventDefault();
    alert("Votre demande de rendez-vous a été envoyée !");
    setShowRdvModal(false);
  };

  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark" fixed="top" className="shadow">
        <Container>
          <Navbar.Brand as={Link} to="/">SecurityPro</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto align-items-lg-center">
              <Nav.Link as={Link} to="/">Accueil</Nav.Link>
              <Nav.Link as={Link} to="/about">À propos</Nav.Link>
              <Nav.Link as={Link} to="/services">Services</Nav.Link>
              <Nav.Link as={Link} to="/certifications">Certifications</Nav.Link>
              <Nav.Link as={Link} to="/references">Références</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

              <Button className="ms-3 mt-3 mt-lg-0" variant="primary" onClick={() => setShowRdvModal(true)}>
                Prise de rendez-vous
              </Button>

              {user ? (
                <>
                  {/* <span className="text-white ms-2 me-2">{user.role.toUpperCase()}</span> */}
                  <div className="d-flex align-items-center ms-3">
                  <img
                    src={user.photo}
                    alt="profil"
                    className="rounded-circle me-2"
                    width="35"
                    height="35"
                  />
                  <span className="text-white me-3">{user.name}</span>
                </div>
                  <Button variant="outline-light" onClick={handleLogout}>Déconnexion</Button>
                </>
              ) : (
                <Button className="ms-2 mt-3 mt-lg-0" variant="outline-light" onClick={() => setShowLoginModal(true)}>
                  Connexion
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal Prise de rendez-vous */}
      <Modal show={showRdvModal} onHide={() => setShowRdvModal(false)} centered>
        <Modal.Header closeButton><Modal.Title>Prise de rendez-vous</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleRdvSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nom complet</Form.Label>
              <Form.Control type="text" placeholder="Votre nom" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Votre email" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Téléphone</Form.Label>
              <Form.Control type="text" placeholder="Votre numéro" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date et heure souhaitée</Form.Label>
              <Form.Control type="datetime-local" required />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">Envoyer</Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Modal Connexion */}
      <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)} centered>
        <Modal.Header closeButton><Modal.Title>Connexion</Modal.Title></Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Rôle</Form.Label>
              <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="client">Client</option>
                <option value="admin">Admin</option>
                <option value="agent">Agent</option>
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Se connecter
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavbarMain;